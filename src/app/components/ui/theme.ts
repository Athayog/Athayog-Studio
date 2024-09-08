"use client";
import { createTheme } from "@mui/material/styles";
import { pallete } from "@/app/components/ui/pallete";
import { button } from "./elements/button";

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
  },
  palette: pallete,
  components: {
    ...button,
  },
});

export default theme;
