import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container:{
    background:"#EFEEEA",
    display:"flex",
    maxWidth:1380,
    paddingBlock:8,
    paddingInline:100,
    '& a':{
        color:'#26313c',
        textDecoration:"none"
    },
    '& img':{
        width:65,
        cursor:"pointer",
    }
  },
  ul:{
    listStyle:"none",
    display:"flex",
    gap:36,
  },
  li:{
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-end"
  }
})


export default useStyles