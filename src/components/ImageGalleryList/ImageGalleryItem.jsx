import React from 'react';

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
