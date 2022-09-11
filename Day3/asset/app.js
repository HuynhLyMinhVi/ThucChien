var openModal= document.querySelector('.open__Modal');
var modal= document.querySelector('.modal');
var btnClose= document.querySelector('.modal__footer button');
var iconClose= document.querySelector('.modal__header i');

function toggleModal() {
    modal.classList.toggle('hide')
}

openModal.addEventListener('click', toggleModal);
modal.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModal();
    }
});
btnClose.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);

