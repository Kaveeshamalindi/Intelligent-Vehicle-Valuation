# 🚗 CarMind AI

### Intelligent Car Price Prediction System

CarMind AI is a machine learning web application that predicts the estimated price of a car based on its features such as brand, model, manufacturing year, mileage, engine size, fuel type, transmission, and condition.

The project combines a **Machine Learning model**, **Flask backend**, and **HTML/CSS/JavaScript frontend** to create a simple and interactive vehicle valuation experience.

<p align="center">
  <img src="Images/Pic.png" width="600" style="display: inline-block;">
</p>

---

## ✨ Features

* 🤖 Machine Learning based price prediction
* 🚗 Supports different vehicle details
* 📊 Predicts estimated car value
* 🌐 Interactive web interface
* 🎨 Modern glassmorphism UI
* 🖼️ Online car imagery
* 🔊 Background music support
* 📱 Responsive design
* ⚡ Flask REST API
* 💾 Pre-trained model using Pickle/Joblib

---

## 🧠 How It Works

The user enters the details of a vehicle:

```text
Brand
Model
Manufacturing Year
Mileage
Engine Size
Fuel Type
Transmission
Condition
```

The frontend sends these details to the Flask backend.

```text
User Input
    ↓
HTML / CSS / JavaScript
    ↓
Flask API
    ↓
Machine Learning Model
    ↓
Predicted Car Price
    ↓
Displayed on Website
```

---

## 🛠️ Technologies Used

| Technology      | Purpose                    |
| --------------- | -------------------------- |
| 🐍 Python       | Machine Learning & Backend |
| 🤖 Scikit-learn | Machine Learning           |
| 🧮 Pandas       | Data Processing            |
| 🔢 NumPy        | Numerical Operations       |
| 💾 Joblib       | Model Saving & Loading     |
| 🌐 Flask        | Backend API                |
| 🔗 Flask-CORS   | API Communication          |
| 🎨 HTML         | Web Structure              |
| 🎨 CSS          | Styling & UI               |
| ⚡ JavaScript    | Frontend Interaction       |

---

## 📁 Project Structure

```text
AutoVera-AI/
│
├── .venv/
│
├── car_price_model.pkl
├── app.py
├── index.html
├── style.css
├── script.js
├── requirements.txt
└── .gitignore
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Kaveeshamalindi/Intelligent-Vehicle-Valuation.git
```

### 2. Open the project

```bash
cd AutoVera-AI
```

### 3. Create a virtual environment

```bash
python -m venv .venv
```

### 4. Activate the virtual environment

### Windows

```powershell
.venv\Scripts\activate
```

### 5. Install dependencies

```bash
pip install -r requirements.txt
```

---

## ▶️ Run the Application

Start the Flask server:

```bash
python app.py
```

Then open:

```text
http://127.0.0.1:5000/
```

---

## 🧪 Example Input

Try the following:

```text
Brand: Toyota
Model: Corolla
Year: 2022
Mileage: 45000
Engine Size: 1.5
Fuel Type: Petrol
Transmission: Automatic
Condition: Excellent
```

Click:

```text
✨ Predict Vehicle Price
```

The trained machine learning model will return the estimated vehicle price.

---

## 🤖 Machine Learning Model

The car price prediction model was trained using **Google Colab**.

🔗 **Google Colab Notebook:** [Car Price Prediction Model](https://colab.research.google.com/drive/1lbSEX9vYo1b2GcxwJQd3Sp96vwPMTdpJ?usp=sharing)

The trained model was exported as `car_price_model.pkl` and integrated into the Flask web application.

The model is trained using car-related features including:

```text
brand
model
year
mileage
engine_size
fuel_type
transmission
condition
```

The complete preprocessing and prediction pipeline is saved as:

```text
car_price_model.pkl
```

The Flask application loads this trained pipeline and uses it to make predictions for new vehicles.

---

## 🎨 UI

AutoVera AI uses a modern **dark glassmorphism dashboard** with:

* Full-screen automotive background
* Glass-effect panels
* AI system status
* Vehicle input form
* Estimated price display
* Vehicle summary
* Loading animation
* Responsive layout
* Music control

---

## 🔊 Music

The application supports background music through an HTML5 audio element.

You can add a royalty-free automotive background track and place it inside:

```text
music/
└── background.mp3
```

Then connect it through the HTML audio element.

---

## 📌 Project Purpose

This project was created to practice the complete workflow of a beginner-friendly machine learning application:

```text
Dataset
   ↓
Data Preprocessing
   ↓
Model Training
   ↓
Model Saving
   ↓
Flask Backend
   ↓
Frontend
   ↓
Prediction
```

It demonstrates how a trained machine learning model can be connected to a real web interface.

---

## 🚀 Future Possibilities

* 📈 Add price comparison charts
* 🌍 Support multiple currencies
* 🔍 Add more vehicle brands and models
* 📊 Display prediction confidence
* 🗃️ Store prediction history
* ☁️ Deploy the application online
* 📱 Improve mobile experience
* 🤖 Add an AI car recommendation assistant

---

## 👩‍💻 Author

**Kaveesha Senarathne**

Software Engineering Undergraduate
Interested in **AI, Machine Learning, Software Engineering, Cloud & Technology**.

---

## ⭐ Support

If you find this project interesting, consider giving the repository a ⭐ on GitHub!

---

### 🚗 CarMind AI

**Turning vehicle details into intelligent price estimates.**
