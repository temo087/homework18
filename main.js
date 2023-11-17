let ricxvi1 = document.querySelectorAll('.txt1')
let ricxvi2 = document.querySelectorAll('.txt2')
let ricxvi3 = document.querySelectorAll('.txt3')
let btn = document.querySelector("#btn")
let price1 = 19.9
let price2 = 24.9
let price3 = 39.9

btn.addEventListener("click", () => {

    btn.classList.toggle("active")


    if(price1 < 40){
        console.log("shemodis")
        price1 *=10
    }
    else{
        console.log("arshemodids")
        price1/=10
    }
    console.log(price1)
   price1.innerHTML = ricxvi1;
     
    ricxvi1.forEach(ricxvi1 => {
        ricxvi1.innerHTML = price1;
    });


    if(price2 < 40){
        price2 *=10
    }
    else{
        price2/=10
    }
    console.log(price2)
   price2.innerHTML = ricxvi2;
     
    ricxvi2.forEach(ricxvi2 => {
        ricxvi2.innerHTML = price2;



        if(price3 < 40){
            console.log("shemodis")
            price3 *=10
        }
        else{
            console.log("arshemodids")
            price3/=10
        }
        console.log(price3)
       price3.innerHTML = ricxvi3;
         
        ricxvi3.forEach(ricxvi3 => {
            ricxvi3.innerHTML = price3;
        });
    });
})
