import firestoreDb from "./firebase";
import { collection, query, orderBy, getDocs, limit } from "firebase/firestore";

export default async function GetEarliestPostDate() {
    const collectionRef = collection(firestoreDb, "posts");
    let queryRef = query(collectionRef, orderBy('time')); 
    queryRef = query(queryRef, limit(1)); 

    const result = await getDocs(queryRef);

    const resultDocs = [];

    result.forEach(doc => {
        resultDocs.push(doc.data());
    });

    return resultDocs.length ? resultDocs[0].time.toDate() : null;
};