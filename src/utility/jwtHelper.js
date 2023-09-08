// jwt encoder

import {SignJWT, jwtVerify} from "jose";

export const jwtEncoder = async (email) => {
  const key = new TextEncoder().encode(process.env.JWT_KEY);
  let token = await new SignJWT({email: email}).setProtectedHeader({alg: "HS256"}).setIssuedAt().setIssuer(process.env.JWT_ISSUER).setExpirationTime(process.env.JWT_EXPIRATION).sign(key);

  return token;
};

//
// jwt decoder

export const jwtDecoder = async (token) => {
  const key = new TextEncoder().encode(process.env.JWT_KEY);
  let decode = await jwtVerify(token, key);

  return decode["payload"];
};
