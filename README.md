# EdTech Platform

## 📌 Overview
The **EdTech Platform** is a fully functional web application that enables instructors to create, manage, and sell courses while allowing students to browse, enroll, and track their learning progress. Built with modern web technologies, this platform provides a seamless and interactive learning experience for users.

## 🚀 Features
### For Instructors:
- **Course Management**: Create, update, and delete courses with descriptions, videos, and pricing.
- **Dashboard**: View enrolled students, track course progress, and manage earnings.
- **Secure Authentication**: Role-based access control ensuring only authorized users can manage courses.

### For Students:
- **Course Discovery**: Browse and search for courses by category, instructor, or keyword.
- **Enrollment System**: Enroll in courses, track progress, and access course materials.
- **Interactive Learning**: Watch videos, complete assignments, and take quizzes.

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **API Integration:** RESTful API

## 🔧 Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (latest version)
- MongoDB (local or cloud instance)
- Git

### Steps to Run Locally
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/edtech-platform.git
   cd edtech-platform
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   cd client && npm install
   ```
3. **Set Up Environment Variables:**
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```env
     MONGODB_URL = "your_MongoDb_Url"
     PORT = Port_Number

CLOUD_NAME = your cloudinary CloudName
API_KEY = cloudinary API key
API_SECRET = cloudinary API secret key

MAIL_HOST = smtp.gmail.com
MAIL_USER = your_email
MAIL_PASS = your Mail Pass


JWT_SECRET = "your JWT secret"
FOLDER_NAME = "Your_Folder_Name"

RAZORPAY_SECRET = razorPay secret key
RAZORPAY_KEY = razorPay key
     ```
4. **Run the Application:**
   ```sh
   npm run dev
   ```
   This will start both the frontend and backend servers.

## 🎨 UI Preview!
[Screenshot 2025-03-09 152547](https://github.com/user-attachments/assets/95f56f4e-0af6-4368-b298-fdc2bde1e015)



## 📌 Future Enhancements
- Live video streaming for real-time classes
- AI-based course recommendations
- Mobile app integration

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).

## 👨‍💻 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

