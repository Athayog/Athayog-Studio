"use client";
import { Button, Typography } from "@mui/material";
import theme from "./components/ui/theme";

export default function Home() {
  return (
    <div>
      Hello From Kose
      <Button
        sx={{
          backgroundColor: theme.palette.primary.main,
        }}
        variant="contained"
      >
        Hello
      </Button>
      <Typography>tsetsign fotn</Typography>
    </div>
  );
}
