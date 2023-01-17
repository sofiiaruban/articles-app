import Typography from "@mui/material/Typography";
import { useGetArticleByIdQuery } from "../services/articleApi"

export const ArticleInfo = ({id}:{id:number}) => {
   
  const {data, error, isLoading} = useGetArticleByIdQuery(id);

  if(isLoading) {
    return (<Typography>Loading...</Typography>) 
  }

  if(error) {
    return (<Typography>Error while loading</Typography>) 
  }
    
  return (
    <>
      <Typography>{data?.title}</Typography>
      <Typography>{data?.summary}</Typography>
    </>
  )

}