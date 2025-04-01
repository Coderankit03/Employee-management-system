const employees = [
  {
      "id": 1,
      "firstName": "Amit",
      "email": "e@e.com",
      "password": "123",
      "tasks": [
          {
              "title": "Complete project report",
              "description": "Prepare and submit the final project report.",
              "date": "2025-03-30",
              "category": "Documentation",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "title": "Fix login bug",
              "description": "Resolve the authentication issue in the app.",
              "date": "2025-03-28",
              "category": "Development",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 0,
          "failed": 0
      }
  },
  {
      "id": 2,
      "firstName": "Neha",
      "email": "e2@e.com",
      "password": "222",
      "tasks": [
          {
              "title": "Design UI mockups",
              "description": "Create wireframes for the new dashboard.",
              "date": "2025-04-01",
              "category": "Design",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "title": "Write API documentation",
              "description": "Prepare documentation for the newly developed API endpoints.",
              "date": "2025-03-31",
              "category": "Documentation",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 3,
      "firstName": "Rajesh",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Database backup",
              "description": "Perform and verify database backup for safety.",
              "date": "2025-03-29",
              "category": "Maintenance",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "title": "Conduct code review",
              "description": "Review code of the new feature implemented by the team.",
              "date": "2025-03-30",
              "category": "Development",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Optimize database queries",
              "description": "Improve the efficiency of database queries in the system.",
              "date": "2025-04-02",
              "category": "Optimization",
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true
          }
      ],
      "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 0,
          "failed": 1
      }
  },
  {
      "id": 4,
      "firstName": "Pooja",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Test new features",
              "description": "Run test cases on the newly developed features.",
              "date": "2025-03-30",
              "category": "Testing",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Prepare client presentation",
              "description": "Create a presentation for the upcoming client meeting.",
              "date": "2025-04-05",
              "category": "Business",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 5,
      "firstName": "Vikram",
      "email": "e5@e.com",
      "password": "555",
      "tasks": [
          {
              "title": "Resolve security vulnerabilities",
              "description": "Address security loopholes in the application.",
              "date": "2025-04-01",
              "category": "Security",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Coordinate with vendors",
              "description": "Communicate with vendors for project resources.",
              "date": "2025-03-29",
              "category": "Management",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "title": "Update user permissions",
              "description": "Modify user roles based on recent policy changes.",
              "date": "2025-03-30",
              "category": "Admin",
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 1
      }
  }
];

const admin = [
  {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin };
};