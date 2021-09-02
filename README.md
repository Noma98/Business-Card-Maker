<h1 align="center"><b>Noma - Business Card Maker</b></h1>
<p align="center">
<img src="https://img.shields.io/badge/made by-Noma-red">
<img src="https://img.shields.io/badge/React-17.0.2-blue">
<img src="https://img.shields.io/badge/Open%20Source-%F0%9F%A7%A1-brightgreen">
</p>
<img width="100%" alt="thumbnail" src="https://user-images.githubusercontent.com/69305320/118351680-3263f480-b598-11eb-8185-562466727427.png">  

<h2 align="center"><a href="https://merry-business-card-maker.netlify.app/"><b> Live Demo (Click Here!🌟) </b></a></h2>    

# **📝 Description**
Noma 프로젝트는 Firebase와 React를 사용하여 만든 명함 제작 웹 어플리케이션입니다. Firebase로 소셜 로그인을 구현하였고 여기서 얻어온 UUID로 사용자를 구분하여 Realtime Database에 명함을 CRUD 할 수 있도록 만들었습니다. 또한 Cloudinary를 통해 사용자가 원하는 이미지를 서버에 업로드하여 언제 어디서든 이미지를 볼 수 있도록 만들었고, 딱히 쓸 이미지가 없는 사용자를 위해 간단하게 선택해서 쓸 수 있는 아바타 박스 기능을 제공합니다. 

### **💻 Development Environment** 
1. Skills: React, React Router, PostCSS
2. Use: Firebase, Cloudinary
3. Deploy: Netlify
4. Period
    - 3/19 ~ 4/4 1차 배포
    - 5/8 ~ 5/13 (게스트 로그인 기능, 카드 검색 기능, 이미지 박스 기능 추가, UI 업데이트, 버그 수정)

## **How to use ❓**
### **1. 먼저 소셜 계정 또는 비회원으로 로그인 하세요!**
📍 로그인 uid을 이용해 저장된 카드 정보를 불러옵니다.
> 비회원으로 로그인하면 서비스는 이용이 가능하나 수정된 데이터가 저장되지 않습니다. 

