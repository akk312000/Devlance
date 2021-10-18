import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nft: {
    height: "415px",
    width: "330px",
  },
  mainBoxRight: {
    display: "flex",
    flexDirection: "column",
  },
  nftReflect: {
    transform: "scaleY(-1)",
    position: "absolute",
    height: "160px",
    width: "330px",
    objectFit: "cover",
    objectPosition: "bottom",
  },
  backDrop: {
    position: "absolute",
    height: "160px",
    width: "350px",
    padding: "10px",
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, #000000 30.27%)",
    objectFit: "cover",
    objectPosition: "bottom",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  steps: {
    height: "260px",
    width: "270px",
    background:
      "linear-gradient(180deg, rgba(251, 215, 132, 0) 31.77%, rgba(251, 215, 132, 0.1) 100%)",
    color: "black",
    margin: "20px",
    marginBottom: "0px",
    marginTop: "40px",
    padding: "20px",
  },
  stepsReflect: {
    height: "260px",
    width: "270px",
    background:
      "linear-gradient(180deg, rgba(251, 215, 132, 0) 31.77%, rgba(251, 215, 132, 0.1) 100%)",
    color: "black",
    margin: "20px",
    marginTop: "10px",
    padding: "20px",
    objectFit: "cover",
    objectPosition: "bottom",
    transform: "scaleY(-1)",
    position: "absolute",
  },

  backDropSteps: {
    position: "absolute",
    height: "260px",
    width: "280px",
    padding: "20px",
    margin: "20px",
    marginTop: "10px",
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, #000000 47.27%)",
    objectFit: "cover",
    objectPosition: "bottom",
  },
  footer: {
    zIndex: "1",
    bottom: "0",
    width: "100%",
    height: "200px",
    background: "rgba(211, 170, 75, 0.7)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
}));

export default useStyles;
