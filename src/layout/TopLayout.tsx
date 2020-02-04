import * as React from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import initialTheme from '../utils/theme';
import { DispatchContext, themeReducer } from '../utils/themeReducer';

interface Props {
  children: JSX.Element | JSX.Element[];
}

function TopLayout({ children }: Props) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [state, dispatch] = React.useReducer(themeReducer, {
    darkMode: prefersDarkMode
  });
  const { darkMode } = state;

  const theme = React.useMemo(() => {
    return createMuiTheme({
      ...initialTheme,
      palette: {
        primary: initialTheme.palette.primary,
        secondary: initialTheme.palette.secondary,
        type: darkMode ? 'dark' : 'light'
      },
    });
  }, [darkMode]);

  return (
    <>
      <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet" />
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default TopLayout;
