import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";

import CardItem from "../components/card";
import { interTight } from '../styles/themes';
import { Icon } from "@iconify/react/dist/iconify.js";


export default function Home() {
  const emoji = "👋  Oi, tudo bem?";
  const greetings = "sou Guilherme Alacoc";
  const firstDescription = "Desenvolvedor de software apaixonado por tecnologia e por criar soluções para os mais diversos desafios. Focado em aplicações web, procuro sempre otimizar meu trabalho e aplicar práticas consolidadas no desenvolvimento de projetos. Além disso, estou constantemente aprimorando minhas soft skills para garantir um bom relacionamento com equipes, clientes e colegas de trabalho.";

  const renderIntroSummary = (
    <>
      <Grid item xs={12} md={6}>
        <Box sx={{ pt: 10 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', pb: 3 }}>
                <Button href="https://www.linkedin.com/in/guilherme-alacoc/" color="inherit" size="medium"  startIcon={<Icon icon="bi:linkedin" />}/>
                <Button href="https://github.com/guilhermealacoc" color="inherit" size="medium"  startIcon={<Icon icon="mdi:github" width="25" height="25" />}/>
            </Box>
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
      <Grid item xs={12} md={6}>
        <Box sx={{ pt: 17 }}>
          <Box
            component="img"
            alt="auth"
            src={"src/assets/profileImage.jpg"}
            sx={{ maxWidth: 230, borderRadius: "50%" }}
          />
        </Box>
      </Grid>
    </>
  );

  const renderCardNew = (
    <>
      <Typography variant="h6" align="center" sx={{ paddingTop: 12 }}>
        Projetos em destaque
      </Typography>
      <Grid container spacing={3} sx={{ paddingTop: 5 }}>
        <Grid item xs={12} sm={6} md={4}>
          <CardItem imageLink="src\assets\waves\wave1.jpg" title="Hat Trick Monitor"/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardItem imageLink="src\assets\waves\wave2.jpg" title="Personal Bookshelf"/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardItem imageLink="src\assets\waves\wave3.jpg" title="Lime Lemon"/>
        </Grid>
      </Grid>
    </>
  );

  const renderFooter = (
    <>
      <Grid container spacing={3} sx={{ paddingTop: 10, paddingBottom: 5 }}>
        <Grid item xs={12} sm={6} md={4}>
        <Button href="https://www.linkedin.com/in/guilherme-alacoc/" color="inherit" size="medium"  startIcon={<Icon icon="bi:linkedin" />}/>
       </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Button href="https://github.com/guilhermealacoc" color="inherit" size="medium"  startIcon={<Icon icon="mdi:github" width="25" height="25" />}/> 
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Button href="https://dev.to/alacoc" color="inherit" size="medium"  startIcon={<Icon icon="skill-icons:devto-dark" width="25" height="25" />}/> 
        </Grid>
      </Grid>
    </>
  );

  const renderBodySummary = (
    <Grid container justifyContent="center" sx={{ pt: 10 }}>
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
