import React from "react";

const Loading = () => {
  const loadingArray = [
    "Rule: 101.1. Whenever a card’s text directly contradicts these rules, the card takes precedence. The card overrides only the rule that applies to that specific situation. The only exception is that a player can concede the game at any time (see rule 104.3a).",
    "Rule: 101.2. When a rule or effect allows or directs something to happen, and another effect states that it can’t happen, the “can’t” effect takes precedence. Example: If one effect reads “You may play an additional land this turn” and another reads “You can’t play lands this turn,” the effect that precludes you from playing lands wins.",
    "Rule: 101.4. If multiple players would make choices and/or take actions at the same time, the active player (the player whose turn it is) makes any choices required, then the next player in turn order (usually the player seated to the active player’s left) makes any choices required, followed by the remaining nonactive players in turn order. Then the actions happen simultaneously. This rule is often referred to as the “Active Player, Nonactive Player (APNAP) order” rule. Example: A card reads “Each player sacrifices a creature.” First, the active player chooses a creature they control. Then each of the nonactive players, in turn order, chooses a creature they control. Then all creatures chosen this way are sacrificed simultaneously.",
    "Rule: 102.1. A player is one of the people in the game. The active player is the player whose turn it is. The other players are nonactive players.",
    "Rule: 103.2. After the decks have been shuffled, the players determine which one of them will choose who takes the first turn. In the first game of a match (including a single-game match), the players may use any mutually agreeable method (flipping a coin, rolling dice, etc.) to do so. In a match of several games, the loser of the previous game chooses who takes the first turn. If the previous game was a draw, the player who made the choice in that game makes the choice in this game. The player chosen to take the first turn is the starting player. The game’s default turn order begins with the starting player and proceeds clockwise.",
    "Rule: 103.5. Some cards allow a player to take actions with them from their opening hand. Once the mulligan process (see rule 103.4) is complete, the starting player may take any such actions in any order. Then each other player in turn order may do the same.",
    "Rule: 104.3c If a player is required to draw more cards than are left in their library, they draw the remaining cards and then lose the game the next time a player would receive priority. (This is a state-based action. See rule 704.)",
    "Rule: 104.4b If a game that’s not using the limited range of influence option (including a two-player game) somehow enters a “loop” of mandatory actions, repeating a sequence of events with no way to stop, the game is a draw. Loops that contain an optional action don’t result in a draw.",
    "Rule: 106.4. When an effect instructs a player to add mana, that mana goes into a player’s mana pool. From there, it can be used to pay costs immediately, or it can stay in the player’s mana pool as unspent mana. Each player’s mana pool empties at the end of each step and phase, and the player is said to lose this mana. Cards with abilities that produce mana or refer to unspent mana have received errata in the Oracle™ card reference to no longer explicitly refer to the mana pool.",
    "Rule: 107.3. Many objects use the letter X as a placeholder for a number that needs to be determined. Some objects have abilities that define the value of X; the rest let their controller choose the value of X."
  ];

  return (
    <div className="container" id="loading-container">
      <div id="loading-title">Loading...</div>
      <div className="container" id="content-loading-container">
        <div className="text" id="primary-loading-rule">
          {
            loadingArray[
              Math.floor(Math.random() * Math.floor(loadingArray.length))
            ]
          }
        </div>
        <img
          src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=382866&type=card"
          alt="#"
          id="loading-img"
        />
        <div className="text" id="secondary-loading-rule">
          {
            loadingArray[
              Math.floor(Math.random() * Math.floor(loadingArray.length))
            ]
          }
        </div>
      </div>
    </div>
  );
};

export default Loading;
