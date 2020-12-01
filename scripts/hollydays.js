document.addEventListener('DOMContentLoaded', () => {
    const monthCalendar = document.getElementsByClassName('month_calendar')[0];
    monthCalendar.addEventListener('click', (evt) => {
        clearHollydayList();
        clearActiveItem();
        setActiveItem(evt.target);
        const hollydays = getHollydays(Number(evt.target.innerHTML));
        if (hollydays) {
            hollydays.forEach((hollyday, _) => {
                addHollyday(hollyday);
            })
        }
        else {
            addHollyday('тут пусто');
        }
    })
})

function getHollydays(day) {
    return hollydays[day];
}

function addHollyday(hollyday) {
    const list = document.querySelector('.selected-day-hollydays');
    const li = document.createElement('li');
    const name = document.createElement('span');
    name.appendChild(document.createTextNode(hollyday));
    li.appendChild(name);
    list.appendChild(li);
}

function clearHollydayList() {
    const list = document.querySelector('.selected-day-hollydays');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function clearActiveItem() {
    document.querySelector('.active').classList.remove('active');
}

function setActiveItem(item) {
    item.classList.add('active');
}

const hollydays = {
    // Формат 
    // день: [ массив праздников ]
    12: [
        'Богуславской Благородицы',
        'Святого Владимира',
        'Веселого Джека святы'
    ],
    14: [
        'Павла утопленника',
        'Вербы',
        'Тамары бла бла бла'
    ],
    15: [
        'Святы свят',
        'Лето бабье',
        'Клара цеыа'
    ],
    16: [
        'Ципленок жареный',
        'Веревкиной цефп',
        'Палатарама'
    ],
    17: [
        'Лулаполуза',
        'Фолли',
        'Потопротгонист'
    ]
}