export default function CloseFriend({ user }) {
  const Pf = import.meta.env.VITE_PUBLIC_FOLDER;

  return (
    <li className="flex items-center mb-4">
      <img
        className="w-8 h-8 rounded-full object-cover mr-3"
        src={ Pf + user.profilePicture}
        alt=""
      />
      <span className="text-sm font-medium">{user.username}</span>
    </li>
  );
}
