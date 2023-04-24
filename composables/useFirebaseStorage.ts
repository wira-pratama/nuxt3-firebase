import { 
    ref,
    uploadString,
    getDownloadURL
} from "firebase/storage";

export const convertFile = (file: any) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    })
}

export const saveFile = async (fullpath: string, file: any) => {
    const { $storage } = useNuxtApp();
    const storageRef = ref($storage, fullpath);
    const snapshot = await uploadString(storageRef, file, "data_url");
    var downloadURL;
    if (snapshot) {
        downloadURL = await getDownloadURL(snapshot.ref);
    }
    return downloadURL;
}


export const uploadFile = async (
    file: any, 
    folderName: string, 
    subFolderName:string, 
    fileName: string,
) => {
    const downloadURL = await saveFile(
        `${folderName}/${subFolderName}/` + fileName, 
        file
    )
    return downloadURL
}