import { makeStyles } from '@material-ui/core';
import bg from './bg2.png';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFFBFB',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'top center',
    backgroundBlendMode: 'screen',
  },
  '& .MuiInput-root': {
    backgroundColor: '#FFF',
  },
}));
