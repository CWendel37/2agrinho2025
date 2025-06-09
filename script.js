document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const sceneContainer = document.getElementById('sceneContainer');

    // Estado inicial é 'campo'
    let isCity = false;

    toggleButton.addEventListener('click', () => {
        if (isCity) {
            // Se for cidade, volta para campo
            sceneContainer.classList.remove('city-theme');
            sceneContainer.classList.add('field-theme');
            toggleButton.textContent = 'Transformar!';
            isCity = false;
        } else {
            // Se for campo, transforma para cidade
            sceneContainer.classList.remove('field-theme');
            sceneContainer.classList.add('city-theme');
            toggleButton.textContent = 'Voltar ao Campo!';
            isCity = true;
        }
    });
});