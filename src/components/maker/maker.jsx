import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService, cardRepository }) => {
    const history = useHistory();
    const historyState = history?.location?.state;
    const [cards, setCards] = useState({
        '1': {
            company: "unknown",
            email: "cheezecake@gmail.com",
            id: '1',
            message: "this person is so dangerous.... ",
            name: "Merry 👾",
            phone: "010-1111-2501",
            theme: "colorful",
            fileName: "",
            fileURL: "",
        },
        '2': {
            company: "unknown",
            email: "ellie1004@gmail.com",
            id: '2',
            message: "She is engel...i love her.. ",
            name: "Ellie 🌞",
            phone: "010-1004-1004",
            theme: "light",
            fileName: "",
            fileURL: "",
        }
    });
    const [userId, setUserId] = useState(historyState && historyState.id);
    //historyState는 login과 같은 컴포넌트를 통해서 왔다면 값이 있을 거고, 다른 데서 왔으면 없을 수도 있음
    const onLogout = useCallback(() => {
        authService.logout();
    }, [authService]);
    //useEffect의 좋은점: 해당하는 로직별로 여러개 만들 수 있음
    useEffect(() => {
        if (!userId) {
            return;
        }
        const stopSync = cardRepository.syncCard(userId, value => {
            setCards(value);
        });//함수를 호출하고 그 리턴값을 stopSync에 할당
        return () => stopSync();
    }, [userId, cardRepository]);
    useEffect(() => {
        authService.onAuthChange(user => {
            if (user) {
                setUserId(user.uid);
            } else {
                history.push('/');
            }
        });
    }, [authService, history]);
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
        </section>
    )
};

export default Maker;