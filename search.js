const difficultyToInt = [
  "Unrated", "Auto", "Easy", "Normal", "Hard", "Harder", "Insane","Demon", "Easy Demon", "Medium Demon", "Hard Demon", "Insane Demon", "Extreme Demon",
]
const versionToInt = [
  "Pre-1.7", "1.7", "1.8", "1.9", "2.0", "2.1", "2.2"
]

const years = [130629, 3938229, 15435856, 27788667, 40559842, 51591727, 58976287, 66144272, 77026243, 87321749, 98379505, 113708332, 118028739]
const lengths = ["Tiny", "Short", "Medium", "Long", "XL", "Plat"]
let output = []

function between(number, diapason){
  return parseInt(number) >= parseInt(diapason.toString().split(' ')[0]) && parseInt(number) <= parseInt(diapason.toString().split(' ')[1])
}

function idToYear(id){
  for(let year = 0; year < years.length; year++)
    if(parseInt(id) <= years[year]) return year+2013
}

const filter = {
  "name": (level) => {
    const operator = document.getElementById("name-cond").value;
    const value = document.getElementById("name").value;

    if (value == '') return true;

    switch(operator) {
      case '=':
        if(value == "?.numeric") return isNaN(parseInt(level.name))
        else if(value.startsWith("?.length ")) return level.name.length === parseInt(value.split(" ")[value.split(" ").length-1])
        return level.name == value;
      case '.includes':
        return level.name.includes(value);
      case '.startswith':
        return level.name.startsWith(value);
      case '.endswith':
        return level.name.endsWith(value);
      case '!=':
        if(value == "?.numeric") return !isNaN(parseInt(level.name))
        else if(value.startsWith("?.length ")) return level.name.length != parseInt(value.split(" ")[value.split(" ").length-1])
        return level.name != value;
      case '!.includes':
        return !level.name.includes(value);
      case '!.startswith':
        return !level.name.startsWith(value);
      case '!.endswith':
        return !level.name.endsWith(value);
      default:
        return true;
    }
  },  
  "description": (level) => {
    const operator = document.getElementById("description-cond").value;
    const value = document.getElementById("description").value;

    if (value == '') return true;

    switch(operator) {
      case '=':
        if(value == "?.numeric") return isNaN(parseInt(level.description))
        else if(value.startsWith("?.length ")) return level.description.length === parseInt(value.split(" ")[value.split(" ").length-1])
        return level.description == value;
      case '.includes':
        return level.description.includes(value);
      case '.startswith':
        return level.description.startsWith(value);
      case '.endswith':
        return level.description.endsWith(value);
      case '!=':
        if(value == "?.numeric") return !isNaN(parseInt(level.description))
        else if(value.startsWith("?.length ")) return level.description.length != parseInt(value.split(" ")[value.split(" ").length-1])
        return level.description != value;
      case '!.includes':
        return level.description.includes(value);
      case '!.startswith':
        return !level.description.startsWith(value);
      case '!.endswith':
        return !level.description.endsWith(value);
      default:
        return true;
    }
  }, 
  "author": (level) => {
    const operator = document.getElementById("author-cond").value;
    const value = document.getElementById("author").value;
    const current_key = level.author

    if (value == '') return true;

    switch(operator) {
      case '=':
        if(value == "?.numeric") return isNaN(parseInt(current_key))
        else if(value.startsWith("?.length ")) return current_key.length === parseInt(value.split(" ")[value.split(" ").length-1])
        return current_key == value;
      case '.includes':
        return current_key.includes(value);
      case '.startswith':
        return current_key.startsWith(value);
      case '.endswith':
        return current_key.endsWith(value);
      case '!=':
        if(value == "?.numeric") return !isNaN(parseInt(current_key))
        else if(value.startsWith("?.length ")) return current_key.length != parseInt(value.split(" ")[value.split(" ").length-1])
        return current_key != value;
      case '!.includes':
        return !current_key.includes(value);
      case '!.startswith':
        return !current_key.startsWith(value);
      case '!.endswith':
        return !current_key.endsWith(value);
      default:
        return true;
    }
  },    
  "likes": (level) => {
    const operator = document.getElementById("likes-cond").value;
    const value = document.getElementById("likes").value;
    const current_key = level.likes

    if (value == '') return true;

    switch(operator) {
      case '=':
        return current_key == parseInt(value);
      case '!=':
        return current_key != parseInt(value);
      case '>':
        return current_key > parseInt(value);
      case '>=':
        return current_key <= parseInt(value);
      case '<':
        return current_key < parseInt(value);
      case '<=':
        return current_key <= parseInt(value);
      case '.between':
        return between(current_key, value);

      default:
        return true;
    }
  },  
  "downloads": (level) => {
    const operator = document.getElementById("downloads-cond").value;
    const value = document.getElementById("downloads").value;
    const current_key = level.downloads

    if (value == '') return true;

    switch(operator) {
      case '=':
        return current_key == parseInt(value);
      case '!=':
        return current_key != parseInt(value);
      case '>':
        return current_key > parseInt(value);
      case '>=':
        return current_key <= parseInt(value);
      case '<':
        return current_key < parseInt(value);
      case '<=':
        return current_key <= parseInt(value);

      default:
        return true;
    }
  },
  "difficulty": (level) => {
    const operator = document.getElementById("difficulty-cond").value;
    const value = difficultyToInt.indexOf(document.getElementById("difficulty").value)
    const current_key = difficultyToInt.indexOf(level.difficulty)

    console.log(value)

    if (value == 'Any') return true;

    switch(operator) {
      case '=':
        if(value == 7) return level.difficulty.includes("Demon") // MrSpaghetti code
        return current_key == parseInt(value);
      case '!=':
        if(value == 7) return !level.difficulty.includes("Demon")
        return current_key != parseInt(value);
      case '>':
        if(value == 7) return false
        return current_key > parseInt(value);
      case '>=':
        if(value == 7) return level.difficulty.includes("Demon")
        return current_key <= parseInt(value);
      case '<':
        if(value == 7) return !level.difficulty.includes("Demon")
        return current_key < parseInt(value);
      case '<=':
        if(value == 7) return true
        return current_key <= parseInt(value);
  
      default:
        return true;
    }
  }, 
  "rating": (level) => {
    const operator = document.getElementById("rating-cond").value;
    const value = parseInt(document.getElementById("rating").value)
    const current_key = level.cp

    switch(operator) {
      case '=':
        return current_key == value;
      case '!=':
        return current_key != value;
      case '>':
        return current_key > value;
      case '>=':
        return current_key >= value;
      case '<':
        return current_key < value;
      case '<=':
        return current_key <= value;
  
      default:
        return true;
    }
  },
  "gameversion": (level) => {
    const operator = document.getElementById("gameversion-cond").value;
    const value = versionToInt.indexOf(document.getElementById("gameversion").value)
    const current_key = versionToInt.indexOf(level.gameVersion)

    switch(operator) {
      case '=':
        return current_key == value;
      case '!=':
        return current_key != value;
      case '>':
        return current_key > value;
      case '>=':
        return current_key >= value;
      case '<':
        return current_key < value;
      case '<=':
        return current_key <= value;
  
      default:
        return true;
    }
  },
  "uploadgameversion": (level) => {
    const operator = document.getElementById("uploadgameversion-cond").value;
    const value = parseFloat(document.getElementById("uploadgameversion").value)
    const current_key = parseFloat(level.uploadGameVersion)
    console.log(value, current_key)

    switch(operator) {
      case '=':
        return current_key == value;
      case '!=':
        return current_key != value;
      case '>':
        return current_key > value;
      case '>=':
        return current_key >= value;
      case '<':
        return current_key < value;
      case '<=':
        return current_key <= value;
  
      default:
        return true;
    }
  },
  "uploadyear": (level) => {
    const operator = document.getElementById("uploadyear-cond").value;
    const value = document.getElementById("uploadyear").value
    const current_key = idToYear(level.id)
    console.log(value, current_key)

    switch(operator) {
      case '=':
        return current_key == parseInt(value);
      case '!=':
        return current_key != parseInt(value);
      case '>':
        return current_key > parseInt(value);
      case '>=':
        return current_key >= parseInt(value);
      case '<':
        return current_key < parseInt(value);
      case '<=':
        return current_key <= parseInt(value);
      case '.between':
        return between(current_key, value);
  
      default:
        return true;
    }
  },
  "id": (level) => {
    const operator = document.getElementById("id-cond").value;
    const value = document.getElementById("id").value;
    const current_key = parseInt(level.id)

    if (value == '') return true;

    switch(operator) {
      case '=':
        return current_key == parseInt(value);
      case '!=':
        return current_key != parseInt(value);
      case '>':
        return current_key > parseInt(value);
      case '>=':
        return current_key <= parseInt(value);
      case '<':
        return current_key < parseInt(value);
      case '<=':
        return current_key <= parseInt(value);
      case '.between':
        return between(current_key, value);
      case '.includes':
        return current_key.toString().includes(value);
      case '.startswith':
        return current_key.toString().startsWith(value);
      case '.endswith':
        return current_key.toString().endsWith(value);
      case '!.includes':
        return !current_key.toString().includes(value);
      case '!.startswith':
        return !current_key.toString().startsWith(value);
      case '!.endswith':
        return !current_key.toString().endsWith(value);
      default:
        return true;
    }
  },
  "playerid": (level) => {
    const operator = document.getElementById("playerid-cond").value;
    const value = document.getElementById("playerid").value;
    const current_key = parseInt(level.playerID)

    if (value == '') return true;

    switch(operator) {
      case '=':
        return current_key == parseInt(value);
      case '!=':
        return current_key != parseInt(value);
      case '>':
        return current_key > parseInt(value);
      case '>=':
        return current_key <= parseInt(value);
      case '<':
        return current_key < parseInt(value);
      case '<=':
        return current_key <= parseInt(value);
      case '.between':
        return between(current_key, value);
      case '.includes':
        return current_key.toString().includes(value);
      case '.startswith':
        return current_key.toString().startsWith(value);
      case '.endswith':
        return current_key.toString().endsWith(value);
      case '!.includes':
        return !current_key.toString().includes(value);
      case '!.startswith':
        return !current_key.toString().startsWith(value);
      case '!.endswith':
        return !current_key.toString().endsWith(value);
      default:
        return true;
    }
  },
  "accountid": (level) => {
    const operator = document.getElementById("accountid-cond").value;
    const value = document.getElementById("accountid").value;
    const current_key = parseInt(level.accountID)

    if (value == '') return true;

    switch(operator) {
      case '=':
        return current_key == parseInt(value);
      case '!=':
        return current_key != parseInt(value);
      case '>':
        return current_key > parseInt(value);
      case '>=':
        return current_key <= parseInt(value);
      case '<':
        return current_key < parseInt(value);
      case '<=':
        return current_key <= parseInt(value);
      case '.between':
        return between(current_key, value);
      case '.includes':
        return current_key.toString().includes(value);
      case '.startswith':
        return current_key.toString().startsWith(value);
      case '.endswith':
        return current_key.toString().endsWith(value);
      case '!.includes':
        return !current_key.toString().includes(value);
      case '!.startswith':
        return !current_key.toString().startsWith(value);
      case '!.endswith':
        return !current_key.toString().endsWith(value);
      default:
        return true;
    }
  },
  "songid": (level) => {
    const operator = document.getElementById("songid-cond").value;
    const value = document.getElementById("songid").value;
    const current_key = level.songID

    if (value == '') return true;

    switch(operator) {
      case '=':
        return current_key == value;
      case '!=':
        return current_key != value;
      case '>':
        return parseInt(current_key) > parseInt(value);
      case '>=':
        return parseInt(current_key) <= parseInt(value);
      case '<':
        return parseInt(current_key) < parseInt(value);
      case '<=':
        return parseInt(current_key) <= parseInt(value);
      case '.between':
        return between(current_key, value);
      case '.includes':
        return current_key.toString().includes(value);
      case '.startswith':
        return current_key.toString().startsWith(value);
      case '.endswith':
        return current_key.toString().endsWith(value);
      case '!.includes':
        return !current_key.toString().includes(value);
      case '!.startswith':
        return !current_key.toString().startsWith(value);
      case '!.endswith':
        return !current_key.toString().endsWith(value);
      default:
        return true;
    }
  },
  "length": (level) => {
    const operator = document.getElementById("length-cond").value;
    const value = document.getElementById("length").value;
    const current_key = lengths.indexOf(level.length)

    if (value == '') return true;

    switch(operator) {
      case '=':
        return current_key == value;
      case '!=':
        return current_key != value;
      case '>':
        return current_key > parseInt(value);
      case '>=':
        return current_key <= parseInt(value);
      case '<':
        return current_key < parseInt(value);
      case '<=':
        return current_key <= parseInt(value);
      case '.includes':
        return current_key.toString().includes(value);
      case '.startswith':
        return current_key.toString().startsWith(value);
      case '.endswith':
        return current_key.toString().endsWith(value);
      case '!.includes':
        return !current_key.toString().includes(value);
      case '!.startswith':
        return !current_key.toString().startsWith(value);
      case '!.endswith':
        return !current_key.toString().endsWith(value);
      default:
        return true;
    }
  },
  "length": (level) => {
    const operator = document.getElementById("length-cond").value;
    const value = document.getElementById("length").value;
    const current_key = lengths.indexOf(level.length)

    if (value == '') return true;

    switch(operator) {
      case '=':
        return current_key == value;
      case '!=':
        return current_key != value;
      case '>':
        return current_key > parseInt(value);
      case '>=':
        return current_key <= parseInt(value);
      case '<':
        return current_key < parseInt(value);
      case '<=':
        return current_key <= parseInt(value);
      case '.includes':
        return current_key.toString().includes(value);
      case '.startswith':
        return current_key.toString().startsWith(value);
      case '.endswith':
        return current_key.toString().endsWith(value);
      case '!.includes':
        return !current_key.toString().includes(value);
      case '!.startswith':
        return !current_key.toString().startsWith(value);
      case '!.endswith':
        return !current_key.toString().endsWith(value);
      default:
        return true;
    }
  },
}

