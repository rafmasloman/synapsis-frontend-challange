# CMLabs Frontend Fulltime Test

> Gonews is an blog article website [gorest api](https://gorest.co.in).

## Table of Contents

- [Project Image](#project-image)
- [Installation Project](#installation-project)
- [Structure Project](#structure-project)
- [User Instructions](#user-instructions)
- [Features](#features)
- [Technologies Used](#technologies-used)

### Project Image

1. Landing Page

![Screenshot](public/screenshot.png)

### Installation Project

1. Clone this repository.

```bash
git clone https://github.com/rafmasloman/synapsis-frontend-challange.git
```

2. Move to application directory.

```bash
cd synapsis-frontend-challange
```

3. Install all dependencies.

```bash
# using pnpm
pnpm install

# using yarn
yarn install

# using npm
npm install
```

4. Run application.

```bash
# using pnpm
pnpm dev

# using yarn
yarn dev

# using npm
npm run dev
```

5. Application will be running on port : `http://localhost:3000`.

### Structure Project

**This is your source code tree:**

```
src
|-- app
    |-- actions
    |-- .....
|-- assets
   |-- icons
   |-- images
|-- components
   |-- atomic
    |--...
   |-- molecul
    |--...
|-- hooks
|-- interfaces
|-- provider
|-- schema
|-- services
|-- utils
...

```

## User Instructions

1. **Blog Post Page**

   - Displays list of blog post (10 data)
   -

2. **Blog Detail Page**

   - Parameter: `postId`.
   - Displays a Article title and body text.
   - Show the author of article and author status
   - Display Commentar for each articles.

3. **Manage Users Page**

   - Displays user data (name, email, gender, status).
   - Search User by Name (name, email, gender, status).
   - Have Action Button for edit and delete user.

4. **Add User Page**

   - Create User
   - Input Form for create user

5. **Edit User Page**
   - Edit User with initialValue
   - Input Form for edit user

## Features

- [x] List IBlog Post
- [x] Search Post by Name
- [x] Search User by Name
- [x] Display User with pagination
- [x] Display Post with pagination
- [x] CRUD User with API
- [x] Post Detail

## Technologies Used

This project utilizes the following technologies:

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query / Tanstack Query](https://tanstack.com/query/latest/)
- [React Icons](https://react-icons.github.io/react-icons/)
