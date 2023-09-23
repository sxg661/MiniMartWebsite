import firestoreDb from "./firebase";
import { Timestamp, collection, query, where, orderBy, getDocs} from "firebase/firestore";

export default async function GetPostInDateRange(startDate, endDate, callback) {
    const startTimeStamp = Timestamp.fromDate(startDate);
    const endTimeStamp = Timestamp.fromDate(endDate);

    const collectionRef = collection(firestoreDb, "posts");
    let queryRef = query(collectionRef, where('time', ">=", startTimeStamp)); 
    queryRef = query(queryRef, where('time', "<", endTimeStamp));
    queryRef = query(queryRef, orderBy('time'));

    console.log(queryRef);

    const result = await getDocs(queryRef);

    const resultDocs = [];

    result.forEach(doc => {
        resultDocs.push(doc.data());
    });

    callback(resultDocs);
};