function search(){
  let result = data.filter(level => {
    let pass = true;
    let used_filters = []
   
    if(document.getElementById("name").value) {
      pass = pass && filter.name(level);
      used_filters.push("name")
    } if(document.getElementById("description").value) {
      pass = pass && filter.description(level);
      used_filters.push("description")
    } if(document.getElementById("author").value) {
      pass = pass && filter.author(level);
      used_filters.push("author")
    } if(document.getElementById("likes").value) {
      pass = pass && filter.likes(level);
      used_filters.push("likes")
    } if(document.getElementById("downloads").value) {
      pass = pass && filter.downloads(level);
      used_filters.push("downloads")
    } if(document.getElementById("difficulty").value != "Any") {
      pass = pass && filter.difficulty(level);
      used_filters.push("difficulty")
    } if(document.getElementById("rating").value != "Any") {
      pass = pass && filter.rating(level);
      used_filters.push("rating")
    } if(document.getElementById("gameversion").value != "Any") {
      pass = pass && filter.gameversion(level);
      used_filters.push("gameversion")
    } if(document.getElementById("uploadgameversion").value != "Any") {
      pass = pass && filter.uploadgameversion(level);
      used_filters.push("uploadgameversion")
    } if(document.getElementById("uploadyear").value != "") {
      pass = pass && filter.uploadyear(level);
      used_filters.push("uploadyear")
    } if(document.getElementById("id").value != "") {
      pass = pass && filter.id(level);
      used_filters.push("id")
    } if(document.getElementById("accountid").value != "") {
      pass = pass && filter.accountid(level);
      used_filters.push("accountid")
    } if(document.getElementById("playerid").value != "") {
      pass = pass && filter.playerid(level);
      used_filters.push("playerid")
    } if(document.getElementById("songid").value != "") {
      pass = pass && filter.songid(level);
      used_filters.push("songid")
    } if(document.getElementById("length").value != "Any") {
      pass = pass && filter.length(level);
      used_filters.push("length")
    }
    return pass;
  });

  displayResult(result);
}

