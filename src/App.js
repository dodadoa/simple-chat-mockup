import React, { useState } from 'react';
import {
  Container,
  Paper,
  InputBase,
  Button,
  Avatar,
  Box,
  Typography,
  Select,
  MenuItem
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center'
  },
  chatContainer: {
  },
  inputContainer: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  avatar: {
    margin: 10,
  },
  userChatText: {
    width: 300,
    color: '#112ddd',
    textAlignment: 'center'
  },
  botChatText: {
    width: 300,
    backgroundColor: '#112ddd',
    color: 'white',
  },
  chatTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: 14
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'column'
  }
});

const chatWithJaneHistoryData = [
  { name: "Bob", message: "Hi." },
  { name: "Jane", message: "What would you like to buy today?" },
  { name: "Bob", message: "All the things" }
]

const chatWithAustinHistoryData = [
  { name: "Bob", message: "Hi." },
  { name: "Austin", message: "Hello" },
  { name: "Bob", message: "How are you?" }
]

const channelData = {
  Jane: chatWithJaneHistoryData,
  Austin: chatWithAustinHistoryData
}

function OtherUserChatText({ name, message }) {
  const classes = useStyles();

  return (
    <Box className={classes.chatTextContainer}>
      <Box className={classes.avatarContainer}>
        <Avatar alt={name} className={classes.avatar} />
        <Typography variant="body1" gutterBottom>{name}</Typography>
      </Box>
      <Paper className={classes.userChatText}>{message}</Paper>
    </Box>
  )
}

function UserChatText({ name, message }) {
  const classes = useStyles();

  return (
    <Box className={classes.chatTextContainer}>
      <Paper className={classes.botChatText}>{message}</Paper>
      <Box className={classes.avatarContainer}>
        <Avatar alt={name} className={classes.avatar} />
        <Typography variant="body1" gutterBottom>{name}</Typography>
      </Box>
    </Box>
  )
}

function App() {
  const classes = useStyles();
  const [chatHistory, setChatHistory] = useState(channelData);
  const [chatTextInput, setTextInput] =useState('');
  const [selectedChannel, setChannel] = useState('Jane');
  const thisUserName = 'Bob';

  const handleChangeTextInput = event => {
    setTextInput(event.target.value)
  }

  const handleSubmitTextInput = () => {
    setChatHistory({
      ...chatHistory,
      [selectedChannel]: [
        ...chatHistory[selectedChannel],
        {
          name: thisUserName,
          message: chatTextInput
        }
      ]
    })
    setTextInput('')
  }

  const handleChangeSelectChannel = event => {
    setChannel(event.target.value)
  }

  return (
    <Container className={classes.root}>

      <Select
        value={selectedChannel}
        onChange={handleChangeSelectChannel}
      >
        <MenuItem value="Jane">Jane</MenuItem>
        <MenuItem value="Austin">Austin</MenuItem>
      </Select>

      <Box>
        {
          chatHistory[selectedChannel].map((chat) => {
            return chat.name === thisUserName ? 
            <UserChatText
              name={chat.name}
              message={chat.message}
            /> :
            <OtherUserChatText
              name={chat.name}
              message={chat.message}
            />
          })
        }
      </Box>

      <Paper className={classes.inputContainer}>
        <InputBase
          className={classes.input}
          placeholder=""
          value={chatTextInput}
          onChange={handleChangeTextInput}
        />
        <Button variant="outlined" color="primary" onClick={handleSubmitTextInput}>
          send
        </Button>
      </Paper>
    </Container>
  );
}

export default App;
