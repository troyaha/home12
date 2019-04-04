function addElement(tagName, container) {
    return (container ? container : document.body).appendChild(document.createElement(tagName));
}

function timeout(time) {
    return new Promise(
        (resolve) => {
            setTimeout(
                () => {
                    resolve();
                }, time
            )
        }
    );
}


let btn = addElement('button');
btn.innerText = 'Kruti Baraban!)';
btn.onclick = function (event) {
    btn.style.display = 'none';
    let num = Math.floor(Math.random() * 20000);
    let winner;
    fetch(`https://api.github.com/users?since=${num}`)
        .then(response => response.json()
            .then(response => winner = {
                login: response[0].login,
                photo: response[0].avatar_url
            })
        )
    let img = addElement('img');
    img.style.transition = 'all 0.5s';
    img.src = 'https://thumbs.gfycat.com/LivelyObviousAnhinga-size_restricted.gif';
    timeout(4000)
        .then(() => img.src = 'https://thumbs.gfycat.com/OddWideHookersealion-small.gif');
    timeout(3000)
        .then(() => img.style.opacity = 0)
        .then(() => img.style.opacity = 1);
    timeout(6000)
        .then(() => img.src = winner.photo)
        .then(() => {
            timeout(10000)
                .then(() => img.remove())
                .then(() => btn.style.display = 'block')
        })
}