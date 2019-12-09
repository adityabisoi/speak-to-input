var btn = createButton();
document.addEventListener('focusin', onFocusIn);

function onFocusIn(event) {
    el = event.target;
    if(el.type != "button" && el.type != "submit" ) {
        if (
            el.matches(' textarea')) // el.contentEditable ||;&& el.type.match(/email|number|search|text|url/)
        {
            appendButton(el);
        }
    }
}

function createButton() {
    var btn = document.createElement('button');
    btn.textContent = 'Yay!';
    btn.onclick = function(event) {
        btn.textContent = 'clicked';
    };
    return btn;
}

function appendButton(textElement) {
    textElement.parentElement.insertBefore(btn, textElement.nextElementSibling);
}
