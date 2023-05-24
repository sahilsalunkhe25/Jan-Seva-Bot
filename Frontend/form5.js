function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
function toggle(){
    var blur = document.getElementById( "blur" );
    blur.classList.toggle( "active" );
    document.getElementById('form-btn').style.visibility = 'hidden';
    }
// Get the modal
var modal = document.getElementById("myForm");

// When the user clicks anywhere outside of the modal, close it
document.addEventListener('click', function(event) {
    if (event.target.closest('.form-popup') !== modal && event.target.closest('.form-btn') == null) {
        modal.style.display = "none";
          // Remove "active" class from blur div
          document.getElementById("blur").classList.remove("active");
          // Show form button again
          document.getElementById("form-btn").style.visibility = "visible";
    }
});



  function checkEligibility() {
    // Get the form element
    const form = document.getElementById('myForm');
    // Get all the answer select elements
    const answers = form.querySelectorAll('select');

    // Check if any of the answers is "No"
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].value === 'no') {
        // Display "You are not eligible" and exit the function
        document.getElementById('result').textContent = 'You are eligible';
        return;
      }
    }

    // All answers are "Yes", display "You are eligible"
    document.getElementById('result').textContent = 'You are not eligible';
  }





  const form = document.querySelector('.MyForm'); // Select the form element
  const btn = document.querySelector('.btn'); // Select the submit button element
  const message = document.querySelector('.message'); // Select the message element

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Get the value of each radio button
    const answer1 = document.querySelector('input[name="Question1"]:checked').value;
    const answer2 = document.querySelector('input[name="Question2"]:checked').value;
    const answer3 = document.querySelector('input[name="Question3"]:checked').value;
    const answer4 = document.querySelector('input[name="Question4"]:checked').value;
    // const answer5 = document.querySelector('input[name="Question5"]:checked').value;

    // Check if any of the answers are "No"
    if (answer1 === 'Yes' && answer2 === 'Yes' && answer3 === 'No' && answer4 === 'Yes') {
      message.textContent = 'You are eligible';
    } else {
      message.textContent = 'You are not eligible';
    }
  });


  // for transition

  // Display popup with transition
formPopup.classList.add('show');

// Hide popup with transition
formPopup.classList.add('hide');
