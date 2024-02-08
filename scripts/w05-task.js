/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById("temples");

let templesList = [];

/* async displayTemples Function */

const displayTemples = (temples) => 
{
    temples.forEach(temple => 
    {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        let img = document.createElement("img");

        article.appendChild(h3);
        h3.textContent = temple.location + " Temple";
        img.setAttribute(`src`, temple.imageUrl);
        img.setAttribute(`alt`, temple.location);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/

const getTemples = async() => 
{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templesList = await response.json();
    displayTemples(templesList);
}

/* reset Function */

const resetTemples = () => {
  templesElement.reset();
}

/* filterTemples Function */

const filterTemples = (temples) => {
    resetTemples();
    let filter = document.getElementById("filtered");
    let canDisplay = false;

    switch(filter.value)
    {
        case "utah":
            temples.forEach(temple => {
                let stringList = temple.location.split(",");
                stringList.forEach(string => {
                    if(string == "Utah")
                    {
                        canDisplay = true;
                        return;
                    }
                })
            })
            break;
        case "nonutah":
            temples.forEach(temple => {
                let stringList = temple.location.split(",");
                stringList.forEach(string => {
                    if(string == "Utah")
                    {
                        displayTemples(temple);
                    }
                })
            })
            break;
        case "older":
            temples.forEach(temple => {
                temple.dedicated < 1950 ? displayTemples(temple) : null;
            })
            break;
        case "all":
            displayTemples(temples);
    }
}




/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templesList) });

getTemples();