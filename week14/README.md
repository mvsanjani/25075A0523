# React TODO Application

A modern, responsive TODO application built with React and styled with TailwindCSS.

## Features

- ✅ Add new tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ Clear completed tasks
- ✅ Persistent storage using localStorage
- ✅ Beautiful gradient UI with TailwindCSS
- ✅ Responsive design
- ✅ Task counter and statistics

## Technologies Used

- **React 18** - Frontend framework
- **TailwindCSS** - Utility-first CSS framework
- **localStorage** - Client-side data persistence
- **GitHub Pages** - Deployment platform

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/[YOUR_USERNAME]/react-todo-app.git
   cd react-todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run deploy` - Deploys the app to GitHub Pages

## Deployment

This application is configured to deploy to GitHub Pages automatically. To deploy:

1. Update the `homepage` field in `package.json` with your GitHub username
2. Push your code to GitHub
3. Run `npm run deploy`

## Project Structure

```
react-todo-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AddTodo.js
│   │   ├── TodoItem.js
│   │   └── TodoList.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
