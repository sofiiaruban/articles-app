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
import { Box, FormControl, InputAdornment } from "@mui/material";
import { SearchIcon } from '../assets/icons/SearchIcon';
import { CalendarIcon } from '../assets/icons/CalendarIcon';
import { PublishedDate } from './PublishedDate';
export const ArticleCard = ({id, title, imgUrl, summary, searchText, date}:{
    id: number, 
    title: string,
    imgUrl: string,
    summary: string,
    searchText: string,
    date:string
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
            <Box className={styles.dateBox}>
            <CalendarIcon className={styles.calendarIcon}/>
            <PublishedDate  date={date}/>
            </Box>
            <Typography gutterBottom variant="h5" component="div">{title}</Typography>
          </Marker>
          <Marker mark={searchText}>
          <Typography variant="body2" color="text.secondary">{`${summary.substring(0,100)}...`}</Typography>
          </Marker>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`article/${id}`}>
        <Button size="small" color="primary"  onClick={()=> dispatch(updateId(id))}>Read more</Button>
        </Link>
      </CardActions>
    </Card>
    )
}