import React from 'react';
import {
	Avatar,
	Typography,
	ListItemText,
	ListItemAvatar,
	Divider,
	ListItem,
	List
} from '@material-ui/core';
import { interpose } from './util'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	chatContainer: {
		width: 450,
		height: 600,
		overflowY: 'scroll',
	},
	avatar: {
		margin: 10,
	},
	userChatText: {
		width: 300,
		color: '#7300e6',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10
		
	},
	botChatText: {
		width: 300,
		backgroundColor: '#7300e6',
		color: 'white',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	avatarContainer: {
		display: 'flex',
		flexDirection: 'column'
	}
});

function OtherUserChatText({ name, message }) {
	const classes = useStyles();
	return (
		<ListItem alignItems="flex-start">
			<ListItemAvatar>
				<Avatar alt={name} className={classes.avatar} />
			</ListItemAvatar>
			<ListItemText
				primary={name}
				secondary={
					<>
					<Typography component="span">
					{message}
					</Typography>
					</>
				}
			/>
		</ListItem>
	)
}

function UserChatText({ name, message }) {
	const classes = useStyles();
	return (
		<ListItem alignItems="flex-start">
			<ListItemText
				primary={name}
				secondary={
					<>
					<Typography component="span">
					{message}
					</Typography>
					</>
				}
			/>
			<ListItemAvatar>
				<Avatar alt={name} className={classes.avatar} />
			</ListItemAvatar>
		</ListItem>
	)
}


function Chat({ history, thisUserName }) {
	const classes = useStyles();
	return (
		<List className={classes.chatContainer}>
			{
				interpose(
					history.map((chat, index) => {
						return chat.name === thisUserName ?
							<UserChatText
								name={chat.name}
								message={chat.message}
								key={`${chat.name}-${index}`}
							/> :
							<OtherUserChatText
								name={chat.name}
								message={chat.message}
								key={`${chat.name}-${index}`}
							/>
					}),
					<Divider />
				)
			}
		</List>
	)
}

export default Chat;