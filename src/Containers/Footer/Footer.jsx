import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth='sm'>
          <Typography variant='body1'>
            My sticky footer can be found here.
          </Typography>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
