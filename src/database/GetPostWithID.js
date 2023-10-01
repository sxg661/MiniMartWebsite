import firestoreDb from "./firebase"
import { collection, doc, getDoc } from "firebase/firestore";

export default async function GetPostWithId(id, callback) {
    var collectionRef = collection(firestoreDb, "posts");
    var docRef = doc(collectionRef, id);
    var post = await getDoc(docRef);
    var postData = post.data();
    postData.id = id;
    callback(postData);
};