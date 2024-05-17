# Back-End Series

Learing back-end along side with projects.

[Project Model link](https://app.eraser.io/workspace/GTmlXaD6dcql2E2EBiwr?origin=share)

# Notes:-

# Imp points while database connectivity.
## 1. From first approach
Write entry code in index.js (express,error handeling and database connection code)
### Points to remember

1. When connecting to databases, handling potential data-not-found scenarios is essential. Employ try/catch blocks or promises to manage errors or we can also use promises.

key to remember : ( wrap in try-catch )

2. Database operations involve latency, and traditional synchronous code can lead to blocking, where the program waits for the database query to complete before moving on. So, we should async/await which allows for non-blocking execution, enabling the program to continue with other tasks while waiting for the database response. 

key to remember :  ( always remember the database is in another continent, so use async await)

## 2 From second approach
Write code in seperate files and export it to index.js.

### Points to remember

1. When connecting to databases, handling potential data-not-found scenarios is essential. Employ try/catch blocks or promises to manage errors or we can also use promises.

key to remember : ( wrap in try-catch )

2. Database operations involve latency, and traditional synchronous code can lead to blocking, where the program waits for the database query to complete before moving on. So, we should async/await which allows for non-blocking execution, enabling the program to continue with other tasks while waiting for the database response. 

key to remember :  ( always remember the database is in another continent, so use async await)

# Express
### Cookie-parser
The cookie-parser middleware in Express.js is used to parse and handle cookies in HTTP requests. Cookies are small pieces of data sent by the server to the client and stored on the client's side, which the server can later retrieve.

### CORS (Cross Origin Resource Sharing)
CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to control how web pages can request resources from different domains. It helps prevent malicious websites from making unauthorized requests to another domain, ensuring that only permitted requests are allowed.