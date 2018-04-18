# Official Electronero Website

### Clone the repo
```
git clone https://github.com/electronero/electronero.github.io electronero-site
cd electronero-site
npm i
npm start
```
The application is now running on port 3000

### Prerequisites

NodeJS > 8 <https://nodejs.org/en/download/>


### Port
Change port the app runs on by starting the app with ```node ./bin/www 300``` 
To set the port for production set the process.env before you run the app, or just edit the following Start script in package.json 

{
  "name": "electronero",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  
  Modify the start script and add port as seen below:
  
  {
  "name": "electronero",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node ./bin/www 3001"
  },
