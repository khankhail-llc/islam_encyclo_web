import { Colors } from "../myColors/Colors";

export const styles = {
  container: {
    width: "100%",
    position: "absolute",
    display: "flex",
    color: Colors.black,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "265px",
    paddingBottom: "50px",
  },
  itemContainer: {
    backgroundColor: Colors.white,
    width: "75%",
    display: "flex",
    flexDirection: "row",
    flex: 1,
    border: "1px solid #f0f0f0",
    borderTop: 'none',
    cursor: "pointer",
  },
  tittleContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    paddingLeft: 10,
    paddingrRight: 10,
  },
  title: {
    flexDirection: "column",
    marginLeft: 30,
    lineHeight: 0.5,
  },
  englishTitle: {
   fontSize: "12px" 
  },
  arabicTitle: {
    marginRight: 30,
    flex: 1,
    lineHeight: 0.5,
    textAlign: "right",
  },
  p: {
    textAlign: "left",
    paddingLeft: "10%",
    flex: 1,
  },
  icon: {
    color: Colors.yellow,
  },
};
