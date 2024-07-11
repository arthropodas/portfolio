import React from "react";


const Projects: React.FC = () => {


  return (
    <div className="m-10">
      <a
        href="#"
        className= "flex flex-col items-center border-4 rounded-lg shadow md:flex-row md:max-w-xl "
        style={{
          borderImage: "linear-gradient(to right, #6366f1, #8b5cf6, #ec4899) 1",
          animation: "borderAnimation 3s linear infinite",
        }}
      >
        <img
          className="object-cover ml-1 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/images/score360Logo.jpg"
          alt="score360"
        />
        <div className="flex flex-col justify-between p-3 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
            Score 360
          </h5>
          <p className="mb-3 font-normal">
            The Score 360 web application enables users to sign up as players and participate in cricket tournaments. Registered players can also create tournaments and organize matches. Public users have access to match statistics, tournament details, player information, and receive real-time score updates.
          </p>
        </div>
      </a>
    
    </div>
  );
};

export default Projects;