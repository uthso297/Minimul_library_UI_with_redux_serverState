# 📚 Minimal Library Management System

A responsive and minimalist Library Management System built with **React**, **Redux Toolkit Query**, and **TypeScript**, enabling CRUD operations and borrow tracking — all integrated with a RESTful backend.

[![Live Frontend](https://img.shields.io/badge/Frontend-Live-green?style=flat-square)](https://minimal-library-system.vercel.app/)
[![Live Backend](https://img.shields.io/badge/Backend-Live-blue?style=flat-square)](https://l2-b5-a3-uthso.vercel.app/)
[![Frontend Repo](https://img.shields.io/badge/GitHub-Frontend-yellow?style=flat-square)](https://github.com/uthso297/Minimul_library_UI_with_redux_serverState.git)
[![Backend Repo](https://img.shields.io/badge/GitHub-Backend-orange?style=flat-square)](https://github.com/uthso297/mongoose_library_server.git)

---

## 🚀 Project Overview

This project demonstrates the core functionalities of a client-side **library system** that allows users to:

- View and manage books
- Perform **CRUD** operations
- Borrow books with due dates
- View a simple **borrow summary**

The focus is on **functionality**, **UI responsiveness**, and **type-safe API consumption** — no authentication or payment logic included.

---

## ✨ Features

### ✅ Public Access
- All pages are accessible without login.
- Focuses only on book and borrowing features.

### 📘 Book Management
- **Book List Table**: Displays title, author, genre, ISBN, available copies, and actions.
- **Actions**:
  - **Edit Book**: Modify number of copies (auto updates availability).
  - **Delete Book**: Confirmation before removal.
  - **Borrow Book**: Opens borrow form.
- **Add Book**:
  - Fields: Title, Author, Genre, ISBN, Description, Copies, Available (optional).
  - Auto UI update after creation.

### 📗 Borrowing System
- Borrow form with:
  - **Quantity** (validated against availability).
  - **Due Date**.
- If copies reach `0`, book is marked unavailable.
- On submit: Success toast & redirect to summary.

### 📊 Borrow Summary
- Aggregated view of all borrowed books.
- Fields: Book Title, ISBN, Total Quantity Borrowed.

---

## 🗺️ Pages & Routes

| Path | Description |
|------|-------------|
| `/books` | List of all books with actions |
| `/create-book` | Add a new book |
| `/books/:id` | Detailed view of a single book |
| `/edit-book/:id` | Edit book copies |
| `/borrow/:bookId` | Borrow a specific book |
| `/borrow-summary` | View borrow summary |

---

## 🖥️ UI/UX Highlights

- **Minimal & Clean UI** using Tailwind CSS
- Fully **responsive** across devices (Mobile, Tablet, Desktop)
- Easy-to-use forms with clear labels
- Modern design patterns (cards, forms, navigation)

---

## 🔧 Technology Stack

| Layer | Tech |
|-------|------|
| Frontend | React, TypeScript, Tailwind CSS |
| State Management | Redux Toolkit + RTK Query |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Styling | Tailwind CSS |

---

## 🌐 API Integration

- All endpoints consumed via **RTK Query**
- Strict **TypeScript typings** for requests and responses
- Proper **invalidatesTags / providesTags** used to ensure UI reactivity

---

## 📁 Backend Overview

> (Separate repo: [Backend GitHub Repo](https://github.com/uthso297/mongoose_library_server.git))

- **Modular MVC Pattern**
- **MongoDB Schemas**:
  - `Books`: title, author, genre, ISBN, description, copies, available
  - `Borrows`: book (reference), quantity, dueDate
- APIs:
  - CRUD for books
  - Borrow + Borrow Summary aggregation
- Error handling & pagination supported

---

## 🔗 Live & GitHub Links

- **Frontend Live**: [https://minimal-library-system.vercel.app/](https://minimal-library-system.vercel.app/)
- **Backend Live**: [https://l2-b5-a3-uthso.vercel.app/](https://l2-b5-a3-uthso.vercel.app/)
- **Frontend GitHub Repo**: [uthso297/Minimul_library_UI_with_redux_serverState](https://github.com/uthso297/Minimul_library_UI_with_redux_serverState.git)
- **Backend GitHub Repo**: [uthso297/mongoose_library_server](https://github.com/uthso297/mongoose_library_server.git)

---

## 🛠️ Setup Instructions

### Frontend Setup

```bash
git clone https://github.com/uthso297/Minimul_library_UI_with_redux_serverState.git
cd Minimul_library_UI_with_redux_serverState
npm install
npm run dev
