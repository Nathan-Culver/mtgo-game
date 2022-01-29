import React, { useState } from "react";
import { motion } from "framer-motion";

const item = {
  hidden: { y: 20 },
  visible: {
    y: 0
  }
};

const Deck = props => {
  const [tap, setTap] = useState(false);
  const [zIsDraging, setZIsDraging] = useState(false);
  const [zLastDrag, setZLastDrag] = useState(false);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [IsCardPos, setIsCardPos] = useState(false);
  const [battlefieldPos, setBattlefieldPos] = useState(-1);
  const [startBattlefield, setStartBattlefield] = useState(false);
  const [endBattlefield, setEndBattlefield] = useState(false);

  const cvw = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );

  const cvh = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );

  let x = () => {
    if (IsCardPos && posY <= window.innerHeight / 1.25) {
      let center = window.innerWidth / 2.5;
      let spacing = battlefieldPos * 240;
      let shift = (props.battlefieldCounter * window.innerWidth) / 14.75;
      return center + spacing - shift;
    } else if (IsCardPos && posX <= 120 && posY >= window.innerHeight - 168) {
      return -120;
    } else if (
      IsCardPos &&
      posX > 120 &&
      posX <= 240 &&
      posY >= window.innerHeight - 168
    ) {
      return 0;
    } else if (
      IsCardPos &&
      posX > 240 &&
      posX <= 360 &&
      posY >= window.innerHeight - 168
    ) {
      return 120;
    } else if (
      IsCardPos &&
      posX > 360 &&
      posX <= window.innerWidth - 120 &&
      posY >= window.innerHeight - 168
    ) {
      return window.innerWidth / 2;
    } else {
      return null;
    }
  };

  let y =
    IsCardPos && posY <= window.innerHeight / 1.25
      ? -window.innerHeight / 1.75
      : IsCardPos && posX <= 120 && posY >= window.innerHeight - 168
      ? 0
      : IsCardPos &&
        posX > 120 &&
        posX <= 240 &&
        posY >= window.innerHeight - 168
      ? 0
      : IsCardPos &&
        posX > 240 &&
        posX <= 360 &&
        posY >= window.innerHeight - 168
      ? 0
      : IsCardPos &&
        posX > 360 &&
        posX <= window.innerWidth - 120 &&
        posY >= window.innerHeight - 168
      ? 84
      : null;

  let scaleValue =
    IsCardPos && posY <= window.innerHeight / 1.25
      ? 1.5
      : IsCardPos &&
        posX > 360 &&
        posX <= window.innerWidth - 120 &&
        posY >= window.innerHeight - 168
      ? 2
      : 1;

  let handYKey =
    IsCardPos &&
    posX > 360 &&
    posX <= window.innerWidth - 120 &&
    posY >= window.innerHeight - 168
      ? "y"
      : null;

  let handYValue =
    IsCardPos &&
    posX > 360 &&
    posX <= window.innerWidth - 120 &&
    posY >= window.innerHeight - 168
      ? y - 200
      : null;

  function battlefieldChecker() {
    if (
      posY <= window.innerHeight / 1.25 &&
      startBattlefield === true &&
      endBattlefield === false
    ) {
      props.setBattlefieldCounter(props.battlefieldCounter + 1);
      setBattlefieldPos(props.battlefieldCounter);
    } else if (
      posY > window.innerHeight / 1.25 &&
      startBattlefield === false &&
      endBattlefield === true &&
      props.battlefieldCounter <= 0
    ) {
      props.setBattlefieldCounter(0);
      setBattlefieldPos(-1);
    } else if (
      posY > window.innerHeight / 1.25 &&
      startBattlefield === false &&
      endBattlefield === true
    ) {
      props.setBattlefieldCounter(props.battlefieldCounter - 1);
      setBattlefieldPos(props.battlefieldCounter);
    } else {
      props.setBattlefieldCounter(props.battlefieldCounter);
      setBattlefieldPos(props.battlefieldCounter);
    }
    // window.setTimeout(() => {
    //   console.log("xPos");
    //   console.log(x());
    // }, 2000);
  }

  return (
    <motion.img
      name={props.index}
      src={props.currentCard.imageUrl}
      alt="https://i.imgur.com/pPnIKhy.png"
      className="card-img"
      style={{
        zIndex: zIsDraging
          ? 40
          : zLastDrag && `${props.index}` === `${props.currentCardName}`
          ? 30
          : 20
      }}
      drag={true}
      onDragStart={(e, info) => {
        props.setCurrentCardName(e.target.name);
        setIsCardPos(false);
        posY > window.innerHeight / 1.25
          ? setStartBattlefield(false)
          : setStartBattlefield(true);
      }}
      onDrag={() => {
        setZIsDraging(true);
      }}
      onDragEnd={info => {
        setZIsDraging(false);
        setZLastDrag(!zLastDrag);
        console.log(info);
        setPosX(info.pageX);
        setPosY(info.pageY);
        setIsCardPos(true);
        setTap(!tap);
        posY <= window.innerHeight / 1.25
          ? setEndBattlefield(true)
          : setEndBattlefield(false);
        battlefieldChecker();
        // window.setTimeout(() => {
        // posY <= window.innerHeight / 1.25
        //   ?
        //   props.setBattlefieldCards(
        //     props.battlefieldCards.concat([props.currentCard])
        //   );
        //   // : alert("Not Battlefield!");
        //   console.log(props.selectedDeck);
        //   const sliceStop = props.index;
        //   const sliceStart = props.index + 1;
        //   const firstArr = props.selectedDeck[1].slice(0, sliceStop);
        //   const secondArr = props.selectedDeck[1].slice(
        //     sliceStart,
        //     props.arr.length
        //   );
        //   const newArr = [props.selectedDeck[0], firstArr.concat(secondArr)];
        //   posY <= window.innerHeight / 1.25
        //     ? props.setSelectedDeck(newArr)
        //     : alert("Not Battlefield!");
        //   console.log(props.battlefieldCards);
        //   console.log("Battlefield");
        //   console.log(props.battlefieldCards);
        // }, 1000);
        // console.log("Battlefield");
        // console.log(props.battlefieldCards);
        // console.log(props.selectedDeck);
        // window.setTimeout(() => {
        //   props.setIsBattlefieldCards(true);
        // }, 2000);
      }}
      dragMomentum={0}
      dragConstraints={{
        left: -cvw,
        right: cvw,
        top: -cvh,
        bottom: cvh
      }}
      whileHover={{
        scale: scaleValue * 1.2,
        [handYKey]: handYValue
      }}
      onTap={() => {
        posY <= window.innerHeight / 2 && posY !== 0 && tap === false
          ? setTap(!tap)
          : setTap(false);
      }}
      animate={{
        rotate: tap ? 45 : 0,
        x: x(),
        y: y,
        scale: scaleValue
      }}
      transition={{ stiffness: 1 }}
      // variants={item}
    />
  );
};

export default Deck;
