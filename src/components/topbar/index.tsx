import { makeStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: 'transparent',
    transition: theme.transitions.create(['background-color'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard
    }),
    padding: '0 20px',
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  appBarScrolled: {
    background: 'linear-gradient( to bottom,#68EACC 0% , #497BE8 100%)',
    color: '#070D0C',
    borderBottom: '1px solid #ededed',
    transition: theme.transitions.create(['background-color'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard
    })
  },
  toolbar: {
    paddingLeft: 50,
    paddingRight: 0,
  },
  toolbarLeft: {
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
    fontWeight:'bolder',
    textDecoration: 'none',
    padding: 5,
    height: 100,
    cursor: 'pointer'
  }
}))