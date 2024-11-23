🌈☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️
# Try the App just down here 👇

https://evoquiz.herokuapp.com/



# How the project was planned

### Organized to do list
Notion 

### Database Schema

![alt text](https://i.ibb.co/M2QZGxH/schema-bdd.jpg "Logo Title Text 1")


# Mobile version preview of the project

![alt text](https://i.ibb.co/BZBV92m/pseudo-user-flow.jpg "Logo Title Text 1")


# How to run the project locally
## Get the project
- clone this repo
```
git clone https://github.com/AmineAffif/study_test.git
```
## Setting up Backend
- Place yourself inside ```study_test/evoquiz-back```
- Install dependencies
```
composer install
```
- Make sure to create manualy a mysql database named "evoquiz" 
- Run tables migrations
```
php artisan migrate
```
- Run the seeders to populate randomly the database
```
php artisan db:seed
```
- Run the backend server. (Check the port with the one which is the next part for the front end in ```study_test/evoquiz-front/src/Utils/Api.js```) Because our frontend Api call need the good backend port.
```
php artisan serve
```

## Setting up Frontend
- Place yourself inside ```study_test/evoquiz-front```
- Install dependencies
```
npm i
```
- Start the frontend server
```
npm start
```



## Guidelines
- Fork this repository.
- You can add any framework, library or plugin you'd like.
- Make sure the application works out-of-the box once you're done.
- Push changes to your git fork.
- Add a short description on how to run your program for anyone who would like to test it.
- Check the finished features in the Assignment and Bonus section by putting an 'X' ([X]) in between the brackets.
- Quality over quantity, better half of the features 100% done, than 100% of the features half-done.

## Assignment :
  - You are asked to build a simple Quizz App

### User
 [<span style="color:orange">X</span>] A user can log in with a valid username and password through a login screen

 [<span style="color:orange">X</span>] A user can see a collection of quizzes

 [<span style="color:orange">X</span>] A user can start a quizz

 [<span style="color:orange">X</span>] A user can answer 3 questions on a quizz

 [<span style="color:orange">X</span>] A user can see the scores of his quizzes



### Quizz
 [<span style="color:orange">X</span>] A quizz has a Title

 [<span style="color:orange">X</span>] A quizz has a maximum of 3 questions

 [<span style="color:orange">X</span>] A quizz is considered passed if +60% of questions are answered correctly

### Question
 [<span style="color:orange">X</span>] A question has a maximum of 4 answers

 [<span style="color:orange">X</span>] A question has only 1 possible correct answer


## Bonus
- Some nice to haves, when there is time to spare.

 [<span style="color:orange">X</span>] A quizz can have a dificulty level

 [<span style="color:orange">X</span>] Add admin role

 [ ] A user with admin role can create and edit quizzes

 [ ] A user can come back to a started quizz at the question he stopped

 [<span style="color:orange">X</span>] Add or improve a feature of your own choice
 (See last game score and Max score)
