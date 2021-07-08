import { makeStyles, Theme} from '@material-ui/core/styles'

export default makeStyles((theme: Theme) => ({

    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(2),
    },
    card: {
        height:"500px",
        textAlign:"justify",
        padding:"16px",
        width:"300px",
        overflow:"auto",
    },
    media: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin:"auto",
    },



})
) 