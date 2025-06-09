document.addEventListener('DOMContentLoaded', function() {
    const countryside = document.getElementById('countryside');
    const city = document.getElementById('city');
    const showCountrysideBtn = document.getElementById('showCountryside');
    const showCityBtn = document.getElementById('showCity');
    const showTransitionBtn = document.getElementById('showTransition');
    
    // Mostrar cena do campo
    showCountrysideBtn.addEventListener('click', function() {
        countryside.style.left = '0';
        city.style.left = '100%';
    });
    
    // Mostrar cena da cidade
    showCityBtn.addEventListener('click', function() {
        countryside.style.left = '-100%';
        city.style.left = '0';
    });
    
    // Mostrar transição (meio a meio)
    showTransitionBtn.addEventListener('click', function() {
        countryside.style.left = '-50%';
        city.style.left = '50%';
    });
    
    // Animação automática opcional
    let autoAnimation = false;
    
    function toggleAutoAnimation() {
        autoAnimation = !autoAnimation;
        
        if (autoAnimation) {
            animateScenes();
            showTransitionBtn.textContent = 'Parar Animação';
        } else {
            showTransitionBtn.textContent = 'Transição';
        }
    }
    
    function animateScenes() {
        if (!autoAnimation) return;
        
        // Alterna entre as cenas
        setTimeout(() => {
            showCountrysideBtn.click();
            setTimeout(() => {
                showTransitionBtn.click();
                setTimeout(() => {
                    showCityBtn.click();
                    setTimeout(() => {
                        showTransitionBtn.click();
                        if (autoAnimation) animateScenes();
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }
    
    // Opcional: descomente para habilitar o botão de animação automática
    // showTransitionBtn.addEventListener('click', toggleAutoAnimation);
});