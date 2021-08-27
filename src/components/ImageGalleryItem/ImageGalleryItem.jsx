import React from 'react';
import css from './ImageGalleryItem.module.scss';
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
                data-url={largeImageURL}
                onClick={() => modalImage(largeImageURL)}
            />
        </li>
    );
};
export default ImageGalleryItem;
