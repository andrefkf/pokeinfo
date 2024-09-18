document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (event) => {
        // Si la carta ya está activa, elimina la clase 'active' y el 'blurred' del main
        if (card.classList.contains('active')) {
            card.classList.remove('active');
            document.querySelector('main').classList.remove('blurred');
        } else {
            // De lo contrario, activa la carta y aplica 'blurred' al main
            document.querySelectorAll('.card').forEach(c => c.classList.remove('active')); // Elimina 'active' de otras cartas
            card.classList.add('active');
            document.querySelector('main').classList.add('blurred');
        }

        // Prevenir que el evento de clic se propague hacia el documento
        event.stopPropagation();
    });
});

// Agrega un evento click al documento para cerrar la carta activa si se hace clic fuera de ella
document.addEventListener('click', (event) => {
    if (!event.target.closest('.card')) {
        document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
        document.querySelector('main').classList.remove('blurred');
    }
});
