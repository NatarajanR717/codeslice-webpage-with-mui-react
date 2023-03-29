import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  container: {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "88vh",
    width:"100%",
    '& h1':{
        textAlign:"center",
        fontSize:40,
    }
  },
});

export default useStyles;
