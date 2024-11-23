function openModal() {
    document.querySelector(".modal-window").classList.add("open");
}

function closeModal() {
    document.querySelector(".modal-window").classList.remove("open");
}

function remove() {
    document.querySelector(".profile").classList.add("close");
    document.querySelector(".modal-window").classList.remove("open");
}


let accordion = document.getElementsByClassName("accordion");


for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {

    var panel = this.nextElementSibling;
    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


