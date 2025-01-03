export default function Online({ user }) {
  return (
    <li className="flex items-center mb-4">
      <div className="relative mr-3">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={user.profilePicture}
          alt=""
        />
        <span className="w-3 h-3 rounded-full bg-green-500 absolute right-0 top-0 border-2 border-white"></span>
      </div>
      <span className="font-medium">{user.username}</span>
    </li>
  );
}
