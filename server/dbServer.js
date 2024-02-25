const express = require("express");
const mysql = require('mysql2');
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sidu",
    database: "nutrition"
})

app.post('/BMI', (req, res) => {
    const { bmi } = req.body;
    res.json({
        bmi: bmi,
    });
});

app.post('/register', (req, res) => {
    const { user_name, email, password,age,gender,height, weight, diabetic , goal } = req.body;
    const sql =" INSERT INTO userDatabase (user_name, email, password,age,gender,height, weight, diabetic , goal) VALUES (?,?,?,?,?,?,?,?,?)";
    db.query(sql,[user_name, email, password,age,gender,height, weight, diabetic , goal], (err, result) => {
        if (err) throw err;
        console.log('User signed up successfully');
        // res.send('User signed up successfully');.
    });
});

app.post('/login', (req, response) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM userDatabase WHERE user_name = ? AND password = ?';

    db.query(sql, [username, password], (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
            console.log('User logged in successfully');
            response.json('0' );
        } else {
            console.log('Invalid credentials');
            response.status(401).json({ error: 'Invalid credentials' });
        }
    });
});

app.post('/FindCred', (req, res) => {
    const { u_n } = req.body;
    const sql = "SELECT * FROM userDatabase WHERE user_name = ? ";
    
    db.query(sql, [u_n], (err, data1) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        if (data1.length > 0) {
            const credData = data1[0];
            const bmi = credData.weight / (credData.height * credData.height);
            console.log('Rece R with BMI:', bmi, 'Gender:', credData.gender, 'user', u_n);
            return res.json({
                bmi: bmi,
                gender: credData.gender,
            });
        } else {
            return res.json("No record");
        }
    });
});

app.post('/Totaldiet', (req, res) => {
    const { bmi,  gender, option} = req.body;
    const veg_or_nonveg = option === 'Veg' ? 'Veg' : 'Non-Veg';
    const sql = "SELECT * FROM diet_plan_table WHERE bmi_low <= ? AND bmi_high >= ? AND gender = ? AND veg_or_nonveg = ?";
    
    db.query(sql, [bmi, bmi, gender, veg_or_nonveg], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        if (data.length > 0) {
            const nutritionData = data[0];
            return res.json({
                calories: nutritionData.calories,
                carbs: nutritionData.carbs,
                fat: nutritionData.fat,
                protein: nutritionData.protein,
            });
        } else {
            return res.json("No record");
        }
    });
});


app.post('/Nutrition', (req, res) => {
    const { bmi, gender, option } = req.body;
    const veg_or_nonveg = option === 'Veg' ? 'Veg' : 'Non-Veg';
    const sql2 = "SELECT * FROM diet_plan_table WHERE bmi_low <= ? AND bmi_high >= ?  AND gender = ? AND veg_or_nonveg = ?";
    db.query(sql2, [bmi, bmi, gender, veg_or_nonveg], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (data.length > 0) {
            const nutritionData = data[0];
            return res.json({
                breakfast: nutritionData.breakfast,
                lunch: nutritionData.lunch,
                dinner: nutritionData.dinner,
            });
        } else {
            return res.json("No record");
        }
    });
});


app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});
