import React, { useEffect } from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const DeckMenu = props => {
  const addDeck = e => {
    e.preventDefault();
    props.setSelectedCards([]);
    props.setDeckEditor(true);
    props.setMainMenu(false);
    props.setDeckMenu(false);
  };

  useEffect(() => {
    props.setDecks(JSON.parse(localStorage.getItem("decks")));
  }, []);

  return (
    <div className="container" id="deck-editor-container">
      <button
        className="deck-box-button"
        id="new-deck"
        type="button"
        value="newDeck"
        onClick={addDeck}
      >
        +
      </button>
      {JSON.parse(localStorage.getItem("decks"))
        ? Object.entries(props.decks).map((currentDeck, index) => (
            <ContextMenuTrigger
              className="target-contextMenu"
              id="deck-contextMenu"
            >
              <button
                className="deck-box-button"
                onClick={e => {
                  e.preventDefault();
                  props.setSelectedCards(currentDeck[1]);
                  props.setDeckEditor(true);
                  props.setMainMenu(false);
                  props.setDeckMenu(false);
                }}
              >
                <img
                  src={currentDeck[1][0].imageUrl}
                  alt=""
                  className="deck-box-img"
                />
                <div className="deck-box-name">
                  {
                    Object.keys(JSON.parse(localStorage.getItem("decks")))[
                      index
                    ]
                  }
                </div>
              </button>
            </ContextMenuTrigger>
          ))
        : null}
      <div>
        <ContextMenu className="contextMenu" id="deck-contextMenu">
          <MenuItem
            className="menuItem"
            id="menuItem-1"
            data={{ foo: "bar" }}
            onClick={() => {
              const { [props.deckName]: removed, ...rest } = JSON.parse(
                localStorage.getItem("decks")
              );
              localStorage.setItem("decks", JSON.stringify({ ...rest }));
              props.setDecks({ ...rest });
              console.log(props.decks);
            }}
          >
            Delete deck
          </MenuItem>
          <MenuItem divider className="divider" />
          <MenuItem
            className="menuItem"
            id="menuItem-2"
            data={{ foo: "bar" }}
            onClick={() => {
              localStorage.clear();
              props.setDecks({});
            }}
          >
            Delete all decks
          </MenuItem>
        </ContextMenu>
      </div>
    </div>
  );
};

export default DeckMenu;
