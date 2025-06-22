let data = [];

async function init() {
  data = await load_data();
  console.log("data is loaded.");
}

init();

function search() {
  if (data.length === 0) {
    console.error("loading data...");
    return;
  }
}

const difficultyToInt = [
  "Unrated", "Auto", "Easy", "Normal", "Hard", "Harder", "Insane","Demon", "Easy Demon", "Medium Demon", "Hard Demon", "Insane Demon", "Extreme Demon",
]
const versionToInt = [
  "Pre-1.7", "1.7", "1.8", "1.9", "2.0", "2.1", "2.2"
]
const params = [
  "name", "description", "author", "likes", "downloads", "difficulty", "rating", "gameversion", "uploadgameversion", "uploadyear", "id", "playerid", "accountid", "songid", "length"
]

const years = [130629, 3938229, 15435856, 27788667, 40559842, 51591727, 58976287, 66144272, 77026243, 87321749, 98379505, 113708332, 118028739]
const lengths = ["Tiny", "Short", "Medium", "Long", "XL", "Plat"]
let output = []

function between(number, diapason){
  return parseInt(number) >= parseInt(diapason.toString().split(' ')[0]) && parseInt(number) <= parseInt(diapason.toString().split(' ')[1])
}

function idToYear(id){
  let year_string;
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
        return level.name == value;
      case '.includes':
        return level.name.includes(value);
      case '.startswith':
        return level.name.startsWith(value);
      case '.endswith':
        return level.name.endsWith(value);
      case '!=':
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
        return level.description == value;
      case '.includes':
        return level.description.includes(value);
      case '.startswith':
        return level.description.startsWith(value);
      case '.endswith':
        return level.description.endsWith(value);
      case '!=':
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
        return current_key == value;
      case '.includes':
        return current_key.includes(value);
      case '.startswith':
        return current_key.startsWith(value);
      case '.endswith':
        return current_key.endsWith(value);
      case '!=':
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

  console.log(result);

  document.getElementById("result").innerHTML = `<p>Found ${result.length} results.<p><br>`;
  if(result.length != 0) {
    result.forEach((level) => {
      document.getElementById("result").innerHTML += `<p>Found level <strong>${level.name}</strong> at position ${level.index}<br>${level.songID}<br><strong><a href="https://gdbrowser.com/${level.id}" target="_blank">${level.id}</a></strong></p><br><br>`;
    });
  } else {
    document.getElementById("result").innerHTML = '<p>No results.</p>';
  }
}
