import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styles from "./ArticleCard.module.scss";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateId } from '../store/idSlice';

export const ArticleCard = ({id, title, imgUrl, summary}:{
    id: number, 
    title: string,
    imgUrl: string,
    summary: string
}) => {

  const dispatch = useDispatch();
  
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
          <Typography variant="body2" color="text.secondary">{`${summary.substring(0,100)}...`}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`article/${id}`}>
        <Button size="small" color="primary" onClick={()=> dispatch(updateId(id))}>Read more</Button>
        </Link>
      </CardActions>
    </Card>
    )
}