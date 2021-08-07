import React, { useState } from 'react';

import { Layout } from 'UI/Layout';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';

export default function App() {
    const [query, setQuery] = useState('');

    const handleSubmitSearchbar = query => {
        setQuery(query);
    };
    return (
        <Layout>
            <Searchbar onSubmit={handleSubmitSearchbar} />
            <ImageGallery query={query} />
        </Layout>
    );
}
