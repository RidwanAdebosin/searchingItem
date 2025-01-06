export interface UserDataProps {
  id: number;
  name: string;
  age: number;
  placeOfBirth: string;
  image: string;
}

export const Users: UserDataProps[] = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    placeOfBirth: "New York",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    placeOfBirth: "London",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 3,
    name: "Carlos Garcia",
    age: 35,
    placeOfBirth: "Madrid",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 4,
    name: "Aiko Tanaka",
    age: 28,
    placeOfBirth: "Tokyo",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 5,
    name: "Maria Rossi",
    age: 32,
    placeOfBirth: "Rome",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 6,
    name: "Hans Müller",
    age: 29,
    placeOfBirth: "Berlin",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 7,
    name: "Fatima Khan",
    age: 27,
    placeOfBirth: "Dubai",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 8,
    name: "Liam O'Brien",
    age: 33,
    placeOfBirth: "Dublin",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];
