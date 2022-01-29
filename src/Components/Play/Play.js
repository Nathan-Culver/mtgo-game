import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Deck from "./Deck";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const Play = props => {
  const [counter, setCounter] = useState(20);
  const [currentCardName, setCurrentCardName] = useState(-1);
  const [battlefieldCards, setBattlefieldCards] = useState([]);
  const [isBattlefieldCards, setIsBattlefieldCards] = useState(false);
  const [battlefieldCounter, setBattlefieldCounter] = useState(0);

  useEffect(() => {
    function shuffleArr(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    shuffleArr(props.selectedDeck[1]);
  }, []);

  return (
    <div className="container" id="play-container">
      <div className="container" id="battlefield-container" />
      <div className="container" id="tracker-container">
        <div className="container" id="life-counter-container">
          <button
            id="life-counter-increment"
            onClick={e => {
              e.preventDefault();
              setCounter(counter - 1);
            }}
          >
            -
          </button>
          <div className="tracker" id="life-counter">
            {counter}
          </div>
          <button
            id="life-counter-decrement"
            onClick={e => {
              e.preventDefault();
              setCounter(counter + 1);
            }}
          >
            +
          </button>
        </div>
        <div className="container" id="phase-container">
          <div className="tracker" id="beginning-phase">
            Beginning
          </div>
          <div className="tracker" id="pre-combat-main-phase">
            Pre-combat
          </div>
          <div className="tracker" id="combat-phase">
            Combat
          </div>
          <div className="tracker" id="post-combat-main-phase">
            Post-combat
          </div>
          <div className="tracker" id="Ending-phase">
            Ending
          </div>
        </div>
      </div>
      <div className="container" id="hand-container">
        <div className="container" id="graveyard-library-exile-container">
          <div id="graveyard" />
          <motion.div
            id="library"
            style={{ zIndex: 10 }}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {props.selectedDeck[1].map((currentCard, index, arr) => (
              <Deck
                currentCard={currentCard}
                index={index}
                arr={arr}
                currentCardName={currentCardName}
                setCurrentCardName={setCurrentCardName}
                battlefieldCards={battlefieldCards}
                setBattlefieldCards={setBattlefieldCards}
                isBattlefieldCards={isBattlefieldCards}
                setIsBattlefieldCards={setIsBattlefieldCards}
                selectedDeck={props.selectedDeck}
                setSelectedDeck={props.setSelectedDeck}
                battlefieldCounter={battlefieldCounter}
                setBattlefieldCounter={setBattlefieldCounter}
              />
            ))}
          </motion.div>
          <div id="exile" />
        </div>
        <div className="container" id="hand-command-container">
          <div id="hand" />
          <div id="command" />
        </div>
      </div>
    </div>
  );
};

export default Play;
