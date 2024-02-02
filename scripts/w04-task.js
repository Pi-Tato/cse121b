/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let profile = 
{
    name: "Noah Carlisle",
    photo: "images/profile.jpg",
    favoriteFoods: 
    [
     "Steak", "Spaghetti", "Rice", "Shrimp",
     "Pumkin Pie", "Banana Cream Pie", "Egg nog Pie"
    ],
    hobbies: [
     "Game Development", "3D Printing", "3D Modeling"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

profile.placesLived.push(
{
    place: "Shelley, Idaho",
    length: "20 years"
});
profile.placesLived.push(
{
    place: "?????, Utah",
    length: "2 years"
});


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = profile.name;
/* Photo with attributes */

document.querySelector("#photo").setAttribute(`src`, profile.photo);
document.querySelector("#photo").setAttribute(`alt`, profile.name);

/* Favorite Foods List*/

profile.favoriteFoods.forEach(food => 
{
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */

profile.hobbies.forEach(hobby => 
{
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

profile.placesLived.forEach(places => 
{
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = places.place;
    dd.textContent = places.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});