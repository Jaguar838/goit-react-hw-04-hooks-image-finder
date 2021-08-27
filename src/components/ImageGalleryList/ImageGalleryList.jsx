import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ImageGalleryItem from '../ImageGalleryItem';
import css from './ImageGalleryList.module.scss';

const ImageGalleryList = ({ images, modalImage }) => {
    return (
        <ul className={css.ImageGalleryList}>
            {images?.map(({ id, webformatURL, tags, largeImageURL }) => {
                return (
                    <ImageGalleryItem
                        key={uuidv4()}
                        webformatURL={webformatURL}
                        tags={tags}
                        largeImageURL={largeImageURL}
                        modalImage={modalImage}
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
