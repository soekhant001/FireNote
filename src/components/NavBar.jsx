import React from "react";

const NavBar = ({ notes}) => {
  return (
    <div className="flex justify-between  mb-5">
      <h1 className="mb-5 font-serif text-3xl font-semibold tracking-wider">
        FireNote
      </h1>
      <p
       
        type="submit"
        className="p-4 bg-slate-200 text-slate-900 rounded-md active:scale-90 duration-200 text-xl font-semibold"
      >
        Total Notes - <span>{notes.length}</span>
      </p>
    </div>
  );
};

export default NavBar;
