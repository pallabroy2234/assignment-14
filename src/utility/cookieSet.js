const {jwtEncoder} = require("./jwtHelper");

export const cookieSet = async (email) => {
  const token = await jwtEncoder(email);

  return {"Set-Cookie": `token=${token}; max-age=7200 ; secure; HttpOnly; path=/; SameSite=strict`};
};
