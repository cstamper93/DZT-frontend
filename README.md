# DZT Land Surveying Website

## Description:

  This is a site that I created for my current place of employment. The main functionality is allowing the user to fill out
  a form that includes all of the information needed for the company to tell what they need and reach back out to the user 
  with a quote, with the potential for it to become a new job.
  It also tells the user about the company and its services.

## Technologies Used:

* Java with SpringBoot for backend - simply using the Java mail library so the application will notify managers with an 
  email when a user completes a form
* Vue.js for frontend

## Challenges:

* The biggest challenge was learning how to use the Java mail library to get the application to send emails and properly format 
  them in a sensible way. The way through this was reading through documentation and utilizing the toString method in the email 
  model class.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
