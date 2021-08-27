import React, { useState } from 'react';

import css from './Searchbar.module.scss';
import toast, { Toaster } from 'react-hot-toast';

export const Searchbar = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');
    // const handleChangeSearch = event => setQuery(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        if (searchQuery.trim() === '') {
            toast.error('Введите поисковый запрос', {
                position: 'top-center',
            });
            return;
        }
        onSubmit(searchQuery);
        resetSearch();
    };

    const resetSearch = () => {
        setSearchQuery('');
    };

    return (
        <header className={css.Searchbar}>
            <form onSubmit={handleSubmit} className={css.SearchForm}>
                <button type="submit" className={css.SearchForm_button}>
                    <span className={css.SearchForm_button_label}>Search</span>
                </button>
                <input
                    className={css.SearchForm_input}
                    type="text"
                    placeholder="Search images and photos"
                    onChange={event => setSearchQuery(event.target.value)}
                    value={searchQuery}
                />
            </form>
            <Toaster />
        </header>
    );
};
