async function load_data() {
  let allData = [];

  for (let i = 0; i <= 33; i++) {
    try {
      const response = await fetch(`data/data ${i}.json`);
      if (!response.ok) throw new Error(`error while loading ${i}.json`);

      const text = await response.text();
      if (!text.trim().startsWith('{') && !text.trim().startsWith('[')) {
        console.error(`data ${i}.json is corrupted.`, text.substring(0, 100));
        continue;
      }

      const parsedData = JSON.parse(text);
      allData = allData.concat(parsedData);
      console.log(`data ${i}.json is loaded (length is ${parsedData.length})`);
    } catch (error) {
      console.error(`Error while loading ${i}.json:`, error);
    }
  }

  console.log(`total length: ${allData.length}`);
  return allData;
}