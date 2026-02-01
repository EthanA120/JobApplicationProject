import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // Set hooks for the db parameters
  const [applications, setApplications] = useState([]);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  // Get the data from the server db
  const fetchApps = async () => {
    const res = await axios.get("http://localhost:5000/api/applications");
    setApplications(res.data);
  };

  useEffect(() => {
    fetchApps();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/applications", {
        company_name: company,
        position: position,
        status: "Pending",
      });
      setCompany("");
      setPosition("");
      fetchApps();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      <h1>🚀 Job Tracker</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <input
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <input
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Job</button>
      </form>

      <div style={{ display: "grid", gap: "10px" }}>
        {applications.map((app) => (
          <div
            key={app.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <strong>{app.company_name}</strong> | {app.position}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
