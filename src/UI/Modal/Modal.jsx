import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onCloseModal();
        }
    };

    handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            this.props.onCloseModal();
        }
    };

    render() {
        return createPortal(
            <div className={css.backdrop} onClick={this.handleBackdropClick}>
                <div className={css.modal}>{this.props.children}</div>
            </div>,
            modalRoot,
        );
    }
}

Modal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
