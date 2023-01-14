import { useEffect, useState } from "react";
import "../index.css";
import uniqid from "uniqid"; // Creates a unique id number to use in components. See https://www.npmjs.com/package/uniqid for more information
/* ----------------------------
Components
----------------------*/

import Cards from "./Cards";
import Header from "./Header";
import Redirect from "./Redirect";
import MobileHeader from "./MobileHeader";
import SignUp from "./SignUp";
import Login from "./Login";
import Redirect from "./Redirect";
//-----------------------------------------------

/*-----------------------
  Card Images
  -----------------------*/
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
//------------------------------------------------

/* ---------------------
Firebase Functions
----------------------*/
import { db } from "../../firebase.config.js";
import { doc, setDoc } from "firebase/firestore";
//-------------------------------------------------------

// Put together initial cards data using the imported images
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

// Utitlity function to shuffle the array of objects
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

// This is the top level function which all the components and shared functions live
function App() {
  // Initializes all used state objects
  const [cards, setCards] = useState([...cardInit]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [max, setMax] = useState(false);
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [userData, setUserData] = useState(false);

  // Logs out the user and returns all state values to default
  function resetAll() {
    if (confirm("Do you want to continue ?")) {
      localStorage.removeItem("memGameUser");
      setUserData(false);
      resetToDefault("min");
    }
  }

  // Function to get the best score from local storage as well as whether user has reached the max score attainable
  useEffect(() => {
    let memGameUserData = localStorage.getItem("memGameUser");
    if (memGameUserData) {
      memGameUserData = JSON.parse(memGameUserData);
      setUserData(memGameUserData);
      setBestScore(memGameUserData.score);
      if (memGameUserData.score == 12) setMax(true);
    } else {
      let yourScore = localStorage.getItem("MemoryScore");
      if (yourScore) setBestScore(yourScore);
      let maxScore = localStorage.getItem("Max");
      if (maxScore) setMax(true);
    }
  }, []);

  // Takes in the id of a card object and either sets it as selected or if it already is, dispatches game loss
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
        resetToDefault("max");
      }
    } else {
      alert("Tough Luck. Try Again...");
      resetToDefault();
    }
  }

  // Filters the array to figure out if the clicked item was previously selected or not
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

  // Resets the scores as well as the selected cards when game is either lost or max score is reacheed
  function resetToDefault(value = false) {
    let newCard = cardInit.map((card) => {
      card.id = uniqid();
      card.selected = false;
      return card;
    });
    if (score > bestScore) {
      // Updates the user's bestscore whenever a higher score is attained.
      if (userData) {
        try {
          const docRef = doc(db, "best-scores", userData.id);
          setDoc(docRef, {
            displayName: userData.displayName,
            score,
          });
          const gameUserData = { ...userData, score };
          localStorage.setItem("memGameUser", JSON.stringify(gameUserData));
        } catch (error) {
          alert("Something Went Wrong. Your Score Is Not Saved");
        }
      }
      setBestScore(score);
      localStorage.setItem("MemoryScore", score);
    }
    setScore(0);
    setCards(getRandom(newCard));
    if (value == "max") {
      setBestScore(12);
    } else if (value == "min") {
      setBestScore(0);
      localStorage.setItem("MemoryScore", 0);
    }
  }

  return (
    <div className={`App bg-gray-800`}>
      <Redirect />
      <Header
        score={score}
        bestScore={bestScore}
        max={max}
        setLogin={setLogin}
        userData={userData}
        resetAll={resetAll}
      />
      <MobileHeader
        score={score}
        bestScore={bestScore}
        max={max}
        userData={userData}
        setLogin={setLogin}
        resetAll={resetAll}
      />
      {!(signUp || login) && (
        <Cards cards={cards} makeSelected={makeSelected} />
      )}
      {signUp && (
        <SignUp
          setLogin={setLogin}
          setSignUp={setSignUp}
          setUserData={setUserData}
          bestScore={bestScore}
        />
      )}
      {login && (
        <Login
          setLogin={setLogin}
          setSignUp={setSignUp}
          setUserData={setUserData}
          setBestScore={setBestScore}
        />
      )}
    </div>
  );
}

export default App;
