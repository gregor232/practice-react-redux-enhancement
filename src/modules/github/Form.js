import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { eqRepos, getReposActionWitValue } from "./github.actions";
const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { repos, filteredRepos } = state;
  //console.log(repos, filteredRepos);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(getReposActionWitValue("gregor232", value));
      }}
    >
      <input
        value={value}
        onChange={(event) => {
          console.log(event.target.value);
          if (event.target.value == "") {
            dispatch(eqRepos());
          }
          setValue(event.target.value);
        }}
      ></input>
      <input></input>
      <input type="submit"></input>
    </form>
  );
};

export default Form;
