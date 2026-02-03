import { useEffect, useState } from "react";
import axios from "axios";
import Input from "./Input";
import JobCard from "./JobCard"

function App() {
  // Set hooks for the db parameters
  const [applications, setApplications] = useState([]);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");

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
        status: status || "Pending",
      });
      setCompany("");
      setPosition("");
      setStatus("");
      fetchApps();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-50 shadow-md max-w-4xl mx-auto my-5 p-5">
      <h1 className="text-2xl font-semibold mb-3">🚀 Job Tracker</h1>

      <form
        className="bg-white shadow-md rounded p-3 mb-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-2">
          <Input
            for="Company"
            label="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <Input
            for="Position"
            label="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <Input
            for="Status"
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required={false}
          />

          <div className="grid w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <button
              type="submit"
              className="place-self-center shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Add Job
            </button>
          </div>
        </div>
      </form>

      <JobCard info={applications}/>
    </div>
  );
}

export default App;
