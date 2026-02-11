// function JobCard({ job }) {
//   const handleApply = () => {
//     alert("Job applied successfully ✅");
//   };

//   return (
//     <div className="job-card">
//       <h3>{job.title}</h3>
//       <p><strong>Company:</strong> {job.company}</p>
//       <p><strong>Experience:</strong> {job.experience}</p>
//       <p><strong>Salary:</strong> {job.salary}</p>
//       <button onClick={handleApply}>Apply</button>
//     </div>
//   );
// }

// export default JobCard;


// const JobCard = ({ job }) => {
//   return (
//     <div className="job-row">
//       <div className="job-info">
//         <div className="job-logo"></div>

//         <div>
//           <h3>{job.title}</h3>
//           <p className="company">
//             {job.company} • {job.location}
//           </p>
//           <p className="meta">
//             {job.posted} • full time
//           </p>
//         </div>
//       </div>

//       <button
//         className="apply-btn"
//         onClick={() => alert("Job applied successfully")}
//       >
//         Apply →
//       </button>
//     </div>
//   );
// };

// export default JobCard;

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-left">
        <div className="logo"></div>

        <div>
          <h4>{job.title}</h4>
          <p className="company">
            {job.company_name} • {job.candidate_required_location}
          </p>
          <p className="meta">
            {job.job_type}
          </p>
        </div>
      </div>

      <button
        className="apply-btn"
        onClick={() => alert("Job applied successfully")}
      >
        Apply →
      </button>
    </div>
  );
};

export default JobCard;


