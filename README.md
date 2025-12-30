

## Project Overview
Smart Issue Board is a simple issue tracking web application built as part of an internship assignment. It allows users to create, view, and manage issues in a structured way.

## Frontend Stack Choice
I chose React because it is lightweight, easy to use, and helps in building reusable UI components quickly.

## Authentication
Firebase Authentication with Email and Password is used to allow users to sign up and log in securely. The logged-in user's email is displayed in the application.

## Firestore Data Structure
A single collection named `issues` is used with the following fields:
- title
- description
- priority (Low / Medium / High)
- status (Open / In Progress / Done)
- assignedTo
- createdBy
- createdAt

## Similar Issue Handling
While creating a new issue, the system checks if an issue with a similar title already exists. If found, a warning message is shown and the user can decide whether to continue or not.

## Status Rule Handling
An issue cannot be moved directly from Open to Done. The application prevents this action and shows a friendly message.

## Challenges Faced
Understanding Firestore queries and handling authentication states were initially challenging.

## Future Improvements
- Better UI and styling
- Role-based access
- Advanced AI-based similarity detection
- ## Deployed URL
https://smart-issue-board-psi.vercel.app/


