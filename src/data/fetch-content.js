const { DATO_ENDPOINT, DATO_TOKEN } = process.env;

export const fetchContent = ({ query, variables = {}, preview = false }) => {
  return fetch(DATO_ENDPOINT, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: DATO_TOKEN,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.errors)
        throw new Error(JSON.stringify(response, undefined, 4));
      return { data: response.data };
    });
};
