// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBiypES-ROd5vndRRjzHCKEi3r5Bnza09k",
	authDomain: "next-auth-de25d.firebaseapp.com",
	projectId: "next-auth-de25d",
	storageBucket: "next-auth-de25d.appspot.com",
	messagingSenderId: "179078255980",
	appId: "1:179078255980:web:a4c9f616823a6edbdccf49",
	measurementId: "G-FMYQCBM0SK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
