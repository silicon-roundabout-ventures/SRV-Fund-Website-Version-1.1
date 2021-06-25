/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import LogoDark from 'assets/srv_logo_dash.png';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '205px',
        cursor: 'pointer',
      }}
    >
      <Image src={LogoDark} alt="startup landing logo" />
    </Link>
  );
}
