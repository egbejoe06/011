let name= document.forms['form']['name'];
var email= document.forms['form']['email']
var number= document.forms['form']['number']
var nameerr =document.getElementById('nameerr')
var emailerr = document.getElementById('emailerr')
var numbererr = document.getElementById('numbererr')

name.addEventListener('textInput', name_verify);
email.addEventListener('textInput', email_verify);
number.addEventListener('textInput', number_verify);
function validated() {
if (name.value.length < 2) {
name.style.display = "block";
name.style.outlineColor = "hsl(0, 100%, 74%)";
return false;
}
if (email.value.length < 2) {
emailerr.style.display = "block";
email.style.outlineColor = "hsl(0, 100%, 74%)";
return false;
}
if (number.value.length < 2) {
numbererr.style.display = "block";
number.style.outlineColor = "hsl(0, 100%, 74%)";
return false;
}

return true; // All validations passed
}
function name_verify() {
if (name.value.length >= 2) {
nameerr.style.display = "none";
name.style.outlineColor = "hsl(246, 25%, 77%)";
return true;
}
return false;
}
function email_verify() {
if (email.value.length >= 2) {
emailerr.style.display = "none";
email.style.outlineColor = "hsl(246, 25%, 77%)";
return true;
}
return false;
}

function number_verify() {
if (number.value.length >= 2) {
numbererr.style.display = "none";
number.style.outlineColor = "hsl(246, 25%, 77%)";
return true;
}
return false;
}

    var mouthBtn = document.querySelector(".mouthBtn")
    var yearBtn = document.querySelector(".yearBtn")
    var moveBtn = document.querySelector(".moveBtn")
    var rightBtn= document.querySelector(".rightBtn")
    let section21 = document.querySelector(".section21")
    var section22 = document.querySelector(".section22")

    yearBtn.addEventListener('click', ()=>{
      moveBtn.classList.add("rightBtn")
      section22.classList.add("section23")
      section22.classList.remove("section22")
      section21.classList.add("section24")
    })
    mouthBtn.addEventListener('click', ()=>{
      moveBtn.classList.remove("rightBtn")
      section21.classList.remove("section24")
      section22.classList.add("section23")
      section22.classList.add("section22")
    })

    var submit1 = document.getElementById("submit1")
    var submit2 = document.getElementById("submit2")
    var goback = document.getElementById("goback")
    var section1 = document.querySelector(".section1")
    var section2 = document.querySelector(".section2")
    var submit2 = document.getElementById("submit2")
    var item11 =document.querySelector(".item11")
    var item12 =document.querySelector(".item12")
    var item13 =document.querySelector(".item13")
    var item14 =document.querySelector(".item14")
    var section3 = document.querySelector(".section3")
    var div2 = document.querySelector(".div2")
    var next=document.querySelector("#next")
    var back=document.querySelector("#back")
    var option1 = document.querySelector("#option-1")
    var option2 = document.querySelector("#option-2")
    var option3 = document.querySelector("#option-3")
    var option11 = document.querySelector("#option-11")
    var option21 = document.querySelector("#option-21")
    var option31 = document.querySelector("#option-31")
    var section32 = document.querySelector(".section32")
    var section31 = document.querySelector(".section31")
    var checkbox1 =document.querySelector(".checkbox1")
    var checkbox2 =document.querySelector(".checkbox21")
    var checkbox3 =document.querySelector(".checkbox31")
    var checkbox4=document.querySelector(".checkbox11")
    var checkbox5 =document.querySelector(".checkbox22")
    var checkbox6 =document.querySelector(".checkbox32")
    var section4 = document.querySelector('.section4')
    var back1 = document.querySelector("#back1")
    var confirm = document.querySelector('#confirm')
    var section5 = document.querySelector('.section5')

    option1.addEventListener('click', ()=>{
      if(checkbox1.classList.contains('checkbox1')){
        checkbox1.classList.remove('checkbox1')
        checkbox1.classList.add('checkbox2')
      }else{
        checkbox1.classList.add('checkbox1')
        checkbox1.classList.remove('checkbox2')
      }
    })
    option2.addEventListener('click', ()=>{
      if(checkbox2.classList.contains('checkbox1')){
        checkbox2.classList.remove('checkbox1')
        checkbox2.classList.add('checkbox2')
      }else{
        checkbox2.classList.add('checkbox1')
        checkbox2.classList.remove('checkbox2')
      }
    })
    option3.addEventListener('click', ()=>{
      if(checkbox3.classList.contains('checkbox1')){
        checkbox3.classList.remove('checkbox1')
        checkbox3.classList.add('checkbox2')
      }else{
        checkbox3.classList.add('checkbox1')
        checkbox3.classList.remove('checkbox2')
      }
    })
    option11.addEventListener('click', ()=>{
      if(checkbox4.classList.contains('checkbox1')){
        checkbox4.classList.remove('checkbox1')
        checkbox4.classList.add('checkbox2')
      }else{
        checkbox4.classList.add('checkbox1')
        checkbox4.classList.remove('checkbox2')
      }
    })
    option21.addEventListener('click', ()=>{
      if(checkbox5.classList.contains('checkbox1')){
        checkbox5.classList.remove('checkbox1')
        checkbox5.classList.add('checkbox2')
      }else{
        checkbox5.classList.add('checkbox1')
        checkbox5.classList.remove('checkbox2')
      }
    })
    option31.addEventListener('click', ()=>{
      if(checkbox6.classList.contains('checkbox1')){
        checkbox6.classList.remove('checkbox1')
        checkbox6.classList.add('checkbox2')
      }else{
        checkbox6.classList.add('checkbox1')
        checkbox6.classList.remove('checkbox2')
      }
    })
    const mediaQuery = window.matchMedia('(max-width: 375px)')
    submit1.onclick = function() {
      if (name.value === "") {
        nameerr.style.display = "block";
        name.style.display = "block";
        name.style.outlineColor = "hsl(0, 100%, 74%)";
        name.focus()
        }
      else if (email.value === "") {
        emailerr.style.display = "block";
        email.style.outlineColor = "hsl(0, 100%, 74%)";
        email.focus()
      }
        else if ( number.value.length < 11) {
        numbererr.style.display = "block";
        number.style.outlineColor = "hsl(0, 100%, 74%)";
        number.focus()
      }
      else{
        if (mediaQuery.matches) {
        section2.style.top ="-437px"
        section1.style.top= "-1000px"
        item11.style.background = "none"
        item12.style.background = "hsl(228, 100%, 84%)"
      }else{
      section1.style.top= "-1000px"
      section2.style.top = "-320px"
      item11.style.background = "none"
      item12.style.background = "hsl(228, 100%, 84%)"
      }}

    }
    goback.onclick = function() {
      section2.style.top= "100px"
      section1.style.top = "0px"
      item12.style.background = "none"
      item11.style.background = "hsl(228, 100%, 84%)"
    }
    submit2.onclick=function(){
      var options = document.getElementsByClassName('price1');
      for (var i = 0; i < options.length; i++) {
        if (options[i].classList.contains('price11')) {
          if (mediaQuery.matches) {
      if(moveBtn.classList.contains('rightBtn')){
      section1.style.top= "-1000px"
      section2.style.top= "-1000px"
      section31.style.top="-830px"
      section32.style.display="grid"
      section3.style.display="none"
      item11.style.background = "none"
      item12.style.background = "none"
      item13.style.background = "hsl(228, 100%, 84%)"
      }
      else{
      section1.style.top= "-1000px"
      section2.style.top= "-1000px"
      section31.style.top="-830px"
      section32.style.display="none"
      section3.style.display="grid"
      item11.style.background = "none"
      item12.style.background = "none"
      item13.style.background = "hsl(228, 100%, 84%)"
      }
          }else{
    if(moveBtn.classList.contains('rightBtn')){
      section1.style.top= "-1000px"
      section2.style.top= "-1000px"
      section31.style.top="-620px"
      section32.style.display="grid"
      section3.style.display="none"
      item11.style.background = "none"
      item12.style.background = "none"
      item13.style.background = "hsl(228, 100%, 84%)"
      }
      else{
      section1.style.top= "-1000px"
      section2.style.top= "-1000px"
      section31.style.top="-620px"
      section32.style.display="none"
      section3.style.display="grid"
      item11.style.background = "none"
      item12.style.background = "none"
      item13.style.background = "hsl(228, 100%, 84%)"
      }}
  }else{

  }
  }
    }
    back.onclick = function (){
      if (mediaQuery.matches) {
      section1.style.top= "-1000px"
      section2.style.top= "-437px"
      section31.style.top="100px"
      item11.style.background = "none"
      item12.style.background = "hsl(228, 100%, 84%)"
      item13.style.background = "none" 
      }else{
      section1.style.top= "-1000px"
      section2.style.top= "-320px"
      section31.style.top="100px"
      item11.style.background = "none"
      item12.style.background = "hsl(228, 100%, 84%)"
      item13.style.background = "none" 
      }
    }
    next.addEventListener('click', ()=>{
      if (checkbox1.classList.contains('checkbox2') || checkbox2.classList.contains('checkbox2') || checkbox3.classList.contains('checkbox2') || checkbox4.classList.contains('checkbox2') || checkbox5.classList.contains('checkbox2') || checkbox6.classList.contains('checkbox2') ) {
      if (mediaQuery.matches) {
      section1.style.top= "-1000px"
      section2.style.top= "-1000px"
      section31.style.top="-1400px"
      section4.style.top = "-1210px"
      item11.style.background = "none"
      item12.style.background = "none"
      item13.style.background = "none"
      item14.style.background = "hsl(228, 100%, 84%)"  
      }else{
      section1.style.top= "-1000px"
      section2.style.top= "-1000px"
      section31.style.top="-1000px"
      section4.style.top = "-950px"
      item11.style.background = "none"
      item12.style.background = "none"
      item13.style.background = "none"
      item14.style.background = "hsl(228, 100%, 84%)"
      }}else{
      }
      if(moveBtn.classList.contains('rightBtn')){
        ok1()
      }
      else{
        ok()
      }
    if(checkbox3.classList.contains('checkbox2') &&checkbox2.classList.contains('checkbox2') && price2.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      total3()
    }
    else if(checkbox3.classList.contains('checkbox2') &&checkbox2.classList.contains('checkbox2') && price3.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      total3()
      
    }
    else if(checkbox3.classList.contains('checkbox2') &&checkbox2.classList.contains('checkbox2') && price4.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      total3()
    }
    else if (checkbox2.classList.contains('checkbox2') && price2.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      total2()
    }
    else if (checkbox2.classList.contains('checkbox2') && price3.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      total2()
    }
    else if (checkbox2.classList.contains('checkbox2') && price4.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      total2()
    }
    else if (checkbox3.classList.contains('checkbox2') && price2.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      total2()
    }
    else if (checkbox3.classList.contains('checkbox2') && price3.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      total2()
    }
    else if (checkbox3.classList.contains('checkbox2') && price4.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      total2()
    }
    else if (checkbox2.classList.contains('checkbox2') && price2.classList.contains('price11') && checkbox3.classList.contains('checkbox2')){
      total2()
    }
    else if (checkbox2.classList.contains('checkbox2') && price3.classList.contains('price11') && checkbox3.classList.contains('checkbox2')){
      total2()
    }
    else if (checkbox2.classList.contains('checkbox2') && price4.classList.contains('price11') && checkbox3.classList.contains('checkbox2')){
      total2()
    }
    else if (price2.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      total1()
    }
      else if (price3.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
        total1()
    }
      else if (price4.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
        total1()
    }
    else if (price2.classList.contains('price11') && checkbox2.classList.contains('checkbox2')){
      total1()
    }
    else if (price3.classList.contains('price11') && checkbox2.classList.contains('checkbox2')){
      total1()
    }
    else if (price4.classList.contains('price11') && checkbox2.classList.contains('checkbox2')){
      total1()
    }
    else if (price2.classList.contains('price11') && checkbox3.classList.contains('checkbox2')){
      total1()
    }
    else if (price3.classList.contains('price11') && checkbox3.classList.contains('checkbox2')){
      total1()
    }
    else if (price4.classList.contains('price11') && checkbox3.classList.contains('checkbox2')){
      total1()
    }
    else if(checkbox6.classList.contains('checkbox2') &&checkbox5.classList.contains('checkbox2') && price5.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      total6()
    }
    else if(checkbox6.classList.contains('checkbox2') &&checkbox5.classList.contains('checkbox2') && price6.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      total6()
    }
    else if(checkbox6.classList.contains('checkbox2') &&checkbox5.classList.contains('checkbox2') && price7.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      total6()
    }
    else if (checkbox5.classList.contains('checkbox2') && price5.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      total5()
    }
    else if (checkbox5.classList.contains('checkbox2') && price6.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      total5()
    }
    else if (checkbox5.classList.contains('checkbox2') && price7.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      total5()
    }
    else if (checkbox5.classList.contains('checkbox2') && price5.classList.contains('price11') && checkbox6.classList.contains('checkbox2')){
      total5()
    }
    else if (checkbox5.classList.contains('checkbox2') && price6.classList.contains('price11') && checkbox6.classList.contains('checkbox2')){
      total5()
    }
    else if (checkbox5.classList.contains('checkbox2') && price7.classList.contains('price11') && checkbox6.classList.contains('checkbox2')){
      total5()
    }
    else if (checkbox6.classList.contains('checkbox2') && price5.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      total5()
    }
    else if (checkbox6.classList.contains('checkbox2') && price6.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      total5()
    }
    else if (checkbox6.classList.contains('checkbox2') && price7.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      total5()
    }
    else if (price5.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      total4()
    }
      else if (price6.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
        total4()
    }
      else if (price7.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
        total4()
    }
    else if (price5.classList.contains('price11') && checkbox5.classList.contains('checkbox2')){
      total4()
    }
    else if (price6.classList.contains('price11') && checkbox5.classList.contains('checkbox2')){
      total4()
    }
    else if (price7.classList.contains('price11') && checkbox5.classList.contains('checkbox2')){
      total4()
    }
    else if (price5.classList.contains('price11') && checkbox6.classList.contains('checkbox2')){
      total4()
    }
    else if (price6.classList.contains('price11') && checkbox6.classList.contains('checkbox2')){
      total4()
    }
    else if (price7.classList.contains('price11') && checkbox6.classList.contains('checkbox2')){
      total4()
    }
     change()})

    back1.addEventListener('click', ()=>{
      if (mediaQuery.matches) {
        if(moveBtn.classList.contains('rightBtn')){
      section1.style.top= "-1000px"
      section2.style.top= "-1000px"
      section31.style.top="-830px"
      section32.style.display="grid"
      section4.style.top = "150px"
      section3.style.display="none"
      item11.style.background = "none"
      item12.style.background = "none"
      item13.style.background = "hsl(228, 100%, 84%)"
      item14.style.background = "none"
      }
      else{
      section1.style.top= "-1000px"
      section2.style.top= "-1000px"
      section31.style.top="-830px"
      section32.style.display="none"
      section3.style.display="grid"
      section4.style.top = "150px"
      item11.style.background = "none"
      item12.style.background = "none"
      item13.style.background = "hsl(228, 100%, 84%)"
      item14.style.background = "none"
      }
      }else{
      if(moveBtn.classList.contains('rightBtn')){
      section1.style.top= "-1000px"
      section2.style.top= "-1000px"
      section31.style.top="-620px"
      section32.style.display="grid"
      section4.style.top = "150px"
      section3.style.display="none"
      item11.style.background = "none"
      item12.style.background = "none"
      item13.style.background = "hsl(228, 100%, 84%)"
      item14.style.background = "none"
      }
      else{
      section1.style.top= "-1000px"
      section2.style.top= "-1000px"
      section31.style.top="-620px"
      section32.style.display="none"
      section3.style.display="grid"
      section4.style.top = "150px"
      item11.style.background = "none"
      item12.style.background = "none"
      item13.style.background = "hsl(228, 100%, 84%)"
      item14.style.background = "none"
      }}
    })
    
    confirm.addEventListener('click',()=>{
      if (mediaQuery.matches) {
      section1.style.top= "-1000px"
      section2.style.top= "-1000px"
      section31.style.top="-1400px"
      section4.style.top = "0px"
      section5.style.top = "-1500px"
      item11.style.background = "none"
      item12.style.background = "none"
      item13.style.background = "none"
      item14.style.background = "hsl(228, 100%, 84%)"
      }else{
      section1.style.top= "-1000px"
      section2.style.top= "-1000px"
      section31.style.top="-1000px"
      section4.style.top = "0px"
      section5.style.top = "-1165px"
      item11.style.background = "none"
      item12.style.background = "none"
      item13.style.background = "none"
      item14.style.background = "hsl(228, 100%, 84%)"}})
    

    function price111(option) {
  var options = document.getElementsByClassName('price1');
  for (var i = 0; i < options.length; i++) {
    options[i].classList.remove('price11');
  }
  option.classList.add('price11');
}

    var options = document.getElementsByClassName('price1')
    let products =[
     {
      id: 0,
      name:"Arcade",
      price:9,
     },
     {
      id: 1,
      name:"Advanced",
      price:12,
     },
     {
      id: 2,
      name:"Pro",
      price:15,
     },
     {
      id: 3,
      name:"Arcade",
      price:90,
     },
     {
      id: 4,
      name:"Advanced",
      price:120,
     },
     {
      id: 5,
      name:"Pro",
      price:150,
     },
    ]
    const products1 = [
    {
      id: 0,
      name:"Online Service",
      price:10,
     },
     {
      id: 1,
      name:"Larger Storage",
      price:20,
     },
     {
      id: 2,
      name:"Customizable Profile",
      price:20,
     },
     {
      id: 3,
      name:"Online Service",
      price:10,
     },
     {
      id: 4,
      name:"Larger Storage",
      price:20,
     },
     {
      id: 5,
      name:"Customizable Profile",
      price:20,
     },
    ]
    const cartitem = document.querySelector(".summary")
    function cartitem1(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[0].name} (Monthly)</span>
    <span class="summary-mainprice">$9/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$1/mo</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[2].name}</span>
    <span class="summary-subprice2 summary-subprice">+$2/mo</span>
  </div>
