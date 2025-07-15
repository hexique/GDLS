async function fetchLvl(level_id){
    try{


        const response = await fetch(`https://gdbrowser.com/api/level/${level_id}`)
        if(!response.ok){
            return null;
        }
        let data = await response.json();
        console.log(data);

        return data

    }
    catch(error){
        // console.error("Error fetching data: ", error);
        return null;

    }
}