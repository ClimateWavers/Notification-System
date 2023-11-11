# ClimateWavers Notification System

This notification system facilitates the sending of climate-related alerts to registered users based on their last known location. It leverages email notifications for alert dissemination.

## Table of Contents

- [ClimateWavers Notification System](#climatewavers-notification-system)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Setup](#setup)
    - [Clone Repository](#1-clone-repository)
    - [Install Dependencies](#install-dependencies)
    - [Environment Variables](#environment-variables)
  - [Code Structure](#code-structure)
    - [app.js](#appjs)
    - [controllers/](#controllers)
    - [models/](#models)
    - [routes/](#routes)
    - [notification-service/](#notification-service)
  - [Usage](#usage)
    - [Start the Service](#1-start-the-service)
    - [Accessing the App](#accessing-the-app)
    - [Triggering Email Notifications](#triggering-email-notifications)
  - [Connect to the System](#connect-to-the-system)
  - [Test the System](#test-the-system)
  - [Contributing](#contributing)
  - [License](#license)

## Overview

The ClimateWavers Notification System employs a series of interconnected modules to handle the process of sending climate-related notifications to users.

## Setup

1. **Clone Repository**

   ```bash
   git clone https://github.com/ClimateWavers/Notification-System.git

Install Dependencies

cd ClimateWavers2/notification-service
npm install

## Environment Variables

Ensure to set up the following environment variables:

- `EMAIL_USER`: Email service username
- `EMAIL_PASSWORD`: Email service password
- `EMAIL_SERVICE`: Email service provider (e.g., Gmail)

Create a `.env` file in the root of the `notification-service` folder and add the environment variables.

## Code Structure

The notification system comprises the following key files:


- **`app.js`:**
  - Main entry point.
  - Initializes and starts the Express server.
  - Defines routes and server behavior.

- **`controllers/`:**
  - Contains controllers for specific functionalities.
  - Handles HTTP requests, input validation, and response generation.

- **`models/`:**
  - Defines data models.
  - Encapsulates data schema and operations.

- **`routes/`:**
  - Defines API routes.
  - Separates HTTP layer, delegates logic to controllers.

- **`notification-service/`:**
  - Handles email notifications.
  - Centralizes email-related functionality.

## Usage

The system allows for the dispatch of climate-related alerts to users based on their last known location. To utilize the notification system, follow these steps:

### 1. Start the Service

Run the following command in the `notification-service` directory to start the server:

```bash
node app.js


### Accessing the App

The app will be accessible at [http://localhost:3000](http://localhost:3000).





### Triggering Email Notifications

To manually trigger email notifications, make a POST request:

```bash
curl -X POST http://localhost:3000/trigger-email-notifications





### Connect to the System

Connect to the specified port to start receiving notifications.

### Test the System

To test the system, simulate different scenarios and check the functionality of the email notifications.

### Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/awesome-contribution`).
3. Commit changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/awesome-contribution`).
5. Create a pull request.

### License

This project is licensed under the MIT License.

