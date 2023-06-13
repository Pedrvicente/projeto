let slideIndex = [1,1,1];
let slideId = ["mySlides", "personSlide", "showPost"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
};








// // Get the number of blog posts
// const numberOfBlogPosts = document.querySelectorAll(".blogPost").length;

// // Create a pagination object
// const pagination = {
//   currentPage: 1,
//   numberOfPages: Math.ceil(numberOfBlogPosts / 5),
//   numberOfPostsPerPage: 5,
// };

// // Create a function to handle the pagination clicks
// function handlePaginationClick(event) {
//   // Get the clicked element
//   const clickedElement = event.target;

//   // If the clicked element is the previous button
//   if (clickedElement.id === "prev-post") {
//     // Go to the previous page
//     pagination.currentPage--;
//   } else if (clickedElement.id === "next-post") {
//     // Go to the next page
//     pagination.currentPage++;
//   }

//   // Update the pagination buttons
//   updatePaginationButtons();

//   // Update the blog posts
//   updateBlogPosts();
// }

// // Create a function to update the pagination buttons
// function updatePaginationButtons() {
//   // Get the pagination buttons
//   const prevButton = document.getElementById("prev-post");
//   const nextButton = document.getElementById("next-post");

//   // Disable the previous button if we are on the first page
//   if (pagination.currentPage === 1) {
//     prevButton.disabled = true;
//   } else {
//     prevButton.disabled = false;
//   }

//   // Disable the next button if we are on the last page
//   if (pagination.currentPage === pagination.numberOfPages) {
//     nextButton.disabled = true;
//   } else {
//     nextButton.disabled = false;
//   }
// }

// // Create a function to update the blog posts
// function updateBlogPosts() {
//   // Get the blog posts container
//   const blogPostsContainer = document.getElementById("blogPostSection");

//   // Clear the blog posts container
//   blogPostsContainer.innerHTML = "";

//   // Get the blog posts for the current page
//   const blogPostsForCurrentPage = numberOfBlogPosts * pagination.currentPage - numberOfBlogPosts;
//   const blogPosts = document.querySelectorAll(".blogPost").slice(blogPostsForCurrentPage, blogPostsForCurrentPage + pagination.numberOfPostsPerPage);

//   // Append the blog posts to the blog posts container
//   blogPostsContainer.appendChild(...blogPosts);
// }

// // Handle the pagination clicks
// document.getElementById("prev-post").addEventListener("click", handlePaginationClick);
// document.getElementById("next-post").addEventListener("click", handlePaginationClick);

// // Initialise the pagination
// updatePaginationButtons();
// updateBlogPosts();




// // Get the number of blog posts
// const numberOfBlogPosts = document.querySelectorAll(".blogPost").length;

// // // Create a pagination object
// const pagination = {
// currentPage: 1,
// numberOfPages: Math.ceil(numberOfBlogPosts / 5),
//    numberOfPostsPerPage: 5,
//  };

//  // Create a function to handle the pagination clicks
//  function handlePaginationClick(event) {
//    // Get the clicked element
//    const clickedElement = event.target;

// // If the clicked element is a <button> element with the id "prev-post"
// if (clickedElement.tagName === "BUTTON" && clickedElement.id === "prev-post") {
// // Go to the previous page
// pagination.currentPage--;
// } else if (clickedElement.tagName === "BUTTON" && clickedElement.id === "next-post") {
// // Go to the next page
// pagination.currentPage++;
//   }

// //   // Update the pagination buttons
// updatePaginationButtons();

// //   // Update the blog posts
// updateBlogPosts();
//  }

// // // Create a function to update the pagination buttons
// function updatePaginationButtons() {
// //   // Get the pagination buttons
// const prevButton = document.getElementById("prev-post");
// const nextButton = document.getElementById("next-post");

// //   // Disable the previous button if the current page is less than or equal to 1
// if (pagination.currentPage <= 1) {
// prevButton.disabled = true;
// } else {
// prevButton.disabled = false;
// }

// // Disable the next button if the current page is equal to the number of pages
// if (pagination.currentPage === pagination.numberOfPages) {
// nextButton.disabled = true;
// } else {
// nextButton.disabled = false;
// }
// }

// // // Create a function to update the blog posts
// function updateBlogPosts() {
// //   // Get the blog posts container
// const blogPostsContainer = document.getElementById("blogPostSection");

