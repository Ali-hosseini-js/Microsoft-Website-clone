import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaLinkedin, FaYoutubeSquare } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex items-center max-w-[1800px] mx-auto py-5">
      <h4 className="mr-4">Follow Microsoft</h4>
      <AiFillFacebook className="mr-2 text-2xl text-blue-900" />
      <AiFillTwitterSquare className="mr-2 text-2xl text-blue-700" />
      <FaLinkedin className="mr-2 text-2xl text-blue-900" />
      <FaYoutubeSquare className="mr-2 text-2xl text-red-900" />
    </div>
  );
};

export default Social;
