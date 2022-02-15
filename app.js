// handle toggle menu
const toggle = document.getElementById("toggle");
toggle.addEventListener("click", function (){
    document.body.classList.toggle('show-nav');
    document.body.style.overflowX = 'hidden';
});

// handle modal on onClick sign up button
const modal = document.getElementById('modal');
//show modal
document.getElementById("open").addEventListener("click", function (){
    modal.classList.add('show-modal');
})

// hide modal
const closeId = document.getElementById("close");
closeId.addEventListener("click", function (){
    modal.classList.remove('show-modal');
});

// Hide modal on outside click
window.addEventListener('click', function (e){
    e.target == modal ? modal.classList.remove('show-modal') : false
});
