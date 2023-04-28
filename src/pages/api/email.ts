import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { type IEmailInputs } from '@/schemas';

export default async function SendMail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const data: IEmailInputs = req.body;

      const mailTransporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 465,
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

      const teste = await mailTransporter.sendMail(mailDetails);
      console.log(teste);
      return res.status(200).json({ message: 'Email sent' });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      res
        .status(500)
        .json({ message: `Email not sent - Error: ${err.message}` });
    }
  }
  return res.status(405).json({ message: 'Method not allowed' });
}
