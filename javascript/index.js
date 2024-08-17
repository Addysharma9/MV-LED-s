
function handleClick(event) {

    const clickedDiv = event.currentTarget.querySelector('div');
    const clickedId = clickedDiv.id;

  
    const allDivs = document.querySelectorAll('#mid-div > div > div');
    allDivs.forEach(div => {
        div.style.background = 'white'; // Reset to white
    });

    const gradientStyle = 'linear-gradient(180deg, #0551D5 0%, #27A8F0 100%)';
    clickedDiv.style.background = gradientStyle;

    // Display the clicked div's ID
    document.getElementById('clickedId').textContent = clickedId;
    console.log(clickedId);
}

document.addEventListener('DOMContentLoaded', () => {
    // Attach the click event to all the inner divs within #mid-div
    const divs = document.querySelectorAll('#mid-div > div');
    divs.forEach(div => {
        div.addEventListener('click', handleClick);
    });
});
let burger = document.getElementById('navTrigger');
let nav = document.getElementById('navMenu');

burger.addEventListener('click', function() {
  this.classList.toggle('active');
  nav.classList.toggle('active');
});
