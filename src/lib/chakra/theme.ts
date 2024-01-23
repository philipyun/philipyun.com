import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: 'var(--font-bebas)',
    body: 'var(--font-noto)',
    div: 'var(--font-noto)',
    p: 'var(--font-noto)',
  },
});

export default theme;
