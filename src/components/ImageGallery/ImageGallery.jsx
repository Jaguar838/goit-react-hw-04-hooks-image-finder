import React, { useState, useEffect } from 'react';
import ImageGalleryList from '../ImageGalleryList';
import fetchImg from 'utils/apiService';
import scroll from 'utils/scroll';
import { Spinner } from 'UI/Spinner';
import { Button } from 'UI/Button';
import Modal from 'UI/Modal';

import css from './ImageGallery.module.scss';

export function ImageGallery({ query }) {
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
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

        setIsLoading(true);

        fetchImg(options)
            .then(
                images => setImages(prevState => [...prevState, ...images]),
                setCurrentPage(prevState => prevState + 1),
            )
            .catch(err => setError(err))
            .finally(() => setIsLoading(false));
    };

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
        setLargeImageURL(null);
    };

    const handleModalImage = url => {
        toggleModal();
        setLargeImageURL(url);
    };

    const showButton = images.length === 12;
    return (
        <>
            {isLoading && <Spinner />}
            {error && <h2>{error}</h2>}
            {error && <p className={css.Error}>{error}</p>}
            <ImageGalleryList
                images={images}
                onToggleModal={handleModalImage}
            />
            {showButton && (
                <Button onClick={fetchImages} isLoading={isLoading}></Button>
            )}

            {showModal && (
                <Modal onCloseModal={toggleModal()}>
                    <img src={largeImageURL} alt="" />
                </Modal>
            )}
        </>
    );
}
