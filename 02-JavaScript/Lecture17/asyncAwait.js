async function github() {
   
    try{
        const response = await fetch("https://api.github.com/users?per_page=20");
        if(!response.ok){
            throw new Error("Unable to fetch data");
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

github();