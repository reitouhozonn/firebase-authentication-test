import { inject, InjectionKey, reactive } from "vue"

// import { getAuth, onAuthStateChanged } from "firebase/auth";


import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const authStore = () => {
    console.log('init authStore')
    // const auth = getAuth()

    const state = reactive({
        isLoggedIn: false,
        displayName: '',
        photoURL: ''
    })

    const setUser = (user: firebase.User | null) => {
        state.isLoggedIn = !!user
        if (user) {
            state.displayName = user.displayName ?? ''
            state.photoURL = user.photoURL ?? ''
        }
    }

    const signIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
    }

    const signOut = () => firebase.auth().signOut()

    const updateUser = (input: { displayName?: string, photoURL?: string }) => {
        firebase.auth().currentUser?.updateProfile(input)
            .then(() => setUser(firebase.auth().currentUser))
    }

    firebase.auth().onAuthStateChanged((user) => setUser(user))

    return {
        state,
        setUser,
        signIn,
        signOut,
        updateUser,
    };
}

export default authStore

export type AuthStore = ReturnType<typeof authStore>;

export const authStoreKey: InjectionKey<AuthStore> = Symbol('authStore');

export const useAuthStore = () => {
    const store = inject(authStoreKey);
    if (!store) {
        throw new Error("${authStoreKey} is not provided");
    }
    return store;
}
