# VK Portfolio Backend API

Backend API for VK Portfolio with authentication using Node.js, Express, and MongoDB.

## Features

- ✅ User Authentication (Login)
- ✅ JWT Token-based Authorization
- ✅ MongoDB Database Integration
- ✅ Password Hashing with bcrypt
- ✅ Protected Routes
- ✅ Role-based Access Control
- ✅ Input Validation
- ✅ Security Headers (Helmet)
- ✅ CORS Configuration
- ✅ Error Handling

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Security**: Helmet, CORS
- **Validation**: express-validator
- **Logging**: Morgan

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/vk-portfolio
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:5173
```

## Running the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication Routes

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User (Protected)
```http
GET /api/auth/me
Authorization: Bearer <your_jwt_token>
```

## Project Structure

```
backend/
├── config/
│   └── db.js              # MongoDB connection
├── controllers/
│   └── authController.js  # Authentication logic
├── middleware/
│   └── auth.js            # JWT verification & authorization
├── models/
│   └── User.js            # User model schema
├── routes/
│   └── auth.js            # Authentication routes
├── .env.example           # Environment variables template
├── .gitignore            # Git ignore file
├── package.json          # Dependencies
├── README.md             # Documentation
└── server.js             # Entry point

```

## MongoDB Setup

### Local MongoDB:
1. Install MongoDB locally
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/vk-portfolio`

### MongoDB Atlas (Cloud):
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`

## Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT token-based authentication
- Protected routes with middleware
- Role-based access control
- Security headers with Helmet
- CORS configuration
- Input validation
- Error handling

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| NODE_ENV | Environment mode | development |
| MONGODB_URI | MongoDB connection string | - |
| JWT_SECRET | Secret key for JWT | - |
| JWT_EXPIRE | JWT expiration time | 7d |
| CLIENT_URL | Frontend URL for CORS | http://localhost:5173 |

## Testing with Postman/Thunder Client

1. Login with existing user credentials
2. Copy the JWT token from response
3. Use token in Authorization header: `Bearer <token>`
4. Access protected routes

## License

ISC

