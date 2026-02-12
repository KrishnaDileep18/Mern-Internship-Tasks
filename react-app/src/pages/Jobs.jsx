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


// import { useEffect, useState } from "react";
// import JobCard from "../components/JobCard";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "./jobs.css";

// function Jobs() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const response = await fetch("https://dummyjson.com/products");
//       if (!response.ok) throw new Error("Failed to fetch jobs");

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

//       <section className="jobs-page">
//         <div className="jobs-header">
//           <h1>Explore Opportunities</h1>
//           <p>Find roles that match your skills & ambitions</p>
//         </div>

//         {loading && (
//           <div className="loader-container">
//             <div className="spinner"></div>
//             <p>Loading jobs...</p>
//           </div>
//         )}

//         {error && (
//           <div className="error-box">
//             <h3>Something went wrong</h3>
//             <p>{error}</p>
//             <button onClick={fetchJobs}>Retry</button>
//           </div>
//         )}

//         {!loading && !error && (
//           <div className="jobs-grid">
//             {jobs.map((job) => (
//               <JobCard
//                 key={job.id}
//                 job={{
//                   title: job.title,
//                   company: "Tech Corp",
//                   experience: "2–5 years",
//                   salary: "₹6–10 LPA",
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default Jobs;

// import { useEffect, useState } from "react";
// import JobCard from "../components/JobCard";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "./Jobs.css";
// import { fetchJobsAPI } from "../services/jobService";
// import { REFRESH_INTERVAL, JOB_LIMIT } from "../constants/api";
// import SearchBar from "../components/SearchBar";


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

//       const res = await fetch("https://remotive.com/api/remote-jobs");
//       if (!res.ok) throw new Error("Failed to fetch jobs");

//       const data = await res.json();
//       setJobs(data.jobs.slice(0, 20));
//     } catch (err) {
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="jobs-page">
//         {/* LEFT SIDEBAR */}
//         <div className="sidebar">
//           <div className="profile-card">
//             <div className="cover"></div>
//             <div className="avatar"></div>
//             <h3>recruitmentzecser</h3>
//             <p>Web Developer</p>
//           </div>

//           <div className="menu">
//             <div>Preferences</div>
//             <div>Applied Jobs</div>
//             <div>Skill Assessment</div>
//           </div>
//         </div>

//         {/* JOBS LISTING*/}
//         <div className="jobs-content">
//           <h2>Top job picks for you</h2>
//           <p className="subtitle">
//             Based on your profile, preferences, and recent activity
//           </p>

//           {loading && <div className="loader"></div>}
//           {error && <div className="error">{error}</div>}

//           {!loading &&
//             !error &&
//             jobs.map((job) => (
//               <JobCard key={job.id} job={job} />
//             ))}
//         </div>
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
import "./Jobs.css";
import SearchBar from "../components/SearchBar"; // ✅ FIXED PATH

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]); // for search
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchJobs();
    const interval = setInterval(fetchJobs, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("https://remotive.com/api/remote-jobs");
      if (!res.ok) throw new Error("Failed to fetch jobs");

      const data = await res.json();
      const topJobs = data.jobs.slice(0, 20);

      setJobs(topJobs);
      setFilteredJobs(topJobs); // initialize filtered jobs
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // 🔍 Search Function
  const handleSearch = (query) => {
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <>
      <Navbar />

      <div className="jobs-page">
        {/* LEFT SIDEBAR */}
        <div className="sidebar">
          <div className="profile-card">
            <div className="cover"></div>
            <div className="avatar"></div>
            <h3>recruitmentzecser</h3>
            <p>Web Developer</p>
          </div>

          <div className="menu">
            <div>Preferences</div>
            <div>Applied Jobs</div>
            <div>Skill Assessment</div>
          </div>
        </div>

        {/* JOBS LISTING */}
        <div className="jobs-content">
          <h2>Top job picks for you</h2>
          <p className="subtitle">
            Based on your profile, preferences, and recent activity
          </p>

          {/* ✅ SEARCH BAR ADDED HERE */}
          <SearchBar onSearch={handleSearch} />

          {loading && <div className="loader"></div>}
          {error && <div className="error">{error}</div>}

          {!loading &&
            !error &&
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Jobs;

