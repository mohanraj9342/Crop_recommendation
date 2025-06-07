# 🌾 Crop Recommendation System

**🚀 [🌐 Live Demo](https://mohanraj9342-crop-recommendation-streamlit-app-xcst6l.streamlit.app/)**

A machine learning-powered web application that recommends the most suitable crop to grow based on soil and weather parameters. Built with Python, scikit-learn, and Streamlit.

---

## 🚀 Features

- **Easy-to-use Web Interface:** Enter soil and climate values and get instant crop recommendations.
- **Machine Learning Model:** Uses a Random Forest Classifier trained on real crop data.
- **Interactive Input:** See recommended input ranges and get a summary of your selections.
- **Open Source:** Ready to deploy on [Streamlit Cloud](https://streamlit.io/cloud).

---

## 🗂️ Project Structure

```
Crop_recommendation/
│
├── Crop_recommendation.csv      # Dataset (optional for deployment)
├── crop_model.pkl               # Trained ML model (generated after training)
├── train_model.py               # Script to train and save the model
├── streamlit_app.py             # Streamlit web application
├── requirements.txt             # Python dependencies
├── README.md                    # Project documentation        
```

---

## ⚙️ Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/mohanraj9342/Crop_recommendation.git
    cd Crop_recommendation
    ```

2. **Install dependencies**
    ```bash
    pip install -r requirements.txt
    ```

3. **Train the model** (if `crop_model.pkl` is not present)
    ```bash
    python train_model.py
    ```

---

## 🌐 Usage

### Run the Streamlit Web App Locally

```bash
streamlit run streamlit_app.py
```

- Open the provided local URL in your browser.
- Enter the required soil and weather parameters.
- Click **"Recommend Crop"** to get your result.

---

## ☁️ Deploy on Streamlit Cloud

1. Push your repository to GitHub.
2. Go to [Streamlit Cloud](https://streamlit.io/cloud) and sign in.
3. Click **"New app"** and connect your GitHub repo.
4. Set the main file as `streamlit_app.py`.
5. Click **"Deploy"**.

---

## 📊 Model Training

- The model is trained using `train_model.py` on the `Crop_recommendation.csv` dataset.
- The trained model is saved as `crop_model.pkl` and used by the web app for predictions.

---

## 📋 Example Input Ranges

| Parameter         | Min   | Max   |
|-------------------|-------|-------|
| Nitrogen (N)      | 0     | 140   |
| Phosphorus (P)    | 5     | 145   |
| Potassium (K)     | 5     | 205   |
| Temperature (°C)  | 10.0  | 45.0  |
| Humidity (%)      | 10.0  | 100.0 |
| pH                | 3.5   | 9.5   |
| Rainfall (mm)     | 20.0  | 300.0 |

---

## 👤 Author

**Mohanraj Velayutham**  
[GitHub](https://github.com/mohanraj9342)

---

## 📄 License

This project is licensed under the MIT License.

---