import { ExternalLinkIcon } from '@/lib/chakra/icons';
import { AspectRatio, Center, Container, Heading, Image, Link, Text } from '@chakra-ui/react';

const headshotImg =
  'https://images.ctfassets.net/o5ofmmhtf81x/18CaF6xSs735b9W2MmVAaL/118dbb5726a935b6614dae9992a98d37/me.jpeg';
export default function Home() {
  return (
    <Container as="main" data-id="home-main" width="100%" maxWidth="100%" paddingY={32}>
      <Container data-id="overview-container" width="100%">
        <Center>
          <Heading fontSize={64}>Philip Yun</Heading>
        </Center>
        <Center height={450} width="100%" data-id="headshot-image-container">
          <AspectRatio ratio={1} maxWidth={400} width="100%">
            <Image src={headshotImg} alt="Headshot of Philip Yun" borderRadius={200} />
          </AspectRatio>
        </Center>
      </Container>
      <Container paddingY={16}>
        <Text textAlign="center" fontStyle="italic">
          Philip Yun is the Technical Engineering Lead for the web development team at Fender Musical Instruments
          Corporation
        </Text>
      </Container>
      <Container paddingY={2}>
        <Text textAlign="center">This site is under construction...</Text>
      </Container>
      <Container paddingY={2}>
        <Text textAlign="center">
          The old site can be found at&nbsp;
          <Link href="http://old.philipyun.com" isExternal>
            old.philipyun.com
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
      </Container>
    </Container>
  );
}
