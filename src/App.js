import React, { useState } from "react";

import "./index.css";

import MainMenu from "./Components/Main/MainMenu";
import DeckSelector from "./Components/Main/DeckSelector";
import DeckMenu from "./Components/Deck/DeckMenu";
import DeckEditor from "./Components/Deck/DeckEditor";
import Play from "./Components/Play/Play";

const App = () => {
  const [mainMenu, setMainMenu] = useState(true);
  const [deckMenu, setDeckMenu] = useState(false);
  const [deckEditor, setDeckEditor] = useState(false);
  const [deckSelector, setDeckSelector] = useState(false);
  const [play, setPlay] = useState(false);
  const [nav, setNav] = useState(true);
  const [deckName, setDeckName] = useState("");
  const [decks, setDecks] = useState("");
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState([]);

  const handleHome = e => {
    setMainMenu(true);
    setDeckMenu(false);
    setDeckEditor(false);
    setDeckSelector(false);
  };

  const handleDecks = e => {
    setDeckMenu(true);
    setMainMenu(false);
    setDeckEditor(false);
    setDeckSelector(false);
  };

  return (
    <div className="container" id="main-container">
      {nav === true ? (
        <nav className="container" id="nav-container">
          <button className="btn" id="main-menu-nav-btn" onClick={handleHome}>
            Home
          </button>
          <button
            className="btn"
            id="deck-editor-nav-btn"
            onClick={handleDecks}
          >
            Decks
          </button>
          <button className="btn" id="profile-nav-btn">
            Profile
          </button>
        </nav>
      ) : null}
      {mainMenu === true ? (
        <MainMenu
          deckSelector={deckSelector}
          setDeckSelector={setDeckSelector}
          mainMenu={mainMenu}
          setMainMenu={setMainMenu}
          deckMenu={deckMenu}
          setDeckMenu={setDeckMenu}
          deckEditor={deckEditor}
          setDeckEditor={setDeckEditor}
          selectedDeck={selectedDeck}
          setSelectedDeck={setSelectedDeck}
          play={play}
          setPlay={setPlay}
          nav={nav}
          setNav={setNav}
        />
      ) : null}
      {deckSelector === true ? (
        <DeckSelector
          deckSelector={deckSelector}
          setDeckSelector={setDeckSelector}
          mainMenu={mainMenu}
          setMainMenu={setMainMenu}
          deckMenu={deckMenu}
          setDeckMenu={setDeckMenu}
          deckEditor={deckEditor}
          setDeckEditor={setDeckEditor}
          decks={decks}
          setDecks={setDecks}
          selectedDeck={selectedDeck}
          setSelectedDeck={setSelectedDeck}
        />
      ) : null}
      {play === true ? (
        <Play
          selectedDeck={selectedDeck}
          setSelectedDeck={setSelectedDeck}
          play={play}
          setPlay={setPlay}
          nav={nav}
          setNav={setNav}
        />
      ) : null}
      {deckMenu === true ? (
        <DeckMenu
          mainMenu={mainMenu}
          setMainMenu={setMainMenu}
          deckMenu={deckMenu}
          setDeckMenu={setDeckMenu}
          deckEditor={deckEditor}
          setDeckEditor={setDeckEditor}
          deckName={deckName}
          setDeckName={setDeckName}
          decks={decks}
          setDecks={setDecks}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
        />
      ) : null}
      {deckEditor === true ? (
        <DeckEditor
          deckName={deckName}
          setDeckName={setDeckName}
          decks={decks}
          setDecks={setDecks}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          mainMenu={mainMenu}
          setMainMenu={setMainMenu}
          deckMenu={deckMenu}
          setDeckMenu={setDeckMenu}
          deckEditor={deckEditor}
          setDeckEditor={setDeckEditor}
        />
      ) : null}
    </div>
  );
};

export default App;
