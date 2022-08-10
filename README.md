# RaveLand

RaveLand is an open platform where users can share their experiences with raves that they have attended in the past or going to attend in the future. Users can view what other users have posted. They can also leave a comment on raves to share their favorite experience in that rave as well as pictures. The rave community is very welcoming and RaveLand definitely invites users to join.

## Link to Live Site
Live Link: https://raveland.herokuapp.com/

## Techs Used
### Front End
![react](https://user-images.githubusercontent.com/90019010/179418431-3768ece7-d988-43f1-a22b-4707848ac9d2.svg)
![redux](https://user-images.githubusercontent.com/90019010/179418433-e3ae4f1d-a1dc-4772-84b7-56db8132d01e.svg)
![javascript](https://user-images.githubusercontent.com/90019010/179418437-d00f3585-d6a9-4531-af2f-e5cb321e2780.svg)
![html](https://user-images.githubusercontent.com/90019010/179418445-20d38d75-eae7-4bbf-bed0-5c26ec4aa977.svg)
![css](https://user-images.githubusercontent.com/90019010/179418447-fd17f92e-83e6-4e60-b4d6-602b8300bdc9.svg)
![heroku](https://user-images.githubusercontent.com/90019010/179418448-91d1d47f-1184-440a-bcd0-03f36192f775.svg)

### Back End
![nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![postgres](https://user-images.githubusercontent.com/90019010/179418482-fca795c5-b035-43e6-91cb-c136d0c9f6fb.svg)
![sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![aws](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

## Screenshots

Log in Page
![ravelandlogin](https://user-images.githubusercontent.com/96046451/183990145-215f863b-4e8f-4413-a1e2-ac24d340c2ad.PNG)

Sign Up Page
![ravelandsignup](https://user-images.githubusercontent.com/96046451/183990130-22fe4ad0-3b00-4487-9645-fb23a0c6b6c2.PNG)

Home Page
![ravelandhome](https://user-images.githubusercontent.com/96046451/183990084-f97d1f84-cc41-4733-a408-109e74a05434.PNG)

## Features List
https://github.com/JYi97/raveland/wiki/Feature-List

## Database Schema
https://github.com/JYi97/raveland/wiki/Database-Schema

## Technical Implementation
Using a random image URL from the web was not reliable because the images would not load consistently even with error validators added to the image URL input field. So I implemented AWS S3 for uploading and storing images. I had to install two packages in the backend: [multer](https://www.npmjs.com/package/multer) and [aws-sdk](https://www.npmjs.com/package/aws-sdk). singleMulterUpload is a function that generates the middleware to convert the data from the form into readable files. This function accepts the key to which you expect the files to be saved in your database. In this case, it was photoUrl. This middleware is inserted into the POST routes and allows the file in the request to be readable under req.file. singlePublicFileUpload is an asynchronous function so it returns a promise. The promise returns the file URL that the user wanted to save in the database. The file URL should be saved under the key of photoUrl on the new Rave and Review. The thunk action creators accept an object of key value pairs and transform it into FormData entries to be sent with the request. Implementing AWS S3 created a smoother and consistent application because it reduced the server load. This allows the application to scale gracefully.

### Implementing multer and aws-sdk
![ravelandaws](https://user-images.githubusercontent.com/96046451/184004465-e830dbb6-f51a-438c-a3a9-d4190b539cc9.PNG)

## Rave

## Review

## Rave Search

## Future Features
* Likes
* Google Maps API 


