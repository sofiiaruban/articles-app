import Typography from "@mui/material/Typography"

export const StatusMessage = ({message}: {message:string}) => {
    return (<Typography variant="h2">{message}</Typography>)
}