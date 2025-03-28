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
npm install
cd client && npm install
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

4. Run the Application:
```bash
npm run dev
```
This will start both the frontend and backend servers.

## 📌 Future Enhancements
- Live video streaming for real-time classes
- AI-based course recommendations
- Mobile app integration

## 📝 License
This project is open-source and available under the MIT License.

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
