function checkForm() {
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

  