# Simple Feedback Management System

## Logic and Approach used to solve the problem

### Backend

1. **Making folder Structure**
   -Inside the main project folder, there are two folders made for backend and front end

2. **Setting Up the backend**:

   - **Node.js with Express**: The backend server is created using node.js wihr express.js
   - **TypeScript Integration**: the backend part is configured for using typescript

3. **CORS Middleware**:

   - The cors middleware is used to enable cross-origin resource sharing.so that backend and frontend can communicate with each other while running on different port

4. **In-Memory Data Storage**:

   - **Feedback Array**: in the main backend file index.ts an array of object is created to hold the feedback entries

5. **REST API Endpoints**:
   - **Retrieve Feedback **: the GET/feedback endpoint retrieves all feedback frome the arary and returns them in json format
   - **Submit Feedback **: The POST/feedback endpoint accepts a json body containing `name` and `feedback`. It adds a new entry to the in-memory array

### Frontend

1. **React with TypeScript**:

   - **React**: react app with typescript is configured using command npx create-react-app --template typescript

2. **Components**:

   - **FeedbackForm Component**:
     - **Form Handling**: The form captures user input for `name` and `feedback`.
     - **Form Submission**: On form submission, the input data is sent to the backend server via an HTTP POST request using `axios`.
   - **FeedbackList Component**:
     - **Data Fetching**: The component fetches all feedback entries from the backend server using an HTTP GET request via `axios`.

3. **use of axios**:
   - **Axios**: Axios is used for making HTTP requests to the backend API.
