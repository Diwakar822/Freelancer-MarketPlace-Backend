# Freelance Marketplace - Backend

This is the backend of a freelance marketplace application built using the MERN stack. It provides APIs for user authentication, contracts, payments, and other essential marketplace functionalities.

## Features
- User authentication (Register, Login, Password Reset)
- Profile management (Freelancers & Clients)
- Contract creation and management
- Payment integration using Razorpay
- Secure API routes with authentication

## Technologies Used
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT, bcrypt
- **Payment Gateway:** Razorpay
- **Email Service:** NodeMailer
- **Testing:** Postman (for API testing)

## Installation

### Prerequisites
- Node.js installed
- MongoDB database setup (local or cloud)

### Steps to Run the Backend
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/freelance-marketplace-backend.git
   cd freelance-marketplace-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```
4. Start the server:
   ```sh
   npm start
   ```
   or for development mode:
   ```sh
   npm run dev
   ```

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/reset-password` - Reset password

### Contracts
- `POST /api/contracts` - Create a contract
- `GET /api/contracts/:id` - Get contract details
- `PUT /api/contracts/:id` - Update contract

### Payments
- `POST /api/payments` - Initiate payment
- `GET /api/payments/status` - Check payment status

## Deployment
To deploy the backend, use services in Render.

## License
This project is licensed under the MIT License.
