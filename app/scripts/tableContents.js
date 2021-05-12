const toc = ['main.html', 'info-pg-1.html', 'info-pg-2.html', 'eng-pg-1.html', 'eng-pg-2.html', 'eng-pg-3.html', 'eng-pg-4.html', 'eng-pg-5.html', 'eng-pg-6.html', 'eng-pg-7.html', 'eng-pg-8.html', 'eng-pg-9.html', 'eng-pg-10.html', 'eng-pg-11.html', 'econ-pg-1.html', 'econ-pg-2.html', 'econ-pg-3.html', 'finished.html'];

var path = window.location.pathname;
var page = path.split("/").pop();
//console.log(page);



var indx = toc.indexOf(page)
//console.log(indx)

if (indx < toc.length - 1 && indx != 0) {
    next = toc[indx + 1]
    prev = toc[indx - 1]
} else if (indx == 0) {
    next = toc[indx + 1]
    prev = toc[indx]
} else if (indx == toc.length - 1) {
    next = toc[indx]
    prev = toc[indx - 1]
}


document.querySelector('#theForm').action = next

document.querySelector('.prev-button a').href = prev

document.querySelector('.left-arrow a').href = prev

console.log(next)