import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    container:{
        paddingBlock:120,
        maxWidth:1380,
        paddingInline:100,
        '& h2':{
            color:"#384141",
            fontSize:48,
            lineHeight:1,
            fontWeight:400,
            marginBottom:30
        },
        '& p':{
            marginBottom:30,
            color:'#808080'
        },
        "& span":{
            color:"#45c1e2",
        },
        '& img':{
            width:'100%',
        }
    }
})

export default useStyles