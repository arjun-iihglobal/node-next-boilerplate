# Next.js Boilerplate

A modern Next.js boilerplate with Tailwind CSS and Node.js backend.

## Features

- Next.js 14
- Tailwind CSS
- Node.js with Express.js backend
- MongoDB database integration
- ESLint configuration
- Modern project structure

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development servers:

For frontend (Next.js):
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

For backend (Express.js):
```bash
npm run dev:server
# or
yarn dev:server
# or
pnpm dev:server
```

The frontend will be available at [http://localhost:3000](http://localhost:3000)
The backend API will be available at [http://localhost:5000](http://localhost:5000)

## Database Setup

### MongoDB Connection

If you don't have MongoDB installed locally, you can use the provided MongoDB Atlas connection string:

```
mongodb+srv://arjun2000raj:uU5fiGG286hPAiJv@cluster0.pp5a6th.mongodb.net
```

To use this connection string:

1. Create a `.env` file in the root directory
2. Add the following line to your `.env` file:
```
MONGODB_URI=mongodb+srv://arjun2000raj:uU5fiGG286hPAiJv@cluster0.pp5a6th.mongodb.net
```

### Local MongoDB Setup (Alternative)

If you prefer to use a local MongoDB instance:

1. Install MongoDB Community Edition from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
2. Start MongoDB service
3. The default connection string will be: `mongodb://localhost:27017`

## Project Structure

```
├── app/                # App directory (Next.js 13+)
│   ├── globals.css    # Global styles
│   ├── layout.js      # Root layout
│   └── page.js        # Home page
├── server/            # Backend directory
│   └── index.js       # Express.js server
├── public/            # Static files
├── components/        # React components
├── styles/           # Additional styles
└── package.json      # Project dependencies
```