</div>
 `
    }
    function cartitem2(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[1].name} (Monthly)</span>
    <span class="summary-mainprice">$12/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$1/mo</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[2].name}</span>
    <span class="summary-subprice2 summary-subprice">+$2/mo</span>
  </div>
</div>
 `
    }
    function cartitem3(){
      cartitem.innerHTML +=`
  <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[0].name} (Monthly)</span>
    <span class="summary-mainprice">$9/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$1/mo</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[1].name}</span>
    <span class="summary-subprice2 summary-subprice">+$2/mo</span>
  </div>
</div>
 `
    }
    function cartitem4(){
      cartitem.innerHTML +=`
  <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[1].name} (Monthly)</span>
    <span class="summary-mainprice">$12/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$1/mo</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[1].name}</span>
    <span class="summary-subprice2 summary-subprice">+$2/mo</span>
  </div>
</div>
 `
    }
    function cartitem5(){
      cartitem.innerHTML +=`
  <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[2].name} (Monthly)</span>
    <span class="summary-mainprice">$15/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$1/mo</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[1].name}</span>
    <span class="summary-subprice2 summary-subprice">+$2/mo</span>
  </div>
</div>
 `
    }
    function cartitem6(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[2].name} (Monthly)</span>
    <span class="summary-mainprice">$15/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$1/mo</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[2].name}</span>
    <span class="summary-subprice2 summary-subprice">+$2/mo</span>
  </div>
