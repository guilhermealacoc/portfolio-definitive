import { Icon } from "@iconify/react/dist/iconify.js";
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

import CardItem from "../components/card";
import HomeDialog from "../components/dialog";
import { interTight } from '../styles/themes';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const emoji = "👋  Oi, tudo bem?";
  const greetings = "sou Guilherme Alacoc";
  const firstDescription = "Desenvolvedor de software apaixonado por tecnologia e por criar soluções para os mais diversos desafios. Focado em aplicações web, procuro sempre otimizar meu trabalho e aplicar práticas consolidadas no desenvolvimento de projetos. Além disso, estou constantemente aprimorando minhas soft skills para garantir um bom relacionamento com equipes, clientes e colegas de trabalho.";

  const profileImage = (
    <Box
      component="img"
      alt="auth"
      src={"src/assets/profileImage.jpg"}
      sx={{ 
        maxWidth: { xs: 150, md: 230 }, 
        borderRadius: "50%",
        ...(isMobile && { padding: 2 })
      }}
    />
  );

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogDescription, setDialogDescription] = useState('');

  const handleOpenDialog = (description: string) => {
    setDialogDescription(description);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const renderIntroSummary = (
    <>
      <Grid item xs={12} md={6}>
        <Box sx={{ pt: { xs: 5, md: 10 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', pb: 3, ...(isMobile && { justifyContent: 'center'}) }}>
            <Button href="https://www.linkedin.com/in/guilherme-alacoc/" color="inherit" size="medium" startIcon={<Icon icon="bi:linkedin" />} />
            <Button href="https://github.com/guilhermealacoc" color="inherit" size="medium" startIcon={<Icon icon="mdi:github" width="25" height="25" />} />
          </Box>
          <Typography variant="h4" align="left">
            {emoji}
          </Typography>

          <Typography variant="h4" align="left">
            {greetings}
          </Typography>
          {isMobile && profileImage}
          <Typography variant="subtitle1" align="justify">
            {firstDescription}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        {!isMobile && (
          <Box sx={{ pt: { xs: 5, md: 17 }, display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
            {profileImage}
          </Box>
        )}
      </Grid>
    </>
  );

  const renderCardNew = (
    <>
      <Typography variant="h6" align="center" sx={{ paddingTop: { xs: 6, md: 12 } }}>
        Projetos em destaque
      </Typography>
      <Grid container spacing={3} sx={{ paddingTop: 5, ...(isMobile && { paddingLeft: 4 }) }}>
        <Grid item xs={12} sm={6} md={4}>
          <CardItem imageLink="src/assets/waves/wave1.jpg" title="Hat Trick Monitor" description="Your Description" onSaibaMaisClick={handleOpenDialog} />
          <HomeDialog
        description={dialogDescription}
        openmodal={dialogOpen}
        onClose={handleCloseDialog}
      />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardItem imageLink="src/assets/waves/wave2.jpg" title="Personal Bookshelf" description="Your Description" onSaibaMaisClick={handleOpenDialog}  />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardItem imageLink="src/assets/waves/wave3.jpg" title="Lime Lemon" description="Your Description" onSaibaMaisClick={handleOpenDialog}  />
        </Grid>
      </Grid>
    </>
  );

  const renderFooter = (
    <Grid container justifyContent="center" spacing={2} sx={{ paddingTop: { xs: 5, md: 10 }, paddingBottom: 5 }}>
      <Grid item>
        <Button href="https://www.linkedin.com/in/guilherme-alacoc/" color="inherit" size="medium" startIcon={<Icon icon="bi:linkedin" />} />
      </Grid>
      <Grid item>
        <Button href="https://github.com/guilhermealacoc" color="inherit" size="medium" startIcon={<Icon icon="mdi:github" width="25" height="25" />} />
      </Grid>
      <Grid item>
        <Button href="https://dev.to/alacoc" color="inherit" size="medium" startIcon={<Icon icon="skill-icons:devto-dark" width="25" height="25" />} />
      </Grid>
    </Grid>
  );

  const renderBodySummary = (
    <Grid container justifyContent="center" sx={{ pt: { xs: 5, md: 10 } }}>
      <Grid item xs={12} md={8}>
        <Typography variant="subtitle1" align="justify">
          {firstDescription}
        </Typography>
      </Grid>
    </Grid>
  );

  const renderAccordion = (
    <>
      <Accordion defaultExpanded sx={{ pt: 1 }}>
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          <Typography>Backend</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2-content" id="panel2-header">
          <Typography>Banco de Dados</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel3-content" id="panel3-header">
          <Typography>Frontend</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );

  return (
    <ThemeProvider theme={interTight}>
      <Grid container spacing={2} sx={{ flexGrow: 1, pt: 2, px: 2 }}>
        {renderIntroSummary}
        <Grid item xs={12}>
          {renderCardNew}
        </Grid>
        {renderBodySummary}
        <Grid item xs={12}>
          {renderAccordion}
        </Grid>
        {renderBodySummary}
        {renderFooter}
      </Grid>
    </ThemeProvider>
  );
}
