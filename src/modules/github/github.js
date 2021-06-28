import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "./Form";
const GithubList = () => {
  const list = useSelector((state) => state.filteredRepos);

  return (
    <section className={"githubList"}>
      <Form className={"githubList__form"} />
      <ul className={"githubList__list"}>
        {list.map((element) => (
          <li className={"githubList__listElement"}>{element.full_name}</li>
        ))}
      </ul>
    </section>
  );
};

export default GithubList;
