import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useGetArticleByIdQuery } from "../services/articleApi"

export const ArticleInfo = ({id}:{id:number}) => {
  const {data, error, isLoading} = useGetArticleByIdQuery(id);
  const navigate = useNavigate();

  if(isLoading) {
    return (<Typography>Loading...</Typography>) 
  }

  if(error) {
    return (<Typography>Error while loading</Typography>) 
  }
    
  return (
    <>
      <CardMedia
          className=""
          component="img"
          image={data?.imageUrl}
          alt="article"
        />
      <Typography>{data?.title}</Typography>
      <Typography>{data?.summary}</Typography>
      <Button size="small" color="primary" onClick={()=> navigate('/', {replace: true})}>Back to homepage</Button>
    </>
  )

}