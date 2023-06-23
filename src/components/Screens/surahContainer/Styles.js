// import { Colors } from "../myColors/Colors";

export const styles = (theme) => ({
  container: {
    display: "flex",
    width: "100%",
    position: "absolute",
    // backgroundColor: "CYAN",
    color: theme.colors.TEXT,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "265px",
  },
  itemContainer: {
    backgroundColor: theme.colors.BACKGROUND,
    width: "75%",
    display: "flex",
    flexDirection: "row",
    flex: 1,
    borderBottom: `0.3px solid ${theme.colors.TEXT}`,
    cursor: "pointer",
  },
  titleContainer: {
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
    fontSize: "12px",
  },
  arabicTitle: {
    display: "flex",
    marginRight: 30,
    textAlign: "right",
  },
  p: {
    textAlign: "left",
    paddingLeft: "10%",
    flex: 1,
  },
  icon: {
    color: theme.colors.ICON,
    fontSize: 20,
  },
});
