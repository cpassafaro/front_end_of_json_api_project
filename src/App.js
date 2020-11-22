import React, { Component } from "react";
import axios from "axios";
import CreateRecipe from "./Components/CreateRecipe";
import Header from "./Components/Header";
import Update from "./Components/Update";
import Home from "./Home";
import RecipeTile from './RecipeTile';
import Success from './status/Success';
import Fail from './status/Fail';
import "./App.css";
import { CircularProgress } from "@material-ui/core/";
import { Route, Link} from "react-router-dom";


class App extends Component {
  constructor() {
    super();

    this.state = {
      data: "",
      isLoading: true,
      shouldRender: true,
    };
  }
  componentDidMount() {
    console.log("mounted");
    let url = "https://bombrecipeapi.herokuapp.com/";
    axios
      .get(url)
      .then((res) => {
        return res;
      })
      .then((recipes) => {
        this.setState({ data: recipes, isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading == true) {
      return (
        <CircularProgress
          color="secondary"
          display="flex"
          justify="center"
          alignItems="center"
        />
      );
    } else {
      return (
        <div className='body'>
          <nav>
            <Link exact to="/"></Link>
            <Link to="/new"></Link>
            <Link to="/delete"></Link>
            <Link to="/update"></Link>
          </nav>
          <main>
            <Header />
            {/* <Home data={this.state.data}/> */}
            <Route
              exact
              path="/"
              render={(routerProps) => {
                return <Home {...routerProps} data={this.state.data} />;
              }}
            />
            {/* Route to make a new element, component will pass down props automatically */}
            <Route path="/new" component={CreateRecipe} />
            <Route
              path="/update"
              render={(routerProps) => {
                return <Update {...routerProps} />;
              }}
            />
            <Route
              path="/recipe/:title" component={RecipeTile}/>
              <Route path="/success" component={Success}/>
              <Route path="/fail" component={Fail}/>
          </main>
        </div>
      );
    }
  }
}

export default App;
