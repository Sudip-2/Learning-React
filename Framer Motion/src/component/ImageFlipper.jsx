import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "https://imgs.search.brave.com/nG1XXrjBGwj_rWKgiJkqEsDlf4PbjUpJ0kzu9eRx4Ag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMTc0NDkxNTMz/My5qcGc",
  "https://imgs.search.brave.com/4jNLJmyJiU7u36PRgvcwzoOxSKzIj6a_vX20fcIHH0Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTEz/NDM5MzQxL3Bob3Rv/L3BvcnRyYWl0LW9m/LWVudGh1c2lhc3Rp/Yy1idXNpbmVzcy1w/ZW9wbGUtaW4tY2ly/Y2xlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1veHdzcThX/R0ZUMGl4bVNvam50/WUJFWnFpZm5lNFA3/RGxxT1diWENxV1Vr/PQ",
  "https://imgs.search.brave.com/anFFcdNJcVA0vyFPz_M1gS0r5C3UqoSZ_S2tDWM5p3Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvUGhv/dG9GVExQL0pvYnND/YXJlZXJzLTkwMTU2/ODY2MC5qcGc",
];

export default function ImageFlipper() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const changeImage = () => {
    setFlipped(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setFlipped(false);
    }, 300); // Half of animation duration
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage();
    }, 3000); // Auto-change every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-48 h-48 cursor-pointer"
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
      onClick={changeImage}
      style={{ perspective: 1000 }}
    >
      <img src={images[index]} alt="flipping" className="w-full h-full rounded-lg shadow-md" />
    </motion.div>
  );
}
