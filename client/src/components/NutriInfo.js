// NutriInfo.js
import React from 'react';
import { useState, useEffect } from 'react';
import './nutri.css';

function NutriInfo() {
    const [BMIData, setBMIData] = useState({});

    useEffect(() => {
        fetchBMIData();
    }, []);

    const fetchBMIData = async () => {
        try {
            const response = await fetch('http://localhost:8000/BMI', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    bmi: 25,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setBMIData(data);
            } else {
                console.error('Error fetching BMI data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching BMI data:', error);
        }
    };

    
    return (
        <div>
        <div className="container_nutri">
            <div className="img_nutri">
                <img
                    src="https://www.sheknows.com/wp-content/uploads/2023/07/What-Is-the-DASH-Diet-The-American-Heart-Association-Named-It-the-Best-Heart-Healthy-Diet.jpg?w=3000"
                    className="img-fluid"
                    alt="Responsive image"
                />
            </div>
            <div className="content_nutri">
                <h2>
                    Good nutrition is crucial for overall health and well-being. 
                    It provides essential nutrients that support growth, development, and maintenance of bodily functions.
                    A balanced diet supports a strong immune system, optimal energy levels, and helps prevent chronic diseases.
                    Proper nutrition is fundamental for a healthy and fulfilling life.
                </h2>
            </div>
        </div>
        <div class="bmi_nutri">
                <h2 style={{
                padding: '5px',
                fontSize: '18px',
                border: '0.1px solid #ccc', // Specify border style and color
                borderRadius: '20px',
                backgroundColor: '#C6A969', // Specify background color
                textAlign: 'center', // Center text within the container
            }}>Your BMI is: {BMIData.bmi}
            </h2>        
        </div>
        {/* <div class="fx-block">
            <div class="toggle">
                   <div>
                        <input type="checkbox" id="toggles"/>
                        <div data-unchecked="VEG" data-checked="NON-VEG"></div>
                    </div>
            </div>
        </div> */}
        </div>
    );
}

export default NutriInfo;
