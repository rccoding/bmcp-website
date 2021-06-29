import { makeStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) => ({
  toolbar: {
    paddingLeft: 50,
    paddingRight: 0,
    backgroundColor: "#3f2ac7"
  },
  toolbarLeft: {
    backgroundColor: "#3f2ac7",
    paddingLeft:600,
    paddingRight:100,
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    columnGap:'30px',
    
  },
  menubar:{
    height:100,
    position:'relative',

  },
  menubutton:{
     height: 100,
     paddingTop:50,
     paddingLeft:300,
      alignItems: 'center',
     right: '2%', 
     justifyContent:"flex-end"
  },
  link:{
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontWeight: 600,
    padding: 5,
    height: 100,
    cursor: 'pointer'
  }
}))