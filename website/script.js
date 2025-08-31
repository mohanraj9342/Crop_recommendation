// Crop data with emojis and descriptions
const cropData = {
    'apple': { emoji: '🍎', description: 'Excellent choice for your climate! Apples thrive in moderate temperatures.' },
    'banana': { emoji: '🍌', description: 'Perfect for tropical conditions! Bananas love warm, humid weather.' },
    'blackgram': { emoji: '🫘', description: 'Great legume crop! Black gram is excellent for soil health.' },
    'chickpea': { emoji: '🫛', description: 'Excellent protein source! Chickpeas are drought-resistant and nutritious.' },
    'coconut': { emoji: '🥥', description: 'Tropical paradise crop! Coconuts thrive in coastal, humid conditions.' },
    'coffee': { emoji: '☕', description: 'Premium crop choice! Coffee plants love your climate conditions.' },
    'cotton': { emoji: '🌸', description: 'Cash crop excellence! Cotton is perfect for your soil conditions.' },
    'grapes': { emoji: '🍇', description: 'Wine-worthy choice! Grapes will flourish in your environment.' },
    'jute': { emoji: '🌾', description: 'Natural fiber gold! Jute is ideal for your humid conditions.' },
    'kidneybeans': { emoji: '🫘', description: 'Nutritious legume! Kidney beans will enrich your soil.' },
    'lentil': { emoji: '🫛', description: 'Protein powerhouse! Lentils are perfect for your growing conditions.' },
    'maize': { emoji: '🌽', description: 'Golden harvest ahead! Corn loves your soil and climate.' },
    'mango': { emoji: '🥭', description: 'King of fruits! Mangoes will thrive in your tropical conditions.' },
    'mothbeans': { emoji: '🫘', description: 'Drought-resistant choice! Moth beans are perfect for arid conditions.' },
    'mungbean': { emoji: '🫛', description: 'Green goodness! Mung beans are excellent for your soil type.' },
    'muskmelon': { emoji: '🍈', description: 'Sweet success! Muskmelons love warm, well-drained soil.' },
    'orange': { emoji: '🍊', description: 'Citrus perfection! Oranges will flourish in your climate.' },
    'papaya': { emoji: '🥭', description: 'Tropical delight! Papayas thrive in warm, humid conditions.' },
    'pigeonpeas': { emoji: '🫛', description: 'Sustainable choice! Pigeon peas improve soil fertility.' },
    'pomegranate': { emoji: '🫱', description: 'Antioxidant rich! Pomegranates love your climate conditions.' },
    'rice': { emoji: '🍚', description: 'Staple crop success! Rice is perfect for your water-rich environment.' },
    'watermelon': { emoji: '🍉', description: 'Summer favorite! Watermelons love warm weather and plenty of water.' }
};

// Feature importance weights (based on your model's feature importance)
const featureWeights = {
    rainfall: 0.2302,
    humidity: 0.2242,
    K: 0.1754,
    P: 0.1508,
    N: 0.0964,
    temperature: 0.0724,
    ph: 0.0506
};

// Crop preferences (simplified rules based on agricultural knowledge)
const cropPreferences = {
    'rice': { rainfall: [200, 300], humidity: [80, 100], temperature: [20, 35], K: [30, 60], P: [30, 60], N: [60, 100], ph: [5.5, 7.0] },
    'wheat': { rainfall: [50, 150], humidity: [40, 70], temperature: [15, 25], K: [40, 80], P: [40, 80], N: [80, 120], ph: [6.0, 7.5] },
    'maize': { rainfall: [100, 200], humidity: [60, 80], temperature: [20, 30], K: [60, 100], P: [50, 90], N: [80, 120], ph: [6.0, 7.0] },
    'cotton': { rainfall: [80, 150], humidity: [50, 70], temperature: [25, 35], K: [80, 120], P: [60, 100], N: [100, 140], ph: [5.8, 8.0] },
    'banana': { rainfall: [150, 250], humidity: [75, 95], temperature: [25, 35], K: [200, 400], P: [60, 100], N: [100, 140], ph: [6.0, 7.5] },
    'apple': { rainfall: [100, 200], humidity: [60, 80], temperature: [15, 25], K: [150, 250], P: [50, 90], N: [80, 120], ph: [6.0, 7.0] },
    'grapes': { rainfall: [80, 150], humidity: [50, 70], temperature: [20, 30], K: [120, 200], P: [60, 100], N: [80, 120], ph: [6.5, 7.5] },
    'watermelon': { rainfall: [100, 180], humidity: [60, 80], temperature: [25, 35], K: [100, 150], P: [50, 80], N: [80, 120], ph: [6.0, 7.0] },
    'mango': { rainfall: [120, 200], humidity: [70, 90], temperature: [25, 35], K: [150, 250], P: [60, 100], N: [100, 140], ph: [6.0, 7.5] },
    'coconut': { rainfall: [150, 250], humidity: [80, 95], temperature: [25, 35], K: [200, 350], P: [50, 90], N: [80, 120], ph: [6.0, 7.5] },
    'coffee': { rainfall: [150, 250], humidity: [70, 90], temperature: [20, 30], K: [150, 250], P: [60, 100], N: [100, 140], ph: [6.0, 7.0] }
};

// DOM elements
const form = document.getElementById('cropForm');
const resultsSection = document.getElementById('resultsSection');
const resultCard = document.getElementById('resultCard');
const cropIcon = document.getElementById('cropIcon');
const cropName = document.getElementById('cropName');
const cropDescription = document.getElementById('cropDescription');
const confidence = document.getElementById('confidence');
const inputSummary = document.getElementById('inputSummary');

// Input elements
const inputs = {
    nitrogen: document.getElementById('nitrogen'),
    phosphorus: document.getElementById('phosphorus'),
    potassium: document.getElementById('potassium'),
    temperature: document.getElementById('temperature'),
    humidity: document.getElementById('humidity'),
    ph: document.getElementById('ph'),
    rainfall: document.getElementById('rainfall')
};

// Slider elements
const sliders = {
    nitrogen: document.getElementById('nitrogenSlider'),
    phosphorus: document.getElementById('phosphorusSlider'),
    potassium: document.getElementById('potassiumSlider'),
    temperature: document.getElementById('temperatureSlider'),
    humidity: document.getElementById('humiditySlider'),
    ph: document.getElementById('phSlider'),
    rainfall: document.getElementById('rainfallSlider')
};

// Sync sliders with inputs
Object.keys(inputs).forEach(key => {
    const input = inputs[key];
    const slider = sliders[key];
    
    // Update slider when input changes
    input.addEventListener('input', () => {
        slider.value = input.value;
    });
    
    // Update input when slider changes
    slider.addEventListener('input', () => {
        input.value = slider.value;
    });
});

// Calculate crop compatibility score
function calculateCropScore(inputValues, cropPrefs) {
    let score = 0;
    let totalWeight = 0;
    
    Object.keys(cropPrefs).forEach(param => {
        const value = inputValues[param === 'K' ? 'potassium' : param === 'P' ? 'phosphorus' : param === 'N' ? 'nitrogen' : param];
        const [min, max] = cropPrefs[param];
        const weight = featureWeights[param] || 0.1;
        
        if (value >= min && value <= max) {
            // Perfect match
            score += weight * 1.0;
        } else {
            // Calculate how far outside the range
            const distance = Math.min(Math.abs(value - min), Math.abs(value - max));
            const maxDistance = Math.max(max - min, 50); // Normalize distance
            const proximity = Math.max(0, 1 - (distance / maxDistance));
            score += weight * proximity;
        }
        
        totalWeight += weight;
    });
    
    return totalWeight > 0 ? score / totalWeight : 0;
}

// Predict crop based on input values
function predictCrop(inputValues) {
    let bestCrop = '';
    let bestScore = 0;
    
    // Check defined crop preferences
    Object.keys(cropPreferences).forEach(crop => {
        const score = calculateCropScore(inputValues, cropPreferences[crop]);
        if (score > bestScore) {
            bestScore = score;
            bestCrop = crop;
        }
    });
    
    // If no good match found, use feature-based logic
    if (bestScore < 0.3) {
        bestCrop = getFeatureBasedPrediction(inputValues);
        bestScore = 0.5; // Default confidence for feature-based prediction
    }
    
    return {
        crop: bestCrop,
        confidence: Math.min(bestScore * 100, 95) // Cap confidence at 95%
    };
}

