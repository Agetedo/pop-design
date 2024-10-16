import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import Admin from "./Admin";
import { introImages } from "../dataBase/introImages";
import styles from "../styles/Intro.module.scss";

export default function Intro() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className={styles.introWrapper}>
      {introImages.map((text) => (  
        <Image key={text.id} 
          imageSrc={text.imageSrc}
          imgAlt={text.imgAlt}
          title={text.title} 
        />
      ))}
      <motion.div className={styles.progress} style={{ scaleX }} />
      <Admin />
    </div>
  );
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
interface ImageProps {
  imageSrc: string;
  imgAlt: string;
  title: string;
}

function Image({ imageSrc, imgAlt, title }: ImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  
  return (
    <section className={styles.introContent}>
      <div ref={ref}>
        <img src={imageSrc} alt={imgAlt} />
      </div>
      <motion.h2 style={{ y }} className={styles.title}>{`BankDash. ${title}`}</motion.h2>
    </section>
  );
}