import firestoreDb from "./firebase";
import { Timestamp, collection, query, where, orderBy, getDocs} from "firebase/firestore";

export default async function GetPostInDateRange(startDate, endDate, callback) {
    const startTimeStamp = Timestamp.fromDate(startDate);
    const endTimeStamp = Timestamp.fromDate(endDate);

    const collectionRef = collection(firestoreDb, "posts");
    let queryRef = query(collectionRef, where('time', ">=", startTimeStamp)); 
    queryRef = query(queryRef, where('time', "<", endTimeStamp));
    queryRef = query(queryRef, orderBy('time'));

    const result = await getDocs(queryRef);

    const resultDocs = [];

    result.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;
        resultDocs.push(data);
    });

    callback(startDate, endDate, resultDocs);
};