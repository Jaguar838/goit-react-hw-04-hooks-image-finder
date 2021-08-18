import React, { useState } from 'react';

import css from './Searchbar.module.scss';
import toast, { Toaster } from 'react-hot-toast';

export const Searchbar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChangeSearch = event => setQuery(event.target.value);

    const handleSubmit = evt => {
        evt.preventDefault();
        const { value } = evt.target;
        if (query.trim() === '') {
            toast.error('Введите поисковый запрос', {
                position: 'top-center',
            });
            return;
        }
        onSubmit(value);
        resetSearch();
    };

    const resetSearch = () => {
        setQuery('');
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
                    onChange={handleChangeSearch}
                    value={query}
                />
            </form>
            <Toaster />
        </header>
    );
};
