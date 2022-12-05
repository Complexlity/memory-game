import Card from "./Card";

const Cards = ({ cards, makeSelected }) => {
  return (
    <div>
      <h2 className="text-center italic text-green-100">
        <h3 className="inline text-green-400">RULE</h3>: Try not to click any
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
