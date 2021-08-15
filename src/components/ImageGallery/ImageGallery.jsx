import React, { useState, useEffect } from 'react';
import ImageGalleryList from '../ImageGalleryList';
import fetchImg from 'utils/apiService';
import { scroll } from 'utils/scroll';
import { Spinner } from 'UI/Spinner';
import { Button } from 'UI/Button';
// import toast, { Toaster } from 'react-hot-toast';
import Modal from 'UI/Modal';

import css from './ImageGallery.module.scss';

export function ImageGallery({ query }) {
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isModal, setModal] = useState(false);
    const [largeImageURL, setLargeImageURL] = useState(null);
    // showButton: false,

    useEffect(() => {
        if (query) {
            updateStates();
            fetchImages();
            scroll();
        }
    });

    const updateStates = () => {
        setImages([]);
        setCurrentPage(1);
        setError(null);
    };

    const fetchImages = () => {
        const options = {
            query,
            currentPage,
        };

        setLoading(true);

        fetchImg(options)
            .then(
                images => setImages(prevState => [...prevState, ...images]),
                setCurrentPage(prevState => prevState + 1),
            )
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    };

    const toggleModal = () => {
        setModal(prevState => !prevState);
        setLargeImageURL(null);
    };

    const handleModalImage = url => {
        toggleModal();
        setLargeImageURL(url);
    };

    const isButton = !(images.length % 12) && images.length > 0;
    return (
        <>
            {isLoading && <Spinner />}
            {error && <h2 className={css.Error}>{error}</h2>}
            <ImageGalleryList
                images={images}
                onToggleModal={handleModalImage}
            />
            {isButton && (
                <Button onClick={fetchImages} isLoading={isLoading}></Button>
            )}

            {isModal && (
                <Modal onCloseModal={toggleModal()}>
                    <img src={largeImageURL} alt="" />
                </Modal>
            )}
        </>
    );
}
