import {
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';

interface VerificationEmailProps {
  subject: string;
  verificationLink: string;
}

const VerificationEmail = ({
  subject,
  verificationLink,
}: VerificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Heading as='h2'>Confirm your account!</Heading>

      <Text>Before we can get started, we need to confirm your account.</Text>
      <Text>
        Thank you for signing up for Onyx. To confirm your account, please click
        the link below:
      </Text>

      <Container className='text-center'>
        <Button
          href={verificationLink}
          className='rounded bg-[#000000] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline'
        >
          Confirm account
        </Button>
      </Container>

      <Text>
        If you did not create an account, no further action is required.
      </Text>
    </Html>
  );
};

export default VerificationEmail;
