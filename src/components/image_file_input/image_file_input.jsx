import React, { useRef } from 'react';
import styles from './image_file_input.module.css';
const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
    const inputRef = useRef();
    const onBtnClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    };
    // const onChange = (event) => {
    //     //imageUploader를 async로 작성했기 때문에 Promise가 리턴됨
    //     imageUploader.upload(event.target.files[0]).then(console.log);
    // };
    const onChange = async event => {
        //위에 처럼 then then..해서 써도 되고 아래처럼 async 써서 비동기적으로 해도 됨
        imageUploader.upload(event.target.files[0]).then(console.log);
        const uploaded = await imageUploader.upload(event.target.files[0]);//이것이 다 될 때까지 기다렸다가 uploaded에 할당!
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url
        })
    };
    return <div className={styles.container}>
        <input
            ref={inputRef}
            className={styles.input}
            type="file"
            accept="image/*" //input의 event.target.files 하면 나오는 object중 type: "image/png"이런식으로 데이터를 가지고 있어서 다음과 같이 작성함
            name="file"
            onChange={onChange}
        />
        <button className={styles.btn} onClick={onBtnClick}>
            {name || 'No file'}
        </button>
    </div>;
};

export default ImageFileInput;