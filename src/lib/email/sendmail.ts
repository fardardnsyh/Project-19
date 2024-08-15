import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export const sendEmail = async (data: EmailData) => {
  if (!process.env.SMTP_HOST) {
    return;
  }

  const emailDefaults = {
    from: process.env.SMTP_FROM,
  };

  await transporter.sendMail({ ...emailDefaults, ...data });
};
