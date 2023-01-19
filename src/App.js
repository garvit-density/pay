import React from "react";
import Modal from "./components/Modal";
import Pay from "./components/Pay";
import Withdraw from "./components/Withdraw";
import BankVerificationModal from "./components/BankVerificationModal";
import AlertModal from "./components/AlertModal";
import SuccessModal from "./components/SuccessModal";
import ErrorModal from "./components/ErrrorModal";

function App() {
  const primaryAction = () => {
    console.log("primary button is clicked !!");
  };
  const secondaryAction = () => {
    console.log("secondary button is clicked !!");
  };
  const close = () => {
    console.log("close button is clicked !!");
  };
  return (
    // <Modal
    //   close={close}
    //   primaryName="name1"
    //   primaryAction={primaryAction}
    //   secondaryName="name2"
    //   secondaryAction={secondaryAction}
    // ></Modal>
    // <Pay></Pay>
    //<Withdraw></Withdraw>
    // <BankVerificationModal></BankVerificationModal>
    // <AlertModal></AlertModal>
    // <SuccessModal></SuccessModal>
    <ErrorModal></ErrorModal>
  );
}

export default App;
