import React from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryList.module.scss';

const ImageGalleryItem = ({
    webformatURL,
    tags,
    largeImageURL,
    onToggleModal,
}) => {
    return (
        <li className={css.ImageGalleryItem}>
            <img
                className={css.ImageGalleryItem_image}
                src={webformatURL}
                alt={tags}
                data-source={largeImageURL}
                onClick={() => onToggleModal(largeImageURL)}
            />
        </li>
    );
};

const ImageGalleryList = ({ images, onToggleModal }) => {
    console.log('onToggleModa', onToggleModal);
    return (
        <ul className={css.ImageGalleryList}>
            {images?.map(({ id, webformatURL, tags, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    tags={tags}
                    largeImageURL={largeImageURL}
                    onClickImg={onToggleModal}
                />
            ))}
        </ul>
    );
};

ImageGalleryList.propTypes = {
    images: PropTypes.array.isRequired,
    onToggleModa: PropTypes.func.isRequired,
};

export default ImageGalleryList;
