import React, {KeyboardEvent} from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

interface MyModal {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    // handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}
interface KeyDown {
    keyDown: (ev: KeyboardEvent<HTMLInputElement>) => void;
}

const ImageModal = ({ isOpen, onClose, children }: MyModal) => {

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', onClose);

        return () => {
            document.removeEventListener('keydown', onClose);
        };
    }, [onClose]);

    return (
        <Modal
            isOpen={isOpen}
            overlayClassName={css.modalOverlay}
            className={css.modalContent}
            closeTimeoutMS={300}
            onRequestClose={() => onClose()}
            ariaHideApp={false}
        >
            {children}
        </Modal>
    )
};
export default ImageModal;