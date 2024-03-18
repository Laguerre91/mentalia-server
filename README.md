**MENTALIA**
---
Mentalia, the final project of Ironhack's bootcamp, was developed in collaboration with Francisco Pazos Rey. It's an innovative initiative centered on mental well-being, featuring a mood tracker to monitor emotions, facilitating access to psychologists, and providing a community platform for sharing ideas and experiences among users. This comprehensive project was developed within a two-week timeframe.

In the future, we will implement the option for psychologists to register, where appropriate checks on the professional's credentials will be conducted. Psychologists will have the option to unify and keep a record of all their patients within the platform.

**Technologies used**

Frontend: React, Bootstrap

Backend: Express, Node.js, MongoDB

AUTH ROUTES
---
Base URL /auth

| **HTTP Method** | **URI path** | **Description**   |
|:---------------:|:------------:|-------------------|
|       POST      | /signup      | Signup user       |
|       POST      | /login       | Login user        |
|       GET       | /verify      | Verify Auth token |



USER ROUTES
---
Base URL /usuarios

| **HTTP Method** | **URI path** | **Description**   |
|:---------------:|:------------:|-------------------|
|       GET       | /:userid         | Get user details  |
|       PUT       | /:userid         | Edit user details |
|      DELETE     | /:userid         | Delete user       |


COMMUNITY ROUTES
----
Base URL /comunidad

| **HTTP Method** | **URI path** | **Description**    |
|:---------------:|:------------:|--------------------|
|       GET       | /            | Get all posts      |
|       PUT       | /post/:id    | Edit single post   |
|       POST      | /post/:id    | Create single post |
|      DELETE     | /post/:id    | Delete single post |


PSIC ROUTES
---
Base URL /psic

| **HTTP Method** | **URI path** | **Description**          |
|:---------------:|:------------:|--------------------------|
|       GET       | /            | Get all psycologists     |
|       GET       | /:id         | Get psycologist details  |
|       PUT       | /:id         | Edit psycologist details |


APPOINTMENTS ROUTES
---
Base URL /appointment

| **HTTP Method** |   **URI path**  | **Description**            |
|:---------------:|:---------------:|----------------------------|
|       GET       | /               | Get all appointments       |
|       GET       | /:appointmentId | Get a specific appointment |
|       POST      | /               | Create new appointment     |
|       PUT       | /:appointmentId | Update created appointment |
|      DELETE     | /:appointmentId | Delete created appointment |


**Members of the development team**

Francisco Pazos Rey 
-------------
Github: <https://github.com/franpazos>

LinkedIn: <https://www.linkedin.com/in/franpazos/>

Lara Aguerre
--------------
Github: <https://github.com/Laguerre91>

LinkedIn: <https://www.linkedin.com/in/lara-aguerre-developer>

DEPLOY
---
<https://mentalia.netlify.app/>

API DEPLOY
---
<https://mentalia-server.fly.dev/>


