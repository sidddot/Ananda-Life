import React, { useState, useEffect } from 'react';
import './nutri.css';

function Day_info({ option, u_n }) {
    const [nutritionData, setNutritionData] = useState({});
    const [credData, setCredData] = useState({});

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
            const response = await fetch('http://localhost:8000/Totaldiet', {
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
                } else {
                    console.error('Error fetching data:', response.statusText);
                }
        }
            else {
                console.error('Error fetching bmi and gender:', res1.statusText);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="card_shadow">
            <div className="card_shadow_sub">
                <h3>Todays Distribution:</h3>
                <h2>Calories: {nutritionData.calories || '2100'}</h2><br/>
                <h2>Carbs: {nutritionData.carbs || '200 grams'}</h2><br/>
                <h2>Fat: {nutritionData.fat || '78 grams'}</h2><br/>
                <h2>Protein: {nutritionData.protein || '150 grams'}</h2>
            </div>
        </div>
    );
}

export default Day_info;

