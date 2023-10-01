
 

 window.addEventListener("load", function() {
    window.setTimeout(function() {
      var loader = document.getElementById("loader");
    loader.style.visibility = "hidden";
 }, 2000)

})

 var slideIndex = 0;
  showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
} 
function print() {
    let divPrint = document.getElementById('print_div')
    console.log(divPrint);
    let newWin = window.open('Print-window')
    newWin.document.write('<html><body onload="window.print()">' + print_div.innerHTML + '</body></html>')
    newWin.document.close()
  }
function ToCatalog()  {
  location.href = "catalog.html"
}


const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;

function changeSlide(direction) {
  currentIndex += direction;
  
  if (currentIndex < 0) {
    currentIndex = carousel.childElementCount - 1;
  } else if (currentIndex >= carousel.childElementCount) {
    currentIndex = 0;
  }

  const translateX = -currentIndex * 100;
  carousel.style.transform = `translateX(${translateX}%)`;
}

//prevButton.addEventListener("click", () => changeSlide(-1));
//nextButton.addEventListener("click", () => changeSlide(1));

// Автоматическая смена слайдов каждые 3 секунды
//setInterval(() => changeSlide(1), 3000);


let api_key = "b35d1090436611a5a3a882ad3fcd72a7";
        let api_url = "https://api.novaposhta.ua/v2.0/json/";

        let areaSelect = document.getElementById("areaSelect");
        let citySelect = document.getElementById("citySelect");
        let warehouseSelect = document.getElementById("warehouseSelect");

        function makePostRequest(method, params, callback) {
            let requestData = {
                apiKey: api_key,
                modelName: "Address",
                calledMethod: method,
                methodProperties: params,
            };

            let request = new XMLHttpRequest();
            request.open("POST", api_url, true);
            request.setRequestHeader("Content-Type", "application/json");

            request.onload = function () {
                if (request.status === 200) {
                    let response = JSON.parse(request.responseText);
                    callback(response.data);
                } else {
                    console.error("Ошибка при выполнении запроса:", request.statusText);
                }
            };

            request.send(JSON.stringify(requestData));
        }

        function createOption(element, value, text) {
            let option = document.createElement("option");
            option.value = value;
            option.text = text;
            element.appendChild(option);
        }

        function loadAreas() {
            makePostRequest("getAreas", {}, areas => {
                areas.forEach(area => {
                    createOption(areaSelect, area.Ref, area.Description);
                });

                areaSelect.addEventListener("change", () => {
                    loadCities(areaSelect.value);
                });
            });
        }

        function loadCities(areaRef) {
            citySelect.innerHTML = '<option value="">Выберите город</option>';
            warehouseSelect.innerHTML = '<option value="">Выберите відділення або поштомат</option>';

            let cityParams = {
                AreaRef: areaRef,
            };

            makePostRequest("getCities", cityParams, cities => {
                cities.forEach(city => {
                    createOption(citySelect, city.Ref, city.Description);
                });

                citySelect.addEventListener("change", () => {
                    loadWarehouses(citySelect.value);
                });
            });
        }

        function loadWarehouses(cityRef) {
            warehouseSelect.innerHTML = '<option value="">Выберите відділення або поштомат</option>';

            let warehouseParams = {
                CityRef: cityRef,
            };

            makePostRequest("getWarehouses", warehouseParams, warehouses => {
                warehouses.forEach(warehouse => {
                    createOption(warehouseSelect, warehouse.Ref, warehouse.Description);
                });
            });
        }

        loadAreas();




