import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        MuiLink: {
            styleOverrides: {
                root: {
                    fontSize: '16px',
                    fontWeight: '400',
                    color: '#7C8DB0',
                },
            },
        },
        fontFamily: ["Nunito Sans", "Arial", "sans-serif"].join(','),
        h3: {
            fontWeight: '700',
            fontSize: 24,
            color: '#6E7491',
        },
        h4: {
            fontWeight: '600',
            color: '#6E7491',
        },
        subtitle1: {
            fontSize: '18px',
            color: '#7C8DB0',
            marginBottom: '20px',
        },
    },
    palette: {
      primary: {
        main: "#605DEC",
      },
    },
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(82, 82, 122, 0.2)',
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    // width: 778,
                    display: "flex",
                    justifyContent: "flex-end",
                    marginLeft: 0,
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    margin: 0,
                    marginBottom: '12px',
                    width: '100%',
                    height: 48,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    margin: '25px 16px',
                    marginLeft: 0,
                    width: 161,
                    height: 48,
                    textTransform: 'none',
                    fontSize: 16,
                }
            }
        }
    }
  });

export default theme;