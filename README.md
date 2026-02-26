# 👥 User Directory (API Integration)

> A modern User Directory application built using HTML, CSS, and Vanilla JavaScript featuring API integration (RandomUser API), async/await data fetching, pagination, search filtering, loading states, and error handling.

---

## 📌 Project Overview

This project demonstrates real-world frontend development concepts including:

- Fetching data from an external REST API
- Handling asynchronous operations using async/await
- Managing loading and error states
- Implementing client-side pagination
- Filtering data dynamically
- Rendering responsive card-based UI

The application fetches 100 Indian user profiles from the RandomUser API and displays them in a paginated directory layout.

---

## 🚀 Features

| Feature | Description |
|----------|-------------|
| 🌐 API Integration | Fetches users from RandomUser API |
| ⏳ Loading State | Displays loading message while fetching |
| ❌ Error Handling | Handles failed API requests gracefully |
| 📄 Pagination | Displays 15 users per page |
| 🔎 Search Filter | Filter users by name or email |
| 🖼 Profile Images | Displays user avatars |
| 📱 Responsive Grid | Works across desktop & mobile screens |

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| HTML5 | Structure & semantic layout |
| CSS3 | Modern card-based UI & responsive grid |
| JavaScript | Async logic, pagination, filtering |
| Fetch API | Data retrieval from REST endpoint |

---

## 🌍 API Used

**RandomUser API**

https://randomuser.me/api/?results=100&nat=in


- `results=100` → Fetch 100 users  
- `nat=in` → Filter Indian users  

The API provides:
- Name
- Email
- Phone
- Location
- Profile picture

---

## 📸 Screenshots

### 🖥 Desktop View
![Desktop View](output/user-directory-desktop.png)

---

### 🔎 Search Result
![Search Result](output/user-directory-search.png)

---

### 📄 Pagination View
![Pagination View](output/user-directory-pagination.png)

---

## 🧠 Key Concepts Demonstrated

- Using `fetch()` for HTTP requests
- Handling asynchronous operations using `async/await`
- Checking `response.ok` for HTTP validation
- Parsing JSON with `response.json()`
- Implementing client-side pagination using `.slice()`
- Filtering arrays using `.filter()`
- Rendering dynamic DOM elements
- Managing UI states (loading, error, pagination)
- Performance optimization by limiting DOM rendering

---

user-directory-api/
│
├── index.html
├── style.css
├── script.js
└── output/
├── user-directory-desktop.png
├── user-directory-search.png
└── user-directory-pagination.png


---

## 🎤 Interview Talking Points

### What is an API?
An API (Application Programming Interface) allows applications to communicate and exchange data over HTTP.

### What is async/await?
Async/await is a modern JavaScript syntax used to handle asynchronous operations in a cleaner and more readable way.

### Why check `response.ok`?
To ensure the HTTP response status is successful before processing the data.

### How is pagination implemented?
Pagination is handled on the client side using array slicing (`.slice()`) to display only 15 users per page.

### How do you handle large datasets?
By rendering only a subset of data per page to reduce DOM load and improve performance.

### What happens if the API fails?
An error message is displayed to inform the user instead of breaking the UI.

---

## 🔮 Possible Improvements

- Add server-side pagination
- Add sorting by name or city
- Add advanced filtering options
- Add dark mode toggle
- Convert into React component-based architecture
- Add caching mechanism

---

## 👨‍💻 Author

**Rajeev Ranjan Singh**  
Frontend Developer

---

⭐ If you found this project useful, consider giving it a star.

## 🏗 Project Structure


Endpoint used:
