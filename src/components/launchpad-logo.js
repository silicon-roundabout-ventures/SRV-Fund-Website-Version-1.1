/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import LogoDark from 'assets/sr_launchpad.png';

export default function Logo() {
  return (
    <Link
      path="/launchpad"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '205px',
        cursor: 'pointer',
        '@media only screen and (max-width: 720px)': {
          display: 'none',
        },
      }}
    >
      <Image src={LogoDark} alt="Silicon Roundabout Ventures Launchpad Logo" />
    </Link>
  );
}
