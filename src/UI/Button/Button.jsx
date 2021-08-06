import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { Btn } from './Button.style';

const Button = ({ onClick, isLoading }) => (
    <Btn onClick={onClick}>
        <Loader
            type="TailSpin"
            color="#00BFFF"
            height={20}
            width={20}
            visible={isLoading}
        />
        {isLoading ? '' : 'Load more'}
    </Btn>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default Button;
