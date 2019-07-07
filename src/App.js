import React, { useState } from 'react';
import {
  Container,
  Paper,
  InputBase,
  Button,
  Box,
  Select,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import chatWithJaneHistoryData from './chatData/Jane.json'
import chatWithAustinHistoryData from './chatData/Austin.json'

import Chat from './Chat'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
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
  avatarContainer: {
    display: 'flex',
    flexDirection: 'column'
  }
});

const channelData = {
  Jane: chatWithJaneHistoryData,
  Austin: chatWithAustinHistoryData
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

      <Box>
        <Select
          value={selectedChannel}
          onChange={handleChangeSelectChannel}
          inputProps={{
            'data-testid': 'channelSelection'
          }}
          native={true}
        >
          <option value="Jane">Jane</option>
          <option value="Austin">Austin</option>
        </Select>
      </Box>
      

      <Chat
        history={chatHistory[selectedChannel]}
        thisUserName={thisUserName}
      />

      <Paper className={classes.inputContainer}>
        <InputBase
          className={classes.input}
          placeholder=""
          value={chatTextInput}
          onChange={handleChangeTextInput}
          inputProps={{
            'data-testid': 'chatText'
          }}
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={handleSubmitTextInput}
          data-testid="submitChat"
        >
          send
        </Button>
      </Paper>
    </Container>
  );
}

export default App;
