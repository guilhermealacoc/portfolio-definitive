import { Box, Divider, Stack, Typography } from "@mui/material";

import profile1 from "./assets/profile1.jpg";

function App() {
  const summary = (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      sx={{ marginTop: 2 }}
    >
      {/* <Box
        component="img"
        src={profile1}
        alt="Profile"
        sx={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          m: 1,
        }}
      /> */}
      <Typography variant="body1" align="left">
        Olá. Sou Guilherme Alacoc.
        <br />
        Sou um desenvolvedor de software com foco em aplicações Web, amo
        tecnologia e poder desenvolver soluções para os mais diversos desafios.
      </Typography>
    </Stack>
  );

  const projects = (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      justifyContent="center"
      sx={{ marginTop: 2 }}
    >
      <Typography variant="body1">Item 1</Typography>
      <Typography variant="body1">Item 2</Typography>
      <Typography variant="body1">Item 3</Typography>
    </Stack>
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      // width="100%"
      sx={{ boxSizing: "border-box", padding: 2 }}
    >
      {summary}
      {projects}
    </Box>
  );
}

export default App;
