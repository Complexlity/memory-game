import Cards from "./Cards";
import Header from "./Header";
import Scoreboard from "./Scoreboard";
import "../index.css";
import uniqid from "uniqid";
import naruto from "../assets/naruto.jpg";
import aang from "../assets/aang.jpg";
import alita from "../assets/alita.jpg";
import benTen from "../assets/ben10.jpg";
import dLuff from "../assets/d-luff.jpg";
import optimusPrime from "../assets/optimus-prime.jpg";
import woody from "../assets/woody.jpg";
import fighterGirl from "../assets/fighter-girl.jpg";
import { useState } from "react";

const cardInit = [
  { title: "Naruto", avatar: naruto, id: uniqid(), selected: false },
  { title: "Aang", avatar: aang, id: uniqid(), selected: false },
  { title: "Alita", avatar: alita, id: uniqid(), selected: false },
  { title: "Ben 10", avatar: benTen, id: uniqid(), selected: false },
  { title: "D Luffy", avatar: dLuff, id: uniqid(), selected: false },
  {
    title: "Optimus Prime",
    avatar: optimusPrime,
    id: uniqid(),
    selected: false,
  },
  { title: "Woody", avatar: woody, id: uniqid(), selected: false },
  { title: "fighterGirl", avatar: fighterGirl, id: uniqid(), selected: false },
];

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

function App() {
  const [cards, setCards] = useState(cardInit);
  const [shownCards, setShownCards] = useState(cardInit);

  function makeSelected(id) {
    let tempCards = [...shownCards];
    tempCards = tempCards.map((card) => {
      if (card.id === id) card.selected = true;
      return card;
    });
    tempCards = getRandom(tempCards, tempCards.length);
    setShownCards(tempCards);
  }

  return (
    <div className="App">
      <Header />
      <Scoreboard />
      <Cards cards={shownCards} makeSelected={makeSelected} />
    </div>
  );
}

export default App;
