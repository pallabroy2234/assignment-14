import {NextResponse} from "next/server";
import {jwtDecoder} from "./jwtHelper";

export const middlewareUtility = async (req, res) => {
  try {
    let token = req.cookies.get("token");

    // catch token value becaue it is name value pair so catch value and decode it
    const payload = await jwtDecoder(token["value"]);

    const headerList = new Headers(req.headers);
    headerList.set("email", payload["email"]);

    return NextResponse.next({
      request: {
        headers: headerList,
      },
    });
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
};
