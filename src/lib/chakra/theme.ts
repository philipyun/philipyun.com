import { ChakraTheme, extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const extendedTheme: Partial<ChakraTheme> = {
  config,
  fonts: {
    heading: 'var(--font-bebas)',
    body: 'var(--font-noto)',
    div: 'var(--font-noto)',
    p: 'var(--font-noto)',
  },
};

const theme = extendTheme(extendedTheme);

export default theme;
