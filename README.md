# Deal Done Properties

Welcome to the `Deal Done Properties` Website repository! This website is developed by Kodeinnovate Solutions and is maintained for future development. This README provides an overview of the project, setup instructions, and other necessary details to help future developers continue the project seamlessly.

## Table of Contents

- Project Overview
- Features
- Technologies Used
- File Structure
- Color Reference
- Setup Instructions
- Credentials Setup
- Developer

# Project Overview

The `Deal Done Properties` Website is designed to provide a seamless experience of browsing through various properties. This website utilizes Firebase for database storage and retrieval

# Features

- **Firebase Integration**: Admins can easily edit and add new properties
- **Following Cursor**: Made a custom cursor follower, which changes dimentions on hover of certain items
- **Animation**: Made animations using framer motion for better engagement
- **Formik & Yup**: used formik and yup for form validation

# Technologies Used

- React
- shadcn
- Firebase for database
- Framer Motion
- Formik
- Yup

# File Structure

```
public                   #assets
src
├───components
│   ├───common
│   ├───layout           #navbar & footer
│   ├───page_specific    #page specific components
│   │   ├───admin
│   │   ├───career
│   │   ├───contact
│   │   ├───home
│   │   └───properties
│   └───ui               #shadcn
├───constants            #constant data
├───context              #firebase context
├───hooks                #custom firebase & whatsapp hook
├───lib                  #used by shadcn
└───pages
```

# Color Reference

| Color       | Hex                                                              |
| ----------- | ---------------------------------------------------------------- |
| mainColor   | ![#7C4BD2](https://via.placeholder.com/10/7C4BD2?text=+) #7C4BD2 |
| secondColor | ![#5f2db5](https://via.placeholder.com/10/5f2db5?text=+) #5f2db5 |
| thirdColor  | ![#F7CB67](https://via.placeholder.com/10/F7CB67?text=+) #F7CB67 |

# Setup Instructions

1. Clone the Repository
   ```
   git clone https://github.com/KodeInnovate-WorkSpace/website.git
   ```
2. Install Dependencies
   `npm init`
3. Run the website
   `npm run dev`

# Credentials Setup

The credentials for WhatsApp number & Firebase Config `.env` file, which is not uploaded to GitHub for security reasons. Future developers need to create this file with the appropriate credentials.

1. Create the `.env` File

- Navigate to the assets directory.
- Create a file named `.env`.
- Add the necessary credentials in the following format: <br/>

  ```
  VITE_PHONE="<Phone Number>"
  VITE_API_KEY="<Firebase API KEY>"
  VITE_AUTH_DOMAIN="<Firebase Auth Domain Id>"
  VITE_PROJECT_ID="<Firebase Project Id>"
  VITE_STORAGE_BUCKET="<Firebase Storage Bucket>"
  VITE_MESSAGING_SENDER_ID="<Firebase Sender ID>"
  VITE_APP_ID="<Firebase App Id>"
  VITE_MEASUREMENT_ID="<Firebase Measurement Id>"

  ```

2. Configure Firebase

- Ensure that the Firebase project is set up.

# Developer

| [<img src="https://avatars.githubusercontent.com/u/93507427?v=4" width="100" />](https://github.com/Kaif-Shariff) |
| ----------------------------------------------------------------------------------------------------------------- |
| **Role:** Full Stack Developer                                                                                    |
| [**Name:** Kaif Shariff](https://github.com/Kaif-Shariff)                                                         |
