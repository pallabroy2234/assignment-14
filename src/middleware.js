import {middlewareUtility} from "./utility/middlewareUtility";

export const middleware = async (req, res) => {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return await middlewareUtility(req);
  }
};
