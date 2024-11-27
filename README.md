# 🌟 CONFAID: Your Safe Space for Mind, Heart, and Healing 🌟

## 🧠 **About CONFAID**
CONFAID is a mental health platform designed to empower individuals on their journey toward emotional well-being. Our goal is to create a safe, accessible, and inclusive space where people can find resources, connect with therapy options, and access tools to nurture their mental health.  

The platform features:  
- A **Therapy Page** for exploring therapy options.  
- A **Resources Page** for self-help guides, tips, and curated content.
- A **Blog Page** for information on mental wellness  
- A **Contact Page** to reach out for assistance or share feedback.  

At CONFAID, we are committed to breaking the stigma surrounding mental health and making care accessible to everyone, everywhere. 
[![Watch the Demo Video](https://www.pexels.com/photo/self-care-isn-t-selfish-signage-2821823/)](https://drive.google.com/file/d/1SVIvvLVND8qjF2gzvh9Vej5GJ8iw9ZJN/view?usp=sharing)


---

## 🚀 **Features**
- **User-Friendly Interface:** A soothing design with calming colors (lavender, soft pink, lilac, sand beige, olive green).  
- **Therapy Options:** A directory of therapy resources tailored to individual needs.  
- **Resources Page:** Self-help guides and actionable tips for mental health.  
- **Contact Page:** Reach out to the team for questions, feedback, or assistance.  
- **Database-Driven Backend:** Built with Node.js and MySQL for robust performance.  

---

## 🛠️ **Technologies Used**
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MySQL  
- **Version Control:** Git & GitHub  
- **Hosting:** Localhost (can be extended to remote deployment services like Heroku or AWS)  

---

## ⚙️ **Setup Instructions**
Follow these steps to set up CONFAID on your local or remote system.

### Prerequisites
Ensure you have the following installed on your system:
1. [Node.js](https://nodejs.org/) (v20.17.0 or higher)
2. [MySQL](https://www.mysql.com/) (latest version)
3. [Git](https://git-scm.com/) (latest version)

---

### Step-by-Step Installation

#### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/confaid.git
cd confaid
```

#### **2. Install Dependencies**
Run the following command to install all required Node.js packages:
```bash
npm install
```

#### **3. Set Up the MySQL Database**
Open your MySQL client or use a database tool like MySQL Workbench.
<br>
Create a new database named confaid:
```sql
CREATE DATABASE confaid;
```
Import the database schema provided in the repository:
```bash
mysql -u your_username -p confaid < path/to/ schema.sql
```
Update the database credentials in app.js:
```javascript
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'confaid'
});
```
OR ALTERNATIVELY,
Create a ".env" file and add it to the project, if necessary:
```.env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=confaid
```

#### **4. Start the Development Server**
Run the following command to start the server:
```bash
nodemon server.js
```
Node.js server running at http://127.0.0.1:3000 is what you'll see in your terminal

#### **5. Access the Website**
Open your web browser.
<br>
Visit: http://127.0.0.1:3000
<br>
You should now see the CONFAID homepage! 🎉

---

## 🌐 **Remote Deployment Guide**
To host the website remotely, follow these steps:

#### **1. Choose a Hosting Service**
- For the backend: Use platforms like Heroku, Render, or AWS.
- For the database: Use ClearDB MySQL (Heroku) or deploy MySQL on AWS RDS.

#### **2. Push the Code to GitHub**
Ensure your repository is updated on GitHub:
```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

#### **3. Deploy the Backend**
- Link your repository to your hosting platform (e.g., Heroku).
- Add environment variables (DB credentials, ports, etc.) on the hosting platform.
- Deploy the backend.

#### **4. Configure the Frontend**
- Ensure your frontend files are linked to the backend.
- Use a static hosting service like Netlify or Vercel.

---

## 💡 **Future Enhancements**
- Integration of appointment scheduling for therapy sessions.
- User authentication for personalized experiences.
- Deployment of resources API for real-time updates.
- Analytics Dashboard to provide users with insights into their mental health progress.


---

## 📞 **Contact Us**
If you encounter any issues or have suggestions, feel free to reach out:
- Email: oyujelsey@gmail.com
- Phone: +2547 72951 749

---

## 🫶 **Acknowledgments**
We appreciate your support in making CONFAID a success. 
<br>
Together, let's break the stigma around mental health and build a more compassionate world. 💜



 










