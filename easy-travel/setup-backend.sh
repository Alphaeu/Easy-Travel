#!/bin/bash

# Create main project directory
#mkdir easy-travel
#cd easy-travel || exit

# Create config directory and necessary files
mkdir config
touch config/db.js
touch config/.env  # Remember to add environment variables locally

# Create models directory and model files
mkdir models
touch models/User.js
touch models/Flight.js  # Example: Create other model files as needed
touch models/Booking.js

# Create routes directory structure and API route files
mkdir -p routes/api
touch routes/api/users.js
touch routes/api/flights.js  # Example: Create other API route files as needed
touch routes/api/bookings.js

# Create services directory and service integration file
mkdir services
touch services/stripe.js

# Create test directory and test files
mkdir test
touch test/user.test.js  # Example: Create other test files as needed

# Create main server file and package-related files
touch server.js
touch package.json
touch package-lock.json
touch .gitignore
echo "web: node server.js" > Procfile
touch README.md

# Make server.js executable
chmod +x server.js

echo "Backend file structure created successfully."

