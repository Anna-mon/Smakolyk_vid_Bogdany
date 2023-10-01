var array_names_catalog = [
    "тістечко",
    "тістечкa",
    "торт",
    "чізкейк",
    "капкейк",
    "топер",
    "крем",
    "глазур",
    "профітролі",
    "безе"

  
  ]

  





function searchCatalog() {
  
    let searchValue = search_input.value
        
   

   for(i = 0; i < array_names_catalog.length; i++) {
      
     
      if (searchValue != array_names_catalog[i]) {
       dialog.style.display = "block"
     
      }
      if(searchValue == array_names_catalog[i]) {
        dialog.style.display = "none"
        location.href = "catalog.html"
          
       }
   }
   dialog.onmouseover = function() {
    dialog.style.display = "none"
    search_input.value = ""
    searchValue = ""
}
}
 
  
    
  
  