import streamlit as st
import pandas as pd
import joblib
import os

st.set_page_config(page_title="Crop Recommendation System", page_icon="🌾")

# Sidebar info
st.sidebar.title("About")
st.sidebar.info(
    """
    This app recommends the best crop to grow based on soil and weather parameters.
    - Built with Streamlit
    - Model: Random Forest Classifier
    """
)
st.sidebar.markdown("**Author:** Mohanraj Velayutham")
st.sidebar.markdown("[GitHub](https://github.com/mohanraj9342)")

st.title("🌾 Crop Recommendation System")

# Show recommended ranges
st.markdown("""
### 📌 Recommended Ranges
| Parameter         | Min   | Max   |
|-------------------|-------|-------|
| Nitrogen (N)      | 0     | 140   |
| Phosphorus (P)    | 5     | 145   |
| Potassium (K)     | 5     | 205   |
| Temperature (°C)  | 10.0  | 45.0  |
| Humidity (%)      | 10.0  | 100.0 |
| pH                | 3.5   | 9.5   |
| Rainfall (mm)     | 20.0  | 300.0 |
""")

# Load the trained model
@st.cache_resource
def load_model():
    if not os.path.exists('crop_model.pkl'):
        return None
    return joblib.load('crop_model.pkl')

model = load_model()
if model is None:
    st.error("❌ Model file 'crop_model.pkl' not found. Please train and upload the model.")
    st.stop()

st.write("Enter the following values:")

N = st.number_input("Nitrogen (N)", min_value=0, max_value=140, value=50)
P = st.number_input("Phosphorus (P)", min_value=5, max_value=145, value=50)
K = st.number_input("Potassium (K)", min_value=5, max_value=205, value=50)
temperature = st.number_input("Temperature (°C)", min_value=10.0, max_value=45.0, value=25.0)
humidity = st.number_input("Humidity (%)", min_value=10.0, max_value=100.0, value=50.0)
ph = st.number_input("pH", min_value=3.5, max_value=9.5, value=6.5)
rainfall = st.number_input("Rainfall (mm)", min_value=20.0, max_value=300.0, value=100.0)

if st.button("Recommend Crop"):
    columns = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']
    features = pd.DataFrame([[N, P, K, temperature, humidity, ph, rainfall]], columns=columns)
    st.subheader("Your Input Summary")
    st.table(features)
    prediction = model.predict(features)
    st.success(f"✅ Recommended Crop: {prediction[0].capitalize()}")

st.markdown("---")
st.caption("© 2025 Mohanraj Velayutham. Powered by Streamlit.")