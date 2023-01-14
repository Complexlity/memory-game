import Card from "./Card";

// This takes in the cards object and loops through to create each card component (see Card.jsx to see what the card component is )
const Cards = ({ cards, makeSelected }) => {
  return (
    <div>
      <h2 className="text-center italic text-green-100">
        <p className="inline text-green-400">RULE</p>: Try not to click any
        character twice
      </h2>
      <div className="layout-grid grid justify-center justify-items-center gap-4 p-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            avatar={card.avatar}
            makeSelected={makeSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
