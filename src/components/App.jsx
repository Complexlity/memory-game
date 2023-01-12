import Cards from "./Cards";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
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
import gojoSatoru from "../assets/gojo-satoru.jpg";
import gingFreeccs from "../assets/ging.jpg";
import spongeBob from "../assets/spongebob.jpg";
import levi from "../assets/levi.jpg";
import { useEffect, useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { db } from "../../firebase.config.js";
import { doc, setDoc } from "firebase/firestore";
import Redirect from "./Redirect";
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
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [userData, setUserData] = useState(false);

  function resetAll() {
    if (confirm("Do you want to continue ?")) {
      localStorage.removeItem("memGameUser");
      setUserData(false);
      resetToDefault("min");
    }
  }

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
    if (score > bestScore) {
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

  document.body.style.overflow = login || signUp ? "hidden" : "auto";

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
      <Cards cards={cards} makeSelected={makeSelected} />
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
