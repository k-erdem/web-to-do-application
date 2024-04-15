# To-Do List Application 🚀 ✅

_A small but mighty web-based To-Do List application._

Built using PostgreSQL, Express, React, and Node.js. Allows users to delightfully create, read, update, and delete tasks.

I built a simple web app to sharpen my full-stack skills, transitioning to the PostgreSQL, Express.js, React, and Node.js (PERN) stack. This project allowed me to refine my backend API development, coding practices, and front-end skills.

Next, I plan to enhance the project with features like unit testing, authentication methods, and more complex queries, showcasing my full-stack capabilities. I invite you to explore my mini-project and welcome any feedback! For more projects, please visit my GitHub profile at [k-erdem](https://github.com/k-erdem).

## Features

- Create new tasks with a description.
- View a list of all tasks.
- Edit existing tasks.
- Delete tasks.

## Technologies Used

- **Frontend**: React, Bootstrap
- **Backend**: Node.js with Express
- **Database**: PostgreSQL

## Next on the Agenda: 🔍

- **Implement user authentication & log-in/log-out with JWT**: Enhance security and user experience by adding authentication features using JSON Web Tokens (JWT).

- **Enhance individual to-do items with due date and assignee features**: Provide users with more customization options for their tasks, improving task management efficiency.

- **Deploy the application to the cloud**: Allow users to use the application from anywhere, without needing a running local server. 

## App Demo

![tododemo](https://github.com/k-erdem/web-to-do-application/assets/67538883/68aecb8f-6aef-47c5-93c3-b2312e8e6b33)

# Getting Started

To run this project locally, follow the steps below.

1. Clone the repository:

    ```
    git clone web-to-do-application
    ```

2. Navigate to the server directory:

    ```
    cd web-to-do-application
    ```

3. Install dependencies:

    ```
    npm init
    ```
    ```
    npm i express pg cors
    ```

4. Set up the PostgreSQL database:

   - Download/install PostgreSQL if not done before.
   - Create a new PostgreSQL database.
   - Update the database connection details in `server/db.js`.

6. Run the server:

    ```
    nodemon index
    ```

7. Navigate to the front-end directory:

    ```
    cd web-to-do-application/front-end
    ```
    
8. Run the front-end:

   ```
   npm start
   ```

9.  Open your web browser and navigate to `http://localhost:3000` to use the application.

## Folder Structure

- `front-end`: Contains the React frontend code.
- `server`: Contains the Node.js backend code.

## Architecture Diagram

![Architecture Diagram](https://github.com/k-erdem/web-to-do-application/assets/67538883/0c5a97d4-ee91-43c1-829f-f0864634e0ef)

## Usage

- To add a new task, click on the "Add New Item" button and fill in the details.
- To edit a task, click on the edit button next to the task description and edit the description. 
- To delete a task, click on the delete icon next to the task.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
