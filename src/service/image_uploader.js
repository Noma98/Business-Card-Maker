class ImageUploader {
    async upload(file) {
        const url = "https://api.cloudinary.com/v1_1/dzc3xm7vg/upload";
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "admlhazy");
        const result = await fetch(
            "https://api.cloudinary.com/v1_1/dzc3xm7vg/upload",
            {
                method: "POST",
                body: data
            }
        );
        return await result.json();
    }//사용자로부터 파일이라는 인자를 받아서 파일을 업로드하고 업로드가 완료되면 서버에 있는 이미지 URL을 전달해 줄 것
}
export default ImageUploader;