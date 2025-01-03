import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import { Users } from "../dummyData";
import CloseFriend from "./CloseFriend";

export default function Sidebar() {
  return (
    <div className="flex-[3] h-[calc(100vh-50px)] overflow-y-scroll sticky top-[50px]">
      <div className="p-5">
        <ul className="p-0 m-0 list-none">
          <li className="flex items-center mb-5">
            <RssFeedIcon className="mr-4" />
            <span className="text-sm">Feed</span>
          </li>
          <li className="flex items-center mb-5">
            <ChatIcon className="mr-4" />
            <span className="text-sm">Chats</span>
          </li>
          <li className="flex items-center mb-5">
            <PlayCircleIcon className="mr-4" />
            <span className="text-sm">Videos</span>
          </li>
          <li className="flex items-center mb-5">
            <GroupIcon className="mr-4" />
            <span className="text-sm">Groups</span>
          </li>
          <li className="flex items-center mb-5">
            <BookmarkIcon className="mr-4" />
            <span className="text-sm">Bookmarks</span>
          </li>
          <li className="flex items-center mb-5">
            <HelpOutlineIcon className="mr-4" />
            <span className="text-sm">Questions</span>
          </li>
          <li className="flex items-center mb-5">
            <WorkOutlineIcon className="mr-4" />
            <span className="text-sm">Jobs</span>
          </li>
          <li className="flex items-center mb-5">
            <EventIcon className="mr-4" />
            <span className="text-sm">Events</span>
          </li>
          <li className="flex items-center mb-5">
            <SchoolIcon className="mr-4" />
            <span className="text-sm">Courses</span>
          </li>
        </ul>
        <button className="w-full border-none p-3 rounded-md font-medium bg-gray-200">
          Show More
        </button>
        <hr className="my-5" />
        <ul className="p-0 m-0 list-none">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
