import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: red,
  },
});

export default responsiveFontSizes(theme);
