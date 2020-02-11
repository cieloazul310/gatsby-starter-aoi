import React from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import initialTheme from '../../src/utils/theme';
import { DispatchContext } from '../../src/utils/DispatchContext';
import { themeReducer, initialThemeState } from '../../src/utils/themeReducer';
import useLocalStorage from '../../src/utils/useLocalStorage';

export default function TopLayout(props) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [storedValue, setValue] = useLocalStorage('paletteType');
  const [state, dispatch] = React.useReducer(themeReducer, initialThemeState(storedValue ? storedValue === 'dark' : prefersDarkMode));
  const paletteType = state.darkMode ? 'dark' : 'light';
  
  // persist paletteType
  React.useEffect(() => {
    setValue(paletteType);
  }, [paletteType, setValue]);

  const theme = React.useMemo(() => {
    return createMuiTheme({
      ...initialTheme,
      palette: {
        primary: {
          main: paletteType === 'dark' ? initialTheme.palette.primary[300] : initialTheme.palette.primary.main
        },
        secondary: {
          main: paletteType === 'dark' ? initialTheme.palette.secondary[300] : initialTheme.palette.secondary.main
        },
        type: paletteType
      }
    });
  }, [paletteType]);

  return (
    <>
      <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet" />
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <DispatchContext.Provider value={dispatch}>
          {props.children}
        </DispatchContext.Provider>
      </ThemeProvider>
    </>
  );
}
