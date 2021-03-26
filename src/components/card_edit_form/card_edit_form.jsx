import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
    const { name, company, title, email, message, theme, fileName, fileURL } = card;
    const onChange = (event) => {
        if (event.target == null) {
            return;
        }
        event.preventDefault();
        updateCard({
            ...card,
            [event.target.name]: event.target.value,
        });
    };
    const onsubmit = () => {
        deleteCard(card);
    };
    const onFileChange = file => {
        updateCard({
            ...card,
            fileName: file.name,
            fileURL: file.url,
        })
    };
    return (
        <form className={styles.form}>
            <input
                className={styles.input}
                type="text"
                name="name"
                value={name}
                onChange={onChange}
            />
            <input
                className={styles.input}
                type="text"
                name="company"
                value={company}
                onChange={onChange}
            />
            <select
                className={styles.select}
                name="theme"
                value={theme}
                onChange={onChange}
            >
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input
                className={styles.input}
                type="text"
                name="title"
                value={title}
                onChange={onChange}
            />
            <input
                className={styles.input}
                type="text"
                name="email"
                value={email}
                onChange={onChange}
            />
            <textarea
                className={styles.textarea}
                name="message"
                value={message}
                onChange={onChange}
            ></textarea>
            <div className={styles.fileInput}>
                <FileInput name={fileName} onFileChange={onFileChange} />
            </div>
            <Button name='Delete' onClick={onsubmit} />
        </form>
    );
};

export default CardEditForm;