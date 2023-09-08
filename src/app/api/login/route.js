import {cookieSet} from "@/utility/cookieSet";
import {NextResponse} from "next/server";
import {cookies} from "next/headers";

export const POST = async (req, res) => {
  const body = await req.json();
  const {email, password} = body;

  if (email === "roy@gmail.com" && password === "123") {
    let cookie = await cookieSet(email);
    return NextResponse.json(
      {
        status: true,
        message: "Login Success",
      },
      {status: 200, headers: cookie}
    );
  } else {
    return NextResponse.json({
      status: false,
      message: "Login Failed",
    });
  }
};

export const GET = async (req, res) => {
  cookies().delete("token");
  return NextResponse.json({
    status: true,
    message: "Logout Successs",
  });
};
