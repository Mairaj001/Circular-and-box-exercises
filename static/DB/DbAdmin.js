
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB56ZVB4S8EBwZfVJNFjE0D4llVaSKD4d0",
  authDomain: "exercises-91d7d.firebaseapp.com",
  databaseURL: "https://exercises-91d7d-default-rtdb.firebaseio.com",
  projectId: "exercises-91d7d",
  storageBucket: "exercises-91d7d.appspot.com",
  messagingSenderId: "874784414500",
  appId: "1:874784414500:web:683668e3d94cba9d50f1b1",
  measurementId: "G-RSHZPWZM4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

const arraysRef = ref(db, 'arraysNode'); // Reference to 'arraysNode'

const array1 = [1, 2, 3, 4];
const array2 = ['apple', 'banana', 'orange'];

const dataToSave = {
    array1: array1,
    array2: array2
};


