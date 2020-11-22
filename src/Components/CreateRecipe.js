import React, { Component } from "react";
import {
  Button,
  Typography,
  Container,
  TextField,
  Input,
} from "@material-ui/core";
import axios from "axios";

class CreateRecipe extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      summary: "",
      cuisines: [],
      ingredients: [],
      instructions: [],
      servings: Number,
    };
  }
  // app.post("/new", recipeController.create);

  postInput = (event) => {
    event.preventDefault();

    const recipe = {
      title: this.state.title,
      summary: this.state.summary,
      servings: this.state.servings,
      cuisines: this.state.cuisines,
      ingredients: {
        aisle: "Produce",
        amount: 1,
        consistency: "solid",
        id: 9037,
        image: "avocado.jpg",
        measures: {},
        meta: [],
        metaInformation: [],
        name: "avocado",
        original: this.state.ingredients,
        originalName: "large avocado",
        originalString: "1 medium/large avocado",
        unit: "medium",
      },
      instructions: {
        name: "",
        steps: [
          {
            number: 1,
            step: [this.state.instructions],
          },
        ],
      },
    };
    axios
      .post(`https://bombrecipeapi.herokuapp.com/new`, recipe)
      .then((res) => {
        if (res.data != null) {
          console.log(this.props.history);
          this.props.history.push("/success");
          console.log(res.data);
        } else if (res.data == null) {
          this.props.history.push("/fail");
        } else {
          this.props.history.push("/fail");
        }
      });
  };

  //write recipe to check input field style
  checkInputFields = (e) => {
    let style = this.state.cuisines;
    let title = this.state.title
    if (title != '' &&
      style.includes("Nordic") ||
      style.includes("nordic") ||
      style.includes("Nordic Cuisine") ||
      style.includes("nordic cuisine") ||
      style.includes("french") ||
      style.includes("French") ||
      style.includes("French Cuisine") ||
      style.includes("french cuisine") ||
      style.includes("italian") ||
      style.includes("Italian") ||
      style.includes("Italian Cuisine") ||
      style.includes("italian cuisine") ||
      style.includes("spanish") ||
      style.includes("Spanish") ||
      style.includes("Spanish Cuisine") ||
      style.includes("spanish cuisine") ||
      style.includes("thai") ||
      style.includes("Thai") ||
      style.includes("Thai Cuisine") ||
      style.includes("thai cuisine") ||
      style.includes("korean") ||
      style.includes("Korean") ||
      style.includes("Korean Cuisine") ||
      style.includes("korean cuisine") ||
      style.includes("indian") ||
      style.includes("Indian") ||
      style.includes("indian cuisine") ||
      style.includes("Indian Cuisine") ||
      style.includes("jewish") ||
      style.includes("Jewish") ||
      style.includes("Jewish Cuisine") ||
      style.includes("jewish cuisine") ||
      style.includes("southern") ||
      style.includes("Southern") ||
      style.includes("Southern Cuisine") ||
      style.includes("African") ||
      style.includes("african") ||
      style.includes("African Cuisine") ||
      style.includes("african cuisine") ||
      style.includes("cajun") ||
      style.includes("Cajun") ||
      style.includes("cajun cuisine") ||
      style.includes("Cajun Cuisine") ||
      style.includes("chinese") ||
      style.includes("Chinese") ||
      style.includes("chinese cuisine") ||
      style.includes("Chinese Cuisine") ||
      style.includes("caribbean") ||
      style.includes("Caribbean") ||
      style.includes("caribbean cuisine") ||
      style.includes("Caribbean Cuisine") ||
      style.includes("german") ||
      style.includes("German") ||
      style.includes("german cuisine") ||
      style.includes("German Cuisine") ||
      style.includes("irish") ||
      style.includes("Irish") ||
      style.includes("irish cuisine") ||
      style.includes("Irish Cuisine") ||
      style.includes("japanese") ||
      style.includes("Japanese") ||
      style.includes("japanese cuisine") ||
      style.includes("Japanese Cuisine") ||
      style.includes("mexican") ||
      style.includes("Mexican") ||
      style.includes("mexican cuisine") ||
      style.includes("Mexican Cuisine") ||
      style.includes("Middle Eastern") ||
      style.includes("middle eastern") ||
      style.includes("Middle Eastern Cuisine") ||
      style.includes("middle eastern cuisine") ||
      style.includes("mid-eastern cuisine") ||
      style.includes("Mid-Eastern cuisine") ||
      style.includes("Mid-Eastern") ||
      style.includes("mid-eastern")
    ) {
      this.postInput(e);
    }else if(title == ""){
      alert('Please Enter a Title')
    } else {
      alert(`Please enter valid cuisine style. Ex. 'Nordic'`);
    }
  };

  pushTitleToState = (e) => {
    let element = e.target.value;
    // console.log(element)
    this.setState({ title: element });
  };

  pushSummaryToState = (e) => {
    let element = e.target.value;
    // console.log(element)
    this.setState({ summary: element });
  };

  pushCuisinesToState = (e) => {
    let element = e.target.value;
    let empty = [];
    empty.push(element);
    this.setState({ cuisines: empty });
  };
  pushServingsToState = (e) => {
    let element = e.target.value;

    this.setState({ servings: element });
  };

  pushIngredientsToState = (e) => {
    let element = e.target.value;
    let empty = [];
    empty.push(element);
    this.setState({ ingredients: empty });
  };

  pushInstructionsToState = (e) => {
    let element = e.target.value;
    let empty = [];
    empty.push(element);
    this.setState({ instructions: empty });
  };

  render() {
    return (
      <Container>
        <Typography
          style={{
            color: "secondary",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>Create your new recipe below</div>
          <TextField
            type="text"
            variant="outlined"
            placeholder="Recipe Name"
            onChange={this.pushTitleToState}
          />
          <TextField
            variant="outlined"
            type="text"
            placeholder="Summary"
            onChange={this.pushSummaryToState}
          />
          <TextField
            variant="outlined"
            type="text"
            placeholder="Style of Cuisine must be one of the title names from homepage ex. Mexican or Thai"
            onChange={this.pushCuisinesToState}
          />
          <TextField
            variant="outlined"
            type="text"
            placeholder="Servings"
            onChange={this.pushServingsToState}
          />
          <TextField
            variant="outlined"
            type="text"
            placeholder="Ingredients"
            onChange={this.pushIngredientsToState}
          />
          <TextField
            variant="outlined"
            type="text"
            placeholder="Instructions"
            onChange={this.pushInstructionsToState}
          />
        </Typography>
        <Button
          color="primary"
          variant="outlined"
          type="submit"
          onClick={this.checkInputFields}
        >
          Submit
        </Button>
      </Container>
    );
  }
}

export default CreateRecipe;
