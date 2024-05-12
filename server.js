// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const fs = require('fs');
// app.use(bodyParser.json());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });
// function sumCaloriesFromFiles() {
//     let totalCalories = {
//         breakfast: 0,
//         lunch: 0,
//         dinner: 0
//     };
//     const mealTypes = ['breakfast', 'lunch', 'dinner'];
//     mealTypes.forEach(mealType => {
//         const filePath = `${mealType}.json`;
//         if (fs.existsSync(filePath)) {
//             const fileContent = fs.readFileSync(filePath, 'utf-8');
//             const data = JSON.parse(fileContent);
//             console.log(`Data for ${mealType}:`, data);
//             data.forEach(item => {
//                 totalCalories[mealType] += item.calories;
//             });
//         }
//     });
//     console.log('Total calories:', totalCalories);
//     return totalCalories;
// }


// app.post('/saveProduct/:mealType', (req, res) => {
//     const mealType = req.params.mealType;
//     const productData = req.body;
//     if (!productData.name || !productData.calories || !productData.protein || !productData.fat || !productData.carbohydrates || !productData.grams) {
//         return res.status(400).json({ error: 'Отсутствуют обязательные поля' });
//     }

//     let filePath = '';
//     switch (mealType) {
//         case 'breakfast':
//             filePath = 'breakfast.json';
//             break;
//         case 'lunch':
//             filePath = 'lunch.json';
//             break;
//         case 'dinner':
//             filePath = 'dinner.json';
//             break;
//         default:
//             res.status(400).json({ error: 'Некорректный тип приема пищи' });
//             return;
//     }

//     let data = [];
//     if (fs.existsSync(filePath)) {
//         const fileContent = fs.readFileSync(filePath, 'utf-8');
//         data = JSON.parse(fileContent);
//     }

//     data.push({
//         name: productData.name,
//         calories: productData.calories,
//         protein: productData.protein,
//         fat: productData.fat,
//         carbohydrates: productData.carbohydrates,
//         grams: productData.grams,
//         mealType: mealType
//     });

//     fs.writeFileSync(filePath, JSON.stringify(data));

//     const totalCalories = sumCaloriesFromFiles();
//     const savedProduct = data[data.length - 1];

//     res.status(200).json({ message: 'Данные о продукте успешно сохранены', savedProduct, totalCalories });
// });



// app.listen(3000, () => {
//     console.log('Сервер запущен на порту 3000');
// });
// function updateTotalCaloriesDisplay(totalCalories) {
//     const breakfastCaloriesDisplay = document.getElementById('count_of_calories_breakfast');
//     const lunchCaloriesDisplay = document.getElementById('count_of_calories_lunch');
//     const dinnerCaloriesDisplay = document.getElementById('count_of_calories_dinner');
//     const totalCaloriesDisplay = document.getElementById('count_of_calories');

//     const totalCaloriesSum = totalCalories.breakfast + totalCalories.lunch + totalCalories.dinner;
    
//     breakfastCaloriesDisplay.textContent = totalCalories.breakfast.toFixed();
//     lunchCaloriesDisplay.textContent = totalCalories.lunch.toFixed();
//     dinnerCaloriesDisplay.textContent = totalCalories.dinner.toFixed();
//     totalCaloriesDisplay.textContent = totalCaloriesSum.toFixed();
    
//     localStorage.setItem('totalCalories', JSON.stringify(totalCalories));
// }