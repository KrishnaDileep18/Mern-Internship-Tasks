// import { useEffect, useState } from "react";
// import JobCard from "../components/JobCard";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "./Jobs.css";

// function Jobs() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchJobs();

//     const interval = setInterval(fetchJobs, 30000);
//     return () => clearInterval(interval);
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const response = await fetch("https://remotive.com/api/remote-jobs");
//       if (!response.ok) {
//         throw new Error("Failed to fetch jobs");
//       }

//       const data = await response.json();
//       setJobs(data.products);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="jobs-container">
//         {/* LOADER */}
//         {loading && (
//           <div className="loader-wrapper">
//             <div className="spinner"></div>
//             <p>Loading job opportunities...</p>
//           </div>
//         )}

//         {/* ERROR */}
//         {error && <p className="error">{error}</p>}

//         {/* JOB LIST */}
//         {!loading &&
//           !error &&
//           jobs.map((job) => (
//             <JobCard
//               key={job.id}
//               job={{
//                 title: job.title,
//                 company: "Tech Corp",
//                 experience: "2–5 years",
//                 salary: "₹6–10 LPA",
//               }}
//             />
//           ))}
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Jobs;

// import { useEffect, useState } from "react";
// import JobCard from "../components/JobCard";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Jobs() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // 🔄 Fetch jobs on load + auto refresh
//   useEffect(() => {
//     fetchJobs();

//     const interval = setInterval(fetchJobs, 30000); // auto refresh
//     return () => clearInterval(interval);
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const response = await fetch("https://remotive.com/api/remote-jobs");

//       if (!response.ok) {
//         throw new Error("Failed to load job listings");
//       }

//       const data = await response.json();
//       setJobs(data.jobs); // REAL JOB DATA
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="jobs-container">
//         {/* 🔄 LOADER */}
//         {loading && (
//           <div className="loader-container">
//             <div className="spinner"></div>
//             <p>Loading job opportunities...</p>
//           </div>
//         )}

//         {/* ❌ ERROR UI */}
//         {error && (
//           <div className="error-box">
//             <h3>❌ Unable to fetch jobs</h3>
//             <p>{error}</p>
//             <button onClick={fetchJobs}>Retry</button>
//           </div>
//         )}

//         {/* ✅ JOB LIST */}
//         {!loading &&
//           !error &&
//           jobs.map((job) => (
//             <JobCard
//               key={job.id}
//               job={{
//                 title: job.title,
//                 company: job.company_name,
//                 experience: job.job_type || "Any",
//                 salary: job.salary || "Not disclosed",
//               }}
//             />
//           ))}
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Jobs;


import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./jobs.css";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) throw new Error("Failed to fetch jobs");

      const data = await response.json();
      setJobs(data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="jobs-page">
        <div className="jobs-header">
          <h1>Explore Opportunities</h1>
          <p>Find roles that match your skills & ambitions</p>
        </div>

        {loading && (
          <div className="loader-container">
            <div className="spinner"></div>
            <p>Loading jobs...</p>
          </div>
        )}

        {error && (
          <div className="error-box">
            <h3>Something went wrong</h3>
            <p>{error}</p>
            <button onClick={fetchJobs}>Retry</button>
          </div>
        )}

        {!loading && !error && (
          <div className="jobs-grid">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={{
                  title: job.title,
                  company: "Tech Corp",
                  experience: "2–5 years",
                  salary: "₹6–10 LPA",
                }}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default Jobs;
