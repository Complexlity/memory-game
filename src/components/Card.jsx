const Card = ({ id, title, avatar, makeSelected }) => {
  return (
    <div
      className="card-grid bottom grid h-[16rem]  w-[14rem] overflow-hidden rounded-t-3xl rounded-b-2xl bg-red-400 p-2"
      onClick={makeSelected.bind(this, id)}
    >
      <div className="overflow-hidden rounded-2xl">
        <img
          className="h-[12rem] w-full  object-cover object-top"
          src={avatar}
          alt="fighter"
        />
      </div>
      <p className="grid items-center text-center text-2xl font-semibold text-white">
        <span>{title}</span>
      </p>
    </div>
  );
};

export default Card;
