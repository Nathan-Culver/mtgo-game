import React from "react";
import { motion } from "framer-motion";

const Fetched = props => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  return (
    <div className="container" id="card-container">
      {props.fetchedCards.map(currentCard =>
        currentCard.imageUrl === undefined ? (
          console.log("No image URL!")
        ) : (
          <motion.button
            initial="hidden"
            animate="visible"
            variants={variants}
            className="card-button"
            onClick={() => {
              props.setSelectedCards(props.selectedCards.concat([currentCard]));
            }}
          >
            <motion.img
              initial="hidden"
              animate="visible"
              variants={variants}
              src={currentCard.imageUrl}
              alt="#"
              className="card"
            />
          </motion.button>
        )
      )}
    </div>
  );
};

export default Fetched;
