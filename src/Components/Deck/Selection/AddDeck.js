import React from "react";

const AddDeck = props => {
  const handleClick = e => {
    e.preventDefault();
    JSON.parse(localStorage.getItem("decks"))
      ? localStorage.setItem(
          "decks",
          JSON.stringify({
            ...JSON.parse(localStorage.getItem("decks")),
            ...{ [props.deckName]: props.selectedCards }
          })
        )
      : localStorage.setItem(
          "decks",
          JSON.stringify({ [props.deckName]: props.selectedCards })
        );
    props.setDecks(JSON.parse(localStorage.getItem("decks")));
    const deckData = JSON.parse(localStorage.getItem("decks"))
      ? JSON.parse(localStorage.getItem("decks"))
      : {};
    deckData.hasOwnProperty(props.deckName)
      ? () => {
          const { [props.deckName]: removed, ...rest } = JSON.parse(
            localStorage.getItem("decks")
          );
          props.setDecks({ ...rest });
          console.log(props.decks);
        }
      : null;
    props.setDeckMenu(true);
    props.setDeckEditor(false);
    props.setMainMenu(false);
  };

  return (
    <div id="deck-name-btn">
      <button
        className="btn"
        id="addDeck"
        type="button"
        value="addDeck"
        onClick={handleClick}
      >
        Add Deck
      </button>
    </div>
  );
};

export default AddDeck;
