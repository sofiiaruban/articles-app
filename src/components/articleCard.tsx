import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styles from "./ArticleCard.module.scss";

export const ArticleCard = ({id, title, imgUrl, summary}:{
    id?: number, 
    title?: string,
    imgUrl?: string,
    summary?: string
}) => {

    return (
    <Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          className={styles.cardMedia}
          component="img"
          image={imgUrl}
          alt="article"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{title}</Typography>
          <Typography variant="body2" color="text.secondary">{summary}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">Read more </Button>
      </CardActions>
    </Card>
    )
}