const initState = {
  repos: [],
  filteredRepos: [],
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case "getRepos":
      const { repos, filteredRepos } = action.payload;
      return {
        ...state,
        repos: repos,
        filteredRepos: filteredRepos,
      };
    case "filterRepos":
      return {
        ...state,
        filteredRepos: action.payload.filteredRepos,
      };
    case "equalRepos":
      console.log(state.repos, "asd");
      return {
        ...state,
        filteredRepos: state.repos,
      };
    case "clearRepos":
      return {
        repos: [],
        filteredRepos: [],
      };
    default:
      return state;
  }
};

export default reducers;
