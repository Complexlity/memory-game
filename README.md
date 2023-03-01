# Memory Game

**NEW:** Switch to the `auth` branch to checkout the login feature

Game application to test for retentive ability
[Live Demo](https://complexlity-memory-game.netlify.app/) :point_left:

![Memory Game](/src/assets/readme-img.png)

## Features

- Tracks the clicked cards
- Updates scoreboard
- Updates best score (persistent)

## Branches

There are four branches associated with the repository

1. `main`: This branch contains the deployed codebase
2. `with-comments`: This branch contains same features as main but with documentation/comments in the code
3. `auth`: The branch contains an additional feature to login and save scores using firebase
4. `auth-with-comments`: This branch contains similar code as auth but with documentation and comments in the code

### FAQs

Question: Why not merge `with-comments` to the `main` branch

Answer: I personally believe in writing clean codes and try as much as possible to make it self explanatory. I have made this new branch to give better understanding to users who may not have much(or any) experience using the technologies used here

## Technologies used

- JavaScript
- React
- Framer motion
- TailwindCSS

## Geting started

### Clone repository

```
git clone https://github.com/Complexlity/memory-game.git
cd memory-game
```

### Install dependencies

```
npm install
```

### Start Application

```
npm  run dev
```

Open the link show on the terminal in a browser (Usually `http://localhost:5173`)
