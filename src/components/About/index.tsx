import { makeStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) => ({
    sidepic: {
       height:700,
       width:700,
       position:"relative",
       float:"right",
       marginTop:"-150px",
       marginRight:"-150px"
    },
    root: {
        margin:'20px',
        display: 'flex',
        justifyContent: 'space-around'
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
    },
   header:{       
       fontSize:'50px',
       textAlign:'left',
       marginBottom:'30px',
       padding:'20px',
       paddingLeft:'35px'
   },
    header1: {
        fontSize: '50px',
        textAlign: 'left',
        paddingTop:'65px',
        paddingLeft: '35px',
        paddingBottom:'20px'
    },
   Svg:{
       border: 'none',
       color: 'aliceblue',
       boxShadow: 'none',
       height: '50',
       textAlign: 'center',
       padding: "16px",
       backgroundColor: 'transparent',
       width:'100%'
   },
   SvgText:{
      fontSize:'20px' ,
       color:'#1e1e1f',
   },
   aboutPara:{
       margin:'35px',
       fontSize:'larger',
       fontWeight:'bolder'
   },
   value:{
       fontSize: '50px',
       textAlign: 'center',
       marginBottom: '30px',
       padding: '20px'
   }
}))