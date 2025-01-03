import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export default function Share() {
  return (
    <div className="w-full h-[170px] rounded-xl shadow-lg">
      <div className="p-4">
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full object-cover mr-3"
            src="/assets/person/1.jpeg"
            alt=""
          />
          <input
            placeholder="What's in your mind?"
            className="border-none w-[80%] focus:outline-none"
          />
        </div>
        <hr className="my-5" />
        <div className="flex items-center justify-between">
          <div className="flex ml-5 gap-4">
            <div className="flex items-center cursor-pointer">
              <PermMediaIcon className="text-red-500 mr-1" />
              <span className="text-sm font-medium">Photo or Video</span>
            </div>
            <div className="flex items-center cursor-pointer">
              <LabelIcon className="text-blue-500 mr-1" />
              <span className="text-sm font-medium">Tag</span>
            </div>
            <div className="flex items-center cursor-pointer">
              <RoomIcon className="text-green-500 mr-1" />
              <span className="text-sm font-medium">Location</span>
            </div>
            <div className="flex items-center cursor-pointer">
              <EmojiEmotionsIcon className="text-yellow-500 mr-1" />
              <span className="text-sm font-medium">Feelings</span>
            </div>
          </div>
          <button className="bg-green-500 text-white px-4 py-1 rounded-md font-medium">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
