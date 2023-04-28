import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { type IEmailInputs } from '@/schemas';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const data: IEmailInputs = req.body;

      const mailTransporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        service: 'hotmail',
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASSWORD
        }
      });

      const mailDetails = {
        from: data.name,
        to: String(process.env.NODEMAILER_USER),
        subject: `${data.name} - via micode-dev.vercel.app`,
        text: `
        Name: ${data.name}
        Email: ${data.email}
        ${data.message}`
      };

      await mailTransporter.sendMail(mailDetails);
      return res.status(200).json({ message: 'Email sent' });
    } catch (err) {
      res.status(500).json({ message: `Email not sent - Error: ${err}` });
    }
  }
  return res.status(405).json({ message: 'Method not allowed' });
}
