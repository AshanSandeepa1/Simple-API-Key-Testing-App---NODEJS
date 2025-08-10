# Student Management Web Service
A simple Node.js + Express web service for managing student records. The API is secured with a
fixed API key and can be accessed via Postman or a simple HTML client.

## Features 
- REST API with Express.js
- API key validation via headers or query parameters
- In-memory data store for student records
- HTML front-end to add and retrieve students
- CORS enabled for browser requests

## Getting Started
1. Clone the repository git clone https://github.com//.git cd
2. Install dependencies npm install
3. Run the server node server.js Server will start on: http://localhost:3000
   
## API Key - Fixed API Key: 1234567890abcdef - Pass via header: x-api-key: 1234567890abcdef -
Or via query parameter: http://localhost:3000/students?apiKey=1234567890abcdef
## API Endpoints POST /students - Add a new student
GET /students - Retrieve all students
## Testing with Postman 
1. Open Postman.
2. Set request URL to http://localhost:3000/students
3. Add header: x-api-key: 1234567890abcdef
4. Send requests (POST / GET) to test.
   
## Using the HTML Client 
1. Make sure the server is running.
2. Open index.html in your browser.
3. Add students and retrieve the list.
   
Note: If running locally, ensure CORS is enabled in server.js: app.use(cors());

## Dependencies - Express - CORS
Install them with: npm install express cors

## License This project is licensed under the MIT License.
