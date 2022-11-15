import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const KAKAO_API_KEY = "a6d60ef4da4cd75fd3766da837c3c834";
const KAKAO_REDIRECT_URL = "http://localhost:3000/kakaoAuth";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

const auth = getAuth(app);

export { auth, firebaseConfig, KAKAO_AUTH_URL };
