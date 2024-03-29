import { useEffect, useState } from "react";
import "../index.css";
import Cards from "./Cards";
import Header from "./Header";
import Redirect from "./Redirect";
import MobileHeader from "./MobileHeader";
import uniqid from "uniqid";
import naruto from "../assets/naruto.jpg";
import aang from "../assets/aang.jpg";
import alita from "../assets/alita.jpg";
import benTen from "../assets/ben10.jpg";
import dLuff from "../assets/d-luff.jpg";
import optimusPrime from "../assets/optimus-prime.jpg";
import woody from "../assets/woody.jpg";
import fighterGirl from "../assets/fighter-girl.jpg";
import gojoSatoru from "../assets/gojo-satoru.jpg";
import gingFreeccs from "../assets/ging.jpg";
import spongeBob from "../assets/spongebob.jpg";
import levi from "../assets/levi.jpg";

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
  { title: "Gojo Satoru", avatar: gojoSatoru, id: uniqid(), selected: false },
  { title: "Ging Freeccs", avatar: gingFreeccs, id: uniqid(), selected: false },
  { title: "SpongeBob", avatar: spongeBob, id: uniqid(), selected: false },
  { title: "Levi", avatar: levi, id: uniqid(), selected: false },
  { title: "Jenny", avatar: fighterGirl, id: uniqid(), selected: false },
];

function getRandom(arr, n = arr.length) {
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
  const [cards, setCards] = useState([...cardInit]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [max, setMax] = useState(false);

  useEffect(() => {
    let yourScore = localStorage.getItem("MemoryScore");
    let maxScore = localStorage.getItem("Max");
    if (yourScore) setBestScore(yourScore);
    if (maxScore) setMax(true);
  }, []);

  function makeSelected(id) {
    let myCards = [...cards];
    let result = selectId(myCards, id);
    let [allCards, clicked] = result;
    if (!clicked) {
      allCards = getRandom(allCards);
      setCards(allCards);
      let value = score;
      setScore(score + 1);
      if (value === 11) {
        localStorage.setItem("Max", true);
        localStorage.setItem("MemoryScore", 12);
        setMax(true);
        setBestScore(score);
        alert("You Attained god hood. Congratulations");
        resetToDefault(value);
      }
    } else {
      alert("Tough Luck. Try Again...");
      resetToDefault();
    }
  }

  function selectId(arr, id) {
    let lost = false;
    for (let item of arr) {
      if (item.id == id) {
        if (item.selected) lost = true;
        item.selected = true;
      }
    }
    return [arr, lost];
  }

  function resetToDefault(value = false) {
    let newCard = cardInit.map((card) => {
      card.id = uniqid();
      card.selected = false;
      return card;
    });
    setCards(getRandom(newCard));
    setScore(0);
    if (score > bestScore) {
      setBestScore(score);
      localStorage.setItem("MemoryScore", score);
    }
    if (value) {
      setBestScore(12);
      localStorage.setItem("MemoryScore", 12);
    }
  }

  return (
    <div className="App bg-gray-800">
      <Redirect />
      <Header score={score} bestScore={bestScore} max={max} />
      <MobileHeader score={score} bestScore={bestScore} max={max} />
      <Cards cards={cards} makeSelected={makeSelected} />
    </div>
  );
}

export default App;
