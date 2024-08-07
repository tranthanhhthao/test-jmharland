const dialogs = document.getElementsByClassName('agent-popup');

function showDialog(x) {
    const index = x.parentElement.getAttribute('data-popup');
    dialogs[index-1].showModal();
}

function closeDialog(x) {
    const index = x.parentElement.parentElement.getAttribute('data-popup');
    dialogs[index-1].close();
}