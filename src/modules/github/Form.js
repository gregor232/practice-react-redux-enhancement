import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { eqRepos, getReposActionWitValue, clRepos } from "./github.actions";
const Form = (props) => {
  const { className } = props;
  const [value, setValue] = useState("");
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(getReposActionWitValue("gregor232", value));
      }}
    >
      <input
        className={"form__inputText"}
        value={value}
        onChange={(event) => {
          console.log(event.target.value);
          if (event.target.value == "") {
            dispatch(eqRepos());
          }
          setValue(event.target.value);
        }}
      ></input>
      <input
        className={"form__inputText"}
        value={userName}
        onChange={(event) => {
          setUserName(event.target.value);
          if (event.target.value == "") {
            dispatch(clRepos());
          }
        }}
      ></input>
      <input
        type="submit"
        className={"form__inputSubmit"}
        value="Prześlij"
      ></input>
    </form>
  );
};

export default Form;
