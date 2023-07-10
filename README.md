# MPG backend test - Felipe Santos

Node.js/TypeScript technical test for Mon Petit Gazon.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authors](#authors)

## Installation

1. Clone the repository:
   
git clone https://github.com/felipesantos94/mpg-test.git
cd this-repo

2. Install dependencies:

npm install


3. Set up Couchbase Server:

Create a `.env` file in the project root with the following content:

CLUSTER_CONN_STR=couchbase://localhost

COUCHBASE_USERNAME=admin

COUCHBASE_PASSWORD=monpetitgazon

COUCHBASE_BUCKET_NAME=mpg


`OBS: The runtime and db versions used in this project were Node.js v20.2.0 and Couchbase Server 7.2.0 community edition.`

## Usage

Run the development server:

- npm start


Access the application routes at `http://localhost:3000` via Postman or similar.

## API Endpoints

- `GET /api/users/:leagueId`: Get a list of all users related to an MPG League ID.
  - Response: JSON { users: [<Users array, if any>]}

- `POST /api/mpg/add`: Create a new MPG League.
  - Response: JSON { message: 'MPG League created successfully' }

- `PATCH /api/mpg/update/:teamId`: Update MPG Team details by ID.
  - Response: JSON { message: 'MPG team updated successfully' }

- `Data validation middleware - Joi`:
The creation of a validation middleware was made to showcase my knowledge in encapsulating business logic to be performed at any point of the HTTP request lifecycle. I considered implementing the `Joi` package to validate body requests with the defined schema models to be used as middleware, and my main reasons to do so were:

- Validate data integrity: Ensure incoming data conforms to the defined schema and constraints, maintaining the integrity and consistency of stored data.

- Ensure security: Validate data to mitigate security risks like SQL injection, cross-site scripting (XSS), and other potential attacks that exploit malformed or malicious data.

- Improve user experience: By validating data upfront, provide immediate feedback to clients about invalid request payloads, enabling users to correct errors promptly and reducing unnecessary server-side processing.

## Authors

- Felipe Santos [@felipesantos94](https://github.com/felipesantos94)
