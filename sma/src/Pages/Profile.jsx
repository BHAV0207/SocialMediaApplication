import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Rightbar from "../Components/Rightbar";

export default function Profile() {
  const Pf = import.meta.env.VITE_PUBLIC_FOLDER;

  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-[9]">
          <div className="relative">
            <div className="h-[320px] relative">
              <img
                className="w-full h-[250px] object-cover"
                src={`${Pf}/post/3.jpeg`}
                alt=""
              />
              <img
                className="w-[150px] h-[150px] rounded-full object-cover absolute left-0 right-0 m-auto top-[150px] border-4 border-white"
                src={`${Pf}/person/7.jpeg`}
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-2xl font-bold">Safak Kocaoglu</h4>
              <span className="font-light">Hello my friends!</span>
            </div>
          </div>
          <div className="flex">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}