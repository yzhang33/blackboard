
let wHeight =2000;
let wWidth = 2000;

let canvas = document.querySelector('#the-canvas');
let ctx = canvas.getContext('2d');
canvas.width = wWidth;
canvas.height = wHeight;
//board variables
let user={}
let users=[]
let posts=[]

$(window).load(()=>{
    $('#loginModal').modal('show');
})

$('.name-form').submit((event)=>{
    event.preventDefault()
    user.name = document.querySelector('#name-input').value;
    $('#loginModal').modal('hide');
    
    //start board when clicked submit
    $('.hiddenOnStart').removeAttr('hidden');
    init();
})

