import React, { useState, useEffect } from 'react';
import './nutri.css';
import { useParams } from 'react-router-dom';


function Nutri({ when, option, u_n }) {
    const [nutritionData, setNutritionData] = useState({});
    const [loading, setLoading] = useState(true);
    const [credData, setCredData] = useState({});

    // console.log('username' ,u_n);
    const { username } = useParams();
    u_n = username;
    useEffect(() => {
        console.log('Current option:', option);
        fetchNutritionData();
    }, [option]); 

    const fetchNutritionData = async () => {
        try {
            const res1 = await fetch('http://localhost:8000/FindCred', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    u_n: u_n,
                }),
            });
            
            const data1 = await res1.json();
            setCredData(data1);
            if (res1.ok) {

                const response = await fetch('http://localhost:8000/Nutrition', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        bmi: data1.bmi,
                        gender: data1.gender,
                        option: option,
                    }),
                });
    
                if (response.ok) {
                    const data = await response.json();
                    setNutritionData(data);
                    setLoading(false);
                } else {
                    console.error('Error fetching data:', response.statusText);
                }
            } else {
                console.error('Error fetching bmi and gender:', res1.statusText);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="card">
            <div className="card-header">
                <h2>{when}</h2>
            </div>
            {when === "BREAKFAST" && (
                <div className="card-content">
                    <p>Breakfast: {nutritionData.breakfast || 'N/A'}</p>
                </div>
            )}
            {when === "LUNCH" && (
                <div className="card-content">
                    <p>Lunch: {nutritionData.lunch || 'N/A'}</p>
                </div>
            )}
            {when === "DINNER" && (
                <div className="card-content">
                    <p>Dinner: {nutritionData.dinner || 'N/A'}</p>
                </div>
            )}
        </div>
    );
}

export default Nutri;
