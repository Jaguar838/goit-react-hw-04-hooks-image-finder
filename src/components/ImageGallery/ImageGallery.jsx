import React, { Component } from 'react';
import ImageGalleryList from '../ImageGalleryList';
import fetchImg from 'utils/apiService';
import { Spinner } from 'UI/Spinner';
import { Button } from 'UI/Button';
import Modal from 'UI/Modal';

import css from './ImageGallery.module.scss';

export class ImageGallery extends Component {
    state = {
        images: [],
        currentPage: 1,
        isLoading: false,
        error: null,
        showModal: false,
        largeImageURL: null,
        showButton: false,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.query !== this.props.query) {
            this.setState({ currentPage: 1, images: [], error: null }, () =>
                this.fetchImages(),
            );
        }

        if (prevState.currentPage !== this.state.currentPage) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        }
    }

    fetchImages = () => {
        console.log('fetchImages');
        const { currentPage } = this.state;
        console.log(currentPage, 'currentPage');
        const { query } = this.props;
        const options = {
            query,
            currentPage,
        };

        this.setState({ isLoading: true });

        fetchImg(options)
            .then(images =>
                this.setState(prevState => ({
                    images: [...prevState.images, ...images],
                    currentPage: prevState.currentPage + 1,
                })),
            )
            .catch(err => this.setState({ err }))
            .finally(() => this.setState({ isLoading: false }));
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }));
        this.setState({ largeImageURL: null });
    };

    handleModalImage = url => {
        this.toggleModal();
        this.setState({ largeImageURL: url });
    };

    render() {
        const { showModal, images, error, isLoading, largeImageURL } =
            this.state;
        const showButton = images.length > 0;
        return (
            <>
                {isLoading && <Spinner />}
                {error && <h2>{error}</h2>}
                {error && <p className={css.Error}>{error}</p>}
                <ImageGalleryList
                    images={images}
                    onToggleModal={this.handleModalImage}
                />
                {showButton && (
                    <Button
                        onClick={this.fetchImages}
                        isLoading={isLoading}
                    ></Button>
                )}

                {showModal && (
                    <Modal onCloseModal={this.toggleModal}>
                        <img src={largeImageURL} alt="" />
                    </Modal>
                )}
            </>
        );
    }
}
