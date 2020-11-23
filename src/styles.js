import { makeStyles } from '@material-ui/core';
import bg from './bg.png';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: '#FFFBFB',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    backgroundBlendMode: 'screen',
  },
  '& .MuiInput-root': {
    backgroundColor: '#FFF',
  },
  '& .MuiTabs-indicator': {
    color: '#FFF',
    backgroundColor: '#000',
  },
}));
