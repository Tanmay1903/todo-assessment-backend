# Todo App Backend

A RESTful API server for the Todo application built with Express.js, TypeScript, Prisma, and MySQL.

## Features

- RESTful API endpoints for task management
- MySQL database with Prisma ORM
- TypeScript for type safety
- CORS enabled for frontend integration

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- MySQL server running

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Tanmay1903/todo-assessment-backend.git
cd todo-assessment-backend
```
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file in the root directory:
```bash
DATABASE_URL="mysql://username:your_password@localhost:3306/todo_db"
PORT=3001
```
Make sure to replace your local mysql user credentials in the  `DATABASE_URL`.
