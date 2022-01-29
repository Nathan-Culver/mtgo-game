import React from "react";
import AddDeck from "./AddDeck";

const Selection = props => {
  return (
    <div className="container" id="selection-container">
      <div className="container" id="deck-name-container">
        <input
          className="input"
          id="selection-input-name"
          type="text"
          name="value"
          value={props.inputValue}
          onChange={e => {
            props.setDeckName(e.target.value);
          }}
        />
        <AddDeck
          selectedCards={props.selectedCards}
          setSelectedCards={props.setSelectedCards}
          deckName={props.deckName}
          setDeckName={props.setDeckName}
          decks={props.decks}
          setDecks={props.setDecks}
          mainMenu={props.mainMenu}
          setMainMenu={props.setMainMenu}
          deckMenu={props.deckMenu}
          setDeckMenu={props.setDeckMenu}
          deckEditor={props.deckEditor}
          setDeckEditor={props.setDeckEditor}
        />
      </div>
      <div id="selection-card-count">
        {props.selectedCards.length}/
        {props.selectedCards.length < 60 ? 60 : props.selectedCards.length}
      </div>
      {props.selectedCards.map((currentCard, index, arr) => (
        <button
          className="card-button"
          onClick={() => {
            const sliceStop = index;
            const sliceStart = index + 1;
            const firstArr = props.selectedCards.slice(0, sliceStop);
            const secondArr = props.selectedCards.slice(sliceStart, arr.length);
            const newArr = firstArr.concat(secondArr);
            props.setSelectedCards(newArr);
          }}
        >
          <img src={currentCard.imageUrl} alt="" className="card" />
        </button>
      ))}
    </div>
  );
};

export default Selection;
