import Card from "./Card";

const Cards = ({ cards, makeSelected }) => {
  return (
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
  );
};

export default Cards;
