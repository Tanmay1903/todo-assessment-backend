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

4. Run Prisma migrations:
```
npx prisma generate
npx prisma db push
```

5. Start the development server:
```bash
npm run dev
```


The server will start on [http://localhost:3001](http://localhost:3001).

## API Endpoints

| Method | Endpoint     | Description          |
|--------|-------------|----------------------|
| GET    | /tasks      | Get all tasks        |
| POST   | /tasks      | Create a new task    |
| PUT    | /tasks/:id  | Update a task        |
| DELETE | /tasks/:id  | Delete a task        |


## Tech Stack

- Express.js
- TypeScript
- Prisma ORM
- MySQL
- CORS

## Project Structure

src/

├── controllers/          # Request handlers

├── routes/              # API routes

├── types/              # TypeScript definitions

├── app.ts              # Express app setup

└── server.ts           # Server entry point

