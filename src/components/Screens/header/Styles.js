import { Colors } from "../myColors/Colors";

const styles = {
  container: {
    background: Colors.yellow,
    backgroundSize: "cover",
    minHeight: "320px",
    display: "flex",
    color: Colors.white,
    flexDirection: "column",
  },
  iconContainer: {
    marginRight: "5px",
    justifyContent: "center",
    alignSelf: "center",
  },
  searchicon: {
    marginRight: "4px",
  },
  heading: {
    color: Colors.white,
    fontWeight: "bold",
    fontFamily: "Raleway",
    textAlign: "center",
  },
  navbar: {
    width: "95%",
    height: "fit-content",
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
    alignSelf: "center",
  },
  searchbarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff26",
    width: "100%",
    maxWidth: "300px",
    alignSelf: "center",
    borderRadius: "21px",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 15,
  },
  searchStyle: {
    color: Colors.black,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: Colors.transparent,
    flex: "1",
    border: "none",
    outline: "none",
    borderWidth: 0,
    borderRadius: "21px",
    fontSize: "15px",
  },
};
export default styles;