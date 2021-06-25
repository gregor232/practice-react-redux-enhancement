class GitHubAPI {
  url = "https://api.github.com";

  //   getData() {
  //     fetch("https://api.github.com/user/repos", {
  //       headers: {
  //         Accept: "application/vnd.github.v3+json",
  //         Authorization: "token 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",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((error) => console.error(error));
  //   }

  getRepos(userName) {
    return fetch(`${this.url}/users/${userName}/repos`)
      .then(this.handleErrors)
      .then((resp) => resp.json());
  }

  handleErrors(resp) {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }

    return resp;
  }
}

export default GitHubAPI;
