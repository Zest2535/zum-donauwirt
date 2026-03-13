
const modalAnm = document.getElementById('modal-Anm');
const modalReg = document.getElementById('modal-Reg');

const btnAnm = document.getElementById('openModalAnm');
const btnReg = document.getElementById('openModalReg');


function openAnm() {
    modalAnm.style.display = 'block';
    modalReg.style.display = 'none';
}

function openReg() {
    modalReg.style.display = 'block';
    modalAnm.style.display = 'none'; 
}

function closeAll() {
    modalAnm.style.display = 'none';
    modalReg.style.display = 'none';
}

btnAnm.addEventListener('click', openAnm);
btnReg.addEventListener('click', openReg);

document.querySelectorAll('.close-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы, если это кнопка в форме
        closeAll();
    });
});

window.addEventListener('click', (event) => {
    if (event.target === modalAnm || event.target === modalReg) {
        closeAll();
    }
});