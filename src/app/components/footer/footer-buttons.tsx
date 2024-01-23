'use client';

import { ButtonGroup, IconButton, IconProps, useColorModeValue } from '@chakra-ui/react';
import { GithubIcon, InstagramIcon, LinkedInIcon, SpotifyIcon, XIcon } from '../../../components/icons';

interface FooterButtonProps {
  'aria-label': string;
  link: string;
  Icon: React.FC<IconProps>;
}

const FooterButton: React.FC<FooterButtonProps> = ({ 'aria-label': ariaLabel, link, Icon }) => {
  const fill = useColorModeValue('black', 'white');

  return (
    <IconButton
      as="a"
      href={link}
      target="_blank"
      isRound
      variant="ghost"
      fill={fill}
      icon={<Icon height={5} width={5} />}
      aria-label={ariaLabel}
    />
  );
};

export const FooterButtons: React.FC = () => {
  return (
    <ButtonGroup spacing={2}>
      <FooterButton link="https://github.com/philipyun" Icon={GithubIcon} aria-label="github-profile-button" />
      <FooterButton
        link="https://linkedin.com/in/philipyun"
        Icon={LinkedInIcon}
        aria-label="linked-in-profile-button"
      />
      <FooterButton link="https://x.com/philipyun103" Icon={XIcon} aria-label="x-profile-button" />
      <FooterButton
        link="https://instagram.com/philip.yun103"
        Icon={InstagramIcon}
        aria-label="instagram-profile-button"
      />
      <FooterButton
        link="https://open.spotify.com/user/musedguitarfreak"
        Icon={SpotifyIcon}
        aria-label="spotify-profile-button"
      />
      {/* <FooterButton link="https://twitch.tv/phasephilip" Icon={TwitchIcon} aria-label="twitch-profile-button" />
      <FooterButton link="https://youtube.com/philipyun" Icon={YoutubeIcon} aria-label="youtube-profile-button" /> */}
    </ButtonGroup>
  );
};
