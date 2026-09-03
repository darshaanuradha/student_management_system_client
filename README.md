# Student Management System Client

A responsive student directory built with Next.js and React. The application
provides a CRUD interface for creating, viewing, updating, and deleting
student records through a REST API.

## Features

- View all students in a directory table.
- Add a student with required contact and personal details.
- Edit an existing student record.
- Delete a student after confirmation.
- Loading, empty, submitting, and error states.
- Responsive layout with Tailwind CSS and Lucide icons.

## Tech Stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- [Netlify Next.js Runtime](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/)

## Requirements

- Node.js 20 or newer
- npm
- A running student-management REST API

## Getting Started

1. Clone the repository and move into the project directory:

   ```bash
   git clone <repository-url>
   cd student_management_system_client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the backend URL. Create a `.env.local` file in the project root:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8080/api/students
   ```

   `NEXT_PUBLIC_API_URL` must point to the students collection endpoint. If it
   is not set, the application uses the deployed default endpoint:
   `https://student-management-system-be.onrender.com/api/students`.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000). The home page links to
   the directory at [http://localhost:3000/students](http://localhost:3000/students).

## Available Scripts

| Command         | Description                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start the local development server. |
| `npm run build` | Create a production build.          |
| `npm run start` | Serve the production build.         |
| `npm run lint`  | Run ESLint.                         |

For a production-style local check:

```bash
npm run build
npm run start
```

## API Contract

The client expects the API base URL to represent a student collection. It
uses the following requests:

| Operation      | Method   | Request URL         | Request body |
| -------------- | -------- | ------------------- | ------------ |
| List students  | `GET`    | `/api/students`     | None         |
| Create student | `POST`   | `/api/students`     | Student JSON |
| Update student | `PUT`    | `/api/students/:id` | Student JSON |
| Delete student | `DELETE` | `/api/students/:id` | None         |

Student JSON uses these fields:

```json
{
  "firstName": "Kamal",
  "lastName": "Perera",
  "email": "kamal@example.com",
  "phoneNumber": "077 123 4567",
  "address": "123 Main Street, City",
  "dateOfBirth": "2001-04-15"
}
```

The `GET` response must be a JSON array. Each returned record should include
an `id` and the fields above. The API should accept and return successful HTTP
status codes for each operation and allow browser requests from the deployed
frontend origin (CORS).

## Project Structure

```text
app/
  globals.css          Global Tailwind import
  layout.tsx           Root layout, fonts, and metadata
  page.tsx             Home page and link to the directory
  students/page.tsx    Client-side student CRUD interface
public/                Static assets
netlify.toml           Netlify build and Next.js plugin configuration
```

## Deployment

This repository is configured for Netlify in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `.next`
- Plugin: `@netlify/plugin-nextjs`

To deploy on Netlify:

1. Import the repository into Netlify.
2. Set `NEXT_PUBLIC_API_URL` in **Site configuration > Environment variables**.
3. Deploy the site.

The environment variable is embedded into the browser bundle, so do not put
secrets or private credentials in it. Configure authentication and sensitive
backend settings on the API server instead.

## Troubleshooting

### The directory cannot load students

Check that `NEXT_PUBLIC_API_URL` is correct, the backend is running, and the
backend allows requests from `http://localhost:3000` or the deployed site URL.
The browser network panel will show the failing request and status code.

### Create, update, or delete fails

Confirm that the API supports the method and URL shown in the API contract,
accepts JSON for `POST` and `PUT`, and returns a successful status code. The
client displays a generic error message while the browser console contains the
request error details.

### Environment changes are not visible

Restart `npm run dev` after changing `.env.local`. On Netlify, trigger a new
deploy after changing an environment variable.

## License

No license has been specified for this project yet.
