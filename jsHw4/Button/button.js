document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tooltip-button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            let tooltipText = button.getAttribute('data-tooltip');
            let tooltip = document.createElement('div');
            tooltip.className = 'tooltip tooltip-top';
            tooltip.innerText = tooltipText;
            button.appendChild(tooltip);
            
            tooltip.style.display = 'block';

            let tooltipRect = tooltip.getBoundingClientRect();
            if (tooltipRect.top < 0) {
                tooltip.classList.remove('tooltip-top');
                tooltip.classList.add('tooltip-bottom');
            }
        });

        button.addEventListener('mouseleave', () => {
            let tooltip = button.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});
