import React, { useState } from "react";

import Fetched from "./Fetched/Fetched";
import Query from "./Query/Query";
import Selection from "./Selection/Selection";
import Loading from "./Loading";

const DeckEditor = props => {
  const [fetchedCards, setFetchedCards] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [url, setUrl] = useState(``);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container" id="deck-editor-container">
          <Query
            fetchedCards={fetchedCards}
            setFetchedCards={setFetchedCards}
            inputValue={inputValue}
            setInputValue={setInputValue}
            url={url}
            setUrl={setUrl}
            loading={loading}
            setLoading={setLoading}
          />
          <Fetched
            selectedCards={props.selectedCards}
            setSelectedCards={props.setSelectedCards}
            fetchedCards={fetchedCards}
            setFetchedCards={setFetchedCards}
          />
          <Selection
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
      )}
    </>
  );
};

export default DeckEditor;
