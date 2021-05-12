import React from 'react';
import styles from './search_form.module.css';

const SearchForm = ({ handleInputChange }) => {
    return (
        <input type="search" className={styles.search} onChange={handleInputChange} placeholder="Search..." />
    );
}

export default SearchForm;