import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, children }) => {

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <Modal
            isOpen={isOpen}
            overlayClassName={css.modalOverlay}
            className={css.modalContent}
            closeTimeoutMS={300}
            onRequestClose={() => onClose()}
            ariaHideApp="false"
        >
            {children}
        </Modal>
    )
};
export default ImageModal;