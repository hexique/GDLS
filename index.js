let data = [];

/*
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
*/

data = [
{"name": "deat man", "id": "5106411", "description": "trolololo", "author": "Reppermint", "playerID": "5174169", "accountID": "0", "difficulty": "Hard", "downloads": 148, "likes": 19, "length": "Long", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "1.9", "version": 7, "copiedID": "0", "twoPlayer": false, "officialSong": 5, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 0, "objects": 0, "large": false, "cp": 0, "songName": "Base After Base", "songAuthor": "DJVI", "songSize": "0MB", "songID": "Level 5", "index": 43, "uploadGameVersion": "1.9"}, {"name": "Demon X", "id": "5124909", "description": "(No description provided)", "author": "Chile", "playerID": "4518261", "accountID": "0", "difficulty": "Harder", "downloads": 101, "likes": 21, "length": "Long", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "1.9", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 18, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 0, "objects": 0, "large": false, "cp": 0, "songName": "Theory of Everything 2", "songAuthor": "DJ-Nate", "songSize": "0MB", "songID": "Level 18", "index": 55, "uploadGameVersion": "1.9"}, {"name": "The Demon", "id": "15306332", "description": "(No description provided)", "author": "-", "playerID": "13498064", "accountID": 0, "difficulty": "Insane", "downloads": 12, "likes": 2, "length": "Medium", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.0", "version": 2, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "655888", "coins": 1, "verifiedCoins": false, "starsRequested": 6, "objects": 0, "large": false, "cp": 0, "songName": "Detious - Telluric (Original Mix)", "songAuthor": "DeadRewind", "songSize": "8.08MB", "songID": "655888", "songLink": "http://audio.ngfiles.com/655000/655888_Detious---Telluric-Origina.mp3", "index": 62, "uploadGameVersion": "2.0"}, {"name": "dont touch", "id": "17463092", "description": "thanks for playing i hope you enjoy as much as i made it!", "author": "-", "playerID": "15401791", "accountID": 0, "difficulty": "Harder", "downloads": 9, "likes": 2, "length": "Medium", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.0", "version": 2, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "621136", "coins": 0, "verifiedCoins": false, "starsRequested": 1, "objects": 0, "large": false, "cp": 0, "songName": "TheFatRat - Xenogenesis", "songAuthor": "ThisIsTheFatRat", "songSize": "9.01MB", "songID": "621136", "songLink": "http://audio.ngfiles.com/621000/621136_TheFatRat---Xenogenesis.mp3", "index": 5, "uploadGameVersion": "2.0"}, {"name": "Unnamed 0", "id": "19518791", "description": "(No description provided)", "author": "MrNooby", "playerID": "15382148", "accountID": "4742159", "difficulty": "Hard", "downloads": 139, "likes": 30, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.0", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "645415", "coins": 0, "verifiedCoins": false, "starsRequested": 2, "objects": 0, "large": false, "cp": 0, "songName": "Level Three [Melodic Electro]", "songAuthor": "DJStriden", "songSize": "8.25MB", "songID": "645415", "songLink": "http://audio.ngfiles.com/645000/645415_Level-Three-Melodic-Electr.mp3", "index": 72, "uploadGameVersion": "2.0"}, {"name": "easy", "id": "19735186", "description": "(No description provided)", "author": "-", "playerID": "16567527", "accountID": 0, "difficulty": "Normal", "downloads": 28, "likes": 0, "length": "Medium", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.0", "version": 3, "copiedID": "0", "twoPlayer": false, "officialSong": 20, "customSong": "0", "coins": 3, "verifiedCoins": false, "starsRequested": 6, "objects": 0, "large": false, "cp": 0, "songName": "Deadlocked", "songAuthor": "F-777", "songSize": "0MB", "songID": "Level 20", "index": 82, "uploadGameVersion": "2.0"}, {"name": "Sandstorm X", "id": "20772161", "description": "Make sure to get good luck!", "author": "LeahFreedman", "playerID": "16495521", "accountID": "0", "difficulty": "Hard", "downloads": 27, "likes": 2, "length": "Long", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.0", "version": 2, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "553543", "coins": 3, "verifiedCoins": false, "starsRequested": 2, "objects": 0, "large": false, "cp": 0, "songName": "-586rick- Sandstorm", "songAuthor": "586rick", "songSize": "4.68MB", "songID": "553543", "songLink": "http://audio.ngfiles.com/553000/553543_-586rick--Sandstorm.mp3", "index": 4, "uploadGameVersion": "2.0"}, {"name": "speed of light", "id": "24736142", "description": "thanks for playing", "author": "spidermayn7", "playerID": "19181317", "accountID": "5581418", "difficulty": "Hard", "downloads": 38, "likes": 6, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.0", "version": 2, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "467339", "coins": 0, "verifiedCoins": false, "starsRequested": 5, "objects": 0, "large": false, "cp": 0, "songName": "At the Speed of Light", "songAuthor": "Dimrain47", "songSize": "9.56MB", "songID": "467339", "songLink": "https://geometrydashcontent.b-cdn.net/songs/467339.mp3", "index": 33, "uploadGameVersion": "2.0"}, {"name": "burgerbath part leak", "id": "42130775", "description": "my part in burgerbath leaked :3 the verifyer is almost done finishing this lvl tbh i <3 it!", "author": "Plasdu", "playerID": "40579289", "accountID": "7174704", "difficulty": "Harder", "downloads": 260, "likes": 21, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "10565740", "twoPlayer": false, "officialSong": 0, "customSong": "467339", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 0, "large": false, "cp": 0, "songName": "At the Speed of Light", "songAuthor": "Dimrain47", "songSize": "9.56MB", "songID": "467339", "songLink": "https://geometrydashcontent.b-cdn.net/songs/467339.mp3", "index": 38, "uploadGameVersion": "2.1"}, {"name": "DeCode ", "id": "42546789", "description": "(No description provided)", "author": "ggextremedemon", "playerID": "50507161", "accountID": "8651799", "difficulty": "Insane", "downloads": 33, "likes": 1, "length": "Long", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 2, "copiedID": "2997354", "twoPlayer": false, "officialSong": 0, "customSong": "587069", "coins": 3, "verifiedCoins": false, "starsRequested": 0, "objects": 10719, "large": false, "cp": 0, "songName": "-Endgame-", "songAuthor": "Waterflame", "songSize": "5.35MB", "songID": "587069", "songLink": "http://audio.ngfiles.com/587000/587069_-Endgame-.mp3", "index": 80, "uploadGameVersion": "2.1"}, {"name": "Buena Vida", "id": "51858975", "description": "Worked really hard on it!Hope you like it!;) (and sorry for the bugs)", "author": "Theeafomea", "playerID": "48821914", "accountID": "7993120", "difficulty": "Normal", "downloads": 43, "likes": 0, "length": "Long", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 2, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "834445", "coins": 3, "verifiedCoins": false, "starsRequested": 4, "objects": 13673, "large": false, "cp": 0, "songName": "F-777 - Double Cross (Dres Theme)", "songAuthor": "F-777", "songSize": "5.81MB", "songID": "834445", "songLink": "https://audio.ngfiles.com/834000/834445_F-777---Double-Cross-Dres-.mp3?f1543240724", "index": 34, "uploadGameVersion": "2.1"}, {"name": "Ship Challenge X", "id": "56500852", "description": "The second in my series : Challenge X. This one is the ship challenge, good luck, have fun! 829 attempts to verify", "author": "gluggy", "playerID": "99690034", "accountID": "11264239", "difficulty": "Insane", "downloads": 682, "likes": 22, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "684652", "coins": 3, "verifiedCoins": false, "starsRequested": 8, "objects": 746, "large": false, "cp": 0, "songName": "Milkshake", "songAuthor": "meganeko", "songSize": "9.07MB", "songID": "684652", "songLink": "http://audio.ngfiles.com/684000/684652_Milkshake.mp3", "index": 21, "uploadGameVersion": "2.1"}, {"name": "easy deadlocked", "id": "60302213", "description": "enjoy", "author": "Yoboydanixd", "playerID": "127229493", "accountID": "13499964", "difficulty": "Harder", "downloads": 43, "likes": -2, "length": "Medium", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 2, "copiedID": "0", "twoPlayer": false, "officialSong": 20, "customSong": "0", "coins": 2, "verifiedCoins": false, "starsRequested": 5, "objects": 721, "large": false, "cp": 0, "songName": "Deadlocked", "songAuthor": "F-777", "songSize": "0MB", "songID": "Level 20", "index": 41, "uploadGameVersion": "2.1"}, {"name": "ErikCarr Preview", "id": "62605142", "description": "vai ser bem mais legal e bonito e apenas preview...uptade comeco mais facil", "author": "davi2017", "playerID": "26637777", "accountID": "6993328", "difficulty": "Insane", "downloads": 276, "likes": 11, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 2, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "722366", "coins": 0, "verifiedCoins": false, "starsRequested": 9, "objects": 341, "large": false, "cp": 0, "songName": "The Yanderes Puppet Show", "songAuthor": "Acid-Notation", "songSize": "16.77MB", "songID": "722366", "songLink": "https://geometrydashcontent.b-cdn.net/songs/722366.mp3", "index": 2, "uploadGameVersion": "2.1"}, {"name": "Noclip nine circles", "id": "63108847", "description": "(No description provided)", "author": "flames411", "playerID": "126436215", "accountID": "13597877", "difficulty": "Insane", "downloads": 75, "likes": 4, "length": "Long", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 2, "copiedID": "25391507", "twoPlayer": false, "officialSong": 0, "customSong": "533927", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 20970, "large": false, "cp": 0, "songName": "NK - Nine Circles", "songAuthor": "Rukkus", "songSize": "7.76MB", "songID": "533927", "songLink": "http://audio.ngfiles.com/533000/533927_NK---Nine-Circles.mp3", "index": 11, "uploadGameVersion": "2.1"}, {"name": "jump", "id": "65010940", "description": "timing is the key young padawan", "author": "fileMissing", "playerID": "140349813", "accountID": "14116209", "difficulty": "Hard", "downloads": 30, "likes": 1, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 4, "copiedID": "0", "twoPlayer": false, "officialSong": 21, "customSong": "0", "coins": 1, "verifiedCoins": false, "starsRequested": 2, "objects": 590, "large": false, "cp": 0, "songName": "Fingerdash", "songAuthor": "MDK", "songSize": "0MB", "songID": "Level 21", "index": 76, "uploadGameVersion": "2.1"}, {"name": "discord mod", "id": "66588333", "description": "Title says it all", "author": "Fluubah", "playerID": "81697051", "accountID": "9049127", "difficulty": "Harder", "downloads": 275, "likes": 14, "length": "Medium", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "900250", "coins": 0, "verifiedCoins": false, "starsRequested": 9, "objects": 1498, "large": false, "cp": 0, "songName": "Ping!", "songAuthor": "Exyl", "songSize": "6.22MB", "songID": "900250", "songLink": "https://audio.ngfiles.com/900000/900250_Ping.mp3?f1577211078", "index": 86, "uploadGameVersion": "2.1"}, {"name": "Unnamed 6", "id": "67012222", "description": "noob finiche stage", "author": "GeoMate", "playerID": "132050089", "accountID": "13630086", "difficulty": "Hard", "downloads": 89, "likes": 5, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.0", "version": 3, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "923513", "coins": 1, "verifiedCoins": false, "starsRequested": 2, "objects": 264, "large": false, "cp": 0, "songName": "Exyl & Dalux - Nice Logo", "songAuthor": "Exyl", "songSize": "5.1MB", "songID": "923513", "songLink": "https://audio.ngfiles.com/923000/923513_Exyl-amp-Dalux---Nice-Logo.mp3?f1586056708", "index": 17, "uploadGameVersion": "2.1"}, {"name": "challenge for kirril", "id": "71200886", "description": "(No description provided)", "author": "smilea", "playerID": "158775935", "accountID": "16284181", "difficulty": "Unrated", "downloads": 26, "likes": 0, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 0, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 56, "uploadGameVersion": "2.1"}, {"name": "conejo 24", "id": "71409604", "description": "hola", "author": "crxxstian", "playerID": "8332017", "accountID": "1287995", "difficulty": "Hard", "downloads": 47, "likes": 3, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 20, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 4, "objects": 119, "large": false, "cp": 0, "songName": "Deadlocked", "songAuthor": "F-777", "songSize": "0MB", "songID": "Level 20", "index": 48, "uploadGameVersion": "2.1"}, {"name": "f to pay respecc", "id": "71437171", "description": "f", "author": "k0ralix", "playerID": "107574988", "accountID": "11021003", "difficulty": "Normal", "downloads": 128, "likes": 6, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 2, "objects": 103, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 31, "uploadGameVersion": "2.1"}, {"name": "RoXiC rizily", "id": "72438598", "description": "(No description provided)", "author": "rizily", "playerID": "152926059", "accountID": "15153609", "difficulty": "Unrated", "downloads": 100, "likes": 3, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": true, "officialSong": 0, "customSong": "722594", "coins": 0, "verifiedCoins": false, "starsRequested": 5, "objects": 1201, "large": false, "cp": 0, "songName": "Troglodyte (Original Mix)", "songAuthor": "KaixoMusic", "songSize": "8.2MB", "songID": "722594", "songLink": "http://audio.ngfiles.com/722000/722594_Troglodyte-Original-Mix.mp3", "index": 39, "uploadGameVersion": "2.1"}, {"name": "bny", "id": "74202961", "description": "uhhhh yeah", "author": "scooberies", "playerID": "153480990", "accountID": "15472819", "difficulty": "Insane", "downloads": 103, "likes": 2, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "786714", "coins": 0, "verifiedCoins": false, "starsRequested": 3, "objects": 202, "large": false, "cp": 0, "songName": "garlagan - There (Valent Remix)", "songAuthor": "ValentInsanity", "songSize": "3.41MB", "songID": "786714", "songLink": "https://audio.ngfiles.com/786000/786714_garlagan---There-Valent-Re.mp3?f1516824484", "index": 69, "uploadGameVersion": "2.1"}, {"name": "LOL II ", "id": "74271875", "description": "105 ATT", "author": "agustinpan", "playerID": "136134106", "accountID": "14032890", "difficulty": "Harder", "downloads": 35, "likes": 3, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "735623", "coins": 0, "verifiedCoins": false, "starsRequested": 4, "objects": 640, "large": false, "cp": 0, "songName": "Keys of Freedom", "songAuthor": "hawkfire7", "songSize": "9.97MB", "songID": "735623", "songLink": "http://audio.ngfiles.com/735000/735623_Keys-of-Freedom.mp3", "index": 84, "uploadGameVersion": "2.1"}, {"name": "Water", "id": "75999806", "description": "Just small lvl with minimum decoration (I'm lazy)", "author": "NIKPROdnk", "playerID": "152081779", "accountID": "15567032", "difficulty": "Harder", "downloads": 53, "likes": 1, "length": "Medium", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "1071391", "coins": 0, "verifiedCoins": false, "starsRequested": 4, "objects": 1502, "large": false, "cp": 0, "songName": "TheFatRat - Fire", "songAuthor": "ThisIsTheFatRat", "songSize": "7.99MB", "songID": "1071391", "songLink": "https://audio.ngfiles.com/1071000/1071391_TheFatRat---Fire.mp3?f1630069831", "index": 91, "uploadGameVersion": "2.1"}, {"name": "wave spam", "id": "76759692", "description": "(No description provided)", "author": "buldoji", "playerID": "160440403", "accountID": "18805287", "difficulty": "Unrated", "downloads": 39, "likes": 2, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "541786", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 50, "large": false, "cp": 0, "songName": "NK - Fairydust", "songAuthor": "Rukkus", "songSize": "7.37MB", "songID": "541786", "songLink": "http://audio.ngfiles.com/541000/541786_NK---Fairydust.mp3", "index": 8, "uploadGameVersion": "2.1"}, {"name": "PRICEMPRICEMYLVL", "id": "77108789", "description": "(No description provided)", "author": "micahisinsane", "playerID": "172076130", "accountID": "18966222", "difficulty": "Unrated", "downloads": 22, "likes": 2, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "77077876", "twoPlayer": false, "officialSong": 0, "customSong": "787153", "coins": 0, "verifiedCoins": false, "starsRequested": 2, "objects": 1073, "large": false, "cp": 0, "songName": "Ouais Ouais (ft. SlyLeaf)", "songAuthor": "LemKuuja", "songSize": "8.95MB", "songID": "787153", "songLink": "https://audio.ngfiles.com/787000/787153_Ouais-Ouais-ft-SlyLeaf.mp3?f1517042970", "index": 73, "uploadGameVersion": "2.1"}, {"name": "light World to Dark", "id": "77257858", "description": "(No description provided)", "author": "bAnaNAg0d", "playerID": "120594213", "accountID": "12280135", "difficulty": "Harder", "downloads": 29, "likes": 3, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "839572", "coins": 0, "verifiedCoins": false, "starsRequested": 4, "objects": 2705, "large": false, "cp": 0, "songName": "ELEPS - POWERSOUND (DUBSTEP)", "songAuthor": "ELEPS44", "songSize": "7.96MB", "songID": "839572", "songLink": "https://audio.ngfiles.com/839000/839572_ELEPS---POWERSOUND-DUBSTEP.mp3?f1545793734", "index": 51, "uploadGameVersion": "2.1"}, {"name": "Straight Ship", "id": "77532587", "description": "(No description provided)", "author": "Alpo1", "playerID": "54808200", "accountID": "11390515", "difficulty": "Unrated", "downloads": 64, "likes": 0, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 5, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 9, "objects": 100, "large": false, "cp": 0, "songName": "Base After Base", "songAuthor": "DJVI", "songSize": "0MB", "songID": "Level 5", "index": 14, "uploadGameVersion": "2.1"}, {"name": "Party Time Preview", "id": "77671047", "description": "This is a preview to Party Time which is Exiles Sequel", "author": "GDCube18", "playerID": "148486572", "accountID": "14954095", "difficulty": "Hard", "downloads": 68, "likes": 3, "length": "Medium", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "992206", "coins": 0, "verifiedCoins": false, "starsRequested": 3, "objects": 626, "large": false, "cp": 0, "songName": "Teminite - Party Time", "songAuthor": "Teminite", "songSize": "14.33MB", "songID": "992206", "songLink": "https://audio.ngfiles.com/992000/992206_Teminite---Party-Time.mp3?f1609421540", "index": 6, "uploadGameVersion": "2.1"}, {"name": "artes", "id": "78008683", "description": "(No description provided)", "author": "Kiovoh", "playerID": "168439820", "accountID": "18289614", "difficulty": "Normal", "downloads": 22, "likes": 3, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 3, "objects": 170, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 83, "uploadGameVersion": "2.1"}, {"name": "boom", "id": "78950404", "description": "(No description provided)", "author": "pressst2", "playerID": "175175562", "accountID": "19541275", "difficulty": "Unrated", "downloads": 29, "likes": 1, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "847287", "coins": 0, "verifiedCoins": false, "starsRequested": 4, "objects": 467, "large": false, "cp": 0, "songName": "Circus Contraption - Wicked Fascinations (DirtyPaws Remix)", "songAuthor": "dirtypawsofficial", "songSize": "7.72MB", "songID": "847287", "songLink": "https://audio.ngfiles.com/847000/847287_Circus-Contraption---Wicke.mp3?f1549666114", "index": 81, "uploadGameVersion": "2.1"}, {"name": "easy", "id": "78956395", "description": "(No description provided)", "author": "Sayaboss", "playerID": "171233480", "accountID": "19092440", "difficulty": "Normal", "downloads": 52, "likes": 3, "length": "Medium", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "999318", "coins": 0, "verifiedCoins": false, "starsRequested": 2, "objects": 969, "large": false, "cp": 0, "songName": "21st Century Humor But Its A Rave Song", "songAuthor": "rockymusic339", "songSize": "1.51MB", "songID": "999318", "songLink": "https://audio.ngfiles.com/999000/999318_21st-Century-Humor-But-Its.mp3?f1611631898", "index": 15, "uploadGameVersion": "2.1"}, {"name": "audieo never visual", "id": "80336867", "description": "(No description provided)", "author": "AKASmitty", "playerID": "166181838", "accountID": "17554645", "difficulty": "Unrated", "downloads": 68, "likes": 0, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "620959", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 2703, "large": false, "cp": 0, "songName": "-Stalker-", "songAuthor": "Waterflame", "songSize": "11.15MB", "songID": "620959", "songLink": "http://audio.ngfiles.com/620000/620959_-Stalker-.mp3", "index": 22, "uploadGameVersion": "2.1"}, {"name": "Unnamed 6", "id": "80848500", "description": "(No description provided)", "author": "Winda30", "playerID": "175790755", "accountID": "20272427", "difficulty": "Unrated", "downloads": 13, "likes": -2, "length": "Medium", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "157014", "coins": 0, "verifiedCoins": false, "starsRequested": 9, "objects": 2337, "large": false, "cp": 0, "songName": "ParagonX9 - Infiltration", "songAuthor": "ParagonX9", "songSize": "2.81MB", "songID": "157014", "songLink": "http://audio.ngfiles.com/157000/157014_ParagonX9___Infiltration.mp3", "index": 12, "uploadGameVersion": "2.1"}, {"name": "10 portal", "id": "81441587", "description": "un poco facil", "author": "cupido139", "playerID": "188384719", "accountID": "20840129", "difficulty": "Unrated", "downloads": 35, "likes": 1, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 19, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 36, "large": false, "cp": 0, "songName": "Geometrical Dominator", "songAuthor": "Waterflame", "songSize": "0MB", "songID": "Level 19", "index": 16, "uploadGameVersion": "2.1"}, {"name": "Harder and harder", "id": "82216610", "description": "15 jumps who gets harder (0.5 speed version)", "author": "SNAKEcraft3000", "playerID": "139774401", "accountID": "14218302", "difficulty": "Unrated", "downloads": 61, "likes": 3, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 2, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 1, "verifiedCoins": false, "starsRequested": 10, "objects": 59, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 37, "uploadGameVersion": "2.1"}, {"name": "Bossfight", "id": "82714716", "description": "(No description provided)", "author": "tommyreal13", "playerID": "159106866", "accountID": "18647502", "difficulty": "Unrated", "downloads": 23, "likes": 0, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "730246", "coins": 0, "verifiedCoins": false, "starsRequested": 3, "objects": 260, "large": false, "cp": 0, "songName": "Xtrullor - Nirmiti", "songAuthor": "Xtrullor", "songSize": "11.74MB", "songID": "730246", "songLink": "http://audio.ngfiles.com/730000/730246_Xtrullor---Nirmiti.mp3", "index": 36, "uploadGameVersion": "2.1"}, {"name": "Slaughterhouse", "id": "82949714", "description": "extreme demon", "author": "greta1234", "playerID": "187543287", "accountID": "21267197", "difficulty": "Insane", "downloads": 47, "likes": 4, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 74, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 52, "uploadGameVersion": "2.1"}, {"name": "Stereo Madness but", "id": "83252960", "description": "(No description provided)", "author": "Kirarapira", "playerID": "192306934", "accountID": "21449164", "difficulty": "Unrated", "downloads": 49, "likes": 0, "length": "Long", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "1556066", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 9, "objects": 3072, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 45, "uploadGameVersion": "2.1"}, {"name": "SupersonicHard", "id": "83514231", "description": "(No description provided)", "author": "DeckLOLcmd", "playerID": "190823785", "accountID": "21209159", "difficulty": "Unrated", "downloads": 38, "likes": 2, "length": "Long", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "4706930", "twoPlayer": false, "officialSong": 0, "customSong": "467267", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 23510, "large": false, "cp": 0, "songName": "Ludicrous Speed - F-777", "songAuthor": "F-777", "songSize": "4.79MB", "songID": "467267", "songLink": "http://audio.ngfiles.com/467000/467267_2._Ludicrous_Speed.mp3", "index": 53, "uploadGameVersion": "2.1"}, {"name": "Invisible Cataclysm", "id": "84877254", "description": "24597 att", "author": "AtemSL", "playerID": "181799702", "accountID": "22014478", "difficulty": "Harder", "downloads": 125, "likes": 1, "length": "Long", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "3979721", "twoPlayer": false, "officialSong": 0, "customSong": "467339", "coins": 3, "verifiedCoins": false, "starsRequested": 10, "objects": 15217, "large": false, "cp": 0, "songName": "At the Speed of Light", "songAuthor": "Dimrain47", "songSize": "9.56MB", "songID": "467339", "songLink": "https://geometrydashcontent.b-cdn.net/songs/467339.mp3", "index": 54, "uploadGameVersion": "2.1"}, {"name": "Aeon Challenge New 1", "id": "86036243", "description": "(No description provided)", "author": "OwenDoesNotDash", "playerID": "197900937", "accountID": "22043138", "difficulty": "Insane", "downloads": 92, "likes": 0, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "502268", "coins": 0, "verifiedCoins": false, "starsRequested": 0, "objects": 333, "large": false, "cp": 0, "songName": "NK - Classical VIP", "songAuthor": "Rukkus", "songSize": "7.44MB", "songID": "502268", "songLink": "http://audio.ngfiles.com/502000/502268_NK---Classical-VIP.mp3", "index": 89, "uploadGameVersion": "2.1"}, {"name": "umm", "id": "86129660", "description": "(No description provided)", "author": "ExodumXdd", "playerID": "201196863", "accountID": "22464946", "difficulty": "Unrated", "downloads": 47, "likes": 2, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "66600220", "twoPlayer": false, "officialSong": 0, "customSong": "134270", "coins": 1, "verifiedCoins": false, "starsRequested": 4, "objects": 0, "large": false, "cp": 0, "songName": "[TMM43] Ultimate Destruction", "songAuthor": "TMM43", "songSize": "6.33MB", "songID": "134270", "songLink": "http://audio.ngfiles.com/134000/134270_Ultimate.mp3", "index": 60, "uploadGameVersion": "2.1"}, {"name": "challenger", "id": "87039400", "description": "(No description provided)", "author": "irmaodaza", "playerID": "203698270", "accountID": "22836601", "difficulty": "Unrated", "downloads": 38, "likes": 0, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 4, "objects": 798, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 58, "uploadGameVersion": "2.1"}, {"name": "wow", "id": "87298964", "description": "(No description provided)", "author": "StarOdysey", "playerID": "165476660", "accountID": "20666644", "difficulty": "Unrated", "downloads": 41, "likes": 2, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "706340", "coins": 0, "verifiedCoins": false, "starsRequested": 4, "objects": 594, "large": false, "cp": 0, "songName": "-At the Speed of Light- (8 bit Remix)", "songAuthor": "ThaPredator", "songSize": "4.78MB", "songID": "706340", "songLink": "http://audio.ngfiles.com/706000/706340_-At-the-Speed-of-Light--8-.mp3", "index": 49, "uploadGameVersion": "2.1"}, {"name": "sjs  sjsksksksisk", "id": "88666110", "description": "(No description provided)", "author": "ChErEmIaS", "playerID": "208475450", "accountID": "23418369", "difficulty": "Unrated", "downloads": 33, "likes": 1, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 6, "objects": 648, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 44, "uploadGameVersion": "2.1"}, {"name": "impossible", "id": "88710673", "description": "(No description provided)", "author": "4m1kyGG", "playerID": "211094943", "accountID": "23797746", "difficulty": "Unrated", "downloads": 40, "likes": 1, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 10, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 5, "objects": 233, "large": false, "cp": 0, "songName": "xStep", "songAuthor": "DJVI", "songSize": "0MB", "songID": "Level 10", "index": 13, "uploadGameVersion": "2.1"}, {"name": "Blinding heck v2", "id": "89445653", "description": "fixed version of ldm bug", "author": "ronanc508", "playerID": "207635602", "accountID": "23962532", "difficulty": "Hard", "downloads": 55, "likes": 0, "length": "Medium", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "360804", "coins": 0, "verifiedCoins": false, "starsRequested": 8, "objects": 5157, "large": false, "cp": 0, "songName": "Iron God: Sakupen Hell Yes RMX", "songAuthor": "mr-jazzman", "songSize": "6.45MB", "songID": "360804", "songLink": "http://audio.ngfiles.com/360000/360804_Iron_God3.mp3", "index": 94, "uploadGameVersion": "2.1"}, {"name": "mol arena", "id": "89839630", "description": "(No description provided)", "author": "quillomoroco", "playerID": "213093266", "accountID": "24121604", "difficulty": "Unrated", "downloads": 39, "likes": 1, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 2, "copiedID": "0", "twoPlayer": false, "officialSong": 7, "customSong": "0", "coins": 1, "verifiedCoins": false, "starsRequested": 5, "objects": 151, "large": false, "cp": 0, "songName": "Jumper", "songAuthor": "Waterflame", "songSize": "0MB", "songID": "Level 7", "index": 77, "uploadGameVersion": "2.1"}, {"name": "robtop top", "id": "90733200", "description": "(No description provided)", "author": "YurikplayGD", "playerID": "215381145", "accountID": "24351428", "difficulty": "Unrated", "downloads": 22, "likes": 1, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 2, "objects": 280, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 25, "uploadGameVersion": "2.1"}, {"name": "Snake 2", "id": "91669944", "description": "(No description provided)", "author": "thatrandomguy2", "playerID": "215840876", "accountID": "24453005", "difficulty": "Unrated", "downloads": 29, "likes": 0, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 2, "copiedID": "38864397", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 1, "objects": 261, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 28, "uploadGameVersion": "2.1"}, {"name": "Slaughterhouse nocli", "id": "92381042", "description": "(No description provided)", "author": "Trucy1", "playerID": "211769405", "accountID": "23846883", "difficulty": "Hard", "downloads": 53, "likes": 9, "length": "Long", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "13710568", "twoPlayer": true, "officialSong": 0, "customSong": "482872", "coins": 0, "verifiedCoins": false, "starsRequested": 1, "objects": 48707, "large": true, "cp": 0, "songName": "KzX - Stalemate", "songAuthor": "Kayoszx", "songSize": "6.46MB", "songID": "482872", "songLink": "http://audio.ngfiles.com/482000/482872_KzX---Stalemate.mp3", "index": 70, "uploadGameVersion": "2.1"}, {"name": "bhvdxs", "id": "93083676", "description": "(No description provided)", "author": "Lat1ez", "playerID": "146835418", "accountID": "14870140", "difficulty": "Unrated", "downloads": 29, "likes": 2, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "1191782", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 16, "large": false, "cp": 0, "songName": "BIKE", "songAuthor": "tangermusic", "songSize": "3.8MB", "songID": "1191782", "songLink": "https://audio.ngfiles.com/1191000/1191782_BIKE.mp3?f1675302833", "index": 61, "uploadGameVersion": "2.1"}, {"name": "Blood trip", "id": "93823512", "description": "Just try it", "author": "tomisnothere", "playerID": "224755250", "accountID": "25164238", "difficulty": "Harder", "downloads": 48, "likes": 4, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 2, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "591519", "coins": 0, "verifiedCoins": false, "starsRequested": 4, "objects": 357, "large": false, "cp": 0, "songName": "Look Up", "songAuthor": "Geoplex", "songSize": "4.92MB", "songID": "591519", "songLink": "http://audio.ngfiles.com/591000/591519_Look-Up.mp3", "index": 19, "uploadGameVersion": "2.1"}, {"name": " volcano", "id": "93860483", "description": "lava is riseing", "author": "oliverdinh", "playerID": "219476936", "accountID": "25175745", "difficulty": "Harder", "downloads": 43, "likes": 3, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 3, "customSong": "0", "coins": 1, "verifiedCoins": false, "starsRequested": 7, "objects": 1131, "large": false, "cp": 0, "songName": "Polargeist", "songAuthor": "Step", "songSize": "0MB", "songID": "Level 3", "index": 97, "uploadGameVersion": "2.1"}, {"name": "inversion", "id": "94157301", "description": "(No description provided)", "author": "Cohen4553", "playerID": "225648720", "accountID": "25258279", "difficulty": "Unrated", "downloads": 31, "likes": 6, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 18, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 3, "objects": 921, "large": false, "cp": 0, "songName": "Theory of Everything 2", "songAuthor": "DJ-Nate", "songSize": "0MB", "songID": "Level 18", "index": 26, "uploadGameVersion": "2.1"}, {"name": "Goofy", "id": "94173851", "description": "(No description provided)", "author": "NotAVirgin", "playerID": "178593565", "accountID": "20957547", "difficulty": "Unrated", "downloads": 36, "likes": 1, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 2, "objects": 6, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 87, "uploadGameVersion": "2.1"}, {"name": "Unnamed 17", "id": "94230957", "description": "(No description provided)", "author": "ActingZZ5", "playerID": "166969716", "accountID": "17965364", "difficulty": "Harder", "downloads": 30, "likes": 3, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 42, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 7, "uploadGameVersion": "2.1"}, {"name": "Watatsumi my part gp", "id": "94364367", "description": "(No description provided)", "author": "CorezZgmd", "playerID": "137609924", "accountID": "14063640", "difficulty": "Hard", "downloads": 36, "likes": 2, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "94362686", "twoPlayer": false, "officialSong": 0, "customSong": "772434", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 218, "large": false, "cp": 0, "songName": "Panda Eyes - Insomnia", "songAuthor": "PandaEyesOfficial", "songSize": "5.77MB", "songID": "772434", "songLink": "https://audio.ngfiles.com/772000/772434_Panda-Eyes---Insomnia.mp3?f1509395703", "index": 88, "uploadGameVersion": "2.1"}, {"name": "ethereal layout", "id": "94452000", "description": "not finished looking for deco", "author": "sebg59", "playerID": "132508297", "accountID": "21335722", "difficulty": "Unrated", "downloads": 47, "likes": 3, "length": "Long", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "840834", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 0, "large": false, "cp": 0, "songName": "Ethereal", "songAuthor": "Xomu10", "songSize": "9.16MB", "songID": "840834", "songLink": "https://audio.ngfiles.com/840000/840834_Ethereal.mp3?f1546416196", "index": 20, "uploadGameVersion": "2.1"}, {"name": "Unnamed 49", "id": "95014403", "description": "(No description provided)", "author": "InfinityIsLost", "playerID": "221557003", "accountID": "24950144", "difficulty": "Unrated", "downloads": 23, "likes": 2, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "780702", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 176, "large": false, "cp": 0, "songName": "Power Trip [ Geometry Dash SubZero ]", "songAuthor": "BoomKitty", "songSize": "8.7MB", "songID": "780702", "songLink": "https://audio.ngfiles.com/780000/780702_Power-Trip--Geometry-Dash-.mp3?f1513957425", "index": 30, "uploadGameVersion": "2.1"}, {"name": "aap", "id": "95409035", "description": "layout4", "author": "babalikker", "playerID": "216088981", "accountID": "24847903", "difficulty": "Unrated", "downloads": 32, "likes": 1, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 4, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "653094", "coins": 0, "verifiedCoins": false, "starsRequested": 2, "objects": 42, "large": false, "cp": 0, "songName": "Metal Crusher (Rmx v.2) Loop", "songAuthor": "Djjaner", "songSize": "4.15MB", "songID": "653094", "songLink": "http://audio.ngfiles.com/653000/653094_Metal-Crusher-Rmx-v2-Loop.mp3", "index": 95, "uploadGameVersion": "2.1"}, {"name": "Snake 2", "id": "95654521", "description": "(No description provided)", "author": "NexusGDFriends", "playerID": "183529925", "accountID": "20295054", "difficulty": "Unrated", "downloads": 32, "likes": 1, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 2, "copiedID": "38864397", "twoPlayer": false, "officialSong": 21, "customSong": "0", "coins": 2, "verifiedCoins": false, "starsRequested": 3, "objects": 353, "large": false, "cp": 0, "songName": "Fingerdash", "songAuthor": "MDK", "songSize": "0MB", "songID": "Level 21", "index": 71, "uploadGameVersion": "2.1"}, {"name": "ohhhhhhhhhhhhh man ", "id": "96368377", "description": "this is 1000000% posable", "author": "samuel6715", "playerID": "210173112", "accountID": "23942332", "difficulty": "Unrated", "downloads": 48, "likes": 2, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "1213514", "coins": 0, "verifiedCoins": false, "starsRequested": 8, "objects": 292, "large": false, "cp": 0, "songName": "Rutra - Level Up 2", "songAuthor": "RutraOfficiel", "songSize": "2.65MB", "songID": "1213514", "songLink": "https://audio.ngfiles.com/1213000/1213514_Rutra---Level-Up-2.mp3?f1683669979", "index": 78, "uploadGameVersion": "2.1"}, {"name": "Cat Meow auto", "id": "96401006", "description": "(No description provided)", "author": "Papabiorn", "playerID": "146704983", "accountID": "21809733", "difficulty": "Unrated", "downloads": 28, "likes": 0, "length": "Long", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "34195005", "twoPlayer": false, "officialSong": 0, "customSong": "681708", "coins": 0, "verifiedCoins": false, "starsRequested": 1, "objects": 41595, "large": true, "cp": 0, "songName": "Azazal - I Said Meow", "songAuthor": "AzazalEDM", "songSize": "6.87MB", "songID": "681708", "songLink": "http://audio.ngfiles.com/681000/681708_Azazal---I-Said-Meow.mp3", "index": 42, "uploadGameVersion": "2.1"}, {"name": "Star Win", "id": "96469174", "description": "/////////////////////////////////////////////////////", "author": "ED1nEr12", "playerID": "189049017", "accountID": "20937740", "difficulty": "Unrated", "downloads": 43, "likes": 2, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.1", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "467339", "coins": 0, "verifiedCoins": false, "starsRequested": 9, "objects": 424, "large": false, "cp": 0, "songName": "At the Speed of Light", "songAuthor": "Dimrain47", "songSize": "9.56MB", "songID": "467339", "songLink": "https://geometrydashcontent.b-cdn.net/songs/467339.mp3", "index": 32, "uploadGameVersion": "2.1"}, {"name": "vsc v2", "id": "97121683", "description": "(No description provided)", "author": "Daonik", "playerID": "170952513", "accountID": "24779070", "difficulty": "Insane", "downloads": 53, "likes": 3, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "99641", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 1594, "large": false, "cp": 0, "songName": "I Love 2", "songAuthor": "cornandbeans", "songSize": "3.26MB", "songID": "99641", "songLink": "http://audio.ngfiles.com/99000/99641_I_Love_Cock_2.mp3", "index": 40, "uploadGameVersion": "2.1"}, {"name": "Plat", "id": "97609272", "description": "Mi intento x hacer un nivel de plataformas xd", "author": "ArZrXD", "playerID": "122733084", "accountID": "13427244", "difficulty": "Harder", "downloads": 182, "likes": 16, "length": "Plat", "platformer": true, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 2, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "720034", "coins": 3, "verifiedCoins": false, "starsRequested": 4, "objects": 416, "large": false, "cp": 0, "songName": "Aurora Theory (Preview)", "songAuthor": "Blackhole12", "songSize": "13.83MB", "songID": "720034", "songLink": "http://audio.ngfiles.com/720000/720034_Aurora-Theory-Preview.mp3", "index": 29, "uploadGameVersion": "2.2"}, {"name": "heh", "id": "99523174", "description": "heh NOT SUS!1!11!!!", "author": "fyasar6", "playerID": "219592144", "accountID": "24614842", "difficulty": "Unrated", "downloads": 22, "likes": 0, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 3, "objects": 514, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 63, "uploadGameVersion": "2.2"}, {"name": "Unnamed 8", "id": "100216785", "description": "(No description provided)", "author": "platonn231", "playerID": "234945941", "accountID": "26408525", "difficulty": "Unrated", "downloads": 27, "likes": 1, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "1279499", "coins": 0, "verifiedCoins": false, "starsRequested": 3, "objects": 119, "large": false, "cp": 0, "songName": "CHIPI CHIPI CHAPA CHAPA (DUBSTEP REMIX)", "songAuthor": "Xplosn08", "songSize": "2.72MB", "songID": "1279499", "songLink": "https://audio.ngfiles.com/1279000/1279499_CHIPI-CHIPI-CHAPA-CHAPA-DU.mp3?f1704483668", "index": 9, "uploadGameVersion": "2.2"}, {"name": "Fingerdash Robot", "id": "100803674", "description": "(No description provided)", "author": "isakins", "playerID": "210946115", "accountID": "23799655", "difficulty": "Unrated", "downloads": 32, "likes": 0, "length": "Long", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "28373111", "twoPlayer": false, "officialSong": 21, "customSong": "0", "coins": 3, "verifiedCoins": false, "starsRequested": 9, "objects": 27282, "large": false, "cp": 0, "songName": "Fingerdash", "songAuthor": "MDK", "songSize": "0MB", "songID": "Level 21", "index": 57, "uploadGameVersion": "2.2"}, {"name": "Add your fav Object", "id": "101314967", "description": "(No description provided)", "author": "zxcvrsxdcrown", "playerID": "238517624", "accountID": "26683880", "difficulty": "Unrated", "downloads": 39, "likes": 0, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "82098503", "twoPlayer": false, "officialSong": 5, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 1, "objects": 146, "large": false, "cp": 0, "songName": "Base After Base", "songAuthor": "DJVI", "songSize": "0MB", "songID": "Level 5", "index": 47, "uploadGameVersion": "2.2"}, {"name": "satisfying", "id": "102573276", "description": "(No description provided)", "author": "promaster2015", "playerID": "229546281", "accountID": "27479004", "difficulty": "Unrated", "downloads": 45, "likes": 3, "length": "Plat", "platformer": true, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 7, "objects": 8, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 64, "uploadGameVersion": "2.2"}, {"name": "yo so cool", "id": "102582177", "description": "(No description provided)", "author": "adambottleflips", "playerID": "223549709", "accountID": "25510466", "difficulty": "Unrated", "downloads": 25, "likes": 2, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "766165", "coins": 0, "verifiedCoins": false, "starsRequested": 8, "objects": 97, "large": false, "cp": 0, "songName": "XO (Eden Cover & Remake)", "songAuthor": "aaronmusslewhite", "songSize": "6.1MB", "songID": "766165", "songLink": "http://audio.ngfiles.com/766000/766165_XO-Eden-Cover-amp-Remake.mp3", "index": 90, "uploadGameVersion": "2.2"}, {"name": "bug", "id": "103321065", "description": "(No description provided)", "author": "NateDaGreat40", "playerID": "228206055", "accountID": "26827376", "difficulty": "Insane", "downloads": 59, "likes": 4, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 19, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 96, "uploadGameVersion": "2.2"}, {"name": "eazy math test", "id": "105070589", "description": "(No description provided)", "author": "eprodash1234", "playerID": "244477020", "accountID": "27911646", "difficulty": "Unrated", "downloads": 38, "likes": 1, "length": "Plat", "platformer": true, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 2, "objects": 27, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 85, "uploadGameVersion": "2.2"}, {"name": "3 wood club monster", "id": "106175491", "description": "this is my club step monsters sneak peek my level woodstep", "author": "michiteran", "playerID": "246580722", "accountID": "29208164", "difficulty": "Unrated", "downloads": 35, "likes": 3, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 3, "objects": 286, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 24, "uploadGameVersion": "2.2"}, {"name": "cube chal", "id": "106297208", "description": "Thanks for the idea wulzy", "author": "billbobjo1234", "playerID": "226244919", "accountID": "27832957", "difficulty": "Insane", "downloads": 84, "likes": 1, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 2, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "1330595", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 455, "large": false, "cp": 0, "songName": "SKARLET", "songAuthor": "chris-marcell", "songSize": "6.96MB", "songID": "1330595", "songLink": "https://audio.ngfiles.com/1330000/1330595_SKARLET.mp3?f1717838002", "index": 10, "uploadGameVersion": "2.2"}, {"name": "Stereo In Normality", "id": "106771365", "description": "(No description provided)", "author": "adrian54xd", "playerID": "250938086", "accountID": "29082098", "difficulty": "Unrated", "downloads": 33, "likes": 2, "length": "Long", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 3, "verifiedCoins": false, "starsRequested": 3, "objects": 3182, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 75, "uploadGameVersion": "2.2"}, {"name": "very ezezez wave", "id": "107198923", "description": "ez", "author": "sobech2", "playerID": "187951121", "accountID": "27893620", "difficulty": "Unrated", "downloads": 30, "likes": 0, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 2, "objects": 126, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 93, "uploadGameVersion": "2.2"}, {"name": "Jump Farm", "id": "108342680", "description": "bug at 100%", "author": "DuckMaster0", "playerID": "255741377", "accountID": "29728883", "difficulty": "Unrated", "downloads": 21, "likes": 0, "length": "Medium", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 4, "objects": 6, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 3, "uploadGameVersion": "2.2"}, {"name": "no", "id": "109656214", "description": "...", "author": "GiangVNYTB", "playerID": "257593935", "accountID": "29995765", "difficulty": "Normal", "downloads": 108, "likes": 3, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 10, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "827306", "coins": 0, "verifiedCoins": false, "starsRequested": 1, "objects": 2, "large": false, "cp": 0, "songName": "Johnny Castaway", "songAuthor": "Dunderpatrullen", "songSize": "10.74MB", "songID": "827306", "songLink": "https://audio.ngfiles.com/827000/827306_Johnny-Castaway.mp3?f1538992554", "index": 68, "uploadGameVersion": "2.2"}, {"name": "Easy level", "id": "109700545", "description": "to beat this level you have to beat polargiest :) jk if your a pro you can easily beat this level btw sub to Vortrox :)", "author": "lamer65", "playerID": "239189839", "accountID": "28759120", "difficulty": "Unrated", "downloads": 6, "likes": 1, "length": "Medium", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 3, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 1378, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 66, "uploadGameVersion": "2.2"}, {"name": "decorate if you wan", "id": "109818334", "description": "yes, i did, but is not so good...", "author": "redjor6", "playerID": "253112771", "accountID": "29451504", "difficulty": "Unrated", "downloads": 18, "likes": 0, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "109812370", "twoPlayer": false, "officialSong": 0, "customSong": "1298724", "coins": 0, "verifiedCoins": false, "starsRequested": 3, "objects": 601, "large": false, "cp": 0, "songName": "[TIDAL WAVE] Dion Timmer - Shiawase VIP (Vorlex Remix)", "songAuthor": "Vorlexium", "songSize": "4.21MB", "songID": "1298724", "songLink": "https://audio.ngfiles.com/1298000/1298724_TIDAL-WAVE-Dion-Timmer---S.mp3?f1709001221", "index": 50, "uploadGameVersion": "2.2"}, {"name": "di4mentowyxszymek", "id": "110732872", "description": "(No description provided)", "author": "PikmiQ", "playerID": "229866217", "accountID": "25514269", "difficulty": "Unrated", "downloads": 42, "likes": 0, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 2, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "725417", "coins": 0, "verifiedCoins": false, "starsRequested": 0, "objects": 1178, "large": false, "cp": 0, "songName": "Hydra", "songAuthor": "F-777", "songSize": "7.78MB", "songID": "725417", "songLink": "http://audio.ngfiles.com/725000/725417_Hydra.mp3", "index": 67, "uploadGameVersion": "2.2"}, {"name": "COMET FALLDOWN 2", "id": "111314147", "description": "(No description provided)", "author": "angadsoni2015", "playerID": "256360607", "accountID": "30241566", "difficulty": "Unrated", "downloads": 22, "likes": 4, "length": "Medium", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 2, "copiedID": "0", "twoPlayer": false, "officialSong": 12, "customSong": "0", "coins": 3, "verifiedCoins": false, "starsRequested": 5, "objects": 1232, "large": false, "cp": 0, "songName": "Theory of Everything", "songAuthor": "DJ-Nate", "songSize": "0MB", "songID": "Level 12", "index": 74, "uploadGameVersion": "2.2"}, {"name": "Unnamed 172", "id": "111995380", "description": "(No description provided)", "author": "Potlersnoy8", "playerID": "232562063", "accountID": "27934919", "difficulty": "Unrated", "downloads": 3, "likes": 0, "length": "XL", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "575472", "coins": 0, "verifiedCoins": false, "starsRequested": 5, "objects": 28, "large": false, "cp": 0, "songName": "Skull.Ogg", "songAuthor": "VilexPlague", "songSize": "1.61MB", "songID": "575472", "songLink": "http://audio.ngfiles.com/575000/575472_SkullOgg.mp3", "index": 18, "uploadGameVersion": "2.2"}, {"name": "Dark abyss", "id": "113197103", "description": "sorry if a ripped off things from duelo maestro", "author": "mateojuguito33", "playerID": "211080488", "accountID": "26958690", "difficulty": "Unrated", "downloads": 4, "likes": 0, "length": "Long", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "0", "twoPlayer": true, "officialSong": 0, "customSong": "645631", "coins": 0, "verifiedCoins": false, "starsRequested": 0, "objects": 2131, "large": false, "cp": 0, "songName": "~:Lunar Abyss:~", "songAuthor": "lchavasse", "songSize": "7.06MB", "songID": "645631", "songLink": "http://audio.ngfiles.com/645000/645631_Lunar-Abyss.mp3", "index": 23, "uploadGameVersion": "2.2"}, {"name": "Unnamed t", "id": "113261643", "description": "(No description provided)", "author": "ilushperdush", "playerID": "209234002", "accountID": "23864195", "difficulty": "Unrated", "downloads": 22, "likes": -1, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 2, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "315202", "coins": 0, "verifiedCoins": false, "starsRequested": 0, "objects": 2297, "large": false, "cp": 0, "songName": "The massacre (chipsounds)", "songAuthor": "Fantomenk", "songSize": "4.82MB", "songID": "315202", "songLink": "http://audio.ngfiles.com/315000/315202_FantomenK___The_Massacre.mp3", "index": 79, "uploadGameVersion": "2.2"}, {"name": "momma talk", "id": "113637487", "description": "apart of my call me if you get lost list.", "author": "ssnowball", "playerID": "153678795", "accountID": "25252395", "difficulty": "Unrated", "downloads": 31, "likes": 2, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "1090123", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 715, "large": false, "cp": 0, "songName": "Phase Distorter", "songAuthor": "lchavasse", "songSize": "5.09MB", "songID": "1090123", "songLink": "https://audio.ngfiles.com/1090000/1090123_Phase-Distorter.mp3?f1636607249", "index": 92, "uploadGameVersion": "2.2"}, {"name": "no entrar", "id": "113986562", "description": "(No description provided)", "author": "danielgato8", "playerID": "249141692", "accountID": "29349462", "difficulty": "Unrated", "downloads": 31, "likes": -1, "length": "Plat", "platformer": true, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "436814", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 161, "large": false, "cp": 0, "songName": "[Phobos]*", "songAuthor": "Solkrieg", "songSize": "7.96MB", "songID": "436814", "songLink": "http://audio.ngfiles.com/436000/436814_Phobos.mp3", "index": 99, "uploadGameVersion": "2.2"}, {"name": "DASHOUT", "id": "114067893", "description": "(No description provided)", "author": "MatteoCorby", "playerID": "223048428", "accountID": "31094457", "difficulty": "Unrated", "downloads": 13, "likes": 1, "length": "Medium", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 2, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "10001035", "coins": 0, "verifiedCoins": false, "starsRequested": 3, "objects": 169, "large": false, "cp": 0, "songName": "Anonymous nobeats", "songAuthor": "Sound Airyluvs", "songSize": "2.62MB", "songID": "10001035", "songLink": "https://geometrydashfiles.b-cdn.net/music/10001035.ogg", "songLibrary": "Library", "index": 59, "uploadGameVersion": "2.2"}, {"name": "jump", "id": "116485227", "description": "(No description provided)", "author": "imjusthim74", "playerID": "267009321", "accountID": "30982703", "difficulty": "Unrated", "downloads": 35, "likes": -1, "length": "Tiny", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 1, "customSong": "0", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 10, "large": false, "cp": 0, "songName": "Stereo Madness", "songAuthor": "ForeverBound", "songSize": "0MB", "songID": "Level 1", "index": 27, "uploadGameVersion": "2.2"}, {"name": "work part updatedooo", "id": "116565921", "description": "(No description provided)", "author": "rayyuu", "playerID": "211629809", "accountID": "23803406", "difficulty": "Unrated", "downloads": 24, "likes": 0, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "116560631", "twoPlayer": false, "officialSong": 0, "customSong": "919593", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 467, "large": false, "cp": 0, "songName": "Teminite - Work", "songAuthor": "teminiteofficial", "songSize": "10.53MB", "songID": "919593", "songLink": "https://audio.ngfiles.com/919000/919593_Teminite---Work.mp3?f1584824026", "index": 1, "uploadGameVersion": "2.2"}, {"name": "impossible 2p2 evw", "id": "116818465", "description": "finally verified in five minutes! EVW pls comment if it goes in the video.", "author": "smallerdemon", "playerID": "207892777", "accountID": "25158366", "difficulty": "Insane", "downloads": 47, "likes": 0, "length": "Plat", "platformer": true, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "477402", "coins": 2, "verifiedCoins": false, "starsRequested": 2, "objects": 938, "large": false, "cp": 0, "songName": "Youve been Trolled", "songAuthor": "AntonyC", "songSize": "0.58MB", "songID": "477402", "songLink": "https://geometrydashcontent.b-cdn.net/songs/477402.mp3", "index": 46, "uploadGameVersion": "2.2"}, {"name": "cvc ll", "id": "116978099", "description": "jack 2", "author": "tioytii", "playerID": "279906300", "accountID": "32095082", "difficulty": "Unrated", "downloads": 15, "likes": 2, "length": "Long", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 2, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "467339", "coins": 0, "verifiedCoins": false, "starsRequested": 10, "objects": 3779, "large": false, "cp": 0, "songName": "At the Speed of Light", "songAuthor": "Dimrain47", "songSize": "9.56MB", "songID": "467339", "songLink": "https://geometrydashcontent.b-cdn.net/songs/467339.mp3", "index": 98, "uploadGameVersion": "2.2"}, {"name": "Randomized Dash ", "id": "117008474", "description": "(No description provided)", "author": "Moreon", "playerID": "160331925", "accountID": "17208564", "difficulty": "Unrated", "downloads": 126, "likes": 2, "length": "Long", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 2, "copiedID": "97459478", "twoPlayer": false, "officialSong": 22, "customSong": "0", "coins": 3, "verifiedCoins": false, "starsRequested": 10, "objects": 18866, "large": false, "cp": 0, "songName": "Dash", "songAuthor": "MDK", "songSize": "0MB", "songID": "Level 22", "index": 65, "uploadGameVersion": "2.2"}, {"name": "RubinSlime", "id": "117399186", "description": "(No description provided)", "author": "FreeStael69", "playerID": "269981789", "accountID": "31939635", "difficulty": "Harder", "downloads": 20, "likes": 3, "length": "Short", "platformer": false, "stars": 0, "orbs": 0, "diamonds": 0, "gameVersion": "2.2", "version": 1, "copiedID": "0", "twoPlayer": false, "officialSong": 0, "customSong": "785100", "coins": 0, "verifiedCoins": false, "starsRequested": 3, "objects": 817, "large": false, "cp": 0, "songName": "cloudfield - Fantasy (ft. Reichuu)", "songAuthor": "cloudfield", "songSize": "7.87MB", "songID": "785100", "songLink": "https://audio.ngfiles.com/785000/785100_cloudfield---Fantasy-ft-Re.mp3?f1516113137", "index": 35, "uploadGameVersion": "2.2"}
]

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
