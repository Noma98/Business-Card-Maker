import firebaseApp from './firebase';

class CardRepository {
    syncCard(userId, onUpdate) {
        const ref = firebaseApp.database().ref(`${userId}/cards`);
        ref.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
        })
        return () => ref.off;
    }
    saveCard(userId, card) {
        //ref를 이용해 저장하고자 하는 경로를 지정할 수 있고, 거기에 set을 이용해 object를 전달하면 됨
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
    }
    removeCard(userId, card) {
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
    }
}
export default CardRepository;