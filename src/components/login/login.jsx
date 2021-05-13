import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import styles from './login.module.css';

const Login = ({ authService }) => {
    const history = useHistory();
    const goToMaker = (userId, anonymous) => {
        history.push({
            pathname: '/maker',
            state: {
                id: userId,
                anonymous: anonymous || false,
            },
        });
    }
    const onLogin = event => {
        authService
            .login(event.currentTarget.textContent)
            .then(data => goToMaker(data.user.uid));
    };
    const onLoginAnonymously = () => {
        authService.loginAnonymously().then(alert("❗ WARNING \n\nNon-member login doesn't save the changed data. \nSo, We recommend you log in with Google or GitHub."));
    }
    useEffect(() => {
        authService.onAuthChange(user => {
            //사용자가 로그인을 했다면 user라는 데이터가 있고, 안했다면 user는 null임
            user && goToMaker(user.uid)
        })
    });
    return (
        <div className={styles.background}>
            <section className={styles.login}>
                <h1 className={styles.title}>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}><img className={styles.logo} src="images/google.png" alt="google" />Google</button>
                    </li>
                    <li className={styles.item} >

                        <button className={styles.button} onClick={onLogin}>
                            <img className={styles.logo} src="images/github.png" alt="github" />Github</button>
                    </li>
                    <li className={styles.item} >
                        <button className={styles.button} onClick={onLoginAnonymously}>
                            Non-Member</button>
                    </li>
                </ul>
                <Footer />
            </section>
        </div>
    );
};

export default Login;