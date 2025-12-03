// The 'use client' directive is used to declare a boundary between a Server Component and a Client Component module graph.
// This means that by defining a "use client" in a file, all other modules imported into it, including child components, are considered part of the client bundle.
'use client';

// Define the base URL for the API. It's running on localhost port 3000.
const API_BASE_URL = 'http://localhost:3000';

// Function to handle the signup process. It sends a POST request to the /user/signup endpoint.
export const signup = async (userData: any) => {
  const response = await fetch(`${API_BASE_URL}/user/signup`, {
    method: 'POST', // Specifies the HTTP method.
    headers: {
      'Content-Type': 'application/json', // Indicates that the request body is JSON.
    },
    body: JSON.stringify(userData), // Converts the user data object to a JSON string.
  });
  // The fetch API returns a promise that resolves to the Response object representing the response to the request.
  // We then call the .json() method on the response to parse the body as JSON.
  return response.json();
};

// Function to handle the login process. It sends a POST request to the /user/login endpoint.
export const login = async (credentials: any) => {
  const response = await fetch(`${API_BASE_URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

// Function to fetch data from the protected /user/home endpoint. It sends a GET request.
export const getHomeData = async () => {
  const response = await fetch(`${API_BASE_URL}/user/home`, {
    method: 'GET',
    // We don't need to manually handle credentials like cookies here.
    // The browser will automatically send the session cookie with the request if it exists.
  });
  return response.json();
};

// Function to handle the logout process. It sends a POST request to the /user/logout endpoint.
export const logout = async () => {
  const response = await fetch(`${API_SE_URL}/user/logout`, {
    method: 'POST',
  });
  return response.json();
};
