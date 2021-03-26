import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';

const authService = new AuthService();
const imageUploader = new ImageUploader();

//컴포넌트인 props는 보통 대문자로 시작하며 전달시 맨앞에 쓰자.(key있으면 그 다음)
const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);
//이렇게 하면 조금더 확장 가능한 컴포넌트가 된다. 다양한 서비스를 prop으로 말단에 있는 ImageFileInput 컴포넌트에 전달하려면 계속 여러가지 prop을 여기서 부터 전달해 내려가야 하기 때문에 FileInput이라는 것을 만들어서 props들을 받아서 ImageFileInput을 만들어 한번에 전달해 내려간다. 
//필수적으로 필요한 prop은 작성해서 명시하고, 나머지는 props으로 전달해주자.

//장점: 쓸데 없이 많은 서비스를 전달하지 않아도 된다. 나중에 FileInput이 더 많은 서비스를 필요로 한다면 여기에서만 수정하면 된다. 고로 심플하게 디펜던시 인젝션을 할 수 있다.

//확장성이 안좋은 예:
//const FileInput=<ImageFileInput imageUpLoader={imageUploader} />  ->다른 prop을 전달할 수 없게됨
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById('root')
);
