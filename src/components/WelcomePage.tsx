import { useState } from "react";
import { createPortal } from "react-dom";
import closeIcon from "/modal-close-icon.png";
import ButtonPage from "./ButtonPage";
import { buttons } from "../dataBase/buttons";
import styles from "../styles/WelcomePage.module.scss";

export default function WelcomePage() {
  const welcome = buttons.filter(modal =>
    modal.buttonText === "Welcome"
  );
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {welcome.map(modal =>
        <ButtonPage key={modal.id} 
          imgSrc={modal.imgSrc} 
          buttonText={modal.buttonText} 
          onClick={() => setShowModal(true)} 
        />
      )}
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
