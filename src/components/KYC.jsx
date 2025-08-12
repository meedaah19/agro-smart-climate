import { useContext } from "react";
import { ModalContext } from "./store/ModalContext";
import Modal from "./UI/Modal";
import { FaTimes } from "react-icons/fa";

export default function Kyc() {
    const modalCtx = useContext(ModalContext);

    function handleCloseModal() {
    modalCtx.hideModal();
}

    return (
        <Modal
            open={modalCtx.modalType === 'kyc'}
            onClose={handleCloseModal}
            >

                <div>

                </div>

            <button 
            onClick={handleCloseModal} 
            className="absolute top-4 h-[34px] w-[34px] border-1 rounded-full right-4 text-xl pl-1.5   text-black hover:text-gray-600"
            >
            <FaTimes />
            </button>

        </Modal>
    )
}