
async function loadData() {
  const response = await fetch('data/data 0.json');

  const text = await response.text();
  if(!text.trim().startsWith('{') && !text.trim().startsWith('[')) {
    alert("Fucking error:" + text.substring(0, 100));
    return;
  }
  console.log("YAAAAAAAAAAYYYYYYYY I LOADED THIS SHIT!!!!!! THE LENGTHHTH OF DATA IS", JSON.parse(text));
  return JSON.parse(text);
}
