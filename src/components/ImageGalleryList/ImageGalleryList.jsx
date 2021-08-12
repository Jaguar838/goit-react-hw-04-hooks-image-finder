import React from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryList.module.scss';

const ImageGalleryItem = ({
    webformatURL,
    tags,
    largeImageURL,
    openModalImage,
}) => {
    return (
        <li className={css.ImageGalleryItem}>
            <img
                className={css.ImageGalleryItem_image}
                src={webformatURL}
                alt={tags}
                data-url={largeImageURL}
                onClick={openModalImage}
            />
        </li>
    );
};

const ImageGalleryList = ({ images, modalImage }) => {
    return (
        <ul className={css.ImageGalleryList}>
            {images?.map(({ id, webformatURL, tags, largeImageURL }) => {
                const openModalImage = () => modalImage(largeImageURL);
                return (
                    <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        tags={tags}
                        largeImageURL={largeImageURL}
                        openModalImage={openModalImage}
                    />
                );
            })}
        </ul>
    );
};

ImageGalleryList.propTypes = {
    images: PropTypes.array.isRequired,
    modalImage: PropTypes.func.isRequired,
};

export default ImageGalleryList;
