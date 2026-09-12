from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load trained machine learning model
model = joblib.load("car_price_model.pkl")


# -------------------------------
# Home page
# -------------------------------

@app.route("/")
def home():
    return send_from_directory(".", "index.html")


# -------------------------------
# Serve frontend files
# -------------------------------

@app.route("/<path:filename>")
def static_files(filename):
    return send_from_directory(".", filename)


# -------------------------------
# Prediction API
# -------------------------------

@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.get_json()

        car_data = pd.DataFrame([{

            "brand": data["brand"],

            "model": data["model"],

            "year": float(data["year"]),

            "mileage": float(data["mileage"]),

            "engine_size": float(data["engine_size"]),

            "fuel_type": data["fuel_type"],

            "transmission": data["transmission"],

            "condition": data["condition"]

        }])

        # Predict price
        prediction = model.predict(car_data)[0]

        return jsonify({
            "prediction": float(prediction)
        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 400


# -------------------------------
# Run Flask
# -------------------------------

if __name__ == "__main__":

    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )