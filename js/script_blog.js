// Función para abrir el modal
function openModal(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "flex"; // Mostrar el modal
    modalImg.src = imgElement.src; // Establecer la fuente de la imagen en el modal
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none"; // Ocultar el modal
}