import React from "react";

function Login() {
  return (
    <div>
      <div className="flex justify-center mb-24 mt-20">
        <div className="md:w-[40%] w-[80%] border border-[#7A7A7A] p-10">
          <h1 className="pb-5 text-2xl Mon font-semibold">
            Log in
          </h1>
          <input
            type="text"
            placeholder="Log in"
            className="p-2 border mb-5 text-base Mon font-medium border-[#7A7A7A] w-full"
          />
          <input
            type="password"
            placeholder="Parol"
            className="p-2 border mb-5 text-base Mon font-medium border-[#7A7A7A] w-full"
          />
          <button className="bg-[#18A0FB] text-white text-base rounded-lg transition-all py-2 md:px-10 px-6 hover:border-[#18A0FB] border hover:bg-white hover:text-[#18A0FB]">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
