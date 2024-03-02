AUTH ROUTES
Base URL /auth

| **HTTP Method** | **URI path** | **Description**   |
|:---------------:|:------------:|-------------------|
|       POST      | /signup      | Signup user       |
|       POST      | /login       | Login user        |
|       GET       | /verify      | Verify Auth token |


USER ROUTES
Base URL /usuario

| **HTTP Method** | **URI path** | **Description**   |
|:---------------:|:------------:|-------------------|
|       GET       | /:id         | Get user details  |
|       PUT       | /:id         | Edit user details |
|      DELETE     | /:id         | Delete user       |


COMMUNITY ROUTES
Base URL /comunidad

| **HTTP Method** | **URI path** | **Description**    |
|:---------------:|:------------:|--------------------|
|       GET       | /            | Get all posts      |
|       PUT       | /post/:id    | Edit single post   |
|       POST      | /post/:id    | Create single post |
|      DELETE     | /post/:id    | Delete single post |


PSIC ROUTES
Base URL /psic

| **HTTP Method** | **URI path** | **Description**          |
|:---------------:|:------------:|--------------------------|
|       GET       | /            | Get all psycologists     |
|       GET       | /:id         | Get psycologist details  |
|       PUT       | /:id         | Edit psycologist details |
|      DELETE     | /:id         | Delete psycologist user  |


