# Maeva's Book Tracker

This project is a book tracking application for tracking the books read and their details such as title, author, pages read, and time spent reading.

## Features

- Track books read
- Log book details including title, author, pages read, and time spent reading
- View a list of books read with details

## Tech Stack

- Frontend: React, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB (MongoDB Atlas)
- Deployment: Netlify (Frontend), Heroku (Backend)

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd book-tracking-app
```

2. Install frontend dependencies:

```bash
cd book-tracking-app
npm install
```

3. Install backend dependencies:

```bash
cd backend
npm install
```

4. Create a `.env` file in the `backend` directory with your MongoDB URI:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority&appName=<appname>
```

### Running the Application

1. Start the backend server:

```bash
cd backend
node index.js
```

2. Start the frontend development server:

```bash
cd book-tracking-app
npm start
```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

### Deployment

#### Frontend

1. Push your code to GitHub.
2. Create a new site on [Netlify](https://www.netlify.com/).
3. Connect your GitHub repository to Netlify and deploy.

#### Backend

1. Push your code to GitHub.
2. Create a new app on [Heroku](https://www.heroku.com/).
3. Connect your GitHub repository to Heroku and deploy.
4. Set your MongoDB URI as a config variable in Heroku.

```bash
heroku config:set MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority&appName=<appname>
```

### Contributing

Contributions are welcome! Please fork the repository and create a pull request.

### License

This project is licensed under the MIT License.
