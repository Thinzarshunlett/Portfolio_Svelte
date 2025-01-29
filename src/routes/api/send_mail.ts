// src/routes/api/send-email.js
import nodemailer from 'nodemailer';

export async function post(request:any) {
  const { name, email, message } = request.body;

  let transporter = nodemailer.createTransport({
    host: "your-smtp-host",
    port: 587,
    secure: false,
    auth: {
      user: "your-email@example.com",
      pass: "your-email-password",
    },
  });

  try {
    await transporter.sendMail({
      from: '"Portfolio Contact" <your-email@example.com>',
      to: "thinzarshunl@gmail.com",
      subject: "New Portfolio Contact",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return {
      status: 200,
      body: { message: 'Email sent successfully' }
    };
  } catch (error: unknown) {
    console.error("Error sending email:", error);
  
    let errorMessage: string;
  
    if (error instanceof Error) {
      errorMessage = error.message; // Extracts message from standard Error object
    } else if (typeof error === "string") {
      errorMessage = error; // Uses the string directly if error is a string
    } else {
      errorMessage = "An unknown error occurred"; // Fallback for unexpected error types
    }
  
    return {
      status: 500,
      body: { error: errorMessage }
    };
  }
}