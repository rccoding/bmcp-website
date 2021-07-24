import { green } from '@material-ui/core/colors'
import { makeStyles, Theme} from '@material-ui/core/styles'

export default makeStyles((theme: Theme) => ({

    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(8),
    },
    card: {
        height:"500px",
        textAlign:"justify",
        backgroundColor:'teal' ,
    },
    media: {
       objectFit:"fill",
       
    },
    content: {
        objectFit:"fill"
    }
    



})
) 