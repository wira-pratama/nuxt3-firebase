import { 
    doc,
    getDoc
} from "firebase/firestore"; 

export const getRole = async (email: any) => {
    const { $db } = useNuxtApp();

    const docRef = doc($db, "roles", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const userRoleInfo: any = useUserRole();
        userRoleInfo.value = docSnap.data();
        return true
    } else {
        const userRoleInfo: any = useUserRole();
        userRoleInfo.value = {isAdmin: false};
        return false
    }
}
