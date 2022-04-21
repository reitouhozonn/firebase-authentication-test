import { inject, InjectionKey, reactive } from "vue"

import { GoogleAuthProvider } from "firebase/auth";
import firebaseInstance from "../firebase";
import {
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
    updateProfile,
    User
} from "firebase/auth";

const authStore = () => {

    const auth = getAuth(firebaseInstance);

    const state = reactive({
        isLoggedIn: false,
        displayName: "",
        photoURL: ""
    })

    const setUser = (user: User | null) => {
        state.isLoggedIn = !!user?.displayName
        if (user) {
            state.displayName = user.displayName ?? ""
            state.photoURL = user.photoURL ?? ""
        }
    }

    const signIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    const signOutState = () => signOut(auth)

    const updateUser = (input: { displayName: string, photoURL: string }) => {
        let user = auth.currentUser
        if (user) {
            updateProfile(user, input)
                .then(() => setUser(user));
        }
    }

    onAuthStateChanged(auth, (user) => setUser(user))

    return {
        state,
        setUser,
        signIn,
        signOutState,
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
