<h1 align="center"><b>Noma - Business Card Maker</b></h1>
<p align="center">
<img src="https://img.shields.io/badge/madeย by-Noma-red">
<img src="https://img.shields.io/badge/React-17.0.2-blue">
<img src="https://img.shields.io/badge/Open%20Source-%F0%9F%A7%A1-brightgreen">
</p>
<img width="100%" alt="thumbnail" src="https://user-images.githubusercontent.com/69305320/118351680-3263f480-b598-11eb-8185-562466727427.png">  

<h2 align="center"><a href="https://merry-business-card-maker.netlify.app/"><b> Live Demo (Click Here!๐) </b></a></h2>    

# **๐ Description**
Noma ํ๋ก์ ํธ๋ Firebase์ React๋ฅผ ์ฌ์ฉํ์ฌ ๋ง๋  ๋ชํจ ์ ์ ์น ์ดํ๋ฆฌ์ผ์ด์์๋๋ค. Firebase๋ก ์์ ๋ก๊ทธ์ธ์ ๊ตฌํํ์๊ณ  ์ฌ๊ธฐ์ ์ป์ด์จ UUID๋ก ์ฌ์ฉ์๋ฅผ ๊ตฌ๋ถํ์ฌ Realtime Database์ ๋ชํจ์ CRUD ํ  ์ ์๋๋ก ๋ง๋ค์์ต๋๋ค. ๋ํ Cloudinary๋ฅผ ํตํด ์ฌ์ฉ์๊ฐ ์ํ๋ ์ด๋ฏธ์ง๋ฅผ ์๋ฒ์ ์๋ก๋ํ์ฌ ์ธ์  ์ด๋์๋  ์ด๋ฏธ์ง๋ฅผ ๋ณผ ์ ์๋๋ก ๋ง๋ค์๊ณ , ๋ฑํ ์ธ ์ด๋ฏธ์ง๊ฐ ์๋ ์ฌ์ฉ์๋ฅผ ์ํด ๊ฐ๋จํ๊ฒ ์ ํํด์ ์ธ ์ ์๋ ์๋ฐํ ๋ฐ์ค ๊ธฐ๋ฅ์ ์ ๊ณตํฉ๋๋ค. 

### **๐ป Developmentย Environment**ย 
1. Skills: React, React Router, PostCSS
2. Use: Firebase, Cloudinary
3. Deploy: Netlify
4. Period
    - 3/19 ~ 4/4 1์ฐจ ๋ฐฐํฌ
    - 5/8 ~ 5/13 (๊ฒ์คํธ ๋ก๊ทธ์ธ ๊ธฐ๋ฅ, ์นด๋ ๊ฒ์ ๊ธฐ๋ฅ, ์ด๋ฏธ์ง ๋ฐ์ค ๊ธฐ๋ฅ ์ถ๊ฐ, UI ์๋ฐ์ดํธ, ๋ฒ๊ทธ ์์ )

## **How to use โ**
### **1. ๋จผ์  ์์ ๊ณ์  ๋๋ ๋นํ์์ผ๋ก ๋ก๊ทธ์ธ ํ์ธ์!**
๐ ๋ก๊ทธ์ธ uid์ ์ด์ฉํด ์ ์ฅ๋ ์นด๋ ์ ๋ณด๋ฅผ ๋ถ๋ฌ์ต๋๋ค.
> ๋นํ์์ผ๋ก ๋ก๊ทธ์ธํ๋ฉด ์๋น์ค๋ ์ด์ฉ์ด ๊ฐ๋ฅํ๋ ์์ ๋ ๋ฐ์ดํฐ๊ฐ ์ ์ฅ๋์ง ์์ต๋๋ค. 

