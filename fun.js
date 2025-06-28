function numberWithSpaces(x) { // thx stackoverflow
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function fetchRandomLvl(){
    const lvlPos = data[Math.floor(Math.random() * data.length)]
    document.getElementById("randomlvl-container").innerHTML = `<p>${lvlPos.name} by ${lvlPos.author} at position ${lvlPos.index}<br>${lvlPos.id}</p>`
}

function getLvlById(){
    const targetId = parseInt(document.getElementById("lvlId-inp").value)

    
    for(let i=0; i<data.length; i++) {
        if(parseInt(data[i].id) == targetId){
            displayLvlByIndex(data[i].index, true, targetId)
            break;
        } else if(parseInt(data[i].id) > targetId) {
            displayLvlByIndex(data[i].index, false, targetId)
            break;
        }
    }
}

function calculateDifference(lvls){
    lvls.forEach((element) => {
        if(element < 0 || element >= data.length) return null })
    return numberWithSpaces(Math.abs(parseInt(data[lvls[0]].id) - parseInt(data[lvls[1]].id)))
}

function checkLvl(position, target){
    if(position < 0 || position >= data.length) {
        return `-`
    } else {

        let lvlDifference = Math.abs(parseInt(data[position].id) - target)

        return `${data[position].id} <a class="transparent">(${data[position].name} by ${data[position].author}) Difference:</a> ${lvlDifference}`
    }
}

function displayLvlByIndex(position, isExist = true, target){
    if(isExist) { // dont forgot to fix this later
        document.getElementById("lvlbyid-container").innerHTML = `<h3 style="margin-bottom: -5px;"><strong>${data[position].name}</strong></h3><br><p>by <strong>${data[position].author}</strong>
<br><a class="transparent">Likes:</a> ${data[position].likes}
<br><a class="transparent">Downloads:</a> ${data[position].downloads}
<br><a class="transparent">Difficulty:</a> ${data[position].difficulty}
<br><a class="transparent">Position:</a> ${data[position].index}
<br><a class="transparent">ID:</a> ${data[position].id}
<br><a class="transparent"><br>Next level:</a> ${checkLvl(position+1, target)}
<br><a class="transparent">Previous level:</a> ${checkLvl(position-1, target)}</p>`
    } else {
        document.getElementById("lvlbyid-container").innerHTML = `<h3 style="margin-bottom: -5px; font-size=1.7em"><strong>Level ${target} is not exist</strong></h3><br>
<br><h3 style="margin-bottom: -5px; margin-top: -15px; font-size=1.5em">Nearest levels:</h3><p>
<br><a class="transparent"><br>Next level:</a> ${checkLvl(position+1, target)}</a>
<br><a class="transparent">Previous level:</a> ${checkLvl(position-1, target)}</p>`
    }
}

function formatFetchedLvl(level){
    let previousLvl = level - 1
    if(level <= 0) previousLvl = 0
    return `<p>${data[level].id}: <a class="transparent">${data[level].name} by ${data[level].author} (#${data[level].index} Difference: ${parseInt(data[level].id) - parseInt(data[previousLvl].id)})</a></p>`;
}

function fetchLevels(){
    document.getElementById("fetchedlvls-container").innerHTML = ''
    let range = [parseInt(document.getElementById("fetchLvlsMin-inp").value), parseInt(document.getElementById("fetchLvlsMax-inp").value)]
    if(range[0] > range[1]) range = [range[1], range[0]]
    console.log()
    if(document.getElementById("type-inp").value == "index"){
        for(let i = range[0]; i <= range[1]; i++){
            document.getElementById("fetchedlvls-container").innerHTML += formatFetchedLvl(i)
        }
    } else {
        for(let i = 0; i < data.length; i++){
            if(parseInt(data[i].id) > range[1]) return
            if(parseInt(data[i].id) > range[0]) {
                document.getElementById("fetchedlvls-container").innerHTML += formatFetchedLvl(i)
            }
        }   
    }
}