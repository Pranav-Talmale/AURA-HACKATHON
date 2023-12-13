
/* eslint-disable no-unused-vars */
import { addDoc, collection,getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

export const AddUserNetworth = async (formData) => {

    try {
        const networthID = uuidv4();
        const userID = localStorage.getItem('userID')
        await addDoc(collection(db, 'networth'), {
            networthID,
            userID,
            ...formData,
        });

        toast.success('Data stored successfully');
        localStorage.setItem('networthID', networthID);
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
};


export const GetuserNetworth = async (userID) => {
  try {
    const networthCollectionRef = collection(db, 'networth');
    const q = query(networthCollectionRef, where('userID', '==', userID));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Assuming there is only one document per user
      const userData = querySnapshot.docs[0].data();
      return userData;
    } else {
      throw new Error('User net worth data not found');
    }
  } catch (error) {
    console.error('Error fetching user net worth data:', error);
    throw error;
  }
};



export const AddExpense = async(userID, amount, category, date, note) => {
  try {
    // Get a reference to the 'dailyExpenses' collection
    const dailyExpensesCollectionRef = collection(db, 'dailyExpenses');
    const expenseID = uuidv4()
    console.log('Adding expense:', userID, amount, category, date, note);
    // Add a new document to the 'dailyExpenses' collection
    const expenseData = {
      userID: userID,
      expenseID: expenseID,
      amount: amount,
      category: category,
      date: date,
      note: note,
    }
    await addDoc(dailyExpensesCollectionRef, expenseData);
    toast.success('Expense added successfully')
  } catch (error) {
    console.error('Error adding expense:', error);
    throw error; 
  }
}


export const FetchExpensesByUserID = async (userID) => {
  try {
      const expensesCollectionRef = collection(db, 'dailyExpenses');

      // Create a query to fetch expenses where the userID matches
      const q = query(expensesCollectionRef, where('userID', '==', userID));

      // Execute the query and get the snapshot of the documents
      const querySnapshot = await getDocs(q);

      // Map the documents to an array of expenses
      const expensesArray = querySnapshot.docs.map((doc) => ({
          expenseID: doc.id,
          ...doc.data(),
      }));

      return expensesArray;
  } catch (error) {
      console.error('Error fetching expenses:', error);
      throw error;
  }
};