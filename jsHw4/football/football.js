function moveBall(event) {
    const field = event.currentTarget;
    const ball = document.getElementById('ball');
    const fieldRect = field.getBoundingClientRect();
    const ballSize = 100;

    let newLeft = event.clientX - fieldRect.left - ballSize / 2;
    let newTop = event.clientY - fieldRect.top - ballSize / 2;

    newLeft = Math.max(0, Math.min(newLeft, fieldRect.width - ballSize));
    newTop = Math.max(0, Math.min(newTop, fieldRect.height - ballSize));

    ball.style.left = `${newLeft}px`;
    ball.style.top = `${newTop}px`;
}