import { InputAdornment } from "@mui/material"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import TextField from "@mui/material/TextField"
import { SearchIcon } from "../assets/icons/SearchIcon"


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
        </>
    )

}