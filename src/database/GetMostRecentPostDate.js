import firestoreDb from "./firebase";
import { collection, query, orderBy, getDocs, limitToLast } from "firebase/firestore";

export default async function GetMostRecentPostDate() {
    const collectionRef = collection(firestoreDb, "posts");
    let queryRef = query(collectionRef, orderBy('time')); 
    queryRef = query(queryRef, limitToLast(1)); 

    const result = await getDocs(queryRef);

    const resultDocs = [];

    result.forEach(doc => {
        resultDocs.push(doc.data());
    });

    return resultDocs.length ? resultDocs[0].time.toDate() : null;
};