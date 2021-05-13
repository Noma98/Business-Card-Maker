import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService, cardRepository }) => {
    const history = useHistory();
    const historyState = history.location.state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id);
    //historyState는 login과 같은 컴포넌트를 통해서 왔다면 값이 있을 거고, 다른 데서 왔으면 없을 수도 있음
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId) {
            return;
        }
        const stopSync = cardRepository.syncCard(userId, value => {
            setCards(value);
        });
        return () => stopSync();
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