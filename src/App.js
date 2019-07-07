import React, { useState } from 'react';
import {
  Container,
  Paper,
  InputBase,
  Button,
  Select,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ChatContent from './ChatContent'

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


function App({ chatData, thisUserName }) {
  const NODATA_KEY = 'noData'
  const classes = useStyles();
  const preloadChatHistory = chatData || { [NODATA_KEY]: [] }
  const [chatHistory, setChatHistory] = useState(preloadChatHistory);
  const [chatTextInput, setTextInput] =useState('');
  const preSelectedChannel = chatData 
    ? Object.keys(chatData)[0]
    : NODATA_KEY
  const [selectedChannel, setChannel] = useState(preSelectedChannel);

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
        inputProps={{
          'data-testid': 'channelSelection'
        }}
        native={true}
      >
        {
          chatData
            ? Object
                .keys(chatData)
                .map(channelName => (
                  <option value={channelName}>{channelName}</option>
                )) 
            : <option data-testid="noDataOption" value={NODATA_KEY}>{NODATA_KEY}</option>
        }
      </Select>
      

      <ChatContent
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
