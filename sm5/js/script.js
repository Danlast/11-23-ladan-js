// Находим элемент формы
const createProductForm = document.querySelector('#addProduct');

// Создаём асинхронную функцию событию onsubmit
async function createProduct(event) {
  // Отключаем стандартное поведение, чтобы страница не обновлялась при отправке формы
  event.preventDefault();
  
  // Используем try {} catch() {}, чтобы отлавливать ошибки из try {} и обрабатывать их в catch{}
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
        method: "POST",
        body: JSON.stringify({
            title: createProductForm.title.value,
            price: createProductForm.price.value,
            description: createProductForm.description.value,
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        })
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const jsonResponse = await response.json();
    console.log(jsonResponse);
} catch (error) {
    alert('🚨 Ошибка: ' + error.message);
}
} 

