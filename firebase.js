import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import config from "./conection/config";

let firebaseConfig = config

if (!firebase.apps.length) {
  console.log(`Conectando ao firebase: ${firebase.apps.length}` )
  firebase.initializeApp(firebaseConfig)
  console.log(`Conectado: ${firebase.apps.length}` )
}

export default firebase;