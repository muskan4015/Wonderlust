Wanderlust is an Airbnb-inspired stay listing platform that allows users to create, browse, and manage vacation stay listings. Built with Node.js, Express.js, MongoDB, EJS, Bootstrap, and JavaScript, this project demonstrates a full-stack web application with user authentication, CRUD operations, image uploads, and reviews.

---

## Features

- User authentication (register, login, logout)  
- Create, edit, and delete property listings  
- Upload and display images using Cloudinary  
- Leave reviews and ratings on listings  
- Responsive design using Bootstrap for a smooth user experience  
- Dynamic templating with EJS  
- MongoDB for data storage with Mongoose ODM

---

## Technologies Used

- **Backend:** Node.js, Express.js  
- **Frontend:** EJS, Bootstrap, JavaScript  
- **Database:** MongoDB with Mongoose  
- **Image Storage:** Cloudinary  
- **Authentication:** Express-session (or your auth method)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/wanderlust.git
   cd wanderlust
````

2. Install dependencies:

   ```terminal
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   SESSION_SECRET=your_session_secret
   ```

4. Start the server:

   ```terminal
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

---

## Usage

* Register an account or log in
* Browse available listings on the homepage
* Create new property listings with images
* Edit or delete your listings
* Leave reviews and ratings on properties


## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any improvements or bug fixes.