</div>
 `
    }
    function cartitem7(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[0].name} (Monthly)</span>
    <span class="summary-mainprice">$9/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$1/mo</span>
  </div>
 `}
 function cartitem8(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[1].name} (Monthly)</span>
    <span class="summary-mainprice">$12/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$1/mo</span>
  </div>
 `}        function cartitem9(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[2].name} (Monthly)</span>
    <span class="summary-mainprice">$15/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$1/mo</span>
  </div>
 `}
 function cartitem10(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[0].name} (Monthly)</span>
    <span class="summary-mainprice">$9/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[1].name}</span>
    <span class="summary-subprice1 summary-subprice">+$2/mo</span>
  </div>
 `}
 function cartitem11(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[1].name} (Monthly)</span>
    <span class="summary-mainprice">$12/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[1].name}</span>
    <span class="summary-subprice1 summary-subprice">+$2/mo</span>
  </div>
 `}
 function cartitem12(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[2].name} (Monthly)</span>
    <span class="summary-mainprice">$15/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[1].name}</span>
    <span class="summary-subprice1 summary-subprice">+$2/mo</span>
  </div>
 `}
 function cartitem13(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[0].name} (Monthly)</span>
    <span class="summary-mainprice">$9/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[2].name}</span>
    <span class="summary-subprice1 summary-subprice">+$2/mo</span>
  </div>
 `}
 function cartitem14(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[1].name} (Monthly)</span>
    <span class="summary-mainprice">$12/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[2].name}</span>
    <span class="summary-subprice1 summary-subprice">+$2/mo</span>
  </div>
 `}
 function cartitem15(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[2].name} (Monthly)</span>
    <span class="summary-mainprice">$15/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[2].name}</span>
    <span class="summary-subprice1 summary-subprice">+$2/mo</span>
  </div>
 `}
 function cartitem16(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[0].name} (Monthly)</span>
    <span class="summary-mainprice">$9/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$1/mo</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[1].name}</span>
    <span class="summary-subprice2 summary-subprice">+$2/mo</span>
  </div>
