import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Carousel from "../Carousal";
import BouncingLogos from "../bouncinglogos/BouncingLogos";

const Home: React.FC = () => {
  const [loopNum, setLoopNum] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const toRotate = [
    "Full Stack",
    "React",
    "Django",
    "Python",
    "JavaScript",
    "TypeScript",
    "GraphQL",
  ];

  const logos = [
    '/logo/django.png',
    '/logo/mui.png',
    '/logo/nextjs.png',
    '/logo/react.png',

  ];
  
  const [text, setText] = React.useState("");
  const [delta, setDelta] = React.useState(300 - Math.random() * 100);
  const period = 3000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(400);
    }
  };

  return (
    <div className="sm:m-auto max-w-[100ch]">
    
        <Col xl={12} md={6} className="self-center ">
          <div className="min-h-fit m-3">
            <h2 className="text-7xl ">Asif</h2>
            <p className="mt-5 text-xl">

          Hey, I am Asif, a Full-Stack Developer 
            </p>
          </div>
          <span
            className="txt-rotate"
            dataPeriod="1000"
            data-rotate='[ "Full Stack", "React", "Django", "Python", "JavaScript", "TypeScript", "GraphQL" ]'
          >
            <h1>
       
              <span className="wrap bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
                {text}
              </span>
            </h1>
          </span>
          <div className="p-4">
            <p className="">
              Welcome to my portfolio! I am a dedicated software engineer with a
              passion for crafting robust and efficient web applications. With
              over 1 year of professional experience, I have honed my skills in
              a variety of programming languages and frameworks essential for
              modern web development.
            </p>
          </div>
          <button
            onClick={() => {
              console.log("connected");
            }}
          >
            <FaArrowCircleRight size={24} />
          </button>
        </Col>
        <Col xs={12} md={6} xl={5} className="bg-blue-500">
          <h1>second div</h1>
          {/* <img src="/images/score360Logo.jpg" alt="score360" className="img-fluid" /> */}
        </Col>
   <BouncingLogos logos={logos} />
    </div>
  );
};

export default Home;
