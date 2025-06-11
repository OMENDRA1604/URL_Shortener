# 🔗 URL Shortener Web App

A lightweight and user-friendly **URL Shortener** built with **Node.js, Express, MongoDB**, and **EJS** templating. Users can shorten long URLs, track visits, and manage links securely through authentication.

---

## 🌐 Live Demo

> Coming soon 

---

## 🚀 Features

- 🔐 **User Authentication** (Signup & Login)
- ✂️ **Shorten URLs** into clean, unique links
- 📊 **Track click count** for each short link
- 📁 **Dashboard** to view all shortened URLs
- 🧼 **Clean UI** with responsive design

---

## 🛠 Tech Stack

| Layer        | Tech                          |
|--------------|-------------------------------|
| Frontend     | HTML, CSS, EJS                |
| Backend      | Node.js, Express.js           |
| Database     | MongoDB + Mongoose            |
| Auth         | Express Session, Bcrypt       |
| Deployment   | Localhost / Render / Railway  |

---

## 📦 Installation

### 1. Clone the repository
```
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

### 2. Install dependencies
```
npm install
```
### 3. Setup environment variables
```
PORT=8001
MONGO_URL=mongodb://127.0.0.1:27017/short-url
JWT_SECRET=your secret key
```
### 4. Start the server
```
npm start
```
### 5.Open in browser
```
http://localhost:8001
```

## 🔁 Routes Overview

| Route           | Method | Description                 |
| --------------- | ------ | --------------------------- |
| `/`             | GET    | Home page with shorten form |
| `/url`          | POST   | Generate short URL          |
| `/url/:shortId` | GET    | Redirect to original URL    |
| `/user/signup`  | GET    | Render signup form          |
| `/user`         | POST   | Handle signup form          |
| `/user/login`   | GET    | Render login form           |
| `/user/login`   | POST   | Handle login form           |


## 📁 Project Structure

<pre>
url-shortener/
│
├── controllers/
│   ├── url.js
│   └── user.js
├── middlewares/             
│   └── auth.js
├── views/              # EJS templates
│   ├── home.ejs
│   ├── login.ejs
│   └── signup.ejs
├── models/             # Mongoose schemas
│   └── Url.js
├── routes/             # Express routes
│   ├── staticRouter.js
│   ├── url.js
│   └── user.js
├── service/             
│   └── auth.js       
├── index.js            # Entry point
├── connect.js
├── package.json
└── README.md
</pre>

## 🧑‍💻 Author
  
Omendra Singh