<div class="summary-sub">
    <span class="summary-sub3">${products1[2].name}</span>
    <span class="summary-subprice3 summary-subprice">+$2/mo</span>
  </div>
</div></div>
 ` }
 function cartitem17(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[1].name} (Monthly)</span>
    <span class="summary-mainprice">$12/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$1/mo</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[1].name}</span>
    <span class="summary-subprice2 summary-subprice">+$2/mo</span>
  </div>
<div class="summary-sub">
    <span class="summary-sub3">${products1[2].name}</span>
    <span class="summary-subprice3 summary-subprice">+$2/mo</span>
  </div>
</div></div>
 ` }
 function cartitem18(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[2].name} (Monthly)</span>
    <span class="summary-mainprice">$15/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$1/mo</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[1].name}</span>
    <span class="summary-subprice2 summary-subprice">+$2/mo</span>
  </div>
<div class="summary-sub">
    <span class="summary-sub3">${products1[2].name}</span>
    <span class="summary-subprice3 summary-subprice">+$2/mo</span>
  </div>
</div></div>
 ` }
 function cartitem19(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[0].name} (Monthly)</span>
    <span class="summary-mainprice">$9/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[1].name}</span>
    <span class="summary-subprice1 summary-subprice">+$2/mo</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[2].name}</span>
    <span class="summary-subprice2 summary-subprice">+$2/mo</span>
  </div>
</div>
 `
    }
    function cartitem20(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[1].name} (Monthly)</span>
    <span class="summary-mainprice">$12/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[1].name}</span>
    <span class="summary-subprice1 summary-subprice">+$2/mo</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[2].name}</span>
    <span class="summary-subprice2 summary-subprice">+$2/mo</span>
  </div>
</div>
 `
    }
    function cartitem21(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[2].name} (Monthly)</span>
    <span class="summary-mainprice">$15/mo</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[1].name}</span>
    <span class="summary-subprice1 summary-subprice">+$2/mo</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[2].name}</span>
    <span class="summary-subprice2 summary-subprice">+$2/mo</span>
  </div>
</div>
 `
    }
    function cartitem22(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[0].name} (Yearly)</span>
    <span class="summary-mainprice">$90/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$10/yr</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[2].name}</span>
    <span class="summary-subprice2 summary-subprice">+$20/yr</span>
  </div>
</div>
 `
    }
    function cartitem23(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[1].name} (Yearly)</span>
    <span class="summary-mainprice">$120/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$10/yr</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[2].name}</span>
    <span class="summary-subprice2 summary-subprice">+$20/yr</span>
  </div>
</div>
 `
    }
    function cartitem24(){
      cartitem.innerHTML +=`
  <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[0].name} (Yearly)</span>
    <span class="summary-mainprice">$90/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$10/yr</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[1].name}</span>
    <span class="summary-subprice2 summary-subprice">+$20/yr</span>
  </div>
</div>
 `
    }
    function cartitem25(){
      cartitem.innerHTML +=`
  <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[1].name} (Yearly)</span>
    <span class="summary-mainprice">$120/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$10/yr</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[1].name}</span>
    <span class="summary-subprice2 summary-subprice">+$20/yr</span>
  </div>
</div>
 `
    }
    function cartitem26(){
      cartitem.innerHTML +=`
  <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[2].name} (Yearly)</span>
    <span class="summary-mainprice">$150/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$10/yr</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[1].name}</span>
    <span class="summary-subprice2 summary-subprice">+$20/yr</span>
  </div>
</div>
 `
    }
    function cartitem27(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[2].name} (Yearly)</span>
    <span class="summary-mainprice">$150/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$10/yr</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[2].name}</span>
    <span class="summary-subprice2 summary-subprice">+$20/yr</span>
  </div>
