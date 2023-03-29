import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container:{
        paddingBlock:120,
        paddingInline:100,
        background:"#556772",
        '& img':{
            width:100,
        marginBlockEnd:30,
        },
    },
    textContent:{
        color:"#fff",
        lineHeight:50
    },
    socialIcons:{
        display:"flex",
        gap:10,
        marginBlockStart:25,
    },
    socialIcon:{
        paddingBlock:5,
        paddingInline:10,
        border:"1px solid gray",
        borderRadius:"50%",
    },
    footerHeading:{
        color:"#fff",
        fontWeight:500,
        marginBlockEnd:25,
    },
    iconColor:{
        color:"#7596A8"
    },
    footerContent:{
        paddingBlock:25,
        color:"#fff",
        '& button':{
            backgroundImage:"linear-gradient(to right, #45c1e2 30%, #68e0ce 100%)",
            fontWeight:"500",
            borderRadius:30,
            paddingBlock:10,
            paddingInline:30,
        },
        '& FontAwesomeIcon':{
            color:"#fff"
        }
    },
    input:{
        width:"100%",
        height:45,
        paddingInlineStart:8,
        borderRadius:5,
        border:"none",
        outline:"none"
    }

})

export default useStyles