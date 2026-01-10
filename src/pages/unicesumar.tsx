import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";

import unicesumarLogo from "../assets/unicesumar-logo-1.png";
import { interTight } from "../styles/themes";

export default function Unicesumar() {
  return (
    <ThemeProvider theme={interTight}>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          px: 2,
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src={unicesumarLogo}
          alt="Unicesumar"
          sx={{ width: "100%", maxWidth: 240, mb: 1 }}
        />
        <Typography
          variant="h5"
          component="div"
          sx={{ display: "flex", alignItems: "center", gap: 1, fontWeight: 600 }}
        >
          MATRÍCULA ATIVA ATÉ AGOSTO 2027 <span aria-label="check" role="img">✅</span>
        </Typography>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            GUILHERME DE ALACOC AQUINO
          </Typography>
          <Typography variant="subtitle1">R.A: 1644190886-0193</Typography>
          <Typography variant="subtitle1">CPF: 491.061.538-52</Typography>
          <Typography variant="subtitle1">RG: 52.473.311-9</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
