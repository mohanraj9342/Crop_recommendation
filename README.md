# 🌾 Crop Recommendation System - Web Interface

A beautiful, responsive web application for crop recommendation using AI/ML, designed to be hosted on GitHub Pages.

## 🚀 Live Demo

Visit the live application: [https://yourusername.github.io/Crop_recommendation](https://yourusername.github.io/Crop_recommendation)

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
- **Deployment**: GitHub Pages

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

## � Deployment to GitHub Pages

### Method 1: Direct Upload

1. Fork or clone this repository
2. Enable GitHub Pages in repository settings
3. Select `main` branch as source
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Method 2: GitHub Actions (Automated)

The repository includes a GitHub Actions workflow for automatic deployment.

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript logic and predictions
├── app.py             # Flask API (for local/server deployment)
├── crop_model.pkl     # Trained ML model
├── model_info.json    # Model metadata
└── README.md          # This file
```

## 🔧 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/Crop_recommendation.git
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

## 🎨 Customization

### Adding New Crops

1. Update `cropData` object in `script.js`
2. Add crop preferences in `cropPreferences` object
3. Update the supported crops list in README

### Styling Changes

- Modify `styles.css` for visual customization
- Update color scheme by changing CSS variables
- Adjust animations and transitions

### Logic Updates

- Enhance prediction logic in `script.js`
- Add new feature importance weights
- Implement additional validation rules

## 📈 Model Performance

The web interface uses a simplified prediction system based on the trained Random Forest model:

- **Feature Importance**: Rainfall (23%), Humidity (22%), Potassium (18%), Phosphorus (15%)
- **Prediction Logic**: Rule-based system derived from model insights
- **Confidence Scoring**: Based on parameter matching and feature weights

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## � License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍� Author

**Mohanraj Velayutham**
- GitHub: [@mohanraj9342](https://github.com/mohanraj9342)
- Project: [Crop Recommendation System](https://github.com/mohanraj9342/Crop_recommendation)

## � Acknowledgments

- Dataset source: Kaggle Crop Recommendation Dataset
- Machine Learning: scikit-learn Random Forest Classifier
- UI Inspiration: Modern web design trends
- Icons: Font Awesome
- Fonts: Google Fonts

---

**⭐ Star this repository if you found it helpful!**