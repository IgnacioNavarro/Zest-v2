import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from "../firebase/firebase";
import { data } from './data';


export type ZestDbNotification = {
    en: {
        imageUrl: string;
        title: string;
        text: string;
    },
    es: {
        imageUrl: string;
        title: string;
        text: string;
    }
}

export async function fetchNotification(document:string) {
    const docRef =  
    doc(db, 'Notifications', document);
    const docSnap = await getDoc(docRef);
    const res: ZestDbNotification = docSnap.data() as ZestDbNotification;
    return res;
}

//use it to write data. Update the rules first and the numbers for the ids
export async function readJsonFile() {
    const sample = data;
    for (let i = 2; i < 38; i++) {
        const docRef = doc(db, 'Notifications', i.toString());
        await setDoc(docRef, sample[i]);
        console.log('Document written with ID: ', i);
    }
    return sample;
}
