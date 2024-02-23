

// -----------------first section of js---------------------------
document.querySelector(".r-btn-1").addEventListener("click",
    function (event) {
        document.querySelector(".mobile-slide").scrollLeft +=500;
        event.preventDefault();
    });
document.querySelector(".l-btn-1").addEventListener("click",
    function (event) {
        document.querySelector(".mobile-slide").scrollLeft -=500;
        event.preventDefault();
    });
    

// -----------------second section of js---------------------------
document.querySelector(".r-btn-2").addEventListener("click",
    function (event) {
        document.querySelector(".pc-slide").scrollLeft +=500;
        event.preventDefault();
    });
document.querySelector(".l-btn-2").addEventListener("click",
    function (event) {
        document.querySelector(".pc-slide").scrollLeft -=500;
        event.preventDefault();
    });
    
// -----------------third section of js---------------------------
document.querySelector(".r-btn-3").addEventListener("click",
function (event) {
    document.querySelector(".book-slide").scrollLeft +=500;
    event.preventDefault();
});
document.querySelector(".l-btn-3").addEventListener("click",
function (event) {
    document.querySelector(".book-slide").scrollLeft -=500;
    event.preventDefault();
});

// -----------------fourth section of js---------------------------
document.querySelector(".r-btn-4").addEventListener("click",
    function (event) {
        document.querySelector(".cream-slide").scrollLeft +=500;
        event.preventDefault();
    });
document.querySelector(".l-btn-4").addEventListener("click",
    function (event) {
        document.querySelector(".cream-slide").scrollLeft -=500;
        event.preventDefault();
    });
// ----------------------back to top---------------
const backtop = document.querySelector('.bottomTotop');
    backtop.addEventListener('click', ()=>{
        window.scrollTo({
            top:0, 
            behavior:'smooth'
        })
       
        })
// --------------------close sidebar-----------------
       
const closeBtn = document.querySelector('.fa-xmark');
const sidebar = document.querySelector('.sidebar');
const closelogo =  document.querySelector('.close-sidebar');

closelogo.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  closeBtn.classList.toggle('active');
  closelogo.classList.toggle('active');
  document.body.classList.remove('stop-scroll')
});
const allBtn = document.querySelector('.all-btn');
const sidebarall = document.querySelector('.sidebar');

allBtn.addEventListener('click',()=>{
    sidebarall.classList.toggle('active');
    allBtn.classList.toggle('active');
    closelogo.classList.toggle('active');
    closeBtn.classList.toggle('active');
    document.body.classList.add('stop-scroll')
});
// --------------------------sign in topbar----------------
const sign = document.querySelector(".usersign");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");
const black = document.querySelector(".black");
sign.addEventListener("click",()=>{
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    black.classList.toggle("active");
    document.body.classList.add('stop-scroll')
});
black.addEventListener("click",()=>{
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    black.classList.toggle("active");
    document.body.classList.remove('stop-scroll')
});