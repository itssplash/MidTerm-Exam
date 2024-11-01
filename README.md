# Student Management API

This project is a simple RESTful API designed to manage student data, built using Node.js and Express. It supports basic CRUD operations (Create, Read, Update, Delete) for a Student entity with the following attributes: **ID**, **Name**, **Grade**, and **Email**. The API is deployed to Azure Web App Service for easy accessibility.

## Features
- **Retrieve All Students**: `GET /students` - Fetches a list of all students.
- **Retrieve Student by ID**: `GET /students/{id}` - Fetches details of a specific student by ID.
- **Add a New Student**: `POST /students` - Adds a new student to the system.
- **Update an Existing Student**: `PUT /students/{id}` - Updates an existing student by ID.
- **Delete a Student**: `DELETE /students/{id}` - Deletes a student by ID.

## Student Entity
Each student entry contains:
- **ID**: Integer, unique identifier for each student.
- **Name**: String, name of the student.
- **Grade**: String, grade of the student.
- **Email**: String, email address of the student.

## Requirements
1. **Node.js** and **npm**: Make sure Node.js and npm are installed to run this application.
2. **Express Framework**: All dependencies, including Express, will be installed automatically via `npm install`.

## Project Setup

### 1. Clone the Repository
```bash
git clone https://github.com/itssplash/MidTerm-Exam
cd MidTerm-Exam
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the API Locally
```bash
node app.js
````

### 4. Environment Configuration
- Set up environment variables in Azure (if deploying there):
- PORT: Use process.env.PORT || 3000 in the code to handle the port.

## API Endpoints

1. **Retrieve All Students**
   - **URL**: `/students`
   - **Method**: `GET`
   - **Response**: JSON array of all student entries.

2. **Retrieve Student by ID**
   - **URL**: `/students/{id}`
   - **Method**: `GET`
   - **URL Parameter**: `id` - Integer ID of the student
   - **Response**: JSON object of the specific student.

3. **Add a New Student**
   - **URL**: `/students`
   - **Method**: `POST`
   - **Body Parameters**:
     - `name`: String, name of the student
     - `Grade`: String, grade of the student
     - `Email`: String, email of the student
   - **Response**: JSON object of the newly added student.

4. **Update an Existing Student**
   - **URL**: `/students/{id}`
   - **Method**: `PUT`
   - **URL Parameter**: `id` - Integer ID of the student
   - **Body Parameters**:
     - `name`: String, updated name
     - `Grade`: String, updated grade
     - `Email`: String, updated email
   - **Response**: JSON object of the updated student.

5. **Delete a Student**
   - **URL**: `/students/{id}`
   - **Method**: `DELETE`
   - **URL Parameter**: `id` - Integer ID of the student
   - **Response**: JSON object of the deleted student.

## Testing the API

### Using .http File
A `.http` file named `student_api_tests.http` is included in this repository to facilitate API testing. With the **REST Client** extension in Visual Studio Code, you can run requests directly within your code editor by opening the `.http` file and clicking **Send Request** on each endpoint section.

### Using Postman
Alternatively, you can test each API endpoint with [Postman](https://www.postman.com/):
1. Import or manually set up requests to test each endpoint.
2. Ensure the server is running locally or deployed on Azure.
3. Adjust the URL as required.

#### Screenshots
Below are screenshots of the testing performed using Postman. (Include screenshots in the repository or link here.)
![image](https://github.com/user-attachments/assets/3a0682fd-3191-48ce-9800-37858222b3a0)

## Deployment on Azure Web App Service

### Create an Azure Web App:
1. In the Azure portal, create a new Web App resource.

### Configure Deployment:
1. Connect the Web App to your GitHub repository for automatic deployment.
2. Configure environment variables as required in **Configuration > Application settings** (e.g., `PORT`, `NODE_ENV`).

### Accessing the API:
Once deployed, the API will be accessible via the Azure-provided URL.

---

This document outlines the setup, usage, and deployment instructions for the Student Management API. For more detailed instructions, refer to each section above.


![image](https://github.com/user-attachments/assets/0581ece1-dedb-426a-8338-04ef2ba687bd)
![image](https://github.com/user-attachments/assets/82d0c781-933f-4cd1-8c9c-e2e4b54ff3a5)

