from flask_sqlalchemy import SQLAlchemy
from datetime import date

db = SQLAlchemy()

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    access_token = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.Date, default=date.today)

    transactions = db.relationship('Transaction', backref='user', lazy=True)
    subscriptions = db.relationship('Subscription', backref='user', lazy=True)

# Raw transaction from Plaid
class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    transaction_id = db.Column(db.String, unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    account_id = db.Column(db.String)
    name = db.Column(db.String)
    merchant_name = db.Column(db.String)
    website = db.Column(db.String)
    logo_url = db.Column(db.String)
    category = db.Column(db.String)
    subcategory = db.Column(db.String)
    amount = db.Column(db.Float)
    date = db.Column(db.Date)
    payment_channel = db.Column(db.String)
    is_pending = db.Column(db.Boolean)

# Identified subscription
class Subscription(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    merchant_name = db.Column(db.String)
    amount = db.Column(db.Float)
    frequency = db.Column(db.String)  # e.g., "monthly"
    last_seen = db.Column(db.Date)
    recurring_transaction_id = db.Column(db.String, nullable=True)  # optional from Plaid
