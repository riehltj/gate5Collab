function unkCheck(curId) {
    let checkVal = document.querySelector(`#${curId}`).checked;
    parent = document.querySelector(`#${curId}`).parentNode.childNodes

    if (checkVal === true) {
        for (children in parent) {
            parentId = parent[children].id;
            if (parentId !== undefined && parentId !== curId && parentId !== "") {
                document.getElementById(`${parentId}`).style.color = '#ce1126';
                document.getElementById(`${parentId}`).style.border = 'solid 5px #ce1126';
                document.getElementById(`${parentId}`).style.opacity = '100'
                document.getElementById(`${parentId}`).disabled = true;
            } else if (parentId === curId) {
                document.getElementById(`${parentId}`).style.color = '#ce1126';
            }
        }
    } else if (checkVal === false) {
        for (children in parent) {
            parentId = parent[children].id;
            if (parentId !== undefined && parentId !== curId && parentId !== "") {
                document.getElementById(`${parentId}`).style.color = "blue";
                document.getElementById(`${parentId}`).style.border = '';
                document.getElementById(`${parentId}`).style.opacity = ''
                document.getElementById(`${parentId}`).disabled = false;
                document.getElementById(`${parentId}`).style.color = '';
            } else if (parentId === curId) {
                document.getElementById(`${parentId}`).style.color = '';
            }
        }
    }

}






document.querySelectorAll('.check').forEach(item => {
    item.addEventListener('click', event => {
        curId = event.target.id;
        unkCheck(curId)

    })
})