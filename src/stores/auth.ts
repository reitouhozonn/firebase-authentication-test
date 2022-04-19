import { inject, InjectionKey, reactive } from "vue"

type DummyUser = {
    displayName: string;
    photoURL: string;
}


const dummyUser = {
    displayName: "test dou",
    photoURL: 'https://pbs.twimg.com/profile_images/1308010958862905345/-SGZioPb_400x400.jpg'
}

const authStore = () => {
    console.log('init authStore')

    const state = reactive({
        isLoggedIn: false,
        displayName: '',
        photoURL: ''
    })

    const setUser = (user: DummyUser | null) => {
        state.isLoggedIn = !!user
        if (user) {
            state.displayName = user.displayName ?? ''
            state.photoURL = user.photoURL ?? ''
        }
    }

    const signIn = () => {
        setUser(dummyUser)
    }

    const signOut = () => setUser(null)

    const updateUser = (input: DummyUser) => {
        setUser(input)
    }

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
