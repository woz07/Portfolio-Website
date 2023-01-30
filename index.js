const element = document.getElementById('int_greeting');
const sleep = ms => new Promise(res => setTimeout(res, ms));
const greetings = [
    "Hello",
    "Bounjour",
    "Hola",
    "Salve",
    "Nǐn hǎo",
    "Konnichiwa",
    "Guten Tag",
    "Olá",
    "Asalaam alaikum",
    "Goddag",
    "Goedendag",
    "Dzień dobry",
    "Merhaba",
    "God dag",
    "Xin chào",
]

async function update_element() {
    var char_array = [...greetings[Math.floor(Math.random() * greetings.length)]];

    // writing to element content
    for (var i = 0; i < char_array.length; i++) {
        element.append(char_array[i]);
        await sleep(70);
    }

    // time for user to see message
    await sleep(1500);

    // deleting element's content
    for (var i = 0; i < char_array.length; i++) {
        element.removeChild(element.lastChild);
        await sleep(50);
    }
}

setInterval(update_element, 5000);