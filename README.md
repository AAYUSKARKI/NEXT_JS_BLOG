# Next.js Blog Web Application

This is a full-stack blog web application built using Next.js, with a focus on server-side rendering (SSR). It allows users to create, read, update, and delete blog posts, as well as comment on them. The application is built with a modular structure and follows best practices for both client-side and server-side development.

## Features

- **Authentication**: Users can sign up and log in to the application.
- **Create Blog Posts**: Authenticated users can create new blog posts with a title, description, image, and category.
- **View Blog Posts**: Users can view all published blog posts, including their details and comments.
- **Update Blog Posts**: Authors can edit their own blog posts.
- **Delete Blog Posts**: Authors can delete their own blog posts.
- **Add Comments**: Users can add comments to blog posts.
- **Like Blog Posts**: Users can like blog posts.
- **View Counts**: View counts are tracked for each blog post.
- **Draft Mode**: Authors can save blog posts as drafts before publishing.
- **Pagination**: Pagination is implemented for the list of blog posts.

## Technologies Used

- **Frontend**:
  - **Next.js**: Next.js is used as the React framework for server-side rendering and routing.
  - **React**: React is used for building the user interface components.
  - **React Bootstrap**: React Bootstrap is used for styling the UI components.
- **Backend**:
  - **Node.js**: Node.js is used as the server-side runtime environment.
  - **Express.js**: Express.js is used as the web application framework for handling HTTP requests.
  - **MongoDB**: MongoDB is used as the database to store blog posts, comments, and user information.
  - **Mongoose**: Mongoose is used as the MongoDB object modeling tool for Node.js.
  - **JSON Web Tokens (JWT)**: JWT is used for user authentication.
- **Deployment**:
  - **Vercel**: Vercel is used for deploying the Next.js application.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/yourusername/nextjs-blog.git

Install dependencies:

cd nextjs-blog
npm install

Configure environment variables:
Create a .env.local file in the root directory and add the following variables:



MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

Run the development server:

npm run dev
Open http://localhost:3000 in your browser to view the application.
Folder Structure

nextjs-blog/
  ├── components/       # Reusable React components
  ├── pages/            # Next.js pages
  ├── public/           # Static assets
  ├── api/              # API routes for server-side functionality
  ├── models/           # Mongoose models (e.g., Blog, Comment, User)
  ├── middlewares/      # Custom middleware functions
  ├── utils/            # Utility functions
  ├── .env.local        # Environment variables
  ├── README.md         # Project documentation
  ├── package.json      # Node.js dependencies
  └── ...
Routing
The application follows the following routing structure:

/: Home page displaying a list of published blog posts.
/login: Login page for users to log in.
/signup: Sign up page for new users to create an account.
/blog/new: Create new blog post page for authenticated users.
/blog/[slug]: Detail page for a specific blog post identified by its slug.
/blog/[slug]/edit: Edit page for an existing blog post for authenticated users.
Contributing
Contributions are welcome! Please feel free to submit issues and pull requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.


This README provides a comprehensive overview of My Next.js blog web application, c