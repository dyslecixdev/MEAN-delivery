# MEAN Delivery
A fake pizza-themed food delivery website where users can order food to their current location. 

![Screenshot (47)](https://user-images.githubusercontent.com/85912934/219576980-e989f300-c8e6-412b-ae0b-936a586944f6.png)

The backend was built with javascript, node.js, express, mongodb atlas,   
bcryptjs to encrypt and decrypt the users' password, colors to make certain console logs pop out, 
cors tells the browser that the app at its origin has access to resources at another origin, 
dotenv to keep certain information secret, express-async-handler to handle async express route exceptions, 
jsonwebtoken to give each user a unique token, and ts-node with typescript.

The frontend utilizes Angular Material with TailwindCss for styling, Google fonts and material icons, leaflet for the map, ngx-toastr for the messages, and paypal to handle payment.

## How to run this project
### Cloning the Code
1. Open your terminal and type git clone https://github.com/christiandeandemesa/MEAN-delivery.git
3. To download the backend dependencies, cd into the server folder and type npm install.
4. To download the frontend dependencies, cd into the client folder and type npm install.

### Connecting to MongoDB
1. Create an account or login to [MongoDB Atlas](https://account.mongodb.com/account/login).
2. Click New Project, name your project, click Next, then Create Project.

![mongo-1](https://user-images.githubusercontent.com/85912934/214934048-4337c703-af47-4256-960c-b6043ac4550b.png)
![mongo-2](https://user-images.githubusercontent.com/85912934/214934087-982ae57b-8f36-40d2-bd7c-970161f9639f.png)
![mongo-3](https://user-images.githubusercontent.com/85912934/214934111-a393d093-dd2f-4de7-a9e5-8a9a685a15c2.png)

3. Click Build a Database, and choose the free option.

![mongo-4](https://user-images.githubusercontent.com/85912934/214934176-4c6d5942-3c14-413f-9f9d-96de5c32f14e.png)
![mongo-5](https://user-images.githubusercontent.com/85912934/214934182-f5a8cb4c-1235-4697-a951-54494b19e2e5.png)

4. Leave AWS as the Cloud Provider & Region, the region closest to where you are, and click Create Cluster.

![mongo-6](https://user-images.githubusercontent.com/85912934/214934268-7c7b1990-119a-4e74-8626-0686b9fdb2f9.png)

5. Type in a username and password, click Create User, leave it on My Local Environment, click Add My Current IP Address, then Finish and Close.

![mongo-7](https://user-images.githubusercontent.com/85912934/214934328-dc5ddf58-d9b0-4cfa-9f5b-47893806b33a.png)
![mongo-8](https://user-images.githubusercontent.com/85912934/214934354-dd442577-c84d-4021-9029-a3dddf284513.png)

6. Click Connect, Connect your application, then copy the connection string.

![mongo-9](https://user-images.githubusercontent.com/85912934/214934413-6af4411b-9ff0-4f86-a0ba-ff3461dd9e5e.png)
![mongo-10](https://user-images.githubusercontent.com/85912934/214934424-2bc5e182-874d-44e1-9b25-213a5504eaa8.png)
![mongo-11](https://user-images.githubusercontent.com/85912934/214934429-77723285-54db-4595-9477-0b9922ee72d5.png)

7. Create a .env in your root folder and add the following:
```
PORT = 5000
MONGO_URI = MongoDB connection string (Note: Don't forget to replace <password> with your password)
JWT_SECRET = Any Text Here
```

### Paypal Client ID
1. Create an account or login to [Paypal](https://developer.paypal.com/home/).
2. Click App & Credentials, then Create App.
![paypal-1](https://user-images.githubusercontent.com/85912934/219774626-3c841e2d-d710-486e-93d7-8d2154ccc5b3.png)

3. Type an App Name, leave it on Merchant, and click Create App.
![paypal-2](https://user-images.githubusercontent.com/85912934/219774725-927c12d8-e07e-4860-b6a1-d6c2421a95f7.png)

4. Change the following in the client's index.html using your Client ID:
![paypal-3](https://user-images.githubusercontent.com/85912934/219774776-73078e36-bb0c-4334-8b85-c1e90b41f4d4.png)
```html
<script src="https://www.paypal.com/sdk/js?client-id=YOUR CLIENT ID"></script>
```

### Add Food Data
1. Open a terminal, cd into the server, then type npm start.
2. Open another terminal, cd into the clinet, then type ng serve -o.
3. Open a separate browser and type http://localhost:5000/api/foods/seed to seed the sample_foods data.

## Features
- User can register and log in to their account.
- User can filter all the foods using the search bar.
- User can filter all the foods using the tags.
- User can add any food to their cart.
- User can clear or view the food in their cart.
- User can change the quantity of any food in their cart.
- Logged in user can choose their location.
- Logged in user can pretend to purchase their food using Paypal (Note: If you didn't make a Paypal sandbox account, then use sb-rl1yn25021142@personal.example.com as the email and A90d>Hc< as the password).
- Logged in user can see their order details after their fake purchase.
- User can view a pizza loading image while assets are fetched.
- Responsive web design for all portrait and landscape devices.
- Browser support for Edge/Internet Explorer.

## Upcoming Features
- Cross browser support for Chrome, Firefox, Opera, and Safari.
- Logged in user can view, edit, and delete their profile.
- Frontend security to prevent any user from seeing the order details of other users.

## Bugs
- Loading interceptor will appear behind angular material components.

## [MEAN Delivery Demo](https://mean-delivery-frontend.onrender.com/)

## Author
- Christian Demesa: https://github.com/christiandeandemesa