</div>
 `
    }
    function cartitem28(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[0].name} (Yearly)</span>
    <span class="summary-mainprice">$90/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$10/yr</span>
  </div>
 `}
 function cartitem29(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[1].name} (Yearly)</span>
    <span class="summary-mainprice">$120/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$10/yr</span>
  </div>
 `}        function cartitem30(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[2].name} (Yearly)</span>
    <span class="summary-mainprice">$150/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$10/yr</span>
  </div>
 `}
 function cartitem31(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[0].name} (Yearly)</span>
    <span class="summary-mainprice">$90/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[1].name}</span>
    <span class="summary-subprice1 summary-subprice">+$20/yr</span>
  </div>
 `}
 function cartitem32(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[1].name} (Yearly)</span>
    <span class="summary-mainprice">$120/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[1].name}</span>
    <span class="summary-subprice1 summary-subprice">+$20/yr</span>
  </div>
 `}
 function cartitem33(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[2].name} (Yearly)</span>
    <span class="summary-mainprice">$150/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[1].name}</span>
    <span class="summary-subprice1 summary-subprice">+$20/yr</span>
  </div>
 `}
 function cartitem34(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[0].name} (Yearlyly)</span>
    <span class="summary-mainprice">$90/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[2].name}</span>
    <span class="summary-subprice1 summary-subprice">+$20/yr</span>
  </div>
 `}
 function cartitem35(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[1].name} (Yearly)</span>
    <span class="summary-mainprice">$120/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[2].name}</span>
    <span class="summary-subprice1 summary-subprice">+$20/yr</span>
  </div>
 `}
 function cartitem36(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[2].name} (Yearly)</span>
    <span class="summary-mainprice">$150/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[2].name}</span>
    <span class="summary-subprice1 summary-subprice">+$20/yr</span>
  </div>
 `}
 function cartitem37(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[0].name} (Yearly)</span>
    <span class="summary-mainprice">$90/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$10/yr</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[1].name}</span>
    <span class="summary-subprice2 summary-subprice">+$20/yr</span>
  </div>
<div class="summary-sub">
    <span class="summary-sub3">${products1[2].name}</span>
    <span class="summary-subprice3 summary-subprice">+$20/yr</span>
  </div>
</div></div>
 ` }
 function cartitem38(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[1].name} (Yearly)</span>
    <span class="summary-mainprice">$120/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$10/yr</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[1].name}</span>
    <span class="summary-subprice2 summary-subprice">+$20/yr</span>
  </div>
<div class="summary-sub">
    <span class="summary-sub3">${products1[2].name}</span>
    <span class="summary-subprice3 summary-subprice">+$20/yr</span>
  </div>
</div></div>
 ` }
 function cartitem39(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[2].name} (Yearly)</span>
    <span class="summary-mainprice">$150/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[0].name}</span>
    <span class="summary-subprice1 summary-subprice">+$10/yr</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[1].name}</span>
    <span class="summary-subprice2 summary-subprice">+$20/yr</span>
  </div>
<div class="summary-sub">
    <span class="summary-sub3">${products1[2].name}</span>
    <span class="summary-subprice3 summary-subprice">+$20/yr</span>
  </div>
</div></div>
 ` }
 function cartitem40(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[0].name} (Yearly)</span>
    <span class="summary-mainprice">$90/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[1].name}</span>
    <span class="summary-subprice1 summary-subprice">+$20/yr</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[2].name}</span>
    <span class="summary-subprice2 summary-subprice">+$20/yr</span>
  </div>
</div>
 `
    }
    function cartitem41(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[1].name} (Yearly)</span>
    <span class="summary-mainprice">$120/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[1].name}</span>
    <span class="summary-subprice1 summary-subprice">+$20/yr</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[2].name}</span>
    <span class="summary-subprice2 summary-subprice">+$20/yr</span>
  </div>
</div>
 `
    }
    function cartitem42(){
      cartitem.innerHTML +=`
      <div class="summary-1">
  <div class="summary-main">
    <span class="summary-mainmain">${products[2].name} (Yearly)</span>
    <span class="summary-mainprice">$150/yr</span>
    <br><span class="change"><u>Change</u></span>
  </div>
  <div style="border: 1px solid hsl(229, 24%, 87%);"></div>
  <div class="summary-sub">
    <span class="summary-sub1">${products1[1].name}</span>
    <span class="summary-subprice1 summary-subprice">+$20/yr</span>
  </div>
  <div class="summary-sub">
    <span class="summary-sub2">${products1[2].name}</span>
    <span class="summary-subprice2 summary-subprice">+$20/yr</span>
  </div>
</div>
 `
    }

    function total1(){
    var pr1 =parseFloat(document.querySelector('.summary-mainprice').innerText.replace('$',''))
    var pr2=parseFloat(document.querySelector('.summary-subprice1').innerText.replace('$',''))
    var total = pr1 + pr2
      cartitem.innerHTML +=`
      <div class="total">
  <span class="totalmain">Total(per month)</span>
  <span class="totalprice">+$${total}/mo</span>
