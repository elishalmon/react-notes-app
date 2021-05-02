import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Footer() {
    return (
      <Typography style={{marginTop: '90px'}} variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.linkedin.com/in/elisha-shalmon/">
          Elisha Shalmon
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }