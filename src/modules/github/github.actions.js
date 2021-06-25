import GitHubAPI from "./github.api";

const ghApi = new GitHubAPI();

const setRepos = (resp) => {
  return {
    type: "getRepos",
    payload: {
      repos: resp,
      filteredRepos: resp,
    },
  };
};

const setFiltered = (resp) => {
  return {
    type: "filterRepos",
    payload: {
      filteredRepos: resp,
    },
  };
};

// const setReposAfter = (resp) => {
//   console.log(resp);
//   return {
//     type: "getReposAfter",
//     payload: {
//       repos: resp,
//     },
//   };
// };

const eqRepos = () => {
  return {
    type: "equalRepos",
  };
};

// const getReposAction = (userName) => {
//   return function thunk(dispatch, getState) {
//     return ghApi.getRepos(userName).then((resp) => dispatch(setRepos(resp)));
//   };
// };
const getReposActionWitValue = (userName, value) => {
  return function thunk(dispatch, getState) {
    return ghApi.getRepos(userName).then((resp) => {
      dispatch(setRepos(resp));
      const arr = [];
      resp.filter((repo) => {
        const searchStr = value.toLowerCase();
        const match = repo.full_name.toLowerCase().includes(searchStr);
        if (match) {
          arr.push(repo);
        }
      });
      dispatch(setFiltered(arr));
    });
  };
};

export { setRepos, eqRepos, setFiltered, getReposActionWitValue };
