const modalAnm = document.getElementById('modal-Anm');
const modalReg = document.getElementById('modal-Reg');

if (modalAnm) modalAnm.style.display = 'none';
if (modalReg) modalReg.style.display = 'none';

function openModalAnm() {
    modalAnm.style.display = 'block';
}

function openModalReg() {
    modalReg.style.display = 'block';
}


function closeAllModals() {
    document.getElementById('modal-Anm').style.display = 'none';
    document.getElementById('modal-Reg').style.display = 'none';
}


// Добавляем обработчик события на кнопку открытия модального окна

document.getElementById('openModalAnm').addEventListener('click', openModalAnm);
document.getElementById('openModalReg').addEventListener('click', openModalReg);
// Добавляем обработчик события на кнопку закрытия модального окна
document.getElementById('closeModal').addEventListener('click', closeModal);