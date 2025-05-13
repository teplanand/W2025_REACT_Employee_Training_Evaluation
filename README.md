# Tech Elecon LMS

A comprehensive Learning Management System built with modern web technologies.

## Project Overview

Tech Elecon LMS is an advanced Learning Management System designed to facilitate efficient training and education management. The platform provides a robust solution for managing courses, tracking progress, and delivering educational content.

## Features

- User Authentication and Authorization
- Course Management
- Progress Tracking
- Interactive Dashboard
- PDF Generation
- Excel Data Handling
- Responsive Design

## Technical Stack

### Frontend
- React.js 18.2.0
- React Router 6.14.0
- Context API for State Management
- Custom UI Components
- Recharts 2.15.1 for Data Visualization
- jsPDF 3.0.1 for PDF Generation
- xlsx 0.18.5 for Excel Handling
- CSS/SCSS for Styling

### Backend
- Node.js
- Express.js 4.18.2
- MongoDB with Mongoose 7.0.3
- JWT Authentication
- CORS enabled

## Getting Started

### Prerequisites

1. Node.js (Latest LTS version)
2. MongoDB
3. Git

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd tech-elecon-lms
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
- Create a `.env` file in the root directory
- Add necessary environment variables (refer to `.env.example`)

4. Start the development server:
```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Project Structure

```
├── src/
│   ├── components/    # React components
│   ├── pages/         # Page components
│   ├── context/       # Context API files
│   ├── utils/         # Utility functions
│   └── styles/        # CSS/SCSS files
├── public/            # Static files
└── backend/          # Backend server code
```

## Development

- Run frontend development server: `npm start`
- Run backend development server: `npm run server`
- Run both concurrently: `npm run dev`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.