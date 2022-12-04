
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, getDoc, query, where, addDoc, doc} from "firebase/firestore";



const firebaseConfig = {

  apiKey: "AIzaSyAabrzqyHCT3R8TcLc3Dfsh5815hmyK4fw",

  authDomain: "coder-house-react-af9a1.firebaseapp.com",

  projectId: "coder-house-react-af9a1",

  storageBucket: "coder-house-react-af9a1.appspot.com",

  messagingSenderId: "659600455678",

  appId: "1:659600455678:web:54ad7e1575d8319a37f2af"

};



const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

export async function getItems() {
  const miColleccion = collection(firestore, "products");
  let snapShotDB = await getDocs(miColleccion);

  let dataDocs = snapShotDB.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}
export async function getItemsSingle(idParams) {
  const docRef = doc(firestore, "products", idParams);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
}

export async function getItemsByCategory(catParams) {
  const collectionRef = collection(firestore, "products");
  const queryCategory = query(
    collectionRef,
    where("category", "==", catParams)
  );
  const snapShotDB = await getDocs(queryCategory);

  let dataDocs = snapShotDB.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}

export async function createBuyOrder(orderData) {
  const collectionRef = collection(firestore, "orders");
  let respuesta = await addDoc(collectionRef, orderData);

  return respuesta.id;
}