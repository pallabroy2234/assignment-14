export const logout = async () => {
  const res = await fetch("/api/login");
  const data = await res.json();
  return data;
};
