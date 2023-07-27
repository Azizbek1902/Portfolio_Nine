import React from "react";

function Register() {
  return (
    <div>
      <div className="flex justify-center pt-32">
        <div className="text-center w-[70%]">
          <h1 className="text-5xl Mon font-normal mb-5">
            Ready to take a free trial?
          </h1>
          <p className="text-4xl Mon font-normal mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
      </div>
      <div className="flex justify-center mb-20">
        <div className="md:w-[40%] w-[80%] border border-[#7A7A7A] p-10">
          <h1 className="pb-5 text-2xl Mon font-semibold">
            Sign up for a free account
          </h1>
          <div className="flex md:flex-row flex-col gap-4 pb-5">
            <input
              type="text"
              placeholder="First name"
              className="p-2 border text-base Mon font-medium border-[#7A7A7A] w-full"
            />
            <input
              type="text"
              placeholder="Lasr name"
              className="p-2 border text-base Mon font-medium border-[#7A7A7A] w-full"
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="p-2 border mb-5 text-base Mon font-medium border-[#7A7A7A] w-full"
          />
          <input
            type="password"
            placeholder="Create password"
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

export default Register;
