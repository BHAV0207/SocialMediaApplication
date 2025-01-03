import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Topbar() {
  return (
    <div className="h-14 w-full bg-blue-600 flex items-center fixed top-0 z-50">
      <div className="flex-[3] px-5">
        <span className="text-2xl text-white font-bold cursor-pointer">
          Lamasocial
        </span>
      </div>
      <div className="flex-[5]">
        <div className="w-full h-8 bg-white rounded-full flex items-center">
          <SearchIcon className="text-xl ml-2" />
          <input
            placeholder="Search for friend, post or video"
            className="border-none w-[70%] focus:outline-none ml-2"
          />
        </div>
      </div>
      <div className="flex-[4] flex items-center justify-around text-white">
        <div className="flex gap-4">
          <span className="cursor-pointer text-sm">Homepage</span>
          <span className="cursor-pointer text-sm">Timeline</span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative cursor-pointer">
            <PersonIcon />
            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs">
              1
            </span>
          </div>
          <div className="relative cursor-pointer">
            <ChatIcon />
            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs">
              2
            </span>
          </div>
          <div className="relative cursor-pointer">
            <NotificationsIcon />
            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs">
              1
            </span>
          </div>
        </div>
        <img
          src="/assets/person/1.jpeg"
          alt=""
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
  );
}
