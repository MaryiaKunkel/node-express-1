# Broken App Issues

## Summary of Changes Made

1. **Modularization**: Moved route handling to a separate file (`routes.js`) for better organization.
2. **Error Handling Improvement**: Implemented a custom `ExpressError` class for consistent error handling.
3. **Async/Await Usage**: Replaced Promise-based code with `async/await` for better readability and maintainability.
4. **Proper Route Handling**: Used `express.json()` middleware for better JSON request parsing.
5. **Consistent Status Codes**: Updated error handling to return appropriate HTTP status codes.
6. **Server Configuration**: Introduced a separate `server.js` file for starting the server.

## Issues Addressed

### 1. Inadequate Error Handling in Original Code

In the original code (before changes), there was insufficient error handling, and errors were not being propagated correctly.

### 2. Lack of Modularity

The original code had all the logic within the `app.js` file, leading to a lack of modularization and decreased maintainability.

### 3. Incorrect Route Handling

The original code used a hard-coded route in the POST method (`app.post('/')`), which is not a recommended practice. The updated code now uses the '/routes' route defined in `routes.js`.

### 4. No Validation for Required Fields

The original code did not check for the presence of the 'developers' field in the request body, leading to potential runtime errors. The updated code now checks and throws an error if the field is missing.

### 5. Lack of Consistency in Error Responses

The original code did not provide consistent error responses. The updated code ensures a uniform error response format with proper status codes.

### 6. Variable Naming and Readability

Improved variable naming for better readability and understanding of the code.

### 7. Middleware Usage

Incorporated the use of `express.json()` middleware for proper JSON request parsing and enhanced middleware usage for potential future enhancements.
