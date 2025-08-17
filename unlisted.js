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

async function fetchGJLevel(id) {
    const formData = new FormData();
    formData.append('levelID', id);
    formData.append('secret', 'Wmfd2893gb7');

    try {
        const response = await fetch('http://www.boomlings.com/database/downloadGJLevel22.php', {
            method: 'POST',
            body: formData,
            headers: {
                'User-Agent': ''
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        
        return await response.text();
    } catch (error) {
        console.error('Error fetching level:', error);
        return null;
    }
}

fetchGJLevel(90009001).then(text => console.log(text));

function start(){
    document.getElementById("btn-container").innerHTML = '<button onclick="stop()">Stop</button>'
    isSearchStopped = false;
    findLevel()
}

async function findLevel() {
    if (isSearchStopped) return;
    
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
                audit.unshift(`<a>Level ${id} (${level.name}) is potentially unlisted.</a>`);
            }
        } else {
            audit.unshift(`Level ${id} (${level.name}) can't be unlisted.`);
        }
        
        displayAudit(audit);
        requestTimeout = setTimeout(findLevel, 500);
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

let isSearchStopped = false;

function stop() {
    if (requestTimeout) {
        clearTimeout(requestTimeout);
        requestTimeout = null;
    }
    isSearchStopped = true;
    document.getElementById("btn-container").innerHTML = '<button onclick="start()">Start</button>';
}