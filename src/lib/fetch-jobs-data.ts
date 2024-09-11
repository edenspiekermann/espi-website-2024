export const fetchJobsData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/jobs`,
      {
        next: { revalidate: 10 }, // ISR with revalidation
      },
    );
    const jobs = await response.json();
    return jobs.data;
  } catch (error) {
    console.error("Failed to fetch job postings", error);
    return [];
  }
};
