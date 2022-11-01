let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('num'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        //console.log(e.target.innerText);
        switch (e.target.innerText) {
            case 'CLEAR':
                display.value = '';
                break;
            case 'DEL':
                display.value = display.value.slice(0, -1);
                break;
            case '=':
                try {
                    display.value = eval(display.value);
                } catch {
                    alert("Error!")
                }
                break;
            default:
                display.value += e.target.innerText;
        }
    });
});