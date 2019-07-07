import React from "react";
import {
  Avatar,
  Typography,
  ListItemText,
  ListItemAvatar,
  Divider,
  ListItem,
  List
} from "@material-ui/core";
import { interpose } from "./util";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  chatContainer: {
    width: 450,
    height: 600,
    overflowY: "scroll"
  },
  avatar: {
    margin: 10
  },
  userChatText: {
    color: "#7300e6"
  },
  otherUserChatBox: {
    backgroundColor: "#7300e6"
  },
  otherUserChatText: {
    color: "white"
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "column"
  }
});

function OtherUserChatText({ name, message }) {
  const classes = useStyles();
  return (
    <ListItem alignItems="flex-start" className={classes.otherUserChatBox}>
      <ListItemAvatar>
        <Avatar alt={name} className={classes.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <>
            <Typography variant="h6" className={classes.otherUserChatText}>
              {name}
            </Typography>
          </>
        }
        secondary={
          <>
            <Typography component="span" className={classes.otherUserChatText}>
              {message}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
}

function UserChatText({ name, message }) {
  const classes = useStyles();
  return (
    <ListItem alignItems="flex-start">
      <ListItemText
        primary={
          <>
            <Typography variant="h6" className={classes.userChatText}>
              {name}
            </Typography>
          </>
        }
        secondary={
          <>
            <Typography component="span" className={classes.userChatText}>
              {message}
            </Typography>
          </>
        }
      />
      <ListItemAvatar>
        <Avatar alt={name} className={classes.avatar} />
      </ListItemAvatar>
    </ListItem>
  );
}

function ChatContent({ history, thisUserName }) {
  const classes = useStyles();
  return (
    <List className={classes.chatContainer}>
      {history.length > 0 ? (
        interpose(
          history.map((chat, index) => {
            return chat.name === thisUserName ? (
              <UserChatText
                name={chat.name}
                message={chat.message}
                key={`${chat.name}-${index}`}
              />
            ) : (
              <OtherUserChatText
                name={chat.name}
                message={chat.message}
                key={`${chat.name}-${index}`}
              />
            );
          }),
          <Divider data-testid="divider" />
        )
      ) : (
        <Typography variant="h2"> No History </Typography>
      )}
    </List>
  );
}

export default ChatContent;
