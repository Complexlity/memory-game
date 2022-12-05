import { motion } from "framer-motion";
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

  function makeSelected(id) {
    let myCards = [...cards];
    let result = selectId(myCards, id);
    let [allCards, clicked] = result;
    if (!clicked) {
      allCards = getRandom(allCards);
      setCards(allCards);
    } else {
      alert("Game Over. Restarting...");
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

  function resetToDefault() {
    let newCard = cardInit.map((card) => {
      card.id = uniqid();
      card.selected = false;
      return card;
    });
    setCards(getRandom(newCard));
  }

  return (
    <div className="App">
      <Header />
      <Scoreboard />
      <Cards cards={cards} makeSelected={makeSelected} />
    </div>
  );
}
// const App = () => {
//   const [mount, setMount] = useState(true);
//   return (
//     <div className="flex items-center justify-center bg-orange-300">
//       <motion.div
//         animate={{ scale: mount ? 1 : 0 }}

//         className="mx-auto h-24 w-24 rounded-xl bg-blue-400"
//       ></motion.div>
//       ;
//     </div>
//   );
// };
export default App;
