import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Wrapper from "./Wrapper";
import closeIcon from "/modal-close-icon.png";
import ButtonPage from "./ButtonPage";
import { buttons } from "../dataBase/buttons";
import styles from "../styles/PagePortal.module.scss";

interface PagePortalProps {
  button: string;
  children?: React.ReactNode;
};

export default function PagePortal({ button, children }: PagePortalProps) {
  const page = buttons.filter(modal =>
    modal.buttonText === button
  );
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflowY = "scroll";
    }
  }, [showModal]);

  return (
    <>
      {page.map(modal =>
        <ButtonPage key={modal.id} 
          imgSrc={modal.imgSrc} 
          buttonText={modal.buttonText} 
          onClick={() => setShowModal(true)} 
        />
      )}
      {showModal && createPortal(
        <div className={styles.page}>
          <Wrapper className={styles.pageWrapper}>
            <div className={styles.pageContent}>
              {children}
              <button className={styles.modalClose} onClick={() => setShowModal(false)}>
                <img src={closeIcon} alt="#" />
              </button>
            </div>
          </Wrapper>
        </div>,
        document.body
      )}
    </>
  );
}