const question = prompt("Ви хотите  узнать как получить скин на карточку в монобанке?. Напишите 'да' если хотите.").toLowerCase().trim()
if (question === "да") {
    const name = prompt("Введите своё имя?").trim();
    if (name === "еблан") {
        alert(`https://www.tiktok.com/@monobank.ua   ${name} это ссылка на моно тикток, там будет ссылка про скин, заходишь и ставишь. ${name} ${name} ${name} ${name} ${name} ${name} ${name} ${name} ${name} ${name}`)
    }
    const age = prompt("Сколько вам лет?");
    if (age >= 18) {
        const height = prompt("Рост?").trim();
        if (height >= 180) {
            alert("хз, у влада спроси")
        } else {
            alert("Ты пиздюк, съебался!!")
        }
    } else {
        alert("Ты пиздюк, съебался!!");
    }
}