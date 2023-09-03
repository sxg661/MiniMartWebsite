import firestoreDb from "./firebase"
import { collection, doc, getDoc } from "firebase/firestore";

export default async function GetPostWithId(id) {
    var collectionRef = collection(firestoreDb, "posts");
    var docRef = doc(collectionRef, id);
    var post = await getDoc(docRef);
    console.log(post.data());
    return post.data();
};