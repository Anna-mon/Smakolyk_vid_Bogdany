function addComment() {
   const nameInput = document.getElementById('name')
   const nameText = nameInput.value
   console.log(nameText)
   
   const commentInput = document.getElementById('comment')
   const commentText = commentInput.value

   if (nameText.trim() !== '') {
       const nameDiv = document.getElementById('comment_name')//
       console.log(nameDiv);

       const nameElement = document.createElement('div')
       nameElement.textContent = nameText
       console.log(nameElement);

       nameDiv.appendChild(nameElement)

       console.log(nameDiv);
       nameElement.classList.add("newName")

       // Очищаем поле ввода
       
       nameInput.value = ''

       // Сохраняем комментарии в локальное хранилище
       saveCommentsToLocalStorage()

       console.log(localStorage);
   }

   if (commentText.trim() !== '') {
      const commentsDiv = document.getElementById('comment_name')
      const commentElement = document.createElement('div')
      commentElement.textContent = commentText
      commentsDiv.appendChild(commentElement)
      commentElement.classList.add("newComment")

      // Очищаем поле ввода
      commentInput.value = ''

      // Сохраняем комментарии в локальное хранилище
      saveCommentsToLocalStorage()
  }
}

// Функция для сохранения комментариев в локальное хранилище
function saveCommentsToLocalStorage() {
   const names = document.getElementById('comment_name').innerHTML
   localStorage.setItem('names', names)
   const comments = document.getElementById('comment_name').innerHTML
   localStorage.setItem('comments', comments)
}

// Функция для загрузки комментариев из локального хранилища
function loadCommentsFromLocalStorage() {
   const namesDiv = document.getElementById('comment_name')
   const savedNames = localStorage.getItem('names')

   const commentsDiv = document.getElementById('comment_name')
   const savedComments = localStorage.getItem('comments')
   if (savedNames && savedComments) {
       namesDiv.innerHTML = savedNames
       commentsDiv.innerHTML = savedComments
   }
   //if (savedComments) {
     // commentsDiv.innerHTML = savedComments
  //}
}

// Вызываем функцию загрузки комментариев при загрузке страницы
window.onload = function () {

 //  window.scrollTo(0, document.body.scrollHeight)
   loadCommentsFromLocalStorage()
   
}

const images = document.querySelectorAll(".image-slider img");
let currentImageIndex = 0;

function changeImage() {
  images[currentImageIndex].style.opacity = 0;
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.opacity = 1;
}

// Менять изображение каждые 3 секунды (3000 миллисекунд)
setInterval(changeImage, 6000);

//localStorage.clear()

  