</div>`
    }
    function total2(){
    var pr1 =parseFloat(document.querySelector('.summary-mainprice').innerText.replace('$',''))
    var pr2=parseFloat(document.querySelector('.summary-subprice1').innerText.replace('$',''))
    var pr3 =parseFloat(document.querySelector('.summary-subprice2').innerText.replace('$',''))
    var total = pr1 + pr2 + pr3
      cartitem.innerHTML +=`
      <div class="total">
  <span class="totalmain">Total(per month)</span>
  <span class="totalprice">+$${total}/mo</span>
</div>`
    }
    function total3(){
    var pr1 =parseFloat(document.querySelector('.summary-mainprice').innerText.replace('$',''))
    var pr2=parseFloat(document.querySelector('.summary-subprice1').innerText.replace('$',''))
    var pr3 =parseFloat(document.querySelector('.summary-subprice2').innerText.replace('$',''))
    var pr4 =parseFloat(document.querySelector('.summary-subprice3').innerText.replace('$',''))
    var total = pr1 + pr2 + pr3 + pr4
      cartitem.innerHTML +=`
      <div class="total">
  <span class="totalmain">Total(per month)</span>
  <span class="totalprice">+$${total}/mo</span>
</div>`
    }
    function total4(){
    var pr1 =parseFloat(document.querySelector('.summary-mainprice').innerText.replace('$',''))
    var pr2=parseFloat(document.querySelector('.summary-subprice1').innerText.replace('$',''))
    var total = pr1 + pr2
      cartitem.innerHTML +=`
      <div class="total">
  <span class="totalmain">Total(per year)</span>
  <span class="totalprice">+$${total}/yr</span>
</div>`
    }
    function total5(){
    var pr1 =parseFloat(document.querySelector('.summary-mainprice').innerText.replace('$',''))
    var pr2=parseFloat(document.querySelector('.summary-subprice1').innerText.replace('$',''))
    var pr3 =parseFloat(document.querySelector('.summary-subprice2').innerText.replace('$',''))
    var total = pr1 + pr2 + pr3
      cartitem.innerHTML +=`
      <div class="total">
  <span class="totalmain">Total(per year)</span>
  <span class="totalprice">+$${total}/yr</span>
</div>`
    }
    function total6(){
    var pr1 =parseFloat(document.querySelector('.summary-mainprice').innerText.replace('$',''))
    var pr2=parseFloat(document.querySelector('.summary-subprice1').innerText.replace('$',''))
    var pr3 =parseFloat(document.querySelector('.summary-subprice2').innerText.replace('$',''))
    var pr4 =parseFloat(document.querySelector('.summary-subprice3').innerText.replace('$',''))
    var total = pr1 + pr2 + pr3 + pr4
      cartitem.innerHTML +=`
      <div class="total">
  <span class="totalmain">Total(per year)</span>
  <span class="totalprice">+$${total}/yr</span>
