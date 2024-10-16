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
        <Image key={text.id} title={text.title} />
      ))}
      <motion.div className={styles.progress} style={{ scaleX }} />
      <Admin />
    </div>
  );
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ title }: { title: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const imagesList = introImages.map(image =>
    <img key={image.id} src={image.imageSrc} alt={image.imgAlt} />
  );

  return (
    <section className={styles.introContent}>
      <div ref={ref}>
        {imagesList}
      </div>
      <motion.h2 style={{ y }} className={styles.title}>{`#Fsgd${title}`}</motion.h2>
    </section>
  );
}