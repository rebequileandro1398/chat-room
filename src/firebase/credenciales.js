import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAkRT0dq_jjt-Gt3t-kQrLMcpqABuv0Zm4",
  authDomain: "chat-room-b3f57.firebaseapp.com",
  projectId: "chat-room-b3f57",
  storageBucket: "chat-room-b3f57.appspot.com",
  messagingSenderId: "660124030423",
  appId: "1:660124030423:web:da8ccc5c10098b7146a792"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
