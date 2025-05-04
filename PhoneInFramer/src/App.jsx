import React, { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import BgPhone from "./Components/BgPhone";
import PicAndnamePhone from "./Components/PicAndnamePhone";
import ListsPhone from "./Components/ListsPhone";
import ButtonofPhone from "./Components/ButtonofPhone";
import ExampleSite from "./Components/ExampleSite";
import BgpropofPhone from "./Components/BgpropofPhone";

const App = () => {
  let [name, setName] = useState("Sudip Paul");
  let [title, setTitle] = useState("Professional Web developer");
  let [bgurl, setBgurl] = useState(
    "https://imgs.search.brave.com/7wjuDHdtIt2AOgyv5gvEv5bJaGctRtqIApVf0pl7Rh0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM2L2Iz/LzU5LzM2YjM1OWZh/ZDk4MjlkNGU0OTIy/ZTAyOGE4ZmY5YzJj/LmpwZw"
  );
  let [profilePic, setProfilePic] = useState(
    "https://imgs.search.brave.com/kEtn0XE6X4atlwH2kTmpDEGHnBcPLWxTw6xIDQ-9kgE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzAyL2dpbnRv/a2ktcy1mYW1vdXMt/c3RyYXdiZXJyeS1t/aWxrLXNwZWVjaC1p/bi1naW50YW1hLmpw/Zw"
  );

  // let [, set] = useState();
  // let [, set] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setName((prev) => (prev === "Sudip Paul" ? "Pritam Saha" : "Sudip Paul"));
      setTitle((prev) =>
        prev === "Professional Web developer"
          ? "Ultimate Pro Programmer"
          : "Professional Web developer"
      );
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-300">
        <motion.div
          style={{
            transformStyle: "preserve-3d", //preserve 3d let us the z axis that is toward or away from us
            skew: "-6deg",
          }}
          className="relative w-[250px] h-[500px] cursor-pointer"
          initial={{
            rotateY: 0,
            // skew: "-6deg",
          }}
          animate={{
            rotateY: 360,
            // skew:0
          }}
          transition={{
            duration: 0.6,
            delay: 3,
            repeat: Infinity,
            repeatDelay: 2.8,
          }}
        >
          {/* Background pic */}
          <BgPhone image={bgurl} name={"Image"} />

          {/* profile pic name and link list */}
          <PicAndnamePhone
            profilePic={profilePic}
            altName={"sudip's profile pic"}
            name={name}
            title={title}
          />

          {/* List under profile and title */}
          <ul
            className="text-center w-[90%] absolute inset-0 top-[165px] left-[12px]"
            style={{
              transform: "translateZ(35px)",
            }}
          >
            <ListsPhone
              liOne={"Latest Project"}
              litwo={"Visit Movie Manager"}
              liThree={"Follow on LinkedIn"}
            />
          </ul>

          {/* Buttons */}
          <div
            className="absolute flex gap-[10px] bottom-[80px] right-[-85px]"
            style={{
              transform: "translateZ(55px)",
            }}
          >
            <ButtonofPhone
              iconOne={<FiGithub />}
              iconTwo={<FaLinkedinIn />}
              iconThree={<FaLinkedinIn />}
            />
          </div>

          {/* sample */}
          <div
            className="absolute bottom-[80px] left-[-120px] "
            style={{
              transform: "translateZ(75px)",
            }}
          >
            <ExampleSite
              img={"./websiteimg.png"}
              imgName={"Sudips example site"}
            />
          </div>

          {/* background prop */}
          <div
            className="absolute w-[200px] h-[150px] top-[80px] right-[-120px] z-[-1]"
            style={{
              transform: "translateZ(-35px)",
            }}
          >
            <BgpropofPhone
              img={
                "https://imgs.search.brave.com/oc5k8XLRepkf5f6wvAnMk7g8ZW0xOTFEirLXgt0ah7w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAzL2Ni/LzI1LzAzY2IyNWJk/ODY1YWMwODZkYTkx/ZWFiZTRjODhjYTE0/LmpwZw"
              }
              imgName={"sudip's Bg prop"}
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default App;
