var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl,{
      animation: true,
      delay: { "show": 200, "hide": 200 }
  })
})

let mql = window.matchMedia('(max-width: 992px)');
let slink = document.getElementById("social-link");


if(mql.matches){
  let classesArray = slink.classList;
  classesArray = classesArray.replace("fixed-bottom","removed");
}