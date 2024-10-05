function openModal(){
    const parent = document.querySelector('.modal-wrapper');
    const child = document.createElement('div');
    child.className = "modal";

    child.innerHTML = '<label for="">Закрыть окно</label><button class="close" onclick = closeModal()>X</button><div class="modal-icon"><img src="./assets/img/test.png" alt=""></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium explicabo dolorum harum voluptates exercitationem, unde non obcaecati numquam blanditiis quasi laborum aliquid nam esse repellat rem iusto eius amet!</p>';

    parent.append(child)

}

function closeModal(){
    const parent = document.querySelector('.modal-wrapper');
    parent.removeChild(parent.lastChild);
}