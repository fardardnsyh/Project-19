import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface WelcomeEmailProps {
  name: string;
  to: string;
}

const WelcomeEmail = ({ name, to }: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        Onyx, the app that track your job applications with ease
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src='https://amine-tayani.vercel.app/assets/onyx.png'
            width='64'
            height='auto'
            alt='Onyx Logo'
            style={logo}
          />
          <Text style={paragraph}>Hi {name},</Text>
          <Text style={paragraph}>
            Thank you for creating an account with this email : {to} and Welcome
            to Onyx, the app that track your job applications and help you land
            your dream job.
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href='http://localhost:3000/login'>
              Get started
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            The Onyx team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            408 Rue El Kadi Iass - Maarif, Casablanca 20330
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer = {
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#5F51E8',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};
