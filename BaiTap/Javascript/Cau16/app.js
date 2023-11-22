const express = require("express");
const nodemailer = require("nodemailer");

const userEmail = "2115208@dlu.edu.vn";
const userPass = "Haha123myfath0r";

const app = express();

app.get("/send-email", async (req, res) => {
  // Create a Nodemailer transporter using SMTP (this is one of the transporters provided by Nodemailer, you can choose another one if you want)
  let transporter = nodemailer.createTransport({
    service: "gmail", // use 'gmail' for gmail
    auth: {
      user: userEmail, // your email
      pass: userPass, // your email password
    },
  });

  // The email options
  let mailOptions = {
    from: "2115208@dlu.edu.vn", // sender
    to: "letrunghoahieu@gmail.com", // receiver
    subject: "Hello", // subject
    text: "Hello world", // body
  };

  // Send the email
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    res.send("Email sent");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
