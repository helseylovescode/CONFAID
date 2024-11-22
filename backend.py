from flask import Flask, request, jsonify, render_template
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# In-memory data storage (can replace with a database)
user_stats = {
    "mindfulness_sessions": 0,
    "total_time_practiced": 0  # In seconds
}

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/track-mindfulness', methods=['POST'])
def track_mindfulness():
    data = request.json
    if "time_practiced" in data:
        user_stats["mindfulness_sessions"] += 1
        user_stats["total_time_practiced"] += data["time_practiced"]
        return jsonify({"message": "Mindfulness session tracked successfully", "stats": user_stats})
    return jsonify({"error": "Invalid data"}), 400

@app.route('/mindfulness-stats', methods=['GET'])
def mindfulness_stats():
    return jsonify(user_stats)

if __name__ == '__main__':
    app.run(debug=True)