</div>`
    }

    var price2 =document.querySelector('.price2')
    var price3 =document.querySelector('.price3')
    var price4 =document.querySelector('.price4')
    var price5 =document.querySelector('.price5')
    var price6 =document.querySelector('.price6')
    var price7 =document.querySelector('.price7')
    function ok(){
      cartitem.innerHTML = ""
    if(checkbox3.classList.contains('checkbox2') &&checkbox2.classList.contains('checkbox2') && price2.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      cartitem16()
    }
    else if(checkbox3.classList.contains('checkbox2') &&checkbox2.classList.contains('checkbox2') && price3.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      cartitem17()
    }
    else if(checkbox3.classList.contains('checkbox2') &&checkbox2.classList.contains('checkbox2') && price4.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      cartitem18()
    }
    else if (checkbox2.classList.contains('checkbox2') && price2.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      cartitem3()
    }
    else if (checkbox2.classList.contains('checkbox2') && price3.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      cartitem4()
    }
    else if (checkbox2.classList.contains('checkbox2') && price4.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      cartitem5()
    }
    else if (checkbox2.classList.contains('checkbox2') && price2.classList.contains('price11') && checkbox3.classList.contains('checkbox2')){
      cartitem19()
    }
    else if (checkbox2.classList.contains('checkbox2') && price3.classList.contains('price11') && checkbox3.classList.contains('checkbox2')){
      cartitem20()
    }
    else if (checkbox2.classList.contains('checkbox2') && price4.classList.contains('price11') && checkbox3.classList.contains('checkbox2')){
      cartitem21()
    }
    else if (checkbox3.classList.contains('checkbox2') && price2.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      cartitem1()
    }
    else if (checkbox3.classList.contains('checkbox2') && price3.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      cartitem2()
    }
    else if (checkbox3.classList.contains('checkbox2') && price4.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      cartitem6()
    }
    else if (price2.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      cartitem7()
    }
      else if (price3.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      cartitem8()
    }
      else if (price4.classList.contains('price11') && checkbox1.classList.contains('checkbox2')){
      cartitem9()
    }
    else if (price3.classList.contains('price11') && checkbox2.classList.contains('checkbox2')){
      cartitem11()
    }
    else if (price4.classList.contains('price11') && checkbox2.classList.contains('checkbox2')){
      cartitem12()
    }
    else if (price2.classList.contains('price11') && checkbox2.classList.contains('checkbox2')){
      cartitem10()
    }
    else if (price2.classList.contains('price11') && checkbox3.classList.contains('checkbox2')){
      cartitem13()
    }
    else if (price3.classList.contains('price11') && checkbox3.classList.contains('checkbox2')){
      cartitem14()
    }
    else if (price4.classList.contains('price11') && checkbox3.classList.contains('checkbox2')){
      cartitem15()
    }
  }   

  function ok1(){
      cartitem.innerHTML = ""
    if(checkbox6.classList.contains('checkbox2') &&checkbox5.classList.contains('checkbox2') && price5.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      cartitem37()
    }
    else if(checkbox6.classList.contains('checkbox2') &&checkbox5.classList.contains('checkbox2') && price6.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      cartitem38()
    }
    else if(checkbox6.classList.contains('checkbox2') &&checkbox5.classList.contains('checkbox2') && price7.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      cartitem39()
    }
    else if (checkbox5.classList.contains('checkbox2') && price5.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      cartitem24()
    }
    else if (checkbox5.classList.contains('checkbox2') && price6.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      cartitem25()
    }
    else if (checkbox5.classList.contains('checkbox2') && price7.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      cartitem26()
    }
    else if (checkbox5.classList.contains('checkbox2') && price5.classList.contains('price11') && checkbox6.classList.contains('checkbox2')){
      cartitem40()
    }
    else if (checkbox5.classList.contains('checkbox2') && price6.classList.contains('price11') && checkbox6.classList.contains('checkbox2')){
      cartitem41()
    }
    else if (checkbox5.classList.contains('checkbox2') && price7.classList.contains('price11') && checkbox6.classList.contains('checkbox2')){
      cartitem42()
    }
    else if (checkbox6.classList.contains('checkbox2') && price5.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      cartitem22()
    }
    else if (checkbox6.classList.contains('checkbox2') && price6.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      cartitem23()
    }
    else if (checkbox6.classList.contains('checkbox2') && price7.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      cartitem27()
    }
    else if (price5.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      cartitem28()
    }
      else if (price6.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      cartitem29()
    }
      else if (price7.classList.contains('price11') && checkbox4.classList.contains('checkbox2')){
      cartitem30()
    }
    else if (price5.classList.contains('price11') && checkbox5.classList.contains('checkbox2')){
      cartitem31()
    }
    else if (price6.classList.contains('price11') && checkbox5.classList.contains('checkbox2')){
      cartitem32()
    }
    else if (price7.classList.contains('price11') && checkbox5.classList.contains('checkbox2')){
      cartitem33()
    }
    else if (price5.classList.contains('price11') && checkbox6.classList.contains('checkbox2')){
      cartitem34()
    }
    else if (price6.classList.contains('price11') && checkbox6.classList.contains('checkbox2')){
      cartitem35()
    }
    else if (price7.classList.contains('price11') && checkbox6.classList.contains('checkbox2')){
      cartitem36()
    }
  }   
  function change(){
    var summarymainprice = document.querySelector('.summary-mainprice')
    var summarysubprice1 = document.querySelector('.summary-subprice1')
    var summarysubprice2 = document.querySelector('.summary-subprice2')
    var summarysubprice3 = document.querySelector('.summary-subprice3')
    var summarymainmain = document.querySelector('.summary-mainmain')
    var totalmain = document.querySelector('.totalmain')
    var totalprice = document.querySelector('.totalprice')
  var change = document.querySelector('.change')
    change.onclick = function(){
      if (totalmain.innerText.includes('month')) {
    totalprice.innerText = totalprice.innerText.replace('/mo', '0/yr');
  } else {
    totalprice.innerText = totalprice.innerText.replace('0/yr', '/mo');
  }
      if (totalmain.innerText.includes('month')) {
    totalmain.innerText = totalmain.innerText.replace('month', 'year');
  } else {
    totalmain.innerText = totalmain.innerText.replace('year', 'month');
  }
      if (summarymainmain.innerText.includes('Month')) {
    summarymainmain.innerText = summarymainmain.innerText.replace('Month', 'Year');
  } else {
    summarymainmain.innerText = summarymainmain.innerText.replace('Year', 'Month');
  }
      if (summarymainprice.innerText.includes('/mo')) {
    summarymainprice.innerText = summarymainprice.innerText.replace('/mo', '0/yr');
  } else {
    summarymainprice.innerText = summarymainprice.innerText.replace('0/yr', '/mo');
  }
  if (summarysubprice1.innerText.includes('/mo')) {
   summarysubprice1.innerText =summarysubprice1.innerText.replace('/mo', '0/yr');
  } else {
    summarysubprice1.innerText = summarysubprice1.innerText.replace('0/yr', '/mo');
  }
  if (summarysubprice2.innerText.includes('/mo')) {
    summarysubprice2.innerText = summarysubprice2.innerText.replace('/mo', '0/yr');
  } else {
    summarysubprice2.innerText = summarysubprice2.innerText.replace('0/yr', '/mo');
  }
  if (summarysubprice3.innerText.includes('/mo')) {
    summarysubprice3.innerText = summarysubprice3.innerText.replace('/mo', '0/yr');
  } else {
    summarysubprice3.innerText = summarysubprice3.innerText.replace('0/yr', '/mo');
  }
}
}
  
