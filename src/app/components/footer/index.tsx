import { Center, Container } from '@chakra-ui/react';
import { FooterButtons } from './footer-buttons';

export const Footer: React.FC = () => {
  return (
    <Container as="footer" width="100%" height={32}>
      <Center>
        <FooterButtons />
      </Center>
    </Container>
  );
};
