
React Todo List App

This project is a simple React-based Todo List application. It allows users to add, toggle, and delete tasks. The state of the todos is stored in localStorage, ensuring that tasks persist across page reloads.

Features

Add Todo: Users can add new tasks with a unique ID.

Toggle Todo: Users can mark tasks as completed or incomplete.

Delete Todo: Users can remove tasks from the list.

Persistence: Todos are saved to localStorage and restored upon reload.


Technologies Used

React: A JavaScript library for building user interfaces.

Vite: A build tool that provides fast development and optimized builds.

CSS: For styling the components.


Core Concepts

State Management: Using React's useState hook to manage and update the todos state.

Effect Hook: Using React's useEffect hook to synchronize the todos state with localStorage.

Event Handling: Handling user interactions to add, toggle, and delete todos.

Component-Based Architecture: Structuring the app into reusable components like NewTodoForm and TodoList.

Props: Passing data between components to manage state and user interactions.


Setup and Installation

1. Clone the Repository

Open your terminal and run the following commands to clone the repository and set up the project:

git clone https://github.com/madhanv22/react-todo-list.git
cd react-todo-list
npm install


2. Start the Development Server

Run the following command to start the development server:

npm run dev

The application will be available at http://localhost:3000 by default.



Live Demo

You can view the live demo of the application here.


