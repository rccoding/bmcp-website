import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const Theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
    background: {
        default: "#222222"
    },
    text: {
        primary: "#ffffff"
    },
    typography:{
        fontFamily:"Cosmic Sans MS",
        color:"#120f1c",
        body2 :{
            fontFamily:"Times New Roman",
            fontSize: "1.1 rem"

        }

    },
   props: {
     MuiButton:{
         color: "primary",
         variant: "contained"
     },
     MuiAppBar:{
         color:"#ffffff",
         variant:"outlined"
     },
    
   }
});