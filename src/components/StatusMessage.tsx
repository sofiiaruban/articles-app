import Typography from "@mui/material/Typography";
import styles from "./StatusMessage.module.scss"

export const StatusMessage = ({message}: {message:string}) => {
    return (<Typography variant="h3" className={styles.message}>{message}</Typography>)
}