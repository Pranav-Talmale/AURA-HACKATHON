/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { GetuserNetworth } from '../api/DashboardAPI'
import { Expensetracker } from './Expensetracker'
import '../Css/dashboard.css'

export const DashboardComponent = () => {
    const [networthData, setNetworthData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userID = localStorage.getItem('userID');

        if (userID) {
            GetuserNetworth(userID)
                .then((data) => {
                    setNetworthData(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching net worth data:', error);
                    setError(error);
                    setLoading(false);
                });
        }
    }, []);

    return (
        <div className="containerofdashboard">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {!loading && !error && (
                <>
                    <table>
                        <tbody>

                            {Object.entries(networthData).map(([key, value]) => (
                                <tr key={key}>
                                    <th className="headline">{key}</th>
                                    <th className="datacali">
                                        {typeof value === 'object' ? JSON.stringify(value) : `${value} INR`}
                                    </th>
                                </tr>
                            ))}



                        </tbody>
                    </table>
                    <Expensetracker />
                </>
            )}
        </div>
    )
}
