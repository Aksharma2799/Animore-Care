import React from "react";
import Background from "./Background";

const Home = () => {
  return (
   <>
   <Background/>
     <div className="flex flex-col justify-center items-center h-screen bg-gray-100 z-9">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to Animore Care!
      </h1>
    </div>
   </>
  );
};

export default Home;
