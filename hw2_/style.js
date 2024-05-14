let styles = [
    { prop: "color", val: "purple" },
    { prop: "font-size", val: "50px" },
    { prop: "text-align", val: "center" },
    { prop: "text-decoration", val: "underline" }
];

function applyStyling(styles, text) {
    let styleStr = styles.map(style => `${style.prop}: ${style.val}`).join("; ");
    document.write(`<p style="${styleStr}">${text}</p>`);
}

applyStyling(styles);
