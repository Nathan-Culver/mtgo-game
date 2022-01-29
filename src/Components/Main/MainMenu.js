import React from "react";
const MainMenu = props => {
  return (
    <div className="container" id="main-menu-container">
      <div className="menu" id="main-menu" />
      <div className="menu" id="main-menu-play-column">
        {props.selectedDeck[0] ? (
          <button
            className="deck-box-button"
            onClick={e => {
              e.preventDefault();
              props.setDeckSelector(true);
              props.setMainMenu(false);
              props.setDeckEditor(false);
              props.setDeckMenu(false);
            }}
          >
            <img
              src={props.selectedDeck[1][0].imageUrl}
              alt=""
              className="deck-box-img"
            />
            <div className="deck-box-name">{props.selectedDeck[0]}</div>
          </button>
        ) : (
          <button
            className="deck-box-button"
            id="select-deck"
            type="button"
            value="selectDeck"
            onClick={e => {
              e.preventDefault();
              props.setDeckSelector(true);
              props.setMainMenu(false);
              props.setDeckEditor(false);
              props.setDeckMenu(false);
            }}
          >
            +
          </button>
        )}
        <button
          className="btn"
          id="play-btn"
          type="button"
          value="play"
          onClick={() => {
            props.setPlay(true);
            props.setNav(false);
            props.setDeckSelector(false);
            props.setMainMenu(false);
            props.setDeckEditor(false);
            props.setDeckMenu(false);
          }}
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
