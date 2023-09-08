import {NextResponse} from "next/server";
import nodemailer from "nodemailer";

export const GET = async (req, res) => {
  const {searchParams} = new URL(req.url);
  const email = searchParams.get("email");

  const transporter = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: {
      user: "info@teamrabbil.com",
      pass: "~sR4[bhaC[Qs",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  //    prepare email

  let myEmail = {
    from: "Pallab roy <info@teamrabbil.com>",
    to: email,
    subject: "You Varification code",
    text: `test email for next js application`,
    html: `<h1> Your verification code is ${generateVerificationCode()}</h1>`,
  };
  try {
    const res = await transporter.sendMail(myEmail);
    return NextResponse.json({
      message: res,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Email sending failed",
    });
  }
};

function generateVerificationCode() {
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
