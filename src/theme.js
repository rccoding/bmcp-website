import { createMuiTheme } from '@material-ui/core/styles';

export const Theme = createMuiTheme({
    palette: {
        primary: {
            main: "#3f2ac7",
        },
        secondary: {
            main: "#fafaf7",
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