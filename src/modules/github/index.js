import React from "react";
import GithubList from "./github";
import GitHubAPI from "./github.api";
import { composeWithDevTools } from "redux-devtools-extension";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./github.reductor";
import thunk from "redux-thunk";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

class SmartList extends React.Component {
  ghApi = new GitHubAPI();
  render() {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <GithubList />
        </Provider>
      </React.StrictMode>
    );
  }
}

export default SmartList;
