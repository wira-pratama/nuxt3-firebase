import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";


export const createUser = async (
    email: string, 
    password: string,
) => {
    const auth = getAuth();
    const credentials: any = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    return credentials;
};

export const signInUser = async (email: string, password: string) => {
    const auth = getAuth();
    const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    return credentials;
};

export const initUser = async () => {
    const auth = getAuth();
    const firebaseUser: any = useFirebaseUser();
    firebaseUser.value = auth.currentUser;

    const userCookie = useCookie("userCookie");

    const router = useRouter();

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const isAdmin = await getRole(user.email);
            if (isAdmin) {
                router.push("/admin");
            } else {
                router.push("/my");
            }
        } else {
            router.push("/");
        }
        firebaseUser.value = user;
        // @ts-ignore
        userCookie.value = user; //ignore error because nuxt will serialize to json
    });
};

export const signOutUser = async () => {
    const auth = getAuth();
    const result = await auth.signOut();
};