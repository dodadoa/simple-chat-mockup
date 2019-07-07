
## Brief of Design

There are 2 main components.
First is ChatContent which is concenrned only to display chat data.
Second is App which is concerned about app state and input/output.

App also handle when things go wrong, for example: when chat history data is not load.

Assumptions:
1. user name is Bob, also you can hardcode it at index and pass it as a prop to App as `thisUserName`.
2. chat history is hardcoded at folder `chatData`.
3. chat's default start with Jane (although the object is not guaruntee the order of keys, but seems like in js  it works fine).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>