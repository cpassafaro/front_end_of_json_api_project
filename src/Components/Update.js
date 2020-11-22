import React, { Component } from "react";
import axios from "axios";
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography, Container, TextField, CircularProgress } from "@material-ui/core";
import {withRouter} from 'react-router-dom'


const styles = theme => ({
  root: {
    maxWidth: 345,
  },
  tall: {
    // height: 0,
  },
});





class Update extends Component {
  constructor(props) {
    super(props);
    console.log(props.location.params.data)
    this.state = {
      title: '',
      servings: "",
      ingredients: [],
      instructions: [],
      isLoading: true
    };
  }
  componentDidMount(){
    let number = this.props.location.params.data.servings;
    let stringNumber = number.toString();
    //empty array for ingredients
    let emptyIngredientsArray = []
    //create an array of ingredients by looping through
    let ingredients = this.props.location.params.data.ingredients
    ingredients.forEach(element => {
     return emptyIngredientsArray.push(element.original)
    })
    //turn the new ingredients array into a string
    let ingredientsString = emptyIngredientsArray.toString()

    //emptry instructions array
    let emptyInstructionsArr = []
    let instructions = this.props.location.params.data.instructions[0].steps
    //loop through instructions to make
    instructions.forEach(element => {
      return emptyInstructionsArr.push(element.step)
    })
    let instructionString = emptyInstructionsArr.toString()

    this.setState({title: this.props.location.params.data.title, servings: stringNumber, ingredients: ingredientsString, instructions: instructionString, isLoading: false})
  }

  updateRecipe = (e) => {
    e.preventDefault();

    const recipe = {
      title: this.state.title,
      servings: this.state.servings,
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
        unit: "medium"
        },
      instructions: {
        name: '',
        steps: [{
          number:1,
          step:[this.state.instructions]
        }]
    }
  }

    axios
      .put(
        `https://bombrecipeapi.herokuapp.com/recipe/${this.state.title}`,
        recipe
      )
      .then((res) => {
        if(res.data != null){
          console.log(this.props.history)
          this.props.history.push('/success')
          console.log(res.data);
        }else if(res.data == null){
          this.props.history.push('/fail')
        }else{
          this.props.history.push('/fail')
        }
      });
  };

  pushTitleToState = (e) => {
    let element = e.target.value;
    // console.log(element)
    this.setState({ title: element });
  };

  pushServingsToState = (e) => {
    let element = e.target.value;
    // console.log(element)
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
    const {classes} = this.props;
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
      <Container>
        <Typography style={{color:'secondary', display: 'flex', flexDirection:'column'}}>
          <div>You are making changes to : {this.state.title}</div> 
          <TextField
            multiline={true}
            value={this.state.servings}
            type="text"
            placeholder="Summary"
            variant="outlined"
            onChange={this.pushServingsToState}
          />
          <TextField
            className={classes.tall}
            value={this.state.ingredients}
            type="text"
            variant="outlined"
            placeholder="Ingredients"
            onChange={this.pushIngredientsToState}
          />
          <TextField
            value={this.state.instructions}
            type="text"
            placeholder="Instructions"
            variant="outlined"
            onChange={this.pushInstructionsToState}
          />
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          onClick={this.updateRecipe}
        >
          Submit
        </Button>
      </Container>
    );
  }}
}

export default withStyles(styles) (withRouter(Update))
