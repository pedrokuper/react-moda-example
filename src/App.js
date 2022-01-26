import logo from "./logo.svg";
import "./App.css";
import Modal from "react-modal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const arr = [
    {
      text: "Falopa1",
      url: "https://digiventures-brou.s3.amazonaws.com/y2mate.com+-+Billie+Eilish++bad+guy+Vertical+Video_480p.mp4",
    },
    {
      text: "Falopa2",
      url: "https://digiventures-brou.s3.amazonaws.com/WhatsApp+Video+2022-01-25+at+5.28.09+PM.mp4",
    },
    {
      text: "Falopa3",
      url: "https://digiventures-brou.s3.amazonaws.com/y2mate.com+-+Billie+Eilish++bad+guy+Vertical+Video_480p.mp4",
    },
  ];

  return (
    <>
      <div style={{ position: "relative" }}>
        {arr.map((data, key) => (
          <div className="item" key={key}>
            <p
              onClick={() => {
                setModalData(data);
                setModalIsOpen(true);
              }}
            >
              {data.text}
            </p>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        overlayClassName="Overlay"
        className="Modal"
      >
        {modalData && (
          <video
            style={{ height: "90vh" }}
            autoPlay
            src={modalData.url}
          ></video>
        )}
        <div>
          <button onClick={() => setModalIsOpen(false)}>X</button>
        </div>
      </Modal>
    </>
  );
}

export default App;
