import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from ${name} ${email}`,
    text: message,
  };

  const sendEmailPromise = (): Promise<string> =>
    new Promise((resolve, reject) => {
        console.log("Loc 1");
        
        transport.sendMail(mailOptions, (err) => {
            if (err) {
                reject(err.message);
            } else {
                resolve("Email sent successfully");
            }
        });
    });
    
    try {
        await sendEmailPromise();
        return NextResponse.json("Email sent successfully");
    } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
