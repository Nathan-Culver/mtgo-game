import React, { useEffect } from "react";

const DeckSelector = props => {
  useEffect(() => {
    props.setDecks(JSON.parse(localStorage.getItem("decks")));
  }, []);

  return (
    <div className="container" id="deck-selector-container">
      {JSON.parse(localStorage.getItem("decks"))
        ? Object.entries(props.decks).map((currentDeck, index) => (
            <button
              className="deck-box-button"
              onClick={e => {
                e.preventDefault();
                props.setSelectedDeck(currentDeck);
                props.setMainMenu(true);
                props.setDeckSelector(false);
                props.setDeckEditor(false);
                props.setDeckMenu(false);
              }}
            >
              <img
                src={currentDeck[1][0].imageUrl}
                alt=""
                className="deck-box-img"
              />
              <div className="deck-box-name">
                {Object.keys(JSON.parse(localStorage.getItem("decks")))[index]}
              </div>
            </button>
          ))
        : null}
    </div>
  );
};

export default DeckSelector;
