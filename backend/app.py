import os
from flask import Flask
from dotenv import load_dotenv
from models import db

load_dotenv()

app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db.init_app(app)


@app.route('/')
def home():
    return "SubTrack AI Local Flask App is Running!"

@app.route('/debug/env')
def debug_env():
    return {
        "DATABASE_URL": os.getenv("DATABASE_URL")
    }


with app.app_context():
    db.create_all()
    print("✅ Tables created successfully.")

if __name__ == "__main__":
    app.run(debug=True)
