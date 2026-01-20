// DAY 2 – Advanced JavaScript Practice

const jobs = [
  { title: "Frontend Developer", salary: 50000, experience: 1, applicants: 40 },
  { title: "Backend Developer", salary: 70000, experience: 3, applicants: 25 },
  { title: "Full Stack Developer", salary: 90000, experience: 5, applicants: 15 },
  { title: "UI Designer", salary: 45000, experience: 2, applicants: 30 },
  { title: "React Developer", salary: 80000, experience: 4, applicants: 20 }
];

// 1️⃣ Filter job list by salary (> 60000)
const highSalaryJobs = jobs.filter(job => job.salary > 60000);
console.log("High Salary Jobs:", highSalaryJobs);

// 2️⃣ Count total applicants
const totalApplicants = jobs.reduce(
  (total, job) => total + job.applicants,
  0
);
console.log("Total Applicants:", totalApplicants);

// 3️⃣ Sort jobs by experience (ascending)
const sortedByExperience = [...jobs].sort(
  (a, b) => a.experience - b.experience
);
console.log("Jobs Sorted by Experience:", sortedByExperience);

// 4️⃣ Map job titles
const jobTitles = jobs.map(job => job.title);
console.log("Job Titles:", jobTitles);

// 5️⃣ Reduce salary totals
const totalSalary = jobs.reduce(
  (sum, job) => sum + job.salary,
  0
);
console.log("Total Salary Offered:", totalSalary);
