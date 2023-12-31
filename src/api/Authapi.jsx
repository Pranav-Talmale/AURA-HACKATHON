/* eslint-disable no-unused-vars */
import {
    signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged
} from 'firebase/auth';

import { auth, db} from '../firebaseConfig';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

// LISTENS FOR YOUR AUTH STATES (SIGNUP, LOGOUT, LOGIN)
onAuthStateChanged(auth, (user) => {
    if(user){
        // code
    }else{
        // code
    }
})

// SIGN UP API
export const SignUp = async (email, password) => {
    try {

        let response = await createUserWithEmailAndPassword(auth, email, password);
        const userID = uuidv4();
        const userCollection = collection(db, 'users');
        const userData = {
            userID: userID,
            email: email,
        }
        await addDoc(userCollection, userData);
        return {
            // response: response,
            userID: userID,
            email: email,
        }
    }
    catch (err) {
        return err;
    }
}

// GETS THE USER ID
const getUserID = async (email) => {
    try {
        const userCollection = collection(db, 'users');
        const q = query(userCollection, where('email', '==', email));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            throw new Error('User not found');
        }
        let docSnap = querySnapshot.docs[0];
        let {userDoc, userID} = docSnap.data();
       
        return userID;
    } catch (error) {
        console.log(error);
    }
}

// LOGIN API
export const Login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const userID = await getUserID(email);

      if (response && userID) {
        localStorage.setItem('userID', userID);
        localStorage.setItem('userEmail', email);
      } else {
        throw new Error('Authentication failed');
      }
    } catch (error) {
      
      console.log('Authentication error:', error);
      throw error; 
    }
  };
  


// LOG OUT
// export const Logout = () => {

//     try {
//         signOut(auth);
//         localStorage.removeItem('userID');
//     } catch (error) {
//         return error;
//     }
// }