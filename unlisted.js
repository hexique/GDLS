let audit = []
let result = []
let requestTimeout = null;

async function fetchAuthor(author, page){ // stolen code from my old project
    try{


        const response = await fetch(`https://gdbrowser.com/api/search/${author}?page=${page}&count=10&user`)
        if(!response.ok){
            throw new Error(`HTTP error ${response.status}`);
        }
        let data = await response.json();
        console.log(data);

        return data

    }
    catch(error){
        console.error("Error fetching data: ", error);
    }
}

function start(){
    document.getElementById("btn-container").innerHTML = '<button onclick="stop()">Stop</button>'
    findLevel()
}

async function findLevel() {
    try {
        if(requestTimeout) clearTimeout(requestTimeout)
//                                                      first level from 2.2 
        let id = Math.floor(Math.random() * 24729070) + 97426240;
        const level = await fetchLvl(id);
        
        if(level == null) {
            audit.unshift(`<a class="red">Level ${id} is not found.</a>`);
            displayAudit(audit);
            requestTimeout = setTimeout(findLevel, 0);
            return;
        }
        
        if(level.downloads < 25 && level.difficulty == 'Unrated' && level.accountID != "0") {
            audit.unshift(`Level ${id} (${level.name}) is potentially unlisted.`);
            
            let isUnlisted = true;
            let page = 0;
            
            while(isUnlisted) {
                try {
                    const authorLevels = await fetchAuthor(level.author, page);
                    
                    if(!authorLevels || authorLevels.length === 0) {
                        break;
                    }
                    
                    if(authorLevels.some(l => l.id === level.id)) {
                        isUnlisted = false;
                        break;
                    }
                    
                    page++;
                } catch(error) {
                    break;
                }
            }
            
            if(isUnlisted) {
                audit.unshift(`<a class="green">Level ${id} (${level.name}) is unlisted!</a>`);
                result.unshift(`<h3>${level.name} by ${level.author}</h3><p>ID: ${level.id}</p>`);
                document.getElementById("result-container").innerHTML += result[0];
            } else {
                audit.unshift(`<a>Level ${id} (${level.name}) is public.</a>`);
            }
        } else {
            audit.unshift(`Level ${id} (${level.name}) can't be unlisted.`);
        }
        
        displayAudit(audit);
        requestTimeout = setTimeout(findLevel, 1000);
    } catch(error) {
        console.error("Error in findLevel:", error);
        requestTimeout = setTimeout(findLevel, 3000);
    }
}


function displayAudit(array) {
    const container = document.getElementById("history-container");
    if(!container) return;
    
    container.innerHTML = `<h2>Audit (${array.length}):</h2><br>`;
    array.slice(0, 50).forEach(entry => {
        container.innerHTML += `<p>${entry}</p>`;
    });

}

function stop() {
    if (requestTimeout) {
        clearTimeout(requestTimeout);
        requestTimeout = null;
        console.log("Search stopped");

        document.getElementById("btn-container").innerHTML = '<button onclick="start()">Resume</button>';
    } else {
        console.log("No active search to stop");
    }
}