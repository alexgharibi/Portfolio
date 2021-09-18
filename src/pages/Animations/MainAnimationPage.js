import "./MainAnimationPage.css";
import List from "./List/List";
import Modal from "./Modal/Modal";
import Backdrop from "./Backdrop/Backdrop";
import { useState } from "react";

const MainAnimationPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="main">
      <h1>React Animations</h1>
      {modalIsOpen && <Modal show={modalIsOpen} closed={closeModal} />}
      {modalIsOpen && <Backdrop show={modalIsOpen} />}
      <button className="Button" onClick={showModal}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default MainAnimationPage;
