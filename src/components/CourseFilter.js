import React, { useState } from 'react';

const CourseFilter = () => {
  // Initial course data organized by categories
  const initialCourses = {
    Frontend: [
      { id: 1, name: 'React Basics' },
      { id: 3, name: 'Advanced React' },
    ],
    Backend: [
      { id: 2, name: 'Node.js Basics' },
    ],
    Database: [
      { id: 4, name: 'Database Design' },
    ],
  };

  const [courses] = useState(initialCourses);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filter, setFilter] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const getFilteredCourses = (category) => {
    return courses[category].filter(course =>
      course.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const allFilteredCourses = Object.keys(courses).flatMap(category => 
    getFilteredCourses(category)
  );

  return (
    <div>
      <h1>Course List</h1>
      {/* Filter Dropdown */}
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">Show All</option>
        {Object.keys(courses).map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      {/* Filter Input */}
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {/* Course List */}
      {selectedCategory === '' ? (
        // Show all courses
        <div>
          <h2>All Courses</h2>
          <ul>
            {allFilteredCourses.map(course => (
              <li key={course.id}>
                {course.name} - {course.category}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // Show courses by selected category
        Object.keys(courses).map(category => {
          if (selectedCategory !== category) {
            return null;
          }

          const filteredCourses = getFilteredCourses(category);

          return filteredCourses.length > 0 && (
            <div key={category}>
              <h2>{category}</h2>
              <ul>
                {filteredCourses.map(course => (
                  <li key={course.id}>
                    {course.name}
                  </li>
                ))}
              </ul>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CourseFilter;
