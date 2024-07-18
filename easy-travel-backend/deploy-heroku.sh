#!/bin/bash

# Login to Heroku (only if not already authenticated)
heroku login

# Create a new Heroku app (replace 'your-app-name' with your preferred app name)
heroku create your-app-name

# Set Heroku environment variables
heroku config:set NODE_ENV=production
# Add more environment variables as needed:
# heroku config:set JWT_SECRET=your_jwt_secret
# heroku config:set MONGODB_URI=your_mongodb_uri
# heroku config:set STRIPE_SECRET_KEY=your_stripe_secret_key

# Deploy your code to Heroku
git push heroku main

# Optionally, run migrations or other setup commands
# heroku run npm run migrate

# Open the deployed app in the browser
heroku open

