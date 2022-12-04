import logo from "../assets/github.png";

const Header = () => {
  return (
    <div className="flex justify-center bg-green-400 items-center px-4 py-2">
      <h1 className="flex-1 text-center text-2xl">Anime Memory Game</h1>
      <a href="https://github.com/complexlity" target={'_blank'}><img className="w-[1.5rem]" src={logo} alt="" /></a>
    </div>
  );
};

export default Header;
