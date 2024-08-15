import { render } from '@react-email/render';

import WelcomeEmail from '@/components/email-templates/welcome';

import { sendEmail } from './sendmail';

export async function sendWelcomeEmail({
  name,
  to,
}: {
  name: string;
  to: string;
}) {
  const emailTemplate = render(WelcomeEmail({ name, to }));
  try {
    await sendEmail({
      to,
      subject: 'Welcome to the app',
      html: emailTemplate,
    });
  } catch (error) {
    console.log({ error });
    throw error;
  }
}
