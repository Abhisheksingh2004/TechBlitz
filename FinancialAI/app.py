from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from groq import Groq

app = Flask(__name__)
CORS(app)  # Enables CORS for all routes

# Initialize Groq client with API key
client = Groq(api_key="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")

@app.route("/")
def index():
    # Render the index.html template
    return render_template("index.html")  # Ensure index.html is inside 'templates/'

@app.route("/chat", methods=["POST"])
def chat():
    # Get the user message from the request
    user_message = request.json.get("message", "")

    try:
        # Generate a response using the Groq client
        completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile",  # Verify this model exists
            messages=[
                {"role": "system", "content": "You are a financial advisor AI. Provide detailed, professional financial advice. Don't provide other types of resources."},
                {"role": "user", "content": user_message}
            ],
            temperature=0.5,
            max_tokens=500
        )
        reply = completion.choices[0].message.content
    except Exception as e:
        # Handle errors gracefully
        reply = "Sorry, an error occurred while processing your request."

    # Return the reply as a JSON response
    return jsonify({"reply": reply})

if __name__ == "__main__":
    # Run the Flask app in debug mode
    app.run(debug=True)
