import { InputBase, makeStyles, List, ListItem } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useSearch } from "hooks";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    borderRadius: 2,
    backgroundColor: "#fff",
    marginLeft: 10,
    width: "38%",
    display: "flex",
  },
  searchIcon: {
    height: "100%",
    color: "blue",
    padding: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    fontSize: "unset",
    width: "100%",
  },
  inputInput: {
    paddingLeft: 20,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  list: {
    position: "absolute",
    color: "#000",
    background: "#FFFFFF",
    marginTop: 40,
  },
}));

const SearchBar = () => {
  const classes = useStyle();
  const { text, products, handleChange, open, handleCloseSearch } = useSearch();

  return (
    <div className={classes.search}>
      <InputBase
        placeholder="What are you looking for…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
      />

      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      {text && (
        <List className={classes.list} hidden={open}>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => {
              return (
                <ListItem>
                  <Link
                    to={`/product/${product.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={handleCloseSearch}
                  >
                    {product.title.longTitle}
                  </Link>
                </ListItem>
              );
            })}
        </List>
      )}
    </div>
  );
};

export default SearchBar;
