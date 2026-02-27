let mCurrentIndex = 0 // Tracks the current image index
let mImages = [] // Array to hold GalleryImage objects
const mUrl = "myImages.json" // Replace with actual JSON URL
const mWaitTime = 5000 // Timer interval in milliseconds

$(document).ready(() => {
  $('.details').hide() // Hide details initially

  // Call a function here to start the timer for the slideshow
  $('.callFunction').startTimer()
  // Select the moreIndicator button and add a click event to:
  $('moreIndicator').click()
  // - toggle the rotation classes (rot90 and rot270)
  ToggleEvent(rot90 + rot270)
  // - slideToggle the visibility of the .details section
  $('slideToggle').details
  // Select the "Next Photo" button and add a click event to call showNextPhoto
  $("Next Photo").click$('showNextPhoto')
  // Select the "Previous Photo" button and add a click event to call showPrevPhoto
  $("Previous Photo").click$('showPrevPhoto')
  // Call fetchJSON() to load the initial set of images
  fetchJSON()
})

// Function to fetch JSON data and store it in mImages
function fetchJSON () {
  $.getJSON(mUrl, fuction (data))
  myImages = data.images
  swapPhoto()
  startTimer()
}

// Function to swap and display the next photo in the slideshow
function swapPhoto () {
 let currentImage = myImages
 $('#photo').attr('src', currentImage.imgPath)
 $('.car').text("Car:" +currentImage.imgCar)
 $('.description').text("Description:" +currentImage.imgCar)
 $('.rating').text("Rating:" +currentImage.imgCar)
}

// Advances to the next photo, loops to the first photo if the end of array is reached
function showNextPhoto () {
  if(mCurrentIndex >= myImages.lengths) {
    mCurrentIndex = 0
  }
  swapPhoto()
}

// Goes to the previous photo, loops to the last photo if mCurrentIndex goes negative
function showPrevPhoto () {
  if(mCurrentIndex < 0) {
    mCurrentIndex = >= myImages.lengths -1
  }
  swapPhoto()
}

// Starter code for the timer function
function startTimer () {
  startTimer('showNextPhoto')= setInterval
}
.