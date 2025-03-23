// Translation data
const translations = {
    en: {
        getStarted: "Get Started",
        financialForecasting: "Financial Forecasting with AI",
        empowerFinancial: "Empower your financial decisions with AI-driven insights",
        financialAnalysis: "Financial Analysis",
        comprehensiveAnalysis: "Comprehensive analysis of financial statements and metrics",
        aiPredictions: "AI Predictions",
        advancedAI: "Advanced AI algorithms for accurate financial forecasting",
        marketInsights: "Market Insights",
        realTimeMarket: "Real-time market data and trend analysis",
        financialAssistant: "Financial Assistant",
        askAnything: "Ask me anything about finance...",
        aboutUs: "About Us",
        aboutDescription1: "We are a team of finance and AI enthusiasts dedicated to empowering individuals and businesses with AI-driven financial insights.",
        aboutDescription2: "Our mission is to simplify financial decision-making using advanced predictive analytics and real-time data processing."
    },
    es: {
        getStarted: "Comenzar",
        financialForecasting: "Previsión Financiera con IA",
        empowerFinancial: "Potencia tus decisiones financieras con perspectivas impulsadas por IA",
        financialAnalysis: "Análisis Financiero",
        comprehensiveAnalysis: "Análisis completo de estados financieros y métricas",
        aiPredictions: "Predicciones de IA",
        advancedAI: "Algoritmos avanzados de IA para previsiones financieras precisas",
        marketInsights: "Perspectivas de Mercado",
        realTimeMarket: "Datos de mercado en tiempo real y análisis de tendencias",
        financialAssistant: "Asistente Financiero",
        askAnything: "Pregúntame cualquier cosa sobre finanzas...",
        aboutUs: "Sobre Nosotros",
        aboutDescription1: "Somos un equipo de entusiastas de las finanzas y la IA dedicados a empoderar a individuos y empresas con información financiera impulsada por IA.",
        aboutDescription2: "Nuestra misión es simplificar la toma de decisiones financieras utilizando análisis predictivos avanzados y procesamiento de datos en tiempo real."
    },
    fr: {
        getStarted: "Commencer",
        financialForecasting: "Prévisions Financières avec IA",
        empowerFinancial: "Renforcez vos décisions financières avec des insights basés sur l'IA",
        financialAnalysis: "Analyse Financière",
        comprehensiveAnalysis: "Analyse complète des états financiers et des métriques",
        aiPredictions: "Prédictions IA",
        advancedAI: "Algorithmes d'IA avancés pour des prévisions financières précises",
        marketInsights: "Aperçus du Marché",
        realTimeMarket: "Données de marché en temps réel et analyse des tendances",
        financialAssistant: "Assistant Financier",
        askAnything: "Posez-moi n'importe quelle question sur la finance...",
        aboutUs: "À Propos de Nous",
        aboutDescription1: "Nous sommes une équipe d'enthousiastes de la finance et de l'IA dédiée à donner aux individus et aux entreprises des informations financières basées sur l'IA.",
        aboutDescription2: "Notre mission est de simplifier la prise de décision financière en utilisant l'analyse prédictive avancée et le traitement des données en temps réel."
    },
    de: {
        getStarted: "Loslegen",
        financialForecasting: "Finanzprognosen mit KI",
        empowerFinancial: "Stärken Sie Ihre finanziellen Entscheidungen mit KI-gestützten Erkenntnissen",
        financialAnalysis: "Finanzanalyse",
        comprehensiveAnalysis: "Umfassende Analyse von Finanzberichten und Kennzahlen",
        aiPredictions: "KI-Prognosen",
        advancedAI: "Fortschrittliche KI-Algorithmen für genaue Finanzprognosen",
        marketInsights: "Markteinblicke",
        realTimeMarket: "Echtzeit-Marktdaten und Trendanalysen",
        financialAssistant: "Finanzassistent",
        askAnything: "Fragen Sie mich alles über Finanzen...",
        aboutUs: "Über Uns",
        aboutDescription1: "Wir sind ein Team von Finanz- und KI-Enthusiasten, das sich der Stärkung von Einzelpersonen und Unternehmen mit KI-gestützten Finanzeinblicken widmet.",
        aboutDescription2: "Unsere Mission ist es, die finanzielle Entscheidungsfindung mithilfe fortschrittlicher Vorhersageanalysen und Echtzeit-Datenverarbeitung zu vereinfachen."
    },
    hi: {
        getStarted: "शुरू करें",
        financialForecasting: "एआई के साथ वित्तीय पूर्वानुमान",
        empowerFinancial: "एआई-संचालित अंतर्दृष्टि के साथ अपने वित्तीय निर्णयों को सशक्त बनाएं",
        financialAnalysis: "वित्तीय विश्लेषण",
        comprehensiveAnalysis: "वित्तीय विवरणों और मेट्रिक्स का व्यापक विश्लेषण",
        aiPredictions: "एआई भविष्यवाणियां",
        advancedAI: "सटीक वित्तीय पूर्वानुमान के लिए उन्नत एआई एल्गोरिदम",
        marketInsights: "बाजार अंतर्दृष्टि",
        realTimeMarket: "रीयल-टाइम बाजार डेटा और प्रवृत्ति विश्लेषण",
        financialAssistant: "वित्तीय सहायक",
        askAnything: "वित्त के बारे में कुछ भी पूछें...",
        aboutUs: "हमारे बारे में",
        aboutDescription1: "हम वित्त और एआई उत्साही लोगों की एक टीम हैं जो व्यक्तियों और व्यवसायों को एआई-संचालित वित्तीय अंतर्दृष्टि के साथ सशक्त बनाने के लिए समर्पित है।",
        aboutDescription2: "हमारा मिशन उन्नत भविष्यवाणी विश्लेषण और रीयल-टाइम डेटा प्रोसेसिंग का उपयोग करके वित्तीय निर्णय लेने को सरल बनाना है।"
    }
};

