import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC9AAF2mL0fkqxl4IUZHzsIOSJ2H462lz8",
	authDomain: "techie-sleuths-2025.firebaseapp.com",
	projectId: "techie-sleuths-2025",
	storageBucket: "techie-sleuths-2025.firebasestorage.app",
	messagingSenderId: "286746790639",
	appId: "1:286746790639:web:2a56d3eb20c1ffe6cea91a",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
