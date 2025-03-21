from flask import Flask, request, jsonify, render_template
from groq import Groq
import re 

app = Flask(__name__)

client = Groq(api_key="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")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")
    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    try:
        completion = client.chat.completions.create(
            model="qwen-qwq-32b",
            messages=[{"role": "user", "content": user_message}],
            temperature=1,
            max_tokens=1000,
            top_p=0.5
        )

        reply = completion.choices[0].message.content.strip()
        
        
        return jsonify({"reply": reply})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
