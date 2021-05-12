function showGen() {
    el = document.querySelectorAll('.generator')
    for (var i = 0; i < el.length; i++) {
        var currentEl = el[i];
        currentEl.style.display = 'inline';
    }

}

function hideGen() {
    el = document.querySelectorAll('.generator')
    for (var i = 0; i < el.length; i++) {
        var currentEl = el[i];
        currentEl.style.display = 'none';
    }

}

document.querySelector('.yesGen').addEventListener('click', showGen)
document.querySelector('.noGen').addEventListener('click', hideGen)