// Feature-based prediction logic
function getFeatureBasedPrediction(values) {
    const { rainfall, humidity, temperature, potassium, phosphorus, nitrogen, ph } = values;
    
    // High rainfall crops
    if (rainfall > 200 && humidity > 80) {
        return Math.random() > 0.5 ? 'rice' : 'coconut';
    }
    
    // Medium rainfall, warm temperature
    if (rainfall > 150 && temperature > 25) {
        return Math.random() > 0.5 ? 'banana' : 'mango';
    }
    
    // Moderate conditions
    if (temperature >= 20 && temperature <= 30 && rainfall >= 100 && rainfall <= 200) {
        return Math.random() > 0.5 ? 'maize' : 'cotton';
    }
    
    // Cool, moderate rainfall
    if (temperature < 25 && rainfall < 150) {
        return Math.random() > 0.5 ? 'apple' : 'grapes';
    }
    
    // High potassium
    if (potassium > 150) {
        return 'banana';
    }
    
    // Default fallback
    const defaultCrops = ['maize', 'rice', 'cotton', 'apple', 'banana'];
    return defaultCrops[Math.floor(Math.random() * defaultCrops.length)];
}

// Display results
function displayResults(prediction, inputValues) {
    const cropInfo = cropData[prediction.crop] || { emoji: '🌾', description: 'A great crop choice for your conditions!' };
    
    // Update result card
    cropIcon.textContent = cropInfo.emoji;
    cropName.textContent = prediction.crop.charAt(0).toUpperCase() + prediction.crop.slice(1);
    cropDescription.textContent = cropInfo.description;
    
    // Update confidence
    let confidenceLevel = 'Medium';
    let confidenceColor = '#ffc107';
    
    if (prediction.confidence > 80) {
        confidenceLevel = 'High';
        confidenceColor = '#28a745';
    } else if (prediction.confidence < 50) {
        confidenceLevel = 'Low';
        confidenceColor = '#dc3545';
    }
    
    confidence.innerHTML = `Confidence: ${confidenceLevel} (${prediction.confidence.toFixed(1)}%)`;
    confidence.style.backgroundColor = confidenceColor;
    
    // Update input summary
    inputSummary.innerHTML = `
        <h4>📊 Your Input Parameters:</h4>
        <div class="summary-grid">
            <div class="summary-item">
                <strong>Nitrogen:</strong> ${inputValues.nitrogen}
            </div>
            <div class="summary-item">
                <strong>Phosphorus:</strong> ${inputValues.phosphorus}
            </div>
            <div class="summary-item">
                <strong>Potassium:</strong> ${inputValues.potassium}
            </div>
            <div class="summary-item">
                <strong>Temperature:</strong> ${inputValues.temperature}°C
            </div>
            <div class="summary-item">
                <strong>Humidity:</strong> ${inputValues.humidity}%
            </div>
            <div class="summary-item">
                <strong>pH:</strong> ${inputValues.ph}
            </div>
            <div class="summary-item">
                <strong>Rainfall:</strong> ${inputValues.rainfall}mm
            </div>
        </div>
    `;
    
    // Show results section
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Form submission handler
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Add loading state
    document.body.classList.add('loading');
    
    // Get input values
    const inputValues = {
        nitrogen: parseFloat(inputs.nitrogen.value),
        phosphorus: parseFloat(inputs.phosphorus.value),
        potassium: parseFloat(inputs.potassium.value),
        temperature: parseFloat(inputs.temperature.value),
        humidity: parseFloat(inputs.humidity.value),
        ph: parseFloat(inputs.ph.value),
        rainfall: parseFloat(inputs.rainfall.value)
    };
    
    // Simulate API call delay
    setTimeout(() => {
        const prediction = predictCrop(inputValues);
        displayResults(prediction, inputValues);
        
        // Remove loading state
        document.body.classList.remove('loading');
    }, 1500);
});

// Initialize with random values that work well
function initializeWithSampleData() {
    const sampleData = {
        nitrogen: 90,
        phosphorus: 42,
        potassium: 43,
        temperature: 20.9,
        humidity: 82.0,
        ph: 6.5,
        rainfall: 202.9
    };
    
    Object.keys(sampleData).forEach(key => {
        if (inputs[key] && sliders[key]) {
            inputs[key].value = sampleData[key];
            sliders[key].value = sampleData[key];
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeWithSampleData();
    
    // Add some animations
    const cards = document.querySelectorAll('.info-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
