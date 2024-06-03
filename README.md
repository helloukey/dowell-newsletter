# Dowell Newsletter

This project is a newsletter application built with React, TypeScript, Tailwind CSS, and Redux Toolkit.

## Features

### Subscribing

- Users can subscribe to the newsletter by providing their email address.
- Subscriptions are managed through a form that validates user input and communicates with the backend API to add new subscribers.

### Unsubscribing

- Users can unsubscribe from the newsletter by following a link in the emails they receive.
- The application handles the request to remove the user from the subscription list.

### Sending Newsletters

- Admins can create and send newsletters to all subscribers.
- The application provides a form for composing newsletters, which is then sent to the backend API to be distributed to all subscribers.

## Installation and Running the Project

To set up the project locally, follow these steps:

- Clone the Repository

```bash
git clone https://github.com/helloukey/dowell-newsletter.git
cd dowell-newsletter
```

- Install Dependencies

```bash
npm install
```

- Run the Application

```bash
npm run start
```

## TypeScript Features

- **Static Typing**: Reduces runtime errors and enhances development efficiency.
- **Interfaces and Types**: Define structures for components and state.
- **Type Inference**: Automatically infers types for better code readability.

## State Management with Redux Toolkit

The project utilizes the Redux Toolkit for state management, replacing the older Redux methodology. The Redux Toolkit offers:

- **Simplified Syntax**: Reduces boilerplate code.
- **Built-in Middleware**: Enhances functionality and development experience.
- **Modern API Fetching**: Uses createAsyncThunk for handling async requests.

## Styling with Tailwind CSS

- **Utility-First Framework**: Provides low-level utility classes.
- **Customization**: Easy to customize to match the project design.
- **Responsive Design**: Built-in support for responsive design principles.
