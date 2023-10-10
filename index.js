const $progress = document.getElementById('bar')
const $prev = document.querySelector('#Prev')
const $next = document.querySelector('#Next')
const $circles = document.querySelectorAll('.progress__circle')


let currentActive = 1

$next.addEventListener("click",()=>{
  currentActive++
  if(currentActive > $circles.length){
    currentActive = $circles.length
  }
  update()
})

$prev.addEventListener("click",()=>{
  currentActive--
  if(currentActive < 1){
    currentActive = 1
  }
  update()
})

const update  =()=>{
  //Todo: recorre la lista de circulos 
  $circles.forEach((circle,index)=>{
    //* circle = uno por uno,
    //* index = la posicion del elemento
    if(index < currentActive){
      circle.classList.add('active')
    }else{
      circle.classList.remove('active')
    }
  })

  //* seleccion de la clase active
  const actives = document.querySelectorAll('.active')

  //* estila la barra de progreso al pundo de cada elemento
  $progress.style.width = (actives.length - 1) / ($circles.length - 1) * 100 + '%';
  
  //* habilita o desabilita los botones
  if(currentActive === 1){
    $prev.disabled = true
  }else if(currentActive === $circles.length){
    $next.disabled = true
  }else{
    $next.disabled = false
    $prev.disabled = false
  }
}