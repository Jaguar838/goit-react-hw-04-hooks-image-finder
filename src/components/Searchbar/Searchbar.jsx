import React, { Component } from 'react';

import PropTypes from 'prop-types';
import css from './Searchbar.module.scss';
import toast, { Toaster } from 'react-hot-toast';

const INICIAL_STATE = {
    query: '',
};

export class Searchbar extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = INICIAL_STATE;

    handleChangeSearch = ({ target }) => {
        this.setState({ query: target.value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        const { query } = this.state;
        const { onSubmit } = this.props;
        if (query.trim() === '') {
            toast.error('Введите поисковый запрос', {
                position: 'top-center',
            });
            return;
        }
        onSubmit(query);
        this.resetSearch();
    };

    resetSearch = () => {
        this.setState(INICIAL_STATE);
    };

    render() {
        const { query } = this.state;
        return (
            <header className={css.Searchbar}>
                <form onSubmit={this.handleSubmit} className={css.SearchForm}>
                    <button type="submit" className={css.SearchForm_button}>
                        <span className={css.SearchForm_button_label}>
                            Search
                        </span>
                    </button>
                    <input
                        className={css.SearchForm_input}
                        type="text"
                        placeholder="Search images and photos"
                        onChange={this.handleChangeSearch}
                        value={query}
                    />
                </form>
                <Toaster />
            </header>
        );
    }
}
