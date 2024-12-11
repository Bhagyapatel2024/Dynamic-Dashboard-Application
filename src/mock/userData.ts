import { User } from '../types';

// Helper function to generate random data
function generateRandomUser(id: number): User {
  const names = [
    'John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson', 'David Brown', 
    'Emily Davis', 'Alex Turner', 'Lisa Anderson', 'Sophia Martinez', 'Liam Walker'
  ];

  const regions = ['North America', 'Europe', 'Asia', 'South America', 'Africa'];
  const statuses = ['active', 'inactive'];

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomRegion = regions[Math.floor(Math.random() * regions.length)];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  const randomDate = new Date(
    2024,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28) + 1
  );

  return {
    id: id.toString(),
    name: randomName,
    email: `${randomName.split(' ')[0].toLowerCase()}${id}@example.com`,
    status: randomStatus,
    region: randomRegion,
    registrationDate: randomDate.toISOString().split('T')[0],
  };
}

// Generate 50 mock users
export const mockUsers: User[] = Array.from({ length: 50 }, (_, index) => 
  generateRandomUser(index + 1)
);

console.log(mockUsers);
