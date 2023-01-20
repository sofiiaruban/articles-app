import { Box} from "@mui/material";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "../assets/icons/ArrorLeftIcon";
import { StatusMessage } from "../components/StatusMessage";
import { useGetArticleByIdQuery } from "../services/articleApi";
import styles from "./ArticleInfo.module.scss";

export const ArticleInfo = ({id}:{id:number}) => {
  const {data, error, isLoading} = useGetArticleByIdQuery(id);
  const navigate = useNavigate();

  if(isLoading) {
    return (<StatusMessage message="Loading..."/>) 
  }

  if(error) {
    return (<StatusMessage message="Error while loading"/>) 
  }
    
  return (

     <>
     <Box>
      <CardMedia
        className={styles.img}
        component="img"
        image={data?.imageUrl}
        alt="article" />
    </Box>
    <Box className={styles.container}>
      <Box className={styles.contentBox}>
          <Typography className={styles.title} variant="h4">{data?.title}</Typography>
          <Typography className={styles.summary} variant="subtitle1">{data?.summary}</Typography>
      </Box>
      <Button startIcon={<ArrowLeftIcon className={styles.arrowIcon} />}size="medium"className={styles.button} color="primary" onClick={() => navigate('/', { replace: true })}>Back to homepage</Button>
    </Box>
    </>
    
  )

}