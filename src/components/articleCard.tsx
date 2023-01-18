import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styles from "./ArticleCard.module.scss";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateId } from '../store/idSlice';
import { Marker } from 'react-mark.js';

export const ArticleCard = ({id, title, imgUrl, summary, searchText}:{
    id: number, 
    title: string,
    imgUrl: string,
    summary: string,
    searchText: string
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
          <Marker mark={searchText}>
            <Typography gutterBottom variant="h5" component="div">{title}</Typography>
          </Marker>
          <Marker mark={searchText}>
          <Typography variant="body2" color="text.secondary">{`${summary.substring(0,100)}...`}</Typography>
          </Marker>
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