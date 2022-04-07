// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyAkRT0dq_jjt-Gt3t-kQrLMcpqABuv0Zm4",
  authDomain: "chat-room-b3f57.firebaseapp.com",
  projectId: "chat-room-b3f57",
  storageBucket: "chat-room-b3f57.appspot.com",
  messagingSenderId: "660124030423",
  appId: "1:660124030423:web:da8ccc5c10098b7146a792"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
