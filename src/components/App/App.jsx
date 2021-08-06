import React, { Component } from 'react';

import { Layout } from 'UI/Layout';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';

export default class App extends Component {
    state = {
        query: '',
    };

    handleSubmitSearchbar = query => {
        this.setState({ query });
    };
    render() {
        const { query } = this.state;
        return (
            <Layout>
                <Searchbar onSubmit={this.handleSubmitSearchbar} />
                <ImageGallery query={query} />
            </Layout>
        );
    }
}
