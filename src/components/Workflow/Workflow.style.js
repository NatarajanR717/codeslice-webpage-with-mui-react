import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    paddingBlock: 120,
    paddingInline: 100,
    background: "#556772",
  },
  haeding: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "normal",
  },
  list: {
    display: "flex",
    gap: 20,
  },
  stepContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  line: {
    content: " ",
    position: "absolute",
    height: 2,
    width: 140,
    left:87,
    color: "#fff",
  },
  step: {
    position: "relative",
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 90,
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    width: 90,
    border: "1px solid #fff",
    borderRadius: "50%",
    transition: "backgroundImage 1s, color 1s",
    "&:hover": {
      cursor: "pointer",
      backgroundImage: "linear-gradient(to right, #45c1e2 30%, #68e0ce 100%)",
      border: "none",
    },
  },
  stepcontent: {
    textAlign: "center",
    marginBlockStart: 25,
    color: "#fff",
  },
});

export default useStyles;
