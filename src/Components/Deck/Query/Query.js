import React from "react";

import Submit from "./Submit";

const Query = props => {
  props.setUrl(
    `https://api.magicthegathering.io/v1/cards/?name=${
      props.inputValue
    }&page=${1}`
  );

  const handleSubmit = e => {
    e.preventDefault();
    props.setLoading(true);
    fetch(props.url)
      .then(res => res.json())
      .then(res => {
        props.setFetchedCards(res.cards);
        props.setLoading(false);
        console.log(res.cards);
        console.log(props.url);
      });
  };

  return (
    <div className="container" id="form-container">
      <form className="container" id="query-container" onSubmit={handleSubmit}>
        <div className="container" id="query-container-name">
          <lable className="field" id="query-field-name">
            Card Name:
          </lable>
          <input
            className="input"
            id="query-input-name"
            type="text"
            name="value"
            value={props.inputValue}
            onChange={e => props.setInputValue(e.target.value)}
          />
        </div>
        <Submit />
      </form>
    </div>
  );
};

export default Query;
