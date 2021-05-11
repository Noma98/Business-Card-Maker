import React, { useState } from 'react';
import Button from '../button/button';
import ImgBox from '../img_box/img_box';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
    const { name, company, phone, email, message, theme, fileName, color } = card;
    const [avatar, setAvatar] = useState(false);

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
    const onClickGallery = (e) => {
        e.preventDefault();
        onChangeAvatar();
    }
    const onChangeAvatar = (boolean, avatarObject) => {
        setAvatar(boolean || !avatar);
        avatarObject && updateCard({
            ...card,
            fileName: '',
            fileURL: avatarObject.src,
            color: avatarObject.color,
        })
    }
    return (
        <>
            <form className={styles.form}>
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    placeholder="Name"
                    autoComplete="off"
                />
                <input
                    className={styles.input}
                    type="text"
                    name="company"
                    value={company}
                    onChange={onChange}
                    placeholder="Company"
                    autoComplete="off"
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
                    autoComplete="off"
                />
                <input
                    className={styles.input}
                    type="text"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="E-mail"
                    autoComplete="off"
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
                    <button className={styles.gallery} onClick={onClickGallery}>
                        <i class="fas fa-images"></i>
                    </button>
                </div>
                <Button name='Delete' onClick={onsubmit} />
            </form >
            {avatar && <ImgBox onChangeAvatar={onChangeAvatar} />}
        </>
    );
};

export default CardEditForm;