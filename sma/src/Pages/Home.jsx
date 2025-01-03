import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Rightbar from "../Components/Rightbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="flex w-full">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
