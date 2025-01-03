import { Users } from "../dummyData";
import Online from "./Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="flex items-center">
          <img className="w-10 h-10" src="/assets/gift.png" alt="" />
          <span className="font-light text-sm ml-2">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="w-full rounded-xl my-8" src="/assets/ad.png" alt="" />
        <h4 className="mb-5 text-lg font-semibold">Online Friends</h4>
        <ul className="p-0 m-0">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="text-lg font-semibold mb-4">User information</h4>
        <div className="mb-8">
          <div className="mb-3">
            <span className="font-medium mr-2 text-gray-500">City:</span>
            <span className="font-light">New York</span>
          </div>
          <div className="mb-3">
            <span className="font-medium mr-2 text-gray-500">From:</span>
            <span className="font-light">Madrid</span>
          </div>
          <div className="mb-3">
            <span className="font-medium mr-2 text-gray-500">
              Relationship:
            </span>
            <span className="font-light">Single</span>
          </div>
        </div>
        <h4 className="text-lg font-semibold mb-4">User friends</h4>
        <div className="grid grid-cols-3 gap-4">
          {Users.map((user) => (
            <div key={user.id} className="flex flex-col">
              <img
                className="w-24 h-24 object-cover rounded-md"
                src={user.profilePicture}
                alt=""
              />
              <span className="text-center">{user.username}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="flex-[3.5] pt-5">
      <div className="px-5">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
