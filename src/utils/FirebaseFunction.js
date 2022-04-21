// Enregistrement d'un new product

import { collection, doc, orderBy, getDocs,query, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"

 
export const saveItem = async (data) =>{
    await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
        merge : true,
    });
};
// FOOD items
export const getAllFoodItems = async () => {
    const items = await  getDocs(
        query(collection(firestore, "foodItems"), orderBy("id", "desc"))

    );
    return items.docs.map((doc) =>doc.data())
}

