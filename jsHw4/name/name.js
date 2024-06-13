function filterInput(event) {
    const input = event.target;
    const value = input.value;
    input.value = value.replace(/\d/g, '');
}