# 🌾 Crop Recommendation System - Web Interface

A beautiful, responsive web application for crop recommendation using AI/ML.

## 🚀 Live Demo

Visit the live application: [https://mohanraj9342.github.io/Crop_recommendation](https://mohanraj9342.github.io/Crop_recommendation)

## ✨ Features

- **🎨 Beautiful UI**: Modern, responsive design with animations
- **📱 Mobile-Friendly**: Works perfectly on all devices
- **⚡ Fast Performance**: Pure JavaScript implementation
- **🧠 Smart Predictions**: Based on trained Random Forest model (99.55% accuracy)
- **🎯 Interactive**: Real-time sliders and instant feedback
- **📊 Detailed Results**: Comprehensive crop recommendations with confidence scores

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with gradient backgrounds and animations
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins)

## 📊 Model Information

- **Algorithm**: Random Forest Classifier
- **Accuracy**: 99.55%
- **Cross-Validation Score**: 99.32%
- **Features**: 7 parameters (N, P, K, Temperature, Humidity, pH, Rainfall)
- **Crops Supported**: 22 different types

## 🎯 Supported Crops

🍎 Apple | 🍌 Banana | 🫘 Black Gram | 🫛 Chickpea | 🥥 Coconut | ☕ Coffee
🌸 Cotton | 🍇 Grapes | 🌾 Jute | 🫘 Kidney Beans | 🫛 Lentil | 🌽 Maize
🥭 Mango | 🫘 Moth Beans | 🫛 Mung Bean | 🍈 Muskmelon | 🍊 Orange | 🥭 Papaya
🫛 Pigeon Peas | 🫱 Pomegranate | 🍚 Rice | 🍉 Watermelon

## 📁 Project Structure

```
├── index.html                    # Main HTML file
├── styles.css                    # CSS styles and animations
├── script.js                     # JavaScript logic and predictions
├── model_info.json               # Model metadata (99.55% accuracy)
├── crop_model_training.ipynb     # Complete ML training notebook
├── Crop_recommendation.csv       # Dataset (2,201 samples)
├── requirements.txt              # Dependencies
└── README.md                     # This file
```

## 🔧 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mohanraj9342/Crop_recommendation.git
   cd Crop_recommendation
   ```

2. **Open in browser**:
   ```bash
   # Simple HTTP server
   python -m http.server 8000
   # Or use Node.js
   npx serve .
   ```

3. **Visit**: `http://localhost:8000`

## 🔬 Training Your Own Model

To retrain the model or experiment with the data:

1. **Open Jupyter Notebook**:
   ```bash
   jupyter notebook crop_model_training.ipynb
   ```

2. **Run all cells** to:
   - Load and explore the dataset
   - Train multiple ML algorithms
   - Compare model performance
   - Save the best model

3. **Model outputs**:
   - `crop_model.pkl` - Trained model file
   - `model_info.json` - Performance metadata

## 🎨 Web Interface Features

The client-side prediction system provides:
- **Real-time predictions** without server dependency
- **Intelligent scoring** based on crop preferences
- **Confidence levels** for each recommendation
- **Interactive sliders** for easy parameter input

## 📊 Model Training & Performance

This project includes a comprehensive Jupyter notebook (`crop_model_training.ipynb`) that demonstrates the complete machine learning pipeline:

### Training Process
- **Data Exploration**: Statistical analysis and visualization of 2,201 samples
- **Model Comparison**: Tested 5 algorithms (Random Forest achieved best results)
- **Hyperparameter Tuning**: Optimized Random Forest parameters
- **Feature Importance**: Rainfall (23%), Humidity (22%), Potassium (18%), Phosphorus (15%)

### Model Metrics
- **Test Accuracy**: 99.55%
- **Cross-Validation Score**: 99.32%
- **Features**: N, P, K, Temperature, Humidity, pH, Rainfall
- **Output**: 22 crop types with balanced distribution

## 👨‍💻 Author

**Mohanraj Velayutham**
- GitHub: [@mohanraj9342](https://github.com/mohanraj9342)
- Project: [Crop Recommendation System](https://github.com/mohanraj9342/Crop_recommendation)

## 📚 Acknowledgments

- **Dataset**: [Crop Recommendation Dataset from Kaggle](https://www.kaggle.com/datasets/atharvaingle/crop-recommendation-dataset)
- **Machine Learning**: scikit-learn Random Forest Classifier
- **Data Science**: pandas, numpy, matplotlib, seaborn
- **Web Technologies**: HTML5, CSS3, JavaScript ES6+
- **UI Design**: Font Awesome icons, Google Fonts (Poppins)

---

**⭐ Star this repository if you found it helpful!**