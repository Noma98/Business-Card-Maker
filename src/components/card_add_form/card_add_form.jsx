import React, { memo } from 'react';
import styles from './card_add_form.module.css';

const CardAddForm = memo(({ onAdd }) => {

    const onAddCard = (event) => {
        event.preventDefault();
        const card = {
            id: Date.now(), //uuid
            name: '',
            company: '',
            theme: "light",
            phone: '',
            email: '',
            message: '',
            fileName: '',
            fileURL: '',
            color: '',
        }
        onAdd(card);
    };
    return (
        <div className={styles.addForm} onClick={onAddCard}>
            <i className="fas fa-plus"></i>
        </div>
    );
});

export default CardAddForm;