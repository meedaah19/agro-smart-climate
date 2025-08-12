import { useContext } from "react";
import { ModalContext } from "./store/ModalContext";
import Modal from "./UI/Modal";

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
        </Modal>
    )
}