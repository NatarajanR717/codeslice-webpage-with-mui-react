import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container:{
        paddingBlock:120,
        paddingInline:100,
        '& h2':{
            textAlign:"right",
            fontSize:48,
            lineHeight:1,
            fontWeight:"normal",
            color:"#384141",
        },
        '& p':{
            textAlign:"right",
            marginTop:8,
            marginBottom:60,
            color:'#808080'
        },
    },
    cardText:{
        textAlign:"center",
        borderRadius:5,
        '& span':{
            fontSize:28,
            fontWeight:"bold",
        },
        '& h4':{
            fontWeight:500,
            fontSize:20
        }
    }

})

export default useStyles