const func = (entries, observer) => { //для чего observer?
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const modal = document.getElementById("modal"); //подключаю модальное окно
            
            modal.showModal(); //открывает диалог
            document.body.style.overflow = 'hidden'; //отключает скролинг


            let count = 5;
            const closeBtn = document.getElementById("closeBtn"); //подключаю кнопку закрытия
            const counter = document.getElementById("counter"); //подключаю div счета
            const df = document.getElementById("df");
            counter.innerHTML = count; //Устанавливаю значение 5
            closeBtn.hidden = true;

            setInterval(() => {
                if (count > 0) { //если счет больше 0
                    count = count - 1; //вычитает 1
                    counter.innerHTML = count; //подключает новое значение
                    
                } else {
                    df.style.display = 'none'; 
                    closeBtn.hidden = false;
                    closeBtn.addEventListener('click', () => { //кнопка закрыть теперь работает
                        document.body.style.overflow = ''; //вкючает скролинг
                        modal.close(); //закрывает диалог
                        
                        
                    });
                }
            }, 1000);
        }
    });
}

const options = {
    rootMargin: '0px',
    threshold: 0,
}
    
const observer = new IntersectionObserver(func, options); //хз
observer.observe(document.querySelector('#point')) //при наблюдении выполнять