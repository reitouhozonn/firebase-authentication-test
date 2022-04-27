import { inject, InjectionKey, reactive } from "vue";
import firebaseInstance from "../firebase";

import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    DocumentData,
    getDocs,
    getFirestore,
    query,
    serverTimestamp,
    where
} from "firebase/firestore";
import { getAuth } from "firebase/auth";


const textStore = () => {

    const db = getFirestore(firebaseInstance);

    const textState: DocumentData = reactive({
        tweets: ""
    })

    const fireSet = (input: { name: string, tweet: string }) => {
        const colTest = collection(db, 'tweets')
        const data = {
            name: input.name,
            tweet: input.tweet,
            timestamp: serverTimestamp(),
            author: getAuth(firebaseInstance).currentUser?.uid
        }
        addDoc(colTest, data)
    }

    const fireGet = async () => {
        const data: DocumentData = []
        const authUser = getAuth(firebaseInstance).currentUser?.uid
        const q = query(collection(db, "tweets"), where("author", "==", authUser));

        const getAll = await getDocs(q)
        getAll.forEach(el => {
            data.push(el.data())
        });
        textState.tweets = data
    }

    const fireDelete = async () => {
        const docRef = doc(db, "tweets")

        await deleteDoc(docRef)
    }


    return {
        textState,
        fireSet,
        fireGet,
        fireDelete
    };
}

export default textStore

export type TextStore = ReturnType<typeof textStore>;

export const textStoreKey: InjectionKey<TextStore> = Symbol('textStore');

export const useTextStore = () => {
    const textState = inject(textStoreKey);

    if (!textState) {
        throw new Error("${textStoreKey} is not provided!!");
    }
    return textState;
}
