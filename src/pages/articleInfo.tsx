import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { StatusMessage } from "../components/StatusMessage";
import { useGetArticleByIdQuery } from "../services/articleApi"

export const ArticleInfo = ({id}:{id:number}) => {
  const {data, error, isLoading} = useGetArticleByIdQuery(id);
  const navigate = useNavigate();

  if(isLoading) {
    return (<StatusMessage message="Loading..."/>) 
  }

  if(error) {
    return (<StatusMessage message=" Error while loading"/>) 
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