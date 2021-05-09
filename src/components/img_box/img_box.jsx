import React, { useState } from 'react';
import styles from './img_box.module.css';

const ImgBox = ({ onChangeAvatar }) => {
    const [avatar, setAvatar] = useState({
        src: '',
        color: 'white',
    });
    const chooseAvatar = (e) => {
        setAvatar({
            ...avatar,
            src: e.target.src,
        })
    }
    const chooseColor = (e) => {
        setAvatar({
            ...avatar,
            color: e.target.name
        })
    }
    const goBack = () => {
        onChangeAvatar(false, avatar);
    }
    return (
        <section className={styles.avatarPicker}>
            <div className={styles.avatarBox}>
                <img onClick={chooseAvatar} className={`${styles.avatar} ${avatar.color}`} src="images/1.png" alt="avatar" />
                <img onClick={chooseAvatar} className={`${styles.avatar} ${avatar.color}`} src="images/2.png" alt="avatar" />
                <img onClick={chooseAvatar} className={`${styles.avatar} ${avatar.color}`} src="images/3.png" alt="avatar" />
                <img onClick={chooseAvatar} className={`${styles.avatar} ${avatar.color}`} src="images/4.png" alt="avatar" />
                <img onClick={chooseAvatar} className={`${styles.avatar} ${avatar.color}`} src="images/5.png" alt="avatar" />
                <img onClick={chooseAvatar} className={`${styles.avatar} ${avatar.color}`} src="images/6.png" alt="avatar" />
                <img onClick={chooseAvatar} className={`${styles.avatar} ${avatar.color}`} src="images/7.png" alt="avatar" />
                <img onClick={chooseAvatar} className={`${styles.avatar} ${avatar.color}`} src="images/8.png" alt="avatar" />
            </div>
            <div className={styles.palette}>
                <div name="sky" className={styles.sky} onClick={chooseColor}></div>
                <div name="gray" className={styles.gray} onClick={chooseColor}></div>
                <div name="orange" className={styles.orange} onClick={chooseColor}></div>
                <div name="green" className={styles.green} onClick={chooseColor}></div>
                <div name="pink" className={styles.pink} onClick={chooseColor}></div>
                <button className={styles.complete} onClick={goBack}>Complete!</button>
                <button className={styles.back} onClick={goBack}><i className="fas fa-arrow-circle-left"></i></button>
            </div>
        </section>
    );
};

export default ImgBox;