import React, { useState } from 'react';

import { Layout } from 'UI/Layout';
import { SearchBar } from 'components/SearchBar';
import { ImageGallery } from 'components/ImageGallery';

export default function App() {
    const [query, setQuery] = useState('');

    const handleSubmitSearchbar = query => {
        setQuery(query);
    };
    return (
        <Layout>
            <SearchBar onSubmit={handleSubmitSearchbar} />
            <ImageGallery query={query} />
        </Layout>
    );
}
