/**
 * Helper function to normalize the job data coming from the Personio API into a single object for ease of use
 * @param {Object} data
 * @returns {Array} an object with the normalized job data as key value pairs
 */
export function normalizePersonioJobData(data) {
  const jobs = data.position.map((position) => {
    // Create a new object for each position, flattening the structure
    const jobDetails = {};

    // Iterate over each property in the position object
    for (const key in position) {
      if (Object.prototype.hasOwnProperty.call(position, key)) {
        const element = position[key];

        // Special handling for 'jobdescriptions' because it contains an array of descriptions
        if (key === "jobdescriptions") {
          jobDetails[key] = element[0].jobdescription.map((desc) => ({
            name: desc.name[0].text, // Assuming each 'name' is always at the first 0
            value: desc.value[0].text, // Assuming each 'value' is always at the first index
          }));
        } else {
          jobDetails[key] = element[0].text;
        }
      }
    }

    return jobDetails;
  });

  return jobs;
}
