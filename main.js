// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0
function plusCount(){
    count++;
    number.textContent = `${count}`
}

function minusCount() {
    count--;
    if(count < 0){
        count=0;
    }
    number.textContent = `${count}`
}

function resetCount() {
    count=0;
    number.textContent = `${count}`
}

const counter = document.querySelector(".counter");
const number = document.querySelector(".number");
let count = 0;

const plus = document.querySelector(".btn-inc");
plus.addEventListener('click', plusCount)

const minus = document.querySelector(".btn-dec");
minus.addEventListener('click', minusCount)

const reset = document.querySelector(".btn-clr");
reset.addEventListener('click', resetCount)
