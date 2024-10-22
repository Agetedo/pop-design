import { useState } from "react";
import { createPortal } from "react-dom";
import closeIcon from "/modal-close-icon.png";
import ButtonPage from "./ButtonPage";
import styles from "../styles/WelcomePage.module.scss";


//filter на кнопку

export default function WelcomePage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ButtonPage imgSrc={""} buttonText={"gghhjjh"} onClick={() => setShowModal(true)} />
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}

type ModalContentClose = {
  onClose: () => void;
};
function ModalContent({ onClose }: ModalContentClose) {
  return (
    <div className={styles.welcome}>
      <div className={styles.welcomeContent}>

        <p>{"Let Us help Your company grow!"}</p>
        
        <button className={styles.modalClose} onClick={onClose}>Close
          <img src={closeIcon} alt={"close icon"} />
        </button>
      </div>
    </div>
  );
}
