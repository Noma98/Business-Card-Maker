import React from 'react';
import styles from './image_file_input.module.css';
const ImageFileInput = ({ imageUploader }) => {
    //만약  ImageFileInput이 굉장히 많은 서비스를 prop으로 받는다면 이 제일 말단에 있는 컴포넌트를 위해 App에서 부터 계속 계속 전달해 내려와야 한다. 그러므로 이를 대신하기 위해 ImageFileInput이라는 컴포넌트를 외부에서(index.js)에서 만든 다음에 그것을 대신 전달해 나가면 된다.
    return (
        <button className={styles.button}>Image</button>
    );
};

export default ImageFileInput;