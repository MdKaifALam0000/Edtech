# Study Notion Project

## 📌 Overview
The EdTech Platform is a fully functional web application that enables instructors to create, manage, and sell courses while allowing students to browse, enroll, and track their learning progress. Built with modern web technologies, this platform provides a seamless and interactive learning experience for users.

## 🚀 Features

### For Instructors:
- Course Management: Create, update, and delete courses with descriptions, videos, and pricing
- Dashboard: View enrolled students, track course progress, and manage earnings
- Secure Authentication: Role-based access control ensuring only authorized users can manage courses

### For Students:
- Course Discovery: Browse and search for courses by category, instructor, or keyword
- Enrollment System: Enroll in courses, track progress, and access course materials
- Interactive Learning: Watch videos, complete assignments, and take quizzes

## 🛠️ Tech Stack
- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- API Integration: RESTful API

## 🔗 Live Links
- **Live Demo Site:** [https://edtech-1-t9gq.onrender.com/](https://edtech-1-t9gq.onrender.com/)
- **Demo Video:** [View Demo](https://drive.google.com/file/d/1Q0lb6YZNTCykqb4MX8Q5buQiZ3Q-75hD/view?usp=drive_link)
- **Project Description:** [View Description](https://drive.google.com/file/d/1mdF1HjzY3QejNlf6o0EQpSMOj4ujuhYx/view?usp=drive_link)

## 🔧 Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (latest version)
- MongoDB (local or cloud instance)
- Git

### Steps to Run Locally

1. Clone the Repository:
```bash
git clone https://github.com/your-username/edtech-platform.git
cd edtech-platform
```

2. Install Dependencies:
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client && npm install
cd ..
```

3. Set Up Environment Variables:
Create a `.env` file in the server directory with the following variables:

```env
MONGODB_URL = "your_mongodb_connection_string"
PORT = 4000

# Cloudinary Configuration
CLOUD_NAME = "your_cloud_name"
API_KEY = "your_cloudinary_api_key"
API_SECRET = "your_cloudinary_api_secret"

# Email Configuration
MAIL_HOST = "smtp.gmail.com"
MAIL_USER = "your_email@gmail.com"
MAIL_PASS = "your_email_app_password"

# JWT Configuration
JWT_SECRET = "your_jwt_secret"
FOLDER_NAME = "StudyNotion"

# Razorpay Configuration
RAZORPAY_SECRET = "your_razorpay_secret"
RAZORPAY_KEY = "your_razorpay_key"
```

4. Database Setup:
```bash
# Make sure your MongoDB service is running
# For local MongoDB installation:
# On Windows: net start MongoDB
# On macOS/Linux: sudo systemctl start mongod
```

5. Start the Backend Server:
```bash
cd server
npm run dev
```

6. Start the Frontend Development Server:
```bash
# Open a new terminal window
cd client
npm start
```

7. Access the Application:
- Backend API will be available at: http://localhost:4000
- Frontend will be available at: http://localhost:3000

### Running with Concurrently (Alternative Method)
If you prefer to run both frontend and backend with a single command:

```bash
# From the root directory(".")
npm run dev
```
This will start both the frontend and backend servers.

## 📌 Future Enhancements
- Live video streaming for real-time classes
- AI-based course recommendations
- Mobile app integration

## 📝 License
This project is open-source and available under the MIT License.

## 👥 Team Members
1. Laxman Kumar Ganesh
2. Md Kaif Alam
3. Nishant Mishra
4. Kunal Kumar

## 👨‍💻 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## ⚠️ Security Notes
- Never commit your actual `.env` file to version control
- Keep your API keys and secrets secure
- Make sure to replace all placeholder values with your actual credentials
- The `.env` file should be placed in the `server` directory
- All sensitive information should be kept private
- Use environment variables for all sensitive data
- Never expose API keys or secrets in your code or version control
