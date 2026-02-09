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


function JobCard({ job }) {
  const handleApply = () => {
    alert("Job applied successfully ✅");
  };

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Experience:</strong> {job.experience}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <button onClick={handleApply}>Apply</button>
    </div>
  );
}

export default JobCard;


