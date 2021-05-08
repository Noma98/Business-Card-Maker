import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
    const { name, company, phone, email, message, theme, fileName } = card;
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
            fileName: '✔ uploaded',
            fileURL: file.url,
        })
    };
    const setDefault = (e) => {
        e.preventDefault();
        updateCard({
            ...card,
            fileName: '',
            fileURL: '',
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
                placeholder="Name"
                autocomplete="off"
            />
            <input
                className={styles.input}
                type="text"
                name="company"
                value={company}
                onChange={onChange}
                placeholder="Company"
                autocomplete="off"
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
                name="phone"
                value={phone}
                onChange={onChange}
                placeholder="Phone Number"
                autocomplete="off"
            />
            <input
                className={styles.input}
                type="text"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="E-mail"
                autocomplete="off"
            />
            <textarea
                className={styles.textarea}
                name="message"
                value={message}
                onChange={onChange}
            ></textarea>
            <div className={styles.file}>
                <FileInput name={fileName} onFileChange={onFileChange} />
                <button
                    className={styles.return}
                    onClick={setDefault}
                >
                    <i class="fas fa-undo-alt"></i>
                </button>
                <button className={styles.gallery}>
                    <i class="fas fa-images"></i>
                </button>
            </div>
            <Button name='Delete' onClick={onsubmit} />
        </form >
    );
};

export default CardEditForm;