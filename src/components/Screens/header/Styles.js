
export const styles = (theme) => {
  let bgImage = theme.isLightTheme === true
  ? `URL(${require("../../../assets/images/designImages/bgImageLight.png")})`
  : `URL(${require("../../../assets/images/designImages/bgImageDark.png")})`

  return {
    container: {
      backgroundImage: bgImage,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "320px",
      display: "flex",
      color: theme.colors.TEXT,
      flexDirection: "column",
    },
    iconContainer: {
      marginRight: "5px",
      justifyContent: "center",
      alignSelf: "center",
    },
    heading: {
      color: theme.colors.TEXT,
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
    navIcons: {
      color: theme.colors.TEXT,
      fontSize: "30",
    },
    // searchStyles
    searchbarContainer: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#ffffff26",
      width: "100%",
      maxWidth: "300px",
      alignSelf: "center",
      borderRadius: "21px",
      flexDirection: "row",
      flexWrap: "wrap",
      padding: "0 3px",
    },
    searchStyle: {
      color: theme.colors.TEXT,
      alignSelf: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.TRANSPARENT,
      flex: "1",
      border: "none",
      outline: "none",
      borderWidth: 0,
      borderRadius: "21px",
      fontSize: "15px",
      padding: 15,
    },
    searchIcon: {
      marginRight: "10px",
      fontSize: 13,
      color: "#ECF0F1",
    },
    toggle: {
      fontSize: 60,
      marginLeft: "4px",
    },
  };
};
