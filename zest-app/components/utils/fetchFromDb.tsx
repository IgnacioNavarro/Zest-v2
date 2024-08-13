import { doc, getDoc } from 'firebase/firestore';
import { db } from "../firebase/firebase";


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