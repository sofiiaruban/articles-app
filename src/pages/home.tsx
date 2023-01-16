import { InputAdornment } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import { SearchIcon } from "../assets/icons/SearchIcon";
import { ArticleCard } from "../components/ArticleCard";


export const Home = () => {
    return (
        <>
        <InputLabel shrink htmlFor="outlined-basic">
        Filter by keywords
        </InputLabel>
            <TextField
              id="outlined-basic"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"/>
            <Typography>Results: 6</Typography>
            <ArticleCard/>
        </>
    )

}