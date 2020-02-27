## Workflow

- Create repository > clone
- Add .gitignore =>
- Add package.json => git init -y
- Update test script to use jest
- Add jest nodemon and supertest
- Update scripts
- Add jest object

- add api/server.js, cohorts/router.js, students/router.js, index.js

## Features

- list of cohorts
- add a cohort
- list cohort's students
- list of students
- add a student
- list of student's cohorts

|Feature|Method|URL|
|:-----------------------|:------|:------------------------|
|List cohorts|GET|/api/cohorts|
|Add a cohort|POST|/api/cohorts|
|View Cohort's Students|GET|/api/cohorts/:id/students|
|View students|GET|/api/students|
|Add a student|POST|/api/students|
|View student's Cohorts|GET|/api/students/:id/cohorts|



## Cohorts

- id
- name
- start date

## Students

- id
- name


## Testing

- functions: invoke the function with optional arguments => check return
- endpoints: make a request with optional arguments => check the response