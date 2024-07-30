import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

interface Props {
  imageLink?: string;
  title?: string;
  description: string;
  titleDialog: string;
  linkRepo: string;
  onSaibaMaisClick: (description: string, titleDialog: string) => void;
}

export default function CardItem({
  imageLink,
  title,
  titleDialog,
  description,
  onSaibaMaisClick,
  linkRepo,
}: Props) {
  return (
    <Card variant="outlined" sx={{ width: 260 }}>
      <CardMedia component="img" alt="wave" height="140" image={imageLink} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      <CardActions>
        <Button
          color="inherit"
          size="small"
          variant="outlined"
          href={linkRepo}
          startIcon={<Icon icon="mdi:github" />}
        >
          Repo
        </Button>
        <Button
          color="inherit"
          size="small"
          onClick={() => onSaibaMaisClick(description, titleDialog || "")}
        >
          Saiba mais
        </Button>
      </CardActions>
    </Card>
  );
}
