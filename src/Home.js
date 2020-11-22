import React, { Component } from "react";
import axios from 'axios'
import { Typography, Grid } from "@material-ui/core/";
import { CircularProgress } from "@material-ui/core/";
import Card from "./Components/CardPage";
import './App.css'
///coment

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data.data,
      nordic: "",
      french: "",
      italian: "",
      spanish: "",
      thai: "",
      korean: "",
      indian: "",
      jewish: "",
      southern: "",
      african: "",
      cajun: "",
      chinese: "",
      caribbean: "",
      german: "",
      irish: "",
      japanese: "",
      mexican: "",
      middleEastern: "",
      isLoading: true,
      // refreshData: ''
    };
  }

  getData = () => {
    let url = "https://bombrecipeapi.herokuapp.com/";
    axios
      .get(url)
      .then((res) => {
        return res;
      })
      .then((recipes) => {
        // this.setState({ data: recipes.data});
        this.findAmerican(recipes)
      });
  }

  componentDidMount() {
    this.getData()
    // this.findAmerican();
    // this.setState({ isLoading: false });

  }

  findAmerican = (recipes) => {
    console.log(recipes.data)
    let arr = recipes.data;
    let holder = [];
    let french = [];
    let italian = [];
    let spanish = [];
    let thai = [];
    let korean = [];
    let indian = [];
    let jewish = [];
    let southern = [];
    let african = [];
    let cajun = [];
    let chinese = [];
    let caribbean = [];
    let german = [];
    let irish = [];
    let japanese = [];
    let mexican = [];
    let middleEastern = [];
    arr.map((item) => {
      if (
        item.cuisines.includes("Nordic") ||
        item.cuisines.includes("nordic") ||
        item.cuisines.includes("Nordic Cuisine") || 
        item.cuisines.includes("nordic cuisine")
        
      ) {
        holder.push(item);
      } else if (
        item.cuisines.includes("French") ||
            item.cuisines.includes("french") ||
            item.cuisines.includes("french cuisine") ||
            item.cuisines.includes("French Cuisine")
        
      ) {
        french.push(item);
      } else if (
        item.cuisines.includes("Italian") ||
        item.cuisines.includes("Italian Cuisine") ||
        item.cuisines.includes("italian") || 
        item.cuisines.includes("italian cuisine")
        
      ) {
        italian.push(item);
      } else if (
        item.cuisines.includes("Spanish") ||
        item.cuisines.includes("spanish") ||
        item.cuisines.includes("spanish cuisine") ||
        item.cuisines.includes("Spanish Cuisine")
      ) {
        spanish.push(item);
      } else if (
        item.cuisines.includes("Thai") ||
        item.cuisines.includes("thai") ||
        item.cuisines.includes("thai cuisine") ||
        item.cuisines.includes("Thai Cuisine")
      ) {
        thai.push(item);
      } else if (
        item.cuisines.includes("Korean") ||
        item.cuisines.includes("korean") ||
        item.cuisines.includes("korean cuisine") ||
        item.cuisines.includes("Korean Cuisine")
      ) {
        korean.push(item);
      } else if (
        item.cuisines.includes("Indian") ||
        item.cuisines.includes("indian") ||
        item.cuisines.includes("indian cuisine") ||
        item.cuisines.includes("Indian Cuisine")
      ) {
        indian.push(item);
      } else if (
        item.cuisines.includes("Jewish") ||
        item.cuisines.includes("jewish") ||
        item.cuisines.includes("jewish cuisine") ||
        item.cuisines.includes("Jewish Cuisine")
      ) {
        jewish.push(item);
      } else if (
        item.cuisines.includes("Southern") ||
        item.cuisines.includes("southern") ||
        item.cuisines.includes("southern cuisine") ||
        item.cuisines.includes("Southern Cuisine")
      ) {
        southern.push(item);
      } else if (
        item.cuisines.includes("African") ||
        item.cuisines.includes("african") ||
        item.cuisines.includes("african cuisine") ||
        item.cuisines.includes("Afican Cuisine")
      ) {
        african.push(item);
      } else if (
        item.cuisines.includes("Cajun") ||
        item.cuisines.includes("cajun") ||
        item.cuisines.includes("cajun cuisine") ||
        item.cuisines.includes("Cajun Cuisine")
      ) {
        cajun.push(item);
      } else if (
        item.cuisines.includes("Chinese") ||
        item.cuisines.includes("chinese") ||
        item.cuisines.includes("chinese cuisine") ||
        item.cuisines.includes("Chinese Cuisine")
      ) {
        chinese.push(item);
      } else if (
        item.cuisines.includes("Caribbean") ||
        item.cuisines.includes("caribbean") ||
        item.cuisines.includes("caribbean cuisine") ||
        item.cuisines.includes("Caribbean Cuisine")
      ) {
        caribbean.push(item);
      } else if (
        item.cuisines.includes("German") ||
        item.cuisines.includes("german") ||
        item.cuisines.includes("german cuisine") ||
        item.cuisines.includes("German Cuisine")
      ) {
        german.push(item);
      } else if (
        item.cuisines.includes("Irish") ||
        item.cuisines.includes("irish") ||
        item.cuisines.includes("irish cuisine") ||
        item.cuisines.includes("Irish Cuisine")
      ) {
        irish.push(item);
      } else if (
        item.cuisines.includes("Japanese") ||
        item.cuisines.includes("japanese") ||
        item.cuisines.includes("japanese cuisine") ||
        item.cuisines.includes("Japanese Cuisine")
      ) {
        japanese.push(item);
      } else if (
        item.cuisines.includes("Mexican") ||
        item.cuisines.includes("mexican") ||
        item.cuisines.includes("mexican cuisine") ||
        item.cuisines.includes("Mexican Cuisine")
      ) {
        mexican.push(item);
      } else if (
        item.cuisines.includes("Middle Eastern") ||
        item.cuisines.includes("middle eastern") ||
        item.cuisines.includes("Middle Eastern Cuisine") ||
        item.cuisines.includes("middle eastern cuisine") ||
        item.cuisines.includes("mid-eastern cuisine") ||
        item.cuisines.includes("Mid-Eastern") ||
        item.cuisines.includes("Mid-Eastern Cuisine") ||
        item.cuisines.includes("mid-eastern cuisine")
      ) {
        middleEastern.push(item);
      }
      return (
        holder,
        french,
        italian,
        spanish,
        thai,
        korean,
        indian,
        jewish,
        southern,
        african,
        cajun,
        chinese,
        caribbean,
        german,
        irish,
        japanese,
        mexican,
        middleEastern
      );
    });
    console.log(
      holder,
      french,
      italian,
      spanish,
      thai,
      korean,
      indian,
      jewish,
      southern,
      african,
      cajun,
      chinese,
      caribbean,
      german,
      japanese,
      mexican,
      middleEastern
    );
    this.setState({
      nordic: holder,
      french: french,
      italian: italian,
      spanish: spanish,
      thai: thai,
      korean: korean,
      indian: indian,
      jewish: jewish,
      southern: southern,
      african: african,
      cajun: cajun,
      chinese: chinese,
      caribbean: caribbean,
      german: german,
      irish: irish,
      japanese: japanese,
      mexican: mexican,
      middleEastern: middleEastern,
      isLoading:false,
    });
  };

  render() {
    if (this.state.isLoading == true) {
      return <CircularProgress color='secondary'/>;
    } else {
      return (
        <Typography className='body'>
          <Grid container direction="row" justify="space-around">
            <Card
              title="Nordic Cuisine"
              image={this.state.nordic[0].image}
              data={this.state.nordic}
            />
            <Card
              title="French Cuisine"
              image={this.state.french[0].image}
              data={this.state.french}
            />
            <Card
              title="Italian Cuisine"
              image={this.state.italian[0].image}
              data={this.state.italian}
            />
          </Grid>
          <Grid container direction="row" justify="space-around">
            <Card
              title="Spanish Cuisine"
              image={this.state.spanish[0].image}
              data={this.state.spanish}
            />
            <Card
              title="Thai Cuisine"
              image={this.state.thai[1].image}
              data={this.state.thai}
            />
            <Card
              title="Korean Cuisine"
              image={this.state.korean[0].image}
              data={this.state.korean}
            />
          </Grid>
          <Grid container direction="row" justify="space-around">
            <Card
              title="Indian Cuisine"
              image={this.state.indian[0].image}
              data={this.state.indian}
            />
            <Card
              title="Jewish Cuisine"
              image={this.state.jewish[0].image}
              data={this.state.jewish}
            />
            <Card
              title="Southern Cuisine"
              image={this.state.southern[0].image}
              data={this.state.southern}
            />
          </Grid>
          <Grid container direction="row" justify="space-around">
            <Card
              title="African Cuisine"
              image={this.state.african[0].image}
              data={this.state.african}
            />
            <Card
              title="Cajun Cuisine"
              image={this.state.cajun[0].image}
              data={this.state.cajun}
            />
            <Card
              title="Chinese Cuisine"
              image={this.state.chinese[0].image}
              data={this.state.chinese}
            />
          </Grid>
          <Grid container direction="row" justify="space-around">
            <Card
              title="Caribbean Cuisine"
              image={this.state.caribbean[0].image}
              data={this.state.caribbean}
            />
            <Card
              title="German Cuisine"
              image={this.state.german[1].image}
              data={this.state.german}
            />
            <Card
              title="Irish Cuisine"
              image={this.state.irish[0].image}
              data={this.state.irish}
            />
          </Grid>
          <Grid container direction="row" justify="space-around">
            <Card
              title="Japanese Cuisine"
              image={this.state.japanese[0].image}
              data={this.state.japanese}
            />
            <Card
              title="Mexican Cuisine"
              image={this.state.mexican[0].image}
              data={this.state.mexican}
            />
            <Card
              title="Mid-Eastern Cuisine"
              image={this.state.middleEastern[0].image}
              data={this.state.middleEastern}
            />
          </Grid>
        </Typography>
      );
    }
  }
}
