import { createContext,useState } from "react";


export const ModalContext =  createContext({
    modalType: "",
    showModal: () => {},
    hideModal: () => {},
    
});

export default function ModalContextProvider({children}) {
    const [modalType, setModalType] = useState('');

    function showModal(type) {
        setModalType(type);
    }

    function hideModal(){
        setModalType('');
    }

    const modalCtx = {
        modalType,
        showModal,
        hideModal,
    }

return(
    <ModalContext.Provider value={modalCtx}>{children}</ModalContext.Provider>
);
}