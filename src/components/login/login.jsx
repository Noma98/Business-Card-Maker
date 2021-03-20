import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
    const history = useHistory();
    const goToMaker = userId => {
        history.push({
            pathname: '/maker',
            state: { id: userId },
        });
    }
    const onLogin = event => {
        authService
            .login(event.currentTarget.textContent)
            .then(data => goToMaker(data.user.uid));
    };
    useEffect(() => {
        authService.onAuthChange(user => {
            //사용자가 로그인을 했다면 user라는 데이터가 있고, 안했다면 user는 null임
            user && goToMaker(user.uid)
        })
    });
    // const handleLogoout = event => {

    // }
    return (
        <section className={styles.login}>
            <Header />
            <section>
                <h1>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>Google</button>
                    </li>
                    <li className={styles.item} >
                        <button className={styles.button} onClick={onLogin}>Github</button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    );
};

export default Login;