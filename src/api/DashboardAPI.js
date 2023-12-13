
/* eslint-disable no-unused-vars */
import { addDoc, collection,getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

export const AddUserNetworth = async (formData) => {

    try {
        const userID = uuidv4();
        await addDoc(collection(db, 'networth'), {
            userID,
            ...formData,
        });

        toast.success('Data stored successfully');
        localStorage.setItem('networthID', userID);
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
};


export const GetuserNetworth = async (networthID) => {
    try {
        const networthQuery = query(collection(db, 'networth'), where('userID', '==', networthID));
        const snapshot = await getDocs(networthQuery);
        if (!snapshot.empty) {
          // Assuming there's only one document per user ID
          const userNetworthData = snapshot.docs[0].data();
          return { id: snapshot.docs[0].id, ...userNetworthData };
        } else {
          throw new Error('User net worth data not found');
        }
      } catch (error) {
        console.error('Error fetching user net worth data:', error);
        throw error;
      }
}