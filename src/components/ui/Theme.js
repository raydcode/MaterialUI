import { createTheme } from "@material-ui/core/styles";

const primaryColorVariant = "#DA0037";
const secondaryColorVariant = "#000000";
const textgrey = "#868686";
export default createTheme({
  palette: {
    common: {
      red: primaryColorVariant,
      black: secondaryColorVariant,
    },
    primary: {
      main: primaryColorVariant,
    },
    secondary: {
      main: secondaryColorVariant,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "#fff",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: primaryColorVariant,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: primaryColorVariant,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: primaryColorVariant,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: `${textgrey}`,
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    body1:{ fontSize: "1.25rem", fontWeight:300 , color:textgrey},
    learnButton: {
      borderColor: primaryColorVariant,
      color: primaryColorVariant,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
});
