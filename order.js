window.addEventListener("load", function  addComment() {
    
    
     
    

    if (localStorage.getItem('nameLocal')== null) {
     // alert("ofofof")
     order_all.style.display = "none"
     no_order.style.display = "block"
     show_catalog2.onclick = function showCatalog2() {
      location.href = "catalog.html"
    }
    }
    else if(localStorage.getItem('nameLocal')!== null) {

    let name_order = localStorage.getItem("nameLocal")  
    let nameCakeOrder = document.getElementById("order_name")
    nameCakeOrder.innerHTML = name_order

   

    let newLocal = window.localStorage
    newLocal.setItem("qwe", name_order)

    let a = newLocal.getItem("qwe")
    out_name.innerHTML = a

  //  localStorage.removeItem("nameLocal")



  //  let img_order = localStorage.getItem("imgLocal")
  //  let imgCakeOrder = document.getElementById("order_img")
  //  imgCakeOrder.src = "img_order"
    
    

    let price_order = localStorage.getItem("priceLocal")
    
    let priceCakeOrder = document.getElementById("price_name")
    priceCakeOrder.innerHTML = price_order

    let diameter_order = localStorage.getItem("diameterLocal")
    
    let diameterCakeOrder = document.getElementById("diameter_order")
    diameterCakeOrder.innerHTML = "Розмір: "  + diameter_order

    let height_order = localStorage.getItem("heightLocal")
    
    let heightCakeOrder = document.getElementById("height_order")
    heightCakeOrder.innerHTML = "Висота: " + height_order

    let decoration_order = localStorage.getItem("decorationLocal")
    
    let decorationCakeOrder = document.getElementById("decor_order")
    decorationCakeOrder.innerHTML = "Прикраси: " + decoration_order

    let decoration2_order = localStorage.getItem("decoration2Local")
    
    let decoration2CakeOrder = document.getElementById("decor2_order")
    decoration2CakeOrder.innerHTML = "Інші прикраси: " + decoration2_order

    let package_order = localStorage.getItem("packageLocal")
    
    let packageCakeOrder = document.getElementById("package_order")
    packageCakeOrder.innerHTML = "Пакування: " + package_order

    let delivery_order = localStorage.getItem("deliveryLocal")
    
    let deliveryCakeOrder = document.getElementById("delivery_order")
    deliveryCakeOrder.innerHTML = "Доставка: " + delivery_order

    
    myStorage = window.localStorage
    
    myStorage.setItem("br", delivery_order)
    let opi = myStorage.getItem("br")
    console.log(opi);
    
    
    show_catalog.onclick = function showCatalog() {
      location.href = "catalog.html"
    }
    
    clear_form.onclick = function clearForm() {
    
      localStorage.removeItem("nameLocal")
      nameCakeOrder.innerHTML = ""
    
      localStorage.removeItem("priceLocal")
      priceCakeOrder.innerHTML = ""
    
      localStorage.removeItem("diameterLocal")
      diameterCakeOrder.innerHTML = ""
    
      localStorage.removeItem("heightLocal")
      heightCakeOrder.innerHTML = ""
    
      localStorage.removeItem("decorationLocal")
      decorationCakeOrder.innerHTML = ""
    
      localStorage.removeItem("decoration2Local")
      decoration2CakeOrder.innerHTML = ""
    
      localStorage.removeItem("packageLocal")
      packageCakeOrder.innerHTML = ""
    
      localStorage.removeItem("deliveryLocal")
      deliveryCakeOrder.innerHTML = ""
    
      order_all.style.display = "none"
      no_order.style.display = "block"
    
      img_form.style.display = "block"
      form_cart_out.style.display = "none"
      

      show_catalog2.onclick = function showCatalog2() {
        location.href = "catalog.html"
    }
  } 
  show_form.onclick = function() {
      img_form.style.display = "none"
      form_cart_out.style.display = "block"
      //if(@media (max-width: 480px)) {
      //order_cart.style.height = 1200 + "px"
      //}
        submit.onclick = function checkForm() {
        errorName.style.display = "none"
        errorTel.style.display = "none"
        errorName2.style.display = "none"
        errorTel2.style.display = "none"
        errorEmail.style.display = "none"
        errorEmail2.style.display = "none"
        errorAddress.style.display = "none"
        errorDate.style.display = "none"
       
        let nameText = document.getElementById('name').value
        let telText = document.getElementById('phone').value
        let emailText = document.getElementById('email').value
        let addressText = document.getElementById('address').value
        let dateText = document.getElementById('date').value
        
        checkName = true
        checkName2 = true
        checkTel = true
        checkTel2 = true
        checkEmail = true
        checkEmail2 = true
        checkAddress = true
        checkDate = true
        
        template1 = /\d/
        template2 = /\D/
        template3 = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        
      
        if(nameText.length < 2)  {
          errorName.style.display = "block"
          checkName = false
        } 
        if(template1.test(nameText) == true) {
          errorName2.style.display = "block"
          checkName2 = false
        } 
      
        if(telText.length < 10) {
          errorTel.style.display = "block"
          checkTel = false
        } 
        if(template2.test(telText) == true) {
          errorTel2.style.display = "block"
          checkTel2 = false
        } 
      
        if(template3.test(emailText) == false) {
          errorEmail.style.display = "block"
          checkEmail = false
        } 
        if(emailText.length < 1) {
          errorEmail.style.display = "none"
          errorEmail2.style.display = "block"
          checkEmail2 = false
        } 
      
        if(addressText.length < 1)  {
          
          errorAddress.style.display = "block"
          checkAddress = false
        } 
      
        if(dateText.length < 1) {
          errorDate.style.display = "block"
          checkDate = false
        } 
      
      
        if(checkName == true && checkTel == true && checkName2 == true && checkTel2 == true && checkEmail == true && checkEmail2 == true  && checkAddress == true && checkDate == true) {
          return true
        } else {
          return false
        }  
       }

  }
    
        
  }

})
        
        
        















        
       