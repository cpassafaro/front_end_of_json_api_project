import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core/";
import {Link} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


//how you override the defaults of the material ui values
const useSytles = makeStyles({
  header:{
    // opacity: 0.2,
    width: '100%',
    margin: 0,
    color:'black'
  },
  buttonStyle: {
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    textDecoration:'underline',

  },
  recipesStyle: {
    display: "flex",
    justifyContent: "flex-start",
    width: '300px',
    color: 'white',
    textDecoration:'underline'
  },
  container: {
    maxWidth:'300px',
    textDecoration:'none'
  }
});

export default function Header() {
  const classes = useSytles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <div className={classes.container}>
          <Link to="/">
            <Typography variant="h6" className={classes.recipesStyle}>
              💣 Recipes
            </Typography>
          </Link>
        </div>
        <Link to="/new">
          <Button className={classes.buttonStyle}>Create Recipe</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

// export default Header;
