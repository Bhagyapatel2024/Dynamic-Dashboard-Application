# Dynamic Dashboard Application

## Deployment
The application is deployed and accessible via the following link:
[Dynamic Dashboard Website](https://your-deployed-site-link.com)

## Screenshots

### Login Page
![Login Page](https://your-image-hosting-link.com/login-page.png)

### User Management Dashboard
![User Management Dashboard](https://your-image-hosting-link.com/user-dashboard.png)

### Analytics Dashboard
![Analytics Dashboard](https://your-image-hosting-link.com/analytics-dashboard.png)


## Description
This project is a Dynamic Dashboard Application built using **React.js**, **Redux**, **TypeScript**, and **Redux Thunk** for API handling. It consists of two main sections:

1. **User Management Dashboard**:
   - Authenticate users with a mock API.
   - Display a paginated and searchable user list with filtering and actions.

2. **Analytics Dashboard**:
   - Visualize user-related metrics and trends through interactive charts and summary cards.

The application is fully responsive and designed to provide a seamless user experience across all devices.

---

## Features

### User Management Dashboard
- **Login Page**:
  - Authenticate users using a mock API.
- **User Table**:
  - Fetch and display users in a table with the following actions:
    - **View Details**: Show user-specific details in a modal.
    - **Delete User**: Remove a user and track deletions during the session.
  - Paginate the user list (5 users per page).
  - Search and filter users by name or email.

### Analytics Dashboard
- **Overview Cards**:
  - Display key metrics:
    - Total Users
    - Active Users (calculated based on the `status` field).
    - Deleted Users (count tracked during the session).
- **Charts**:
  - **User Registration Trend**: Line chart showing registrations over the past 6 months (mock data).
  - **Active vs Inactive Users**: Pie chart comparing active and inactive users.
  - **Users by Region**: Bar chart showing user distribution by region (mock data).
- **Filters**:
  - Filter analytics by date range and region.

---

## Tech Stack
- **React.js**: Frontend framework for building the UI.
- **Redux**: State management.
- **Redux Thunk**: Middleware for handling async actions.
- **TypeScript**: Ensures type safety and better developer experience.
- **Chart.js / Recharts**: For creating interactive and visually appealing charts.
- **Tailwind CSS**: For responsive and modern UI design.




---

## Installation and Setup

### Prerequisites
Make sure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dynamic-dashboard.git
   cd dynamic-dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
4. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

---

## Assumptions
- Mock APIs are used for user data and analytics data.
- The `status` field in the user object determines whether a user is active or inactive.
- Registration trends, user regions, and other analytics data are pre-generated in mock JSON files.

---

## Features Implemented
- User authentication using mock API.
- Search, filter, and paginate users in the management dashboard.
- Dynamic and responsive analytics dashboard with:
  - Line charts, pie charts, and bar charts.
  - Overview cards for key metrics.
  - Date range and region-based filtering.

---

## Dependencies
### Major Libraries:
- `react`: Frontend framework
- `react-redux`: For Redux state management
- `redux-thunk`: Middleware for async actions
- `typescript`: For static typing
- `chart.js` or `recharts`: For chart visualizations
- `tailwindcss`: For responsive UI

---

## Future Enhancements
- Add real-time updates to analytics data.
- Integrate backend API for dynamic data fetching.
- Improve accessibility with `aria` attributes.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact
If you have any questions or suggestions, feel free to contact:
- **Name**: Bhagya Nitinkumar Patel
- **Email**: bhagya20052904@gmail.com
