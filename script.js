
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            // resalta la opción clickeada.
            // En un cuestionario real, aquí se implementaría la lógica de corrección.
            // console.log("Opción seleccionada:", this.dataset.answer);
            
            // Si quisiéramos implementarlo:
            // 1. Desactivar otras opciones en la misma pregunta.
            // 2. Aplicar clase 'correct' o 'incorrect' (si tuviéramos las respuestas codificadas).
        });
    });