const MAX_RESULTS = 150;
const CHUNK_SIZE = 150;

function displayResult(result) {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `<p>Found ${result.length} results.<p><br>`;
  
  let currentRange = 150;
  let displayedResults = 0;
  
  function displayChunk(start, end) {
    const chunk = result.slice(start, end);
    chunk.forEach((level) => {
      resultElement.innerHTML += 
        `<p>Found level <strong>${level.name}</strong> at position ${level.index}<br>${level.songID}<br>
        <strong><a href="https://gdbrowser.com/${level.id}" target="_blank">${level.id}</a></strong></p><br><br>`;
    });
    displayedResults += chunk.length;
  }

  // Первоначальное отображение
  if (result.length > 150) {
    displayChunk(0, 150);
  } else if (result.length > 0) {
    displayChunk(0, result.length);
  } else {
    resultElement.innerHTML = '<p>No results.</p>';
    return;
  }

  // Функция для создания/обновления кнопки
  function updateShowMoreButton() {
    // Удаляем старую кнопку если она есть
    const oldButton = document.getElementById("showMore-inp");
    if (oldButton) oldButton.remove();

    // Добавляем новую кнопку если есть что показывать
    if (result.length > displayedResults) {
      const showMoreBtn = document.createElement("button");
      showMoreBtn.id = "showMore-inp";
      showMoreBtn.textContent = "Show more";
      resultElement.appendChild(showMoreBtn);

      showMoreBtn.addEventListener("click", () => {
        const nextStart = displayedResults;
        let nextEnd;
        
        if (result.length > MAX_RESULTS) {
          nextEnd = Math.min(displayedResults + CHUNK_SIZE, result.length);
        } else {
          nextEnd = Math.min(displayedResults + 150, result.length);
          currentRange += 150;
        }
        
        displayChunk(nextStart, nextEnd);
        updateShowMoreButton(); // Обновляем кнопку после загрузки
      });
    }
  }

  // Инициализируем кнопку
  updateShowMoreButton();
}