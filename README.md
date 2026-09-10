# Week 06 Assignment — Mini House-Price Prediction API

## 1. How to Run the Project

Run the following commands in your terminal:

```bash
# Navigate to the backend directory
cd backend

# Start the FastAPI server with live reload
uvicorn main:app --reload
```

## 2. Task 3 Questions & Explanations

1. Why does /predict still work without the location parameter?

- Because location is declared as an optional query parameter with a default value. When omitted from the request URL, FastAPI automatically falls back to "other" instead of raising a missing field error

2. Why does /predict return a 422 error without the area parameter?

- Because area is declared as a required parameter without any default value. FastAPI performs automatic schema validation; omitting a required parameter fails validation and returns an HTTP 422 Unprocessable Entity status code detailing the missing field

## 3. Task 5 Questions & Explanations

1. Why does a relative URL (/predict) work in fetch()?

- A relative URL works because both the frontend page and the backend endpoint are served from the exact same origin . The browser automatically prepends the current protocol, hostname, and port to relative paths, resolving /predict directly to http://127.0.0.1:8000/predict without triggering any CORS restrictions