![login](https://user-images.githubusercontent.com/69305320/118350811-a64fce00-b593-11eb-8d37-54dedbd16670.gif)

### **2. ์นด๋๋ฅผ ์์ฑํด ๋ชํจ ์ ๋ณด๋ฅผ ์ ์ฅํ์ธ์.**
๐ `+` ๋๋ `delete` ๋ฒํผ์ ํด๋ฆญํด ์นด๋๋ฅผ ์์ฑ ๋ฐ ์ญ์  ํ  ์ ์์ต๋๋ค.

![addAndDelete](https://user-images.githubusercontent.com/69305320/118350831-ba93cb00-b593-11eb-8288-ec331cafb19d.gif)

๐ `Maker`์์ ๋ฐ์ดํฐ๋ฅผ ์์ ํ๋ฉด ๋ฐ์ดํฐ๋ฒ ์ด์ค์ `Preview`์ ๋ณ๊ฒฝ๋ ์ ๋ณด๊ฐ ๋ฐ๋ก ๋ฐ์๋ฉ๋๋ค. 

![typing](https://user-images.githubusercontent.com/69305320/118350824-b23b9000-b593-11eb-8084-67c6f422a49e.gif)

๐ Cloudinary๋ฅผ ์ด์ฉํ์ฌ ์ด๋ฏธ์ง ํ์ผ์ ์๋ก๋ํ  ์ ์๋๋ก ๊ตฌํํ์ต๋๋ค.

![imageUpload](https://user-images.githubusercontent.com/69305320/118350835-c089ac00-b593-11eb-8692-309f63ac10d8.gif)

๐ ์ ์ ํ ์ด๋ฏธ์ง๊ฐ ์๋ค๋ฉด ์ ๊ณต๋ ์๋ฐํ๋ฅผ ์ ํํด๋ณด์ธ์.

![selectAvatar](https://user-images.githubusercontent.com/69305320/118350838-c2536f80-b593-11eb-85a1-5b1ac3372b6e.gif)

๐ ๋ค๋ก๊ฐ๊ธฐ๋ฅผ ๋๋ฅด๋ฉด ๋ค์ ๊ธฐ๋ณธ ์ด๋ฏธ์ง๋ก ๋ฐ๊ฟ ์ ์์ต๋๋ค.

![back](https://user-images.githubusercontent.com/69305320/118350849-cc756e00-b593-11eb-91dc-2e9f529020a3.gif)
  
### **3. ์ฐพ๊ณ  ์ถ์ ๋ชํจ์ ๊ฒ์ํด๋ณด์ธ์!**  
๐ ์ด๋ฆ์ ์ด์ฉํด ๊ฒ์์ด๋ฅผ ํฌํจํ๋ ์นด๋๋ฅผ ๋ณด์ฌ์ค๋๋ค.

![search](https://user-images.githubusercontent.com/69305320/118350841-c54e6000-b593-11eb-8e95-35c6d280d160.gif)
  
# **๐ Aboutย theย project**

> โ ์๋ ์ฝ๋๋ค์ ์ค๋ช์ ์ํด ํ์ํ ๋ถ๋ถ๋ง ์ผ๋ถ ๊ฐ์ ธ์จ ๊ฒ์ผ๋ก, ๊ด๋ จ ์๋ ๋ถ๋ถ์ `//...`์ผ๋ก ์๋ตํ๊ฒ ์ต๋๋ค.

์์ธํย ์ฝ๋๋ย [์ด๊ณณ](https://github.com/MerryHa/youtube/tree/master/src)์์ ํ์ธํ์ธ์.


### **โReat Router**
๋ฆฌ์กํธ ๋ผ์ฐํฐ๋ฅผ ์ฌ์ฉํ์ฌ ์ํฉ์ ๋ฐ๋ผ ํ์ด์ง ์ด๋์ด ๊ฐ๋ฅํ๋๋ก ํ์์ต๋๋ค.
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
### **โ Firebase ์ด์ฉํ๊ธฐ** 

FirebaseConfig๋ก Firebase๋ฅผ ์ธ๋ถ(์ฌ์ฉํ๋ ์ปดํฌ๋ํธ ์X)์์ initialize ํด์ค๋๋ค. ๊ทธ๋ฆฌ๊ณ  ์ ์ฒด์ ์ธ firebaseApp์ exportํ๊ธฐ ๋ณด๋ค๋ ์ดํ ์ฐ์ผ ๊ธฐ๋ฅ๋ค๋ง์ ํ ๊ณณ์์ ์ ์ ํ exportํด ๊ฐ ๋ชจ๋์์ ํ์ํ ๊ฒ์ import ํ๋๋ก ๋ง๋ค์์ต๋๋ค.
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
### **โ Firebase Authentication**
์์ ์ฝ๋์์ ๋ก๊ทธ์ธํ๋๋ฐ ํ์ํ provider๋ค์ ์ ์ํ์๊ธฐ ๋๋ฌธ์ ์ด๋ฅผ  import ํด์ `singInWithPopup()`, `signInAnonymously()`, `signOut()`์ ํธ์ถํด์ค๋๋ค. ํด๋น ํ๋ก์ ํธ์์๋ ๊ตฌ๊ธ, ๊นํ๋ธ ๊ทธ๋ฆฌ๊ณ  ์ต๋ช ๋ก๊ทธ์ธ์ ์ฌ์ฉํ์ฌ ๊ตฌํํ์ต๋๋ค.
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
### **โ Firebase Realtime Database**
๋ฐ์ดํฐ๋ฒ ์ด์ค์ ๊ด๋ จ๋ ๋ชจ๋  ๊ฒ์ card_repository.js์์ class์ ๋ฉค๋ฒํจ์๋ก ์ ์ํด์ค๋๋ค. 

`saveCard`์ `removeCard` ํจ์๋ ๋ฐ์ดํฐ๋ฒ ์ด์ค์ ์ํ๋ ๊ฒฝ๋ก(`ref`)์ ๋ฐ์ดํฐ๋ฅผ ์ ์ฅ(`set`)ํ๊ณ  ์ญ์ (`delete`)ํด์ค๋๋ค.

๊ทธ๋ฆฌ๊ณ  `syncCard` ํจ์๋ `ref`์ ๋ฆฌ์ค๋๋ฅผ ๋ฑ๋กํด ๋ณ๊ฒฝ์ฌํญ์ ์์ (`.on`)ํ๊ณ  ์ฝ์ด(`.val()`)์ ๋ฐ์ดํฐ๊ฐ ์กด์ฌํ๋ฉด ๋ฑ๋ก๋ ์ฝ๋ฐฑํจ์๋ฅผ ํธ์ถํด์ค๋๋ค.  ์ด๋ ์ถํ ๋ฆฌ์ค๋ ์ ๊ฑฐ๋ฅผ ์ํด `.off`ํจ์๋ฅผ ๋ฆฌํดํด์ฃผ๊ณ  ํด๋น ํจ์๋ฅผ ๋ฐ์์จ ๊ณณ(useEffect ์)์์ cleanup ํจ์๋ก ๋ฑ๋ก(๐๋ถ๋ถ)ํฉ๋๋ค.

       
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

### **โ Cloudinary ์ด์ฉํ๊ธฐ**


์ฌ์ฉ์๋ก๋ถํฐ ํ์ผ ์ธ์๋ฅผ ๋ฐ์์ ์๋ฒ์ ์๋ก๋ํ๊ณ , ์๋ก๋๊ฐ ์๋ฃ๋๋ฉด ์๋ฒ์ ์๋ ์ด๋ฏธ์ง URL์ ๋ฆฌํดํฉ๋๋ค. ์ดํ ๋ฐ์์จ URL๋ก Preview ๋ชํจ์์ ์ด๋ฏธ์ง๋ฅผ ๋ณด์ฌ์ค๋๋ค.

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

### **โ Dependencyย Injection** 

๋ฐ์ดํฐ ํต์ ์ `App` ์ปดํฌ๋ํธ๋ก๋ถํฐ ๋ถ๋ฆฌ์ํค๊ธฐ ์ํด `AuthService`, `CardRepository`, `ImageUploader` ํด๋์ค๋ฅผ ์ธ๋ถ์์ ์์ฑํ์ฌ ์ปดํฌ๋ํธ๋ก ์ฃผ์ํ์์ต๋๋ค.
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

### **โ ์ค์ ๋ก ์ฌ์ฉ๋๋ ๊ณณ - Maker ์ปดํฌ๋ํธ**
๋ฐ์ดํฐ๋ฒ ์ด์ค์ ์ ์ฅ๋(๋ ) ๋ชํจ ๋ฐ์ดํฐ๋ฅผ state๋ก ๊ฐ์ง๊ณ  ์๋ ๊ณณ์ด Maker ์ปดํฌ๋ํธ์๋๋ค. ๊ทธ๋ ๊ธฐ ๋๋ฌธ์ ๋ก๊ทธ์ธ ๋ฐ ๋ฐ์ดํฐ๋ฒ ์ด์ค ๊ด๋ จ ํด๋์ค๋ค์ props์ผ๋ก ์ ๋ฌ๋ฐ์์ ๊ฐ ๋ฉค๋ฒํจ์๋ค์ ์ฌ์ฉํด ๋ก๊ทธ์ธ ๋ฐ ์นด๋ ์ ๋ณด๋ฅผ ์์ ํด์ค๋๋ค.

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
        return () => stopSync(); //๐
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