// //   // Clear the blog posts container
// blogPostsContainer.innerHTML = "";

// //   // Get the blog posts for the current page
// const blogPostsForCurrentPage = (pagination.currentPage - 1) * pagination.numberOfPostsPerPage;
// const blogPosts = Array.from(document.querySelectorAll(".blogPost")).slice(blogPostsForCurrentPage, blogPostsForCurrentPage + pagination.numberOfPostsPerPage);

// //   // Set the content of the blog posts container to the blog posts array
// blogPostsContainer.innerHTML = blogPosts.join("");
// }

// // // Handle the pagination clicks
// document.getElementById("prev-post").addEventListener("click", handlePaginationClick);
// document.getElementById("next-post").addEventListener("click", handlePaginationClick);

// // // Initialise the pagination
// updatePaginationButtons();
// updateBlogPosts();












// // Get the number of blog posts
// var numberOfBlogPosts = document.querySelectorAll(".blogPost").length;

// // Get the current page number
// var currentPageNumber = 1;

// // Set the href of the prev and next buttons
// document.getElementById("prev-post").href = `?page=${currentPageNumber - 1}`;
// document.getElementById("next-post").href = `?page=${currentPageNumber + 1}`;

// // Paginate the blog posts when the prev or next buttons are clicked
// document.getElementById("prev-post").addEventListener("click", function() {
// currentPageNumber--;
// updateBlogPosts();
// });

// document.getElementById("next-post").addEventListener("click", function() {
// currentPageNumber++;
// updateBlogPosts();
// });

// // Update the blog posts
// function updateBlogPosts() {
// // Hide all blog posts
// var blogPosts = document.querySelectorAll(".blogPost");
// for (var i = 0; i < blogPosts.length; i++) {
//     blogPosts[i].style.display = "none";
// }

// //   // Show the blog posts for the current page
// //   var blogPostsToShow = document.querySelectorAll(".blogPost")
// //     .slice(currentPageNumber * 5, (currentPageNumber + 1) * 5);
// }

// // Set the pagination limit
// const paginationLimit = 5;

// // Calculate the number of pages
// const pageCount = Math.ceil(numberOfBlogPosts / paginationLimit);

// // Paginate the blog posts
// for (var i = 1; i <= pageCount; i++) {
// // Get the blog posts for the current page
// var blogPosts = Array.from(document.querySelectorAll(".blogPost"))
// .slice((i - 1) * paginationLimit, i * paginationLimit);

// for (var i = 0; i < blogPostsToShow.length; i++) {
//     blogPostsToShow[i].style.display = "block";
// }
// };



// // Get the number of blog posts
// var numberOfBlogPosts = document.querySelectorAll(".blogPost").length;

// // Get the current page number
// var currentPageNumber = 1;

// // Set the href of the prev and next buttons
// document.getElementById("prev-post").href = `?page=${currentPageNumber - 1}`;
// document.getElementById("next-post").href = `?page=${currentPageNumber + 1}`;

// // Paginate the blog posts when the prev or next buttons are clicked
// document.getElementById("prev-post").addEventListener("click", function() {
// currentPageNumber--;
// updateBlogPosts();
// });

// document.getElementById("next-post").addEventListener("click", function() {
// currentPageNumber++;
// updateBlogPosts();
// });

// // Update the blog posts
// function updateBlogPosts() {
// // Hide all blog posts
// var blogPosts = document.querySelectorAll(".blogPost");
// for (var i = 0; i < blogPosts.length; i++) {
//     blogPosts[i].style.display = "none";
// }

// //   // Show the blog posts for the current page
// //   var blogPostsToShow = document.querySelectorAll(".blogPost")
// //     .slice(currentPageNumber * 5, (currentPageNumber + 1) * 5);
// }

// // Set the pagination limit
// const paginationLimit = 5;

// // Calculate the number of pages
// const pageCount = Math.ceil(numberOfBlogPosts / paginationLimit);

// // Paginate the blog posts
// for (var i = 1; i <= pageCount; i++) {
// // Get the blog posts for the current page
// var blogPosts = Array.from(document.querySelectorAll(".blogPost"))
// .slice((i - 1) * paginationLimit, i * paginationLimit);

// for (var i = 0; i < blogPostsToShow.length; i++) {
//     blogPostsToShow[i].style.display = "block";
// }
// };