import React, { useState } from 'react';
import styles from './img_box.module.css';

const ImgBox = ({ onChangeAvatar }) => {
    const [avatar, setAvatar] = useState({
        src: null,
        color: 'white',
        prevSelect: '',
        select: {
            '1': '',
            '2': '',
            '3': '',
            '4': '',
            '5': '',
            '6': '',
            '7': '',
            '8': '',
        }
    });
    const chooseAvatar = (e) => {
        if (avatar.prevSelect === e.target.id) {
            setAvatar({
                ...avatar,
                src: null,
                prevSelect: '',
                select: {
                    ...avatar.select,
                    [e.target.id]: '',
                }
            })
        } else if (!avatar.prevSelect) {
            setAvatar({
                ...avatar,
                src: e.target.src,
                prevSelect: e.target.id,
                select: {
                    ...avatar.select,
                    [e.target.id]: styles.selected,
                }
            })
        } else {
            setAvatar({
                ...avatar,
                src: e.target.src,
                prevSelect: e.target.id,
                select: {
                    ...avatar.select,
                    [avatar.prevSelect]: '',
                    [e.target.id]: styles.selected,
                }
            })
        }
    }

    const chooseColor = (e) => {
        setAvatar({
            ...avatar,
            color: getColor(e.target.id)
        })
    }
    const returnValue = () => {
        onChangeAvatar(false, avatar);
    }
    const goBack = () => {
        onChangeAvatar(false, null);
    }
    return (
        <section className={styles.avatarPicker}>
            <div className={styles.avatarBox}>
                {Object.keys(avatar.select).map(key => {
                    return <img
                        key={key}
                        id={key}
                        className={`${styles.avatar} ${avatar.color} ${avatar.select[key] && avatar.select[key]}`}
                        src={`images/${key}.png`}
                        alt="avatar"
                        onClick={chooseAvatar}
                    />;
                })}
            </div>
            <div className={styles.palette}>
                <div id="white" className={styles.white} onClick={chooseColor}></div>
                <div id="gray" className={styles.gray} onClick={chooseColor}></div>
                <div id="sky" className={styles.sky} onClick={chooseColor}></div>
                <div id="orange" className={styles.orange} onClick={chooseColor}></div>
                <div id="green" className={styles.green} onClick={chooseColor}></div>
                <div id="pink" className={styles.pink} onClick={chooseColor}></div>
                <button className={styles.btn} onClick={returnValue}>OK</button>
                <button className={styles.btn} onClick={goBack}>Cancel</button>
            </div>
        </section>
    );
};
function getColor(color) {
    switch (color) {
        case 'white':
            return styles.white;
        case 'sky':
            return styles.sky;
        case 'gray':
            return styles.gray;
        case 'orange':
            return styles.orange;
        case 'green':
            return styles.green;
        case 'pink':
            return styles.pink;
        default:
            throw new Error(`unknown color: ${color}`);
    }
}
export default ImgBox;