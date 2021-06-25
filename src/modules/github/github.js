import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "./Form";
const GithubList = () => {
  const list = useSelector((state) => state.filteredRepos);

  return (
    <section>
      <Form />
      <ul>
        {list.map((element) => (
          <li>{element.full_name}</li>
        ))}
      </ul>
    </section>
  );
};

export default GithubList;
