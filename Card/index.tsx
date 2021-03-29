import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SendIcon from "@material-ui/icons/Send";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";

import Comment from "./components/Comment";
import LikeButton from "./components/LikeButton";
import CommentButton from "./components/CommentButton";
import ShareButton from "./components/ShareButton";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

import "./styles.scss";
import { Container } from "./styles";
const CardItem = ({}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Container>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://miro.medium.com/max/1838/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <LikeButton like={true} />
          <CommentButton onClick={handleExpandClick} />
          <ShareButton />
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Card className={classes.root}>
            <CardContent className="comment-container">
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>

              <Paper component="form" className={classes.root}>
                <InputBase
                  className={classes.input}
                  placeholder="Adcione um comentário...."
                  inputProps={{ "aria-label": "search google maps" }}
                  fullWidth
                  size="small"
                />

                <IconButton className={classes.iconButton} aria-label="search">
                  <SendIcon />
                </IconButton>
              </Paper>
            </CardContent>
            {Array(3)
              .fill(1)
              .map(() => (
                <Comment
                  like={true}
                  name="Jherson Haryson"
                  time={new Date().toLocaleDateString()}
                  thumb="https://miro.medium.com/max/1838/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                  body="asjklhdklajsdlkajsdlkjaskld askdj laksdlkasdlas dlas dlasjld kaslkd asld alksdalskd als"
                />
              ))}
            <CardActions className="comment-actions">
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                onClick={() => {}}
              >
                mais comentários
              </Typography>
            </CardActions>
          </Card>
        </Collapse>
      </Card>
    </Container>
  );
};

export default CardItem;
