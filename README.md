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

- `GET /api/users/:leagueId`: Get a list of all users related to a MPG League ID.
  - Response: JSON { users: [<Users array, if any>]}

- `POST /api/mpg/add`: Create a new MPG League.
  - Response: JSON { message: 'MPG League created successfully' }

- `PATCH /api/mpg/update/:teamId`: Update MPG Team details by ID.
  - Response: JSON { message: 'MPG team updated successfully' }

- `Data validation middleware - Joi`:
The creation of a validation middleware was made to showcase my expertize in encapsuling business logic to be performed at any point of the HTTP request lifecycle. I considered implementing `Joi` package to validate body requests with the defined schema models to be used as a middleware, and my main reasons to do so were:

- Ensure data integrity: Validate that the incoming data adheres to the defined schema and constraints, preventing invalid or inconsistent data from being processed and stored.

- Improve security: Validate the data to mitigate potential security vulnerabilities such as SQL injection, cross-site scripting (XSS), or other forms of attacks that can exploit malformed or malicious data.

- Enhance user experience: By validating the data upfront, you can provide immediate feedback to the client if the request payload is invalid, helping the user correct any errors and reducing unnecessary server-side processing.

## Authors

- Felipe Santos [@felipesantos94](https://github.com/felipesantos94)
