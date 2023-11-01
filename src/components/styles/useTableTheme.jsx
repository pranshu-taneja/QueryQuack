import { useMemo } from "react";
import { createTheme, useTheme } from "@mui/material";

const useTableTheme = () => {
  const globalTheme = useTheme();

  const tableTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: globalTheme.palette.mode,
          primary: globalTheme.palette.secondary,
          info: {
            main: "rgb(54, 255, 184)",
          },
          background: {
            default:
              globalTheme.palette.mode === "light"
                ? "rgb(254,255,244)"
                : "#000",
          },
        },
        typography: {
          button: {
            textTransform: "none",
            fontSize: "1.2rem",
          },
        },
        components: {
          MuiTooltip: {
            styleOverrides: {
              tooltip: {
                fontSize: "0.6rem",
              },
            },
          },
          MuiTableCell: {
            styleOverrides: {
              root: {
                fontSize: "0.8rem",
              },
            },
          },
          MuiLinearProgress: {
            styleOverrides: {
              root: {
                height: 3,
                borderRadius: 5,
                backgroundColor: "#b6fab6",
              },
              bar: {
                borderRadius: 5,
                backgroundColor: "#90ee90",
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                width: "100%",
                "@media (max-width: 480px)": {
                  width: "auto",
                },
              },
            },
          },
        },
      }),
    [globalTheme]
  );

  return tableTheme;
};

export default useTableTheme;
