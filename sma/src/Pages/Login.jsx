export default function Login() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[70%] h-[70%] flex">
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-5xl font-bold text-blue-600 mb-10">Lamasocial</h3>
          <span className="text-2xl">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="bg-white p-5 rounded-xl flex flex-col gap-4">
            <input
              placeholder="Email"
              type="email"
              className="h-12 rounded-md border border-gray-300 focus:outline-none px-5 text-lg"
            />
            <input
              placeholder="Password"
              type="password"
              className="h-12 rounded-md border border-gray-300 focus:outline-none px-5 text-lg"
            />
            <button className="h-12 rounded-md border-none bg-blue-600 text-white text-xl font-medium cursor-pointer">
              Log In
            </button>
            <span className="text-center text-blue-600">Forgot Password?</span>
            <button className="h-12 rounded-md border-none bg-green-500 text-white text-xl font-medium cursor-pointer w-[60%] self-center">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}