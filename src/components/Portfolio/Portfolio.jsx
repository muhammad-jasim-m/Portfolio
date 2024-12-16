import React, { useContext, useEffect, useRef, useState } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/p1.png";
import Ecommerce from "../../img/Sign-Up.png";
import HOC from "../../img/main screen Desktop.png";
import p10 from "../../img/Dashboard (1).png";
import MusicApp from "../../img/p7.png";
import mazen from '../../img/mazen.png';
import goldenddream from "../../img/goldendream.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion"; // Import Framer Motion

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [showClickMe, setShowClickMe] = useState(true); // State to control "Click Me" visibility
  const portfolioRef = useRef(null);

  const transition = {
    duration: 0.8,
    type: "spring",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowClickMe(true);
          setTimeout(() => {
            setShowClickMe(true); // Hide "Click Me" after 3 seconds
          }, 3000);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is in view
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, []);

  // Variants for the Click Me animation
  const clickMeVariants = {
    initial: { opacity: 0, scale: 0.5, rotate: 0 },
    animate: {
      opacity: 1,
      scale: [1, 1.2, 1.1],
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 0.8,
        yoyo: Infinity, // Repeat animation
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="portfolio" id="portfolio" ref={portfolioRef}>
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent</span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        grabCursor={true}
        loop={true}
        className="portfolio-slider"
      >

<SwiperSlide>
          <a href="https://mazen.tv/" target="_blank" rel="noopener noreferrer">
            <div className="slide-content">
              <motion.img
                src={mazen}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />
              {showClickMe && (
                <motion.span
                  className="click-me"
                  variants={clickMeVariants}
                  initial="initial"
                  animate="animate"
                >
                  Click Me
                </motion.span>
              )}
            </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://goldendreamtravel.ae/" target="_blank" rel="noopener noreferrer">
            <div className="slide-content">
              <motion.img
                src={goldenddream}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />
              {showClickMe && (
                <motion.span
                  className="click-me"
                  variants={clickMeVariants}
                  initial="initial"
                  animate="animate"
                >
                  Click Me
                </motion.span>
              )}
            </div>
          </a>
        </SwiperSlide>


        <SwiperSlide>
          <a href="https://collabways.com/" target="_blank" rel="noopener noreferrer">
            <div className="slide-content">
              <motion.img
                src={MusicApp}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />
              {showClickMe && (
                <motion.span
                  className="click-me"
                  variants={clickMeVariants}
                  initial="initial"
                  animate="animate"
                >
                  Click Me
                </motion.span>
              )}
            </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            href="https://kashanafzl.github.io/Shruh/User-Management.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="slide-content">
              <motion.img
                src={Sidebar}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />
              {showClickMe && ( // Only show "Click Me" if showClickMe is true
                <motion.span
                  className="click-me"
                  variants={clickMeVariants}
                  initial="initial"
                  animate="animate"
                >
                  Click Me
                </motion.span>
              )}
            </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="" target="_blank" rel="noopener noreferrer">
            <div className="slide-content">
              <motion.img
                src={Ecommerce}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />
              {showClickMe && (
                <motion.span
                  className="click-me"
                  variants={clickMeVariants}
                  initial="initial"
                  animate="animate"
                >
                  Not Hosted Yet
                </motion.span>
              )}
            </div>
          </a>

        </SwiperSlide>




    


        <SwiperSlide>
          <a href="" target="_blank" rel="noopener noreferrer">
            <div className="slide-content">
              <motion.img
                src={p10}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />
              {showClickMe && (
                <motion.span
                  className="click-me"
                  variants={clickMeVariants}
                  initial="initial"
                  animate="animate"
                >
                 Not Hosted Yet
                </motion.span>
              )}
            </div>
          </a>
        </SwiperSlide>



     





        <SwiperSlide>
          <div className="slide-content">
            <motion.img
              src={HOC}
              alt=""
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={transition}
            />
            {showClickMe && (
              <motion.span
                className="click-me"
                variants={clickMeVariants}
                initial="initial"
                animate="animate"
              >
              Not Hosted Yet
              </motion.span>
            )}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
