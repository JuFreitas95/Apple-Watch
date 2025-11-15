

const prevbutton = document.getElementById('prev');
const nextbutton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberInfo = document.querySelector('.numbers');
const list = document.querySelector('.lista');


let active  = 0;
const total = items.length
let timer;


function update(direction) {


document.querySelector('.item.ativo').classList.remove('ativo')
document.querySelector('.dot.active').classList.remove('active')



if(direction > 0) {

    active = active + 1

    if(active === total){

        active = 0
    }

}

else if(direction < 0){



active = active - 1

if(active < 0){



active = total - 1


}
}



items[active].classList.add('ativo');
dots[active].classList.add('active');


numberInfo.textContent = String(active + 1).padStart(2, '0')

}

clearInterval(timer);
timer = setInterval(() => {

    update(1)

}, 2000);






prevbutton.addEventListener('click', function(){

   update(-1)
})

nextbutton.addEventListener('click', function(){

  update(1)
})