![login](https://user-images.githubusercontent.com/69305320/118350811-a64fce00-b593-11eb-8d37-54dedbd16670.gif)

### **2. 카드를 생성해 명함 정보를 저장하세요.**
📍 `+` 또는 `delete` 버튼을 클릭해 카드를 생성 및 삭제 할 수 있습니다.

![addAndDelete](https://user-images.githubusercontent.com/69305320/118350831-ba93cb00-b593-11eb-8288-ec331cafb19d.gif)

📍 `Maker`에서 데이터를 수정하면 데이터베이스와 `Preview`에 변경된 정보가 바로 반영됩니다. 

![typing](https://user-images.githubusercontent.com/69305320/118350824-b23b9000-b593-11eb-8084-67c6f422a49e.gif)

📍 Cloudinary를 이용하여 이미지 파일을 업로드할 수 있도록 구현했습니다.

![imageUpload](https://user-images.githubusercontent.com/69305320/118350835-c089ac00-b593-11eb-8692-309f63ac10d8.gif)

📍 적절한 이미지가 없다면 제공된 아바타를 선택해보세요.

![selectAvatar](https://user-images.githubusercontent.com/69305320/118350838-c2536f80-b593-11eb-85a1-5b1ac3372b6e.gif)

📍 뒤로가기를 누르면 다시 기본 이미지로 바꿀 수 있습니다.

![back](https://user-images.githubusercontent.com/69305320/118350849-cc756e00-b593-11eb-91dc-2e9f529020a3.gif)
  
### **3. 찾고 싶은 명함을 검색해보세요!**  
📍 이름을 이용해 검색어를 포함하는 카드를 보여줍니다.

![search](https://user-images.githubusercontent.com/69305320/118350841-c54e6000-b593-11eb-8e95-35c6d280d160.gif)
  
# **🔍 About the project**

> ❗ 아래 코드들은 설명을 위해 필요한 부분만 일부 가져온 것으로, 관련 없는 부분은 `//...`으로 생략하겠습니다.

자세한 코드는 [이곳](https://github.com/MerryHa/youtube/tree/master/src)에서 확인하세요.


### **✅Reat Router**
리액트 라우터를 사용하여 상황에 따라 페이지 이동이 가능하도록 하였습니다.
```jsx
//app.jsx

import React from 'react';
import Login from './components/login/login';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({ FileInput, authService, cardRepository }) {
  return <div className={styles.app}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login authService={authService} />
        </Route>
        <Route path="/maker">
          <Maker
            FileInput={FileInput}
            authService={authService}
            cardRepository={cardRepository}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>;
}
```
### **✅ Firebase 이용하기** 

FirebaseConfig로 Firebase를 외부(사용하는 컴포넌트 안X)에서 initialize 해줍니다. 그리고 전체적인 firebaseApp을 export하기 보다는 이후 쓰일 기능들만을 한 곳에서 정의 후 export해 각 모듈에서 필요한 것을 import 하도록 만들었습니다.
```jsx
//firebase.js

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
   //...
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
```
### **✅ Firebase Authentication**
위의 코드에서 로그인하는데 필요한 provider들을 정의했었기 때문에 이를  import 해서 `singInWithPopup()`, `signInAnonymously()`, `signOut()`을 호출해줍니다. 해당 프로젝트에서는 구글, 깃허브 그리고 익명 로그인을 사용하여 구현했습니다.
```jsx
// auth_service.js

import { firebaseAuth, githubProvider, googleProvider } from './firebase';

class AuthService {
    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return firebaseAuth.signInWithPopup(authProvider);
    }
    loginAnonymously() {
        return firebaseAuth.signInAnonymously();
    }
    logout() {
        firebaseAuth.signOut();
    }
    onAuthChange(onUserChanged) {
        firebaseAuth.onAuthStateChanged(user => {
            onUserChanged(user);
        })
    }
    getProvider(providerName) {
        switch (providerName) {
            case 'Google':
                return googleProvider;
            case 'Github':
                return githubProvider;
            default:
                throw new Error(`not supported provider: ${providerName}`);
        }
    }
}
export default AuthService;
```
### **✅ Firebase Realtime Database**
데이터베이스에 관련된 모든 것을 card_repository.js에서 class의 멤버함수로 정의해줍니다. 

`saveCard`와 `removeCard` 함수는 데이터베이스의 원하는 경로(`ref`)에 데이터를 저장(`set`)하고 삭제(`delete`)해줍니다.

그리고 `syncCard` 함수는 `ref`에 리스너를 등록해 변경사항을 수신(`.on`)하고 읽어(`.val()`)와 데이터가 존재하면 등록된 콜백함수를 호출해줍니다.  이는 추후 리스너 제거를 위해 `.off`함수를 리턴해주고 해당 함수를 받아온 곳(useEffect 안)에서 cleanup 함수로 등록(🌈부분)합니다.

       
```jsx
//card_repository.js

import { firebaseDatabase } from './firebase';

class CardRepository {
    syncCard(userId, onUpdate) {
        const ref = firebaseDatabase.ref(`${userId}/cards`);
        ref.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
        })
        return () => ref.off;
    }
    saveCard(userId, card) {
     firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
    }
    removeCard(userId, card) {
      firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
    }
}
export default CardRepository;
```

### **✅ Cloudinary 이용하기**


사용자로부터 파일 인자를 받아서 서버에 업로드하고, 업로드가 완료되면 서버에 있는 이미지 URL을 리턴합니다. 이후 받아온 URL로 Preview 명함에서 이미지를 보여줍니다.

```jsx
class ImageUploader {
    async upload(file) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "adtghtzy");
        const result = await fetch(
            "https://api.cloudinary.com/v1_1/qdiuyd3/upload",
            {
                method: "POST",
                body: data
            }
        );
        return await result.json();
    }
}
export default ImageUploader;
```

### **✅ Dependency Injection** 

데이터 통신을 `App` 컴포넌트로부터 분리시키기 위해 `AuthService`, `CardRepository`, `ImageUploader` 클래스를 외부에서 생성하여 컴포넌트로 주입하였습니다.
```jsx
// index.js

import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();

const FileInput = memo(props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepository={cardRepository} />
  </React.StrictMode>,
  document.getElementById('root')
);
```

### **✅ 실제로 사용되는 곳 - Maker 컴포넌트**
데이터베이스에 저장된(될) 명함 데이터를 state로 가지고 있는 곳이 Maker 컴포넌트입니다. 그렇기 때문에 로그인 및 데이터베이스 관련 클래스들을 props으로 전달받아와 각 멤버함수들을 사용해 로그인 및 카드 정보를 수정해줍니다.

```jsx
// maker.jsx

//...
const Maker = ({ FileInput, authService, cardRepository }) => {
    const history = useHistory();
    const historyState = history.location.state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId) {
            return;
        }
        const stopSync = cardRepository.syncCard(userId, value => {
            setCards(value);
        });
        return () => stopSync(); //🌈
    }, [userId, cardRepository]);

    useEffect(() => {
        authService.onAuthChange(user => {
            if (user) {
                setUserId(user.uid);
            } else {
                history.push('/');
            }
            setLoading(false);
        });
    }, [authService, history]);

    const onLogout = useCallback(() => {
        authService.logout();
    }, [authService]);

    const createOrUpdateCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId, card);
    };

    const deleteCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId, card);
    };

    return (
        <section className={styles.maker}>
            {loading && <div className={styles.loadingContainer}><div className={styles.loading}></div></div>}
            {!loading && <>
                <Header onLogout={onLogout} />
                <div className={styles.container}>
                    <Editor
                        FileInput={FileInput}
                        cards={cards}
                        addCard={createOrUpdateCard}
                        updateCard={createOrUpdateCard}
                        deleteCard={deleteCard}
                    />
                    <Preview cards={cards} />
                </div>
            </>}
        </section>
    )
};
export default Maker;
```





