import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import {Link} from "react-router-dom";

//this is how you add styling if it is a class component
const styles = theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    width: 270
  },
});

class CardPage extends Component{
  constructor(props){
      super(props)
      this.state={
        data: props.data,
        image:props.image,
        title:props.title
      }
  }
 

  render(){
    const {classes} = this.props
  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={this.props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.state.title}
          </Typography>
        </CardContent>
      <CardActions>
      {/*how to pass props through a link*/}
      <Link to={{
        pathname: `/recipe/${this.state.title}`,
        state: {
          data:this.props.data
        }
        }}>
        <Button size="small" color="primary">
            Click here for more recipes
        </Button>
      </Link>
      </CardActions>
    </Card>
  );
}}

export default withStyles(styles)(CardPage)