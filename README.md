# AI & Robotics Summer Workshop Landing Page

This project was built as part of an internship assignment to create a responsive workshop landing page along with a simple enquiry API.

## Features

* Responsive design for mobile, tablet, and desktop
* Hero section with workshop information
* Workshop details section
* Learning outcomes section
* FAQ section with expandable questions
* Registration form with validation
* Express.js API for handling enquiries

## Tech Stack

### Frontend

* React.js
* TypeScript
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js

## Workshop Details

* Workshop: AI & Robotics Summer Workshop
* Age Group: 8–14 Years
* Duration: 4 Weeks
* Mode: Online
* Fee: ₹2,999
* Start Date: 15 July 2026

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

## Project Structure

```text
src/
├── components/
├── App.tsx
├── main.tsx
├── data.ts
└── types.ts

server.ts
package.json
```

## API Endpoint

### POST /api/enquiry

Accepts registration details:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}
```

Returns:

```json
{
  "success": true,
  "message": "Enquiry submitted successfully"
}
```

## Future Improvements

* MongoDB integration for storing enquiries
* Email notifications after registration
* Admin dashboard for managing registrations
* Improved analytics and reporting

## Author

Kamran Basit

B.Tech, Government College of Engineering & Ceramic Technology, Kolkata

