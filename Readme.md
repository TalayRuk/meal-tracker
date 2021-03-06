# Meal Tracker

#### Week2: Angular 2 JS App Independent Project

#### _by Vichitra Pool (Note) October 21st, 2016_

## Description

#### _Create a meal tracking application. Users can log foods they've eaten each day, including details about the meal and its number of calories. You may assume foods being logged are for a single day ._

#### Wants:

1. Log a food eaten in a day by submitting a form w/ food name, calories & details.
2. View a list of foods I have logged.
3. Options to view all foods,
    - only high-calorie foods (over 500 calories)
    - or only lower-calorie foods (less than 500 calories)
4. Click a food to edit its NAME, DETAILS, OR CALORIES.

## Setup/Installation Requirements
1.  Open PowerShell
2.  $ git clone https://github.com/TalayRuk/meal-tracker.git
3.  $ cd meal-tracker
4.  $ bower init
5.  $ npm install
6.  $ bower install
7.  $ npm install gulp-sass gulp-sourcemaps --save-dev
8.  $ gulp build --production
9.  $ gulp serve

## Known Bugs
_none_

## Support and contact details
_Please contact the authors if you have any questions or comments._

## Technologies Used

HTML, CSS, JavaScript, Node.js, Npm & Gulp, Bower & Sass, TypeScript, Angular 2


## License

_*MIT Creative Commons*_

_Copyright (c) 2016 Vichitra Pool at Epicodus_




#### Wishes:
1. Custom SASS styling with corresponding Gulp tasks to compile.
2. Display of the total number of calories consumed in a day, and/or the average number of calories consumed in a day.
3. Add a property that records when each food was eaten. The user could enter a date and time, or the app can generate a timestamp.
4. Expand the application to display multiple days of food logs. Group the food entries by day. Then include a component to display the total calories for whichever day the user selects.
5. Add a new master component to average the total calories consumed per day so that the user can figure out how much exercise they should be getting on a regular basis.
6. Add Graph for the calories intake
#### Review for:
- Is the app structured in a logical way, including a model, multiple components and TypeScript? (Interfaces are not required).
- Can the application create and edit new instances of a model?
- Does the app allow you to view a list of foods?
- Can the application filter foods based on their calories?
- Are dependencies managed with npm and Bower?
- Does the app include a gulp-based asset pipeline with a development server?
- Does code meet standards from previous weeks?
- Is the project in a presentable, portfolio-quality state?
- Project demonstrates understanding of concepts covered this week. If prompted, you are able to discuss your code with an instructor using correct terminology.