// Function to send a message
async function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    let chatMessages = document.getElementById("chat-messages");

    // Display User Message
    let userMessage = document.createElement("div");
    userMessage.classList.add("user-message"); // Styled user bubble
    userMessage.innerHTML = `<p><strong>You:</strong> ${userInput}</p>`;
    chatMessages.appendChild(userMessage);

    document.getElementById("user-input").value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
        let response = await fetch("/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userInput })
        });

        let data = await response.json();

        // Convert markdown to HTML using marked.js
        let formattedResponse = marked.parse(data.reply);

        let botMessage = document.createElement("div");
        botMessage.classList.add("bot-message"); // Styled bot bubble
        botMessage.innerHTML = `<p><strong class='tag'>Financial Advisor:</strong> <br> ${formattedResponse}</p>`;
        chatMessages.appendChild(botMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;

    } catch (error) {
        console.error("Error:", error);
        let errorMessage = document.createElement("div");
        errorMessage.classList.add("bot-message");
        errorMessage.innerHTML = `<p><strong>Financial Advisor:</strong> Sorry, an error occurred.</p>`;
        chatMessages.appendChild(errorMessage);
    }
}

// Initialize theme and language on page load
document.addEventListener('DOMContentLoaded', function () {
    // Check for saved preferences
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLanguage = localStorage.getItem('language') || 'en';

    // Apply saved preferences
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    document.getElementById('language-selector').value = savedLanguage;
    updateLanguage(savedLanguage);

    // Set up event listeners
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('language-selector').addEventListener('change', function () {
        const language = this.value;
        updateLanguage(language);
        localStorage.setItem('language', language);
    });

    // Add key press event for chat input
    document.getElementById('user-input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});

// Toggle between light and dark theme
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Save preference
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Update page content based on selected language
function updateLanguage(language) {
    const t = translations[language];

    // Update text content
    document.querySelector('.get-started').textContent = t.getStarted;
    document.querySelector('.financial-forecasting h2').textContent = t.financialForecasting;
    document.querySelector('.financial-forecasting > p').textContent = t.empowerFinancial;

    // Update feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards[0].querySelector('h3').textContent = t.financialAnalysis;
    featureCards[0].querySelector('p').textContent = t.comprehensiveAnalysis;
    featureCards[1].querySelector('h3').textContent = t.aiPredictions;
    featureCards[1].querySelector('p').textContent = t.advancedAI;
    featureCards[2].querySelector('h3').textContent = t.marketInsights;
    featureCards[2].querySelector('p').textContent = t.realTimeMarket;

    // Update chat interface
    document.querySelector('.chat-container h2 .icon').nextSibling.textContent = ' ' + t.financialAssistant;
    document.getElementById('user-input').placeholder = t.askAnything;

    // Update about section
    document.querySelector('.about-container h2').textContent = t.aboutUs;
    const aboutParagraphs = document.querySelectorAll('.about-container p');
    aboutParagraphs[0].textContent = t.aboutDescription1;
    aboutParagraphs[1].textContent = t.aboutDescription2;
}
