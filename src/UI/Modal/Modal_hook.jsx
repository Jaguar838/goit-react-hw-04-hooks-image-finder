// import React, { useRef, useEffect } from 'react';
// import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
// import css from './Modal.module.css';

// const modalRoot = document.querySelector('#modal-root');

// export default function Modal({ onCloseModal, children }) {
//     // useEffect(() => {
//     //     window.addEventListener('keydown', handleKeyDown);
//     //     return () => {
//     //         window.removeEventListener('keydown', handleKeyDown);
//     //     };
//     // });
//     const ref = useRef();

//     useEffect(
//         () => {
//             function handler(event) {
//                 if (event.code === 'Escape') {
//                     onCloseModal();
//                 }
//             }
//             const listener = event => {
//                 // Do nothing if clicking ref's element or descendent elements
//                 if (!ref.current || ref.current.contains(event.target)) {
//                     return;
//                 }
//                 handler(event);
//             };
//             document.addEventListener('mousedown', listener);
//             document.addEventListener('touchstart', listener);
//             return () => {
//                 document.removeEventListener('mousedown', listener);
//                 document.removeEventListener('touchstart', listener);
//             };
//         },
//         // Add ref and handler to effect dependencies
//         // It's worth noting that because passed in handler is a new ...
//         // ... function on every render that will cause this effect ...
//         // ... callback/cleanup to run every render. It's not a big deal ...
//         // ... but to optimize you can wrap handler in useCallback before ...
//         // ... passing it into this hook.
//         [ref, handler],
//     );
//     // const handleKeyDown = e => {
//     //     if (e.code === 'Escape') {
//     //         onCloseModal();
//     //     }
//     // };

//     const handleBackdropClick = e => {
//         if (e.target === e.currentTarget) {
//             onCloseModal();
//         }
//     };

//     return createPortal(
//         <div ref={ref} className={css.Overlay} onClick={handleBackdropClick}>
//             <div className={css.Modal}>{children}</div>
//         </div>,
//         modalRoot,
//     );
// }

// Modal.propTypes = {
//     onCloseModal: PropTypes.func.isRequired,
// };
