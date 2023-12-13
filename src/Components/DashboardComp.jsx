/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { GetuserNetworth } from '../Api/DashboardAPI'
import '../Css/dashboard.css'
export const DashboardComponent = () => {
    const [networthData, setNetworthData] = useState({});
    useEffect(() => {
        // Stored the networthID in localStorage
        const networthID = localStorage.getItem('networthID');

        if (networthID) {
            // Fetch net worth data and update state
            GetuserNetworth(networthID)
                .then((data) => setNetworthData(data))
                .catch((error) => console.error('Error fetching net worth data:', error));
        }
    }, [networthData]);
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th className="headline">Cash</th>
                        <th className="datacali">{networthData.cash} INR</th>
                    </tr>
                    <tr>
                        <td className="nameofsubcol">{networthData.name}</td>
                        <td className="datacali">{networthData.cash} INR</td>
                    </tr>
                    <tr>
                        <th className="headline">Bank Amount</th>
                        <th className="datacali">{networthData.bankAmount} INR</th>
                    </tr>
                    <tr>
                        <td className="nameofsubcol">{networthData.name}</td>
                        <td className="datacali">{networthData.bankAmount} INR</td>
                    </tr>
                    <tr>
                        <th className="headline">Investments</th>
                        <th className="datacali"> {networthData.mutualFunds + networthData.bonds + networthData.stocks + networthData.sip} INR</th>
                    </tr>
                    <tr>
                        <td className="nameofsubcol">MutualFunds</td>
                        <td className="datacali">{networthData.mutualFunds} INR</td>
                    </tr>
                    <tr>
                        <td className="nameofsubcol">Bonds</td>
                        <td className="datacali">{networthData.bonds} INR</td>
                    </tr>
                    <tr>
                        <td className="nameofsubcol">Stocks</td>
                        <td className="datacali">{networthData.stocks} INR</td>
                    </tr>
                    <tr>
                        <td className="nameofsubcol">SIP</td>
                        <td className="datacali">{networthData.sip} INR</td>
                    </tr>
                    <tr>
                        <th className="headline">Loans</th>
                    </tr>

                    {
                        networthData && networthData.loans && networthData.loans.length > 0 ? (
                            networthData.loans.map((loan, index) => (
                                <tr key={index}>
                                    <td className="nameofsubcol">{loan.category}</td>
                                    <td className="datacali">{loan.amount} INR</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2">No loans available</td>
                            </tr>
                        )}


                </tbody>
            </table>
        </div>
    )
}