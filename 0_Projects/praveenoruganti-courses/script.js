// Course Class: Represents a Course
class Course {
  constructor(courseName, url) {
    this.courseName = courseName;
    this.url = url;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayCourses() {
    const courses = Store.getCourses();

    courses.forEach((course) => UI.addCourseToList(course));
  }

  static addCourseToList(course) {
    const list = document.querySelector("#course-list");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${course.courseName}</td>
        <td><a href=${course.url} target="_blank">${course.url}</a></td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;

    list.appendChild(row);
  }

  static deleteCourse(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#course-form");
    container.insertBefore(div, form);

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

  static clearFields() {
    document.querySelector("#courseName").value = "";
    document.querySelector("#url").value = "";
  }
}

// Store Class: Handles Storage
class Store {
  static getCourses() {
    let courses;
    if (localStorage.getItem("courses") === null) {
      courses = [];
    } else {
      courses = JSON.parse(localStorage.getItem("courses"));
    }

    return courses;
  }

  static addCourse(course) {
    const courses = Store.getCourses();
    courses.push(course);
    localStorage.setItem("courses", JSON.stringify(courses));
  }

  static removeCourse(url) {
    const courses = Store.getCourses();

    courses.forEach((course, index) => {
      if (course.url === url) {
        courses.splice(index, 1);
      }
    });

    localStorage.setItem("courses", JSON.stringify(courses));
  }
}

// Event: Display Courses
document.addEventListener("DOMContentLoaded", UI.displayCourses);

// Event: Add a Course
document.querySelector("#course-form").addEventListener("submit", (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const courseName = document.querySelector("#courseName").value;
  const url = document.querySelector("#url").value;

  // Validate
  if (courseName === "" || url === "") {
    UI.showAlert("Please fill in all fields", "danger");
  } else if (!url.includes("http")) {
    UI.showAlert("URL must contain http", "danger");
  } else {
    // Instatiate course
    const course = new Course(courseName, url);

    // Add Course to UI
    UI.addCourseToList(course);

    // Add course to store
    Store.addCourse(course);

    // Show success message
    UI.showAlert("Course Added", "success");

    // Clear fields
    UI.clearFields();
  }
});

// Event: Remove a course
document.querySelector("#course-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    // Remove course from UI
    UI.deleteCourse(e.target);

    // Remove course from store
    Store.removeCourse(
      e.target.parentElement.previousElementSibling.textContent
    );

    // Show success message
    UI.showAlert("Course Removed", "success");
  }
});
