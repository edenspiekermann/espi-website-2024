const { DATO_ENDPOINT, DATO_TOKEN } = process.env;

export const fetchContent = async ({
  query,
  variables = {},
  preview = false,
}) => {
  const response = await fetch(DATO_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${DATO_TOKEN}`,
    },
    method: "POST",
    body: JSON.stringify({ query, variables }),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`,
    );
  }

  return responseBody;
};
