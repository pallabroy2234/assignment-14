export const loginApi = async (data) => {
  const response = await fetch("api/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const result = response.json();

  return result;
};
