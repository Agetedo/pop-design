import { useState } from "react";
import { createPortal } from "react-dom";
import Conteiner from "./Conteiner";
import closeIcon from "/modal-close-icon.png";
import ButtonPage from "./ButtonPage";
import { buttons } from "../dataBase/buttons";
//import ContactContent from "./ContactContent";
import styles from "../styles/PagePortal.module.scss";

export default function ContactPage() {
  const contact = buttons.filter(modal =>
    modal.buttonText === "Contact"
  );
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {contact.map(modal =>
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
    <div className={styles.page}>
      <Conteiner className={styles.pageWrapper}>
        <div className={styles.pageContent}>

          <p>{"Contact Us"}</p>
          {/*<ContactContent />*/}
          
          <button className={styles.modalClose} onClick={onClose}>
            <img src={closeIcon} alt="#" />
          </button>
        </div>
      </Conteiner>
    </div>
  );
}