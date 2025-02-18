import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const item = [
  {
    id: 1,
    title: "Libarary Management",
    img: "https://www.pexels.com/photo/scenic-aerial-view-of-island-near-dubrovnik-30459688/",
    desc: "Library management is a specialized area of institutional management that addresses the unique challenges faced by libraries. It involves overseeing operations, budgeting, material acquisition, interlibrary loans, maintenance, fee collection, event planning, fundraising, and human resources, while also upholding intellectual freedom.r",
  },

  {
    id: 2,
    title: "Online Transport Application",
    img: "https://www.pexels.com/video/night-view-of-sensoji-temple-s-iconic-gate-30394333/",
    desc: "The online transport app, built with React Native, Tailwind CSS, and Google APIs (Distance Matrix, Maps, Navigation), connects users to transportation services via smartphone or computer. It offers ride booking, real-time tracking, cashless payments, and offline access. Features include user profiles, driver matching, in-app communication, payment options, and ratings/reviews, providing a user-friendly, efficient alternative to traditional taxis.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start","end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300,300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const Portfolio = () => {
   
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset:["start start","end start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {item.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
