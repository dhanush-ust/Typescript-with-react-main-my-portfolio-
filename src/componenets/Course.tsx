import React from 'react';
import { Link } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  description: string;
  link: string;
}

const courses: Course[] = [
  { id: 1, title: 'GIT HUB', description: 'ABOUT PROJECTS', link: 'https://github.com/dhanush-ust' },
  { id: 2, title: 'LINKED IN', description: 'MY PROFILE', link: 'linkedin dhanush' },
  { id: 3, title: 'EMAIL', description: 'TO CONTACT', link: 'https://www.youtube.com/watch?v=BwuLxPH8IDs' },
];

const Courses: React.FC = () => {
  return (
    <main>
      <section>
        <h1>profile</h1>
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <a href={course.link} target="_blank" rel="noopener noreferrer">go to my link</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Courses;
