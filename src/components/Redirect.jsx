import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Redirect = () => {
  return (
    <div className="flex flex-col justify-center gap-2 bg-zinc-900 py-3 text-center font-mono text-sm sm:flex-row sm:text-lg">
      <p className="text-white">Back to main site</p>
      <p className=" text-yellow-400">
        <ArrowForwardIcon />{" "}
        <a className="cursor-pointer text-blue-400 hover:underline">
          memorygame.com
        </a>
      </p>
    </div>
  );
};

export default Redirect;
