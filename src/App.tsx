import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled, ThemeProvider } from "@mui/material/styles";

import { interTight } from './styles/themes';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  const emoji = "👋  Oi, tudo bem?";
  const greetings = "sou Guilherme Alacoc";
  const firstDescription =
    "Desenvolvedor de software apaixonado por tecnologia e por criar soluções para os mais diversos desafios. Focado em aplicações web, procuro sempre otimizar meu trabalho e aplicar práticas consolidadas no desenvolvimento de projetos. Além disso, estou constantemente aprimorando minhas soft skills para garantir um bom relacionamento com equipes, clientes e colegas de trabalho.";


  const renderIntroSummary = (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={6} md={6}>
        <Box sx={{
          pt: 10,
        }}>
        <Item>xs=6 md=8</Item>
        <Typography variant="h4" align="left">
          {emoji}
        </Typography>
        <Typography variant="h4" align="left">
          {greetings}
        </Typography>
        <Typography variant="subtitle1" align="justify">
          {firstDescription}
        </Typography>
        </Box>
      </Grid>

      <Grid item xs={6} md={6}>
        <Box sx={{
          pt: 10,
        }}>
        <Item>xs=6 md=4</Item>
        <Box
          component="img"
          alt="auth"
          src={"src/assets/profileImage.jpg"}
          sx={{
            maxWidth: 250,
            borderRadius: "50%",
          }}
        ></Box>
        </Box>
      </Grid>
      <Grid item xs={6} md={4}>
        <Item>xs=6 md=4</Item>
      </Grid>
      <Grid item xs={6} md={8}>
        <Item>xs=6 md=8</Item>
      </Grid>
    </Grid>
  </Box>
  )

  return (
    <ThemeProvider theme={interTight}>
      {renderIntroSummary}
    </ThemeProvider>
  );
}
