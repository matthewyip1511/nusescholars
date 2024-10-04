import { Box, Typography } from "@mui/material";
import BasicCard from "../../components/Card";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";

export default function Home() {
  return (
    <Box>
      <ResponsiveAppBar/>
      <Typography variant="h3">
        Welcome to the D/E Scholars website!
      </Typography>
      <BasicCard/>
    </Box>
  );
}
