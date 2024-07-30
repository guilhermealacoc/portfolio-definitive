// other imports...
import { Icon } from "@iconify/react/dist/iconify.js";
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

import profileImage from "../assets/profileImage.jpg";
import wave1 from "../assets/waves/wave1.jpg";
import wave2 from "../assets/waves/wave2.jpg";
import wave3 from "../assets/waves/wave3.jpg";
import CardItem from "../components/card";
import HomeDialog from "../components/dialog";
import { interTight } from "../styles/themes";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const emoji = "👋  Oi, tudo bem?";
  const greetings = "sou Guilherme Alacoc";
  const firstDescription =
    "Desenvolvedor de software apaixonado por tecnologia e por criar soluções para os mais diversos desafios. Focado em aplicações web, procuro sempre otimizar meu trabalho e aplicar práticas consolidadas no desenvolvimento de projetos. Além disso, estou constantemente aprimorando minhas soft skills para garantir um bom relacionamento com equipes, clientes e colegas de trabalho.";

  const profileImageElement = (
    <Box
      component="img"
      alt="auth"
      src={profileImage}
      sx={{
        maxWidth: { xs: 150, md: 230 },
        borderRadius: "50%",
        ...(isMobile && { padding: 2 }),
      }}
    />
  );

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogDescription, setDialogDescription] = useState("");
  const [titleDialog, setTitleDialog] = useState("");

  const handleOpenDialog = (description: string, titleDialog: string) => {
    setDialogDescription(description);
    setTitleDialog(titleDialog);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const renderIntroSummary = (
    <>
      <Grid item xs={12} md={6}>
        <Box sx={{ pt: { xs: 5, md: 10 } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              pb: 3,
              ...(isMobile && { justifyContent: "center" }),
            }}
          >
            <Button
              href="https://www.linkedin.com/in/guilherme-alacoc/"
              color="inherit"
              size="medium"
              startIcon={<Icon icon="bi:linkedin" />}
            />
            <Button
              href="https://github.com/guilhermealacoc"
              color="inherit"
              size="medium"
              startIcon={<Icon icon="mdi:github" width="25" height="25" />}
            />
          </Box>
          <Typography variant="h4" align="left">
            {emoji}
          </Typography>

          <Typography variant="h4" align="left" sx={{ pb: 2 }}>
            {greetings}
          </Typography>
          {isMobile && profileImageElement}
          <Typography variant="subtitle1" align="justify">
            {firstDescription}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        {!isMobile && (
          <Box
            sx={{
              pt: { xs: 5, md: 22 },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            {profileImageElement}
          </Box>
        )}
      </Grid>
    </>
  );

  const hatTrickDescription = `Hat Trick Monitor é um projeto que visa monitorar a quantidade de hat tricks realizados por jogadores de futebol durante os jogos dos variados campeonatos do futebol brasileiro.
A aplicação conta com interação com um bot no twitter para informar em tempo real sobre os acontecimentos, além de exibir estatísticas sobre os hat tricks realizados.
O projeto está sendo desenvolvido utilizando Node.js, Express, MongoDB`;

  const personalBookshelf = `Personal Bookshelf é um projeto que visa organizar e catalogar livros.
A aplicação permite o cadastro de livros, autores e categorias, além de exibir estatísticas dos valores sobre os livros cadastrados com base no mercado.
Desenvolvimento utilizando AdonisJs, PostgreSQL e React.`;

  const limeLemonDescription = `Uma aplicação para controle de registros de horários para profissionais e empresas.
O projeto está sendo desenvolvido utilizando Laravel e PostgreSQL.`;

  const renderCardNew = (
    <>
      <Typography
        variant="h6"
        align="center"
        sx={{ paddingTop: { xs: 6, md: 12 } }}
      >
        Projetos em desenvolvimento
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{ paddingTop: 5, ...(isMobile && { paddingLeft: 4 }) }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <CardItem
            imageLink={wave1}
            title="Hat Trick Monitor"
            description={hatTrickDescription}
            titleDialog="Hat Trick Monitor"
            linkRepo="https://github.com/guilhermealacoc/hat-trick-monitor-scraper"
            onSaibaMaisClick={handleOpenDialog}
          />
          <HomeDialog
            description={dialogDescription}
            titleDialog={titleDialog}
            openmodal={dialogOpen}
            onClose={handleCloseDialog}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardItem
            imageLink={wave2}
            title="Personal Bookshelf"
            description={personalBookshelf}
            titleDialog="Personal Bookshelf"
            linkRepo="https://github.com/guilhermealacoc/personal-bookshelf-api"
            onSaibaMaisClick={handleOpenDialog}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardItem
            imageLink={wave3}
            title="Lime Lemon"
            linkRepo="https://github.com/guilhermealacoc/limelemon"
            description={limeLemonDescription}
            titleDialog="Lime Lemon"
            onSaibaMaisClick={handleOpenDialog}
          />
        </Grid>
      </Grid>
    </>
  );

  const renderBodySummary = (
    <Grid container justifyContent="center" sx={{ pt: { xs: 5, md: 10 } }}>
      <Grid item xs={12} md={8}>
        <Typography variant="subtitle1" align="justify">
          No dia a dia, atuo como desenvolvedor focado em otimização de sistemas
          e desenvolvimento de novas funcionalidades. Participo na extração e
          validação de dados, além de criar e atualizar interfaces. Trabalho na
          solução de bugs e colaboro ativamente na estimativa de projetos e
          avaliação de complexidade das tarefas. Priorizo a comunicação clara e
          a colaboração, garantindo um fluxo de trabalho eficiente e entregas de
          alta qualidade.
        </Typography>
      </Grid>
    </Grid>
  );

  const renderLastSummary = (
    <Grid container justifyContent="center" sx={{ pt: { xs: 5, md: 10 } }}>
      <Grid item xs={12} md={8}>
        <Typography variant="subtitle1" align="justify">
          No meu cotidiano como desenvolvedor, estou sempre otimizado sistemas e
          criando novas funcionalidades. Adoro aprender novas tecnologias e
          estou sempre em busca de tendências no desenvolvimento. Além disso,
          sou apaixonado por idiomas e estou constantemente estudando para
          aprimorar minhas habilidades linguísticas. Pratico esportes
          regularmente para manter a mente e o corpo ativos. Gosto de novas
          experiências e estou sempre aberto a desafios que me façam crescer
          profissionalmente e pessoalmente.
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
            Atuei como desenvolvedor, participando de vários projetos que
            utilizavam tecnologias como PHP e Node através de frameworks como
            Symfony e AdonisJs. Desenvolvi atualizações e otimizações para
            sistemas legados, trabalhei no desenvolvimento de scripts de
            extração de dados de documentos e web scraping.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2-content" id="panel2-header">
          <Typography>Banco de Dados</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Com MySql como banco de dados trabalhei na criação de queries e
            validação dos dados. Com PostgreSQL trabalhei principalmente com na
            melhoria e otimização de Queries e Views
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel3-content" id="panel3-header">
          <Typography>Frontend</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Desenvolvi e atualizei interfaces em Angular. Atuei no levantamento
            de requisitos e no desenvolvimento de sistemas internos utilizando
            Vue.js e Laravel. Desenvolvi versao web de aplicativos utilizando
            React com diversas bibliotecas de componentes.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );

  const renderFooter = (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      sx={{ paddingTop: { xs: 5, md: 10 }, paddingBottom: 5 }}
    >
      <Grid item>
        <Button
          href="https://www.linkedin.com/in/guilherme-alacoc/"
          color="inherit"
          size="medium"
          startIcon={<Icon icon="bi:linkedin" />}
        />
      </Grid>
      <Grid item>
        <Button
          href="https://github.com/guilhermealacoc"
          color="inherit"
          size="medium"
          startIcon={<Icon icon="mdi:github" width="25" height="25" />}
        />
      </Grid>
      <Grid item>
        <Button
          href="https://dev.to/alacoc"
          color="inherit"
          size="medium"
          startIcon={
            <Icon icon="skill-icons:devto-dark" width="25" height="25" />
          }
        />
      </Grid>
    </Grid>
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
        {renderLastSummary}
        {renderFooter}
      </Grid>
    </ThemeProvider>
  );
}
