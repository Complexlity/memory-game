import Card from "./Card";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Cards = ({ cards, makeSelected }) => {
  return (
    <div>
      <h2 className="text-center italic text-green-100">
        <p className="mb-2 flex cursor-pointer justify-center text-orange-200 hover:underline">
          <ArrowBackIosIcon />
          <span className="-ml-2">Back to Main Site</span>{" "}
        </p>
        <p>
          <span className="inline text-green-400">RULE</span>: Try not to click
          any character twice
        </p>
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
