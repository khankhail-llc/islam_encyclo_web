export const styles = (theme) => ({

  button: {
    color: theme.colors.HEADER_ITEMS,
    fontSize: "30",
  },
  menuList: {
    position: "absolute",
    top: 50,
    right: 26,
    backgroundColor: theme.colors.TEXT_SECONDARY,
    color: theme.colors.TEXT,
    border: `1px solid ${theme.colors.TEXT}`,
    borderRadius: "4px",
    padding: "10px",
  },
  menuListUl: {
    listStyle: "none",
    padding: "0 10px",
    margin: 0,
    lineHeight: 2,
  },
  listItem: {
    borderBottom: `1px solid ${theme.colors.TEXT}`,
  },
  themeToggleContainer: {
    display: "flex",
    flexDirection : "row",
    alignItems: "center",
  },
  toggle: {
    margin: '10px 0 0 5px'
  },

});