import React from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryList.module.scss';

const ImageGalleryItem = ({
    webformatURL,
    tags,
    largeImageURL,
    modalImage,
}) => {
    return (
        <li className={css.ImageGalleryItem}>
            <img
                className={css.ImageGalleryItem_image}
                src={webformatURL}
                alt={tags}
                data-source={largeImageURL}
                onClick={() => modalImage(largeImageURL)}
            />
        </li>
    );
};

const ImageGalleryList = ({ images, modalImage }) => {
    console.log(modalImage);
    return (
        <ul className={css.ImageGalleryList}>
            {images?.map(({ id, webformatURL, tags, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    tags={tags}
                    largeImageURL={largeImageURL}
                    onClickImg={modalImage}
                />
            ))}
        </ul>
    );
};

ImageGalleryList.propTypes = {
    images: PropTypes.array.isRequired,
    modalImage: PropTypes.func.isRequired,
};

export default ImageGalleryList;
