async function start(){
    const level = await fetchLvl(document.getElementById("id-inp").value)
    const result = document.getElementById("result-container")
    if(level != null){
        result.innerHTML = 
        `<h3 style="margin-bottom: -15px"><strong>${level.name}</strong> by <strong>${level.author}</strong></h3>`

        for(let i = 0; i < Object.keys(level).length; i++){
            result.innerHTML += `<p style="margin-bottom: -10px"><a class="transparent">${Object.keys(level)[i]}:</a> ${Object.values(level)[i]}</p>`
        }
    } else {
        result.innerHTML = 
        `<h3 style="margin-bottom: -15px"><strong>Level ${document.getElementById("id-inp").value} is not exist.</strong></h3>`
    }
}