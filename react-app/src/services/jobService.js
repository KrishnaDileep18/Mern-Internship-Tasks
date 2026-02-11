const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchJobsAPI = async () => {
  const response = await fetch(`${BASE_URL}/remote-jobs`);

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const data = await response.json();
  return data.jobs;
};
