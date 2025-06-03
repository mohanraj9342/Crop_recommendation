import joblib
import pandas as pd
import sys

def get_valid_input(prompt, min_val, max_val):
    while True:
        try:
            value = float(input(prompt))
            if not (min_val <= value <= max_val):
                print(f"Value must be between {min_val} and {max_val}. Try again.")
                continue
            return value
        except ValueError:
            print("Invalid input. Please enter a number.")

def main():
    try:
        model = joblib.load('crop_model.pkl')
    except FileNotFoundError:
        print("❌ Model file 'crop_model.pkl' not found. Please train the model first.")
        sys.exit(1)

    print("\n🌾 Welcome to the Crop Recommendation System (Terminal Version)\n")
    print("Enter the following values within the recommended ranges:")
    print("\n📌 Recommended Ranges:")
    print("   Nitrogen (N):        0 - 140")
    print("   Phosphorus (P):      5 - 145")
    print("   Potassium (K):       5 - 205")
    print("   Temperature (°C):   10.0 - 45.0")
    print("   Humidity (%):       10.0 - 100.0")
    print("   pH:                  3.5 - 9.5")
    print("   Rainfall (mm):      20.0 - 300.0\n")

    while True:
        N = get_valid_input("🧪 Nitrogen (N): ", 0, 140)
        P = get_valid_input("🧪 Phosphorus (P): ", 5, 145)
        K = get_valid_input("🧪 Potassium (K): ", 5, 205)
        temperature = get_valid_input("🌡️ Temperature (°C): ", 10.0, 45.0)
        humidity = get_valid_input("💧 Humidity (%): ", 10.0, 100.0)
        ph = get_valid_input("🧫 pH: ", 3.5, 9.5)
        rainfall = get_valid_input("🌧️ Rainfall (mm): ", 20.0, 300.0)

        columns = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']
        features = pd.DataFrame([[N, P, K, temperature, humidity, ph, rainfall]], columns=columns)
        predicted_crop = model.predict(features)

        print(f"\n✅ Recommended Crop: 🌿 {predicted_crop[0].capitalize()}\n")

        again = input("Would you like to predict for another set of values? (y/n): ").strip().lower()
        if again != 'y':
            print("Thank you for using the Crop Recommendation System!")
            break

if __name__ == "__main__":
    main()
