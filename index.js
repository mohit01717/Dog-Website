const car_d = document.querySelector(".card h1");
const btn = document.querySelector(".btn");
btn.addEventListener("click",()=>{
      car_d.classList.toggle("click")
})

const li = document.querySelector("li a")
console.log(li.attributes)
console.log(li.getAttribute("href"))
li.setAttribute("href","https://github.com")
console.log(li.getAttribute("href"))


