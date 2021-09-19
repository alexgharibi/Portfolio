import "./MainAnimationPage.css";
import List from "./List/List";
import Modal from "./Modal/Modal";
import Backdrop from "./Backdrop/Backdrop";
import { useState } from "react";
import Transition from "react-transition-group/Transition";

const MainAnimationPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showBlock, setShowBlock] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const toggleHandler = () => {
    setShowBlock(!showBlock);
  };

  return (
    <div className="main">
      <h1>React Animations</h1>
      <button className="Button" onClick={toggleHandler}>
        Toggle
      </button>
      <br />
      <Transition in={showBlock} timeout={1000} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              margin: "auto",
              transition: "opacity 1s ease-out",
              opacity: state === "exiting" ? 0 : 1,
            }}
          ></div>
        )}
      </Transition>
      <Modal show={modalIsOpen} closed={closeModal} />
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
