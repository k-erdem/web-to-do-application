# Full-Stack To-Do List

This is a simple web-based To-Do list application built using PostgreSQL, Express, React, and Node.js (PERN stack). It allows users to create, read, update, and delete tasks.

## Features

- Create new tasks with a description.
- View a list of all tasks.
- Edit existing tasks.
- Delete tasks.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js with Express
- **Database**: PostgreSQL

## Installation

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
   
   - Create a new PostgreSQL database.
   - Update the database connection details in `server/db.js`.

5. Start the development server:

    ```
    npm start
    ```

6. Open your web browser and navigate to `http://localhost:3000` to use the application.

## Folder Structure

- `front-end`: Contains the React frontend code.
- `server`: Contains the Node.js backend code.

## Usage

- To add a new task, click on the "Add New Item" button and fill in the details.
- To edit a task, click on the edit button next to the task description and edit the description. 
- To delete a task, click on the delete icon next to the task.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
