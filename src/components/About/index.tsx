import { makeStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) => ({
    sidepic:{
       height:700,
       width:700,
       position:"relative",
       float:"right",
       marginTop:"-150px",
       marginRight:"-150px"
    },
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(2),
    },
    card: {
        border:'none',
        color:'aliceblue',
        boxShadow:'none',
        height:"100",
        textAlign:"center",
        padding:"16px",
        backgroundColor:'transparent'
    },
    media: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin:"auto",
    },
    icon:{
       fontSize:'40px',
        color:'aliceblue'
    }
}))