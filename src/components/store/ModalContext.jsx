import { createContext,useState } from "react";


export const ModalContext =  createContext({
    progress: '',
    showModal: () => {},
    hideModal: () => {},
    
});

export default function ModalContextProvider({children}) {
    const [modal, setModal] = useState('');

    function showModal() {
        setModal('modal');
    }

    function hideModal(){
        setModal('');
    }

    const modalCtx = {
        progress: modal,
        showModal,
        hideModal,
    }

return(
    <ModalContext.Provider value={modalCtx}>{children}</ModalContext.Provider>
);
}