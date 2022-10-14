const activities = [
    {
        id: 1,
        name: "Duos Tennis Tournament",
        description: "Do you enjoy playing tennis? Have a partner to join you? Think you're good enough to win a tournament? Come along to the tennis court and compete in this four-bracket tournament.",
        image: "https://3.bp.blogspot.com/-3idSi08eVUs/U6fUTrVeM3I/AAAAAAAAdFo/c7ERJMasalo/s1600/Wimbledon-Logo-Rolex-.jpg",
        price: 5.00,
        tags: ['afternoon', 'tennis', 'duos', 'sport', 'tournament'],
        time: "2022/10/17 14:00"
    },
    {
        id: 2,
        name: "Football Tournament",
        description: "Do you enjoy playing football? Think you could be the MVP? Come along to the football pitch to play in our tournament. Teams decided on the day.",
        image: "http://www.nationalfootballmuseum.com/wp-content/uploads/2015/08/E1323-2-790x1024.jpg",
        price: 4.80,
        tags: ['morning', 'football', 'sport', 'tournament'],
        time: "2022/10/18 10:00"
    },
    {
        id: 0,
        name: "Solo Tennis Tournament",
        description: "Do you enjoy playing tennis? Think you're good enough to win a tournament? Come along to the tennis court and compete in this four-bracket tournament.",
        image: "https://3.bp.blogspot.com/-3idSi08eVUs/U6fUTrVeM3I/AAAAAAAAdFo/c7ERJMasalo/s1600/Wimbledon-Logo-Rolex-.jpg",
        price: 6.00,
        tags: ['morning', 'tennis', 'solo', 'sport', 'tournament'],
        time: "2022/10/17 11:30"
    },
    {
        id: 3,
        name: "18-Hole Golf Course",
        description: "Come have fun playing golf on our award-winning course, and unwind after at the clubhouse. Buggy hire £10 deposit.",
        image: "https://golfscape.com/blog/wp-content/uploads/2018/05/Sentosa-Stills-21.jpg",
        price: 5.80,
        tags: ['afternoon', 'golf', 'sport'],
        time: "2022/10/18 13:00"
    },
    {
        id: 4,
        name: "Solo Badminton Tournament",
        description: "Do you enjoy playing badminton? Think you're good enough to win a tournament? Come join us on the badminton court and try your skill.",
        image: "https://www.jayceetrophies.co.uk/getimage/c4dd820d-65f2-4167-82a6-62022214fd26_600x600_exact.jpg",
        price: 5.50,
        tags: ['morning', 'badminton', 'solo', 'sport', 'tournament'],
        time: "2022/10/19 11:30"
    },
    {
        id: 5,
        name: "Duos Badminton Tournament",
        description: "Do you enjoy playing badminton? Have a partner to join you? Think you're good enough to win a tournament? Come join us on the badminton court and try your skill.",
        image: "https://www.jayceetrophies.co.uk/getimage/c4dd820d-65f2-4167-82a6-62022214fd26_600x600_exact.jpg",
        price: 5.00,
        tags: ['afternoon', 'badminton', 'duos', 'sport', 'tournament'],
        time: "2022/10/19 15:00"
    },
    {
        id: 6,
        name: "Basketball Tournament",
        description: "Do you enjoy playing basketball? Think you could be the MVP? Come along to the basketball court and see how you do. Team decided on the day.",
        image: "http://img1.wikia.nocookie.net/__cb20100521105025/nba/images/0/08/Larry_O'Brien_trophy.jpg",
        price: 4.80,
        tags: ['morning', 'basketball', 'sport', 'tournament'],
        time: "2022/10/20 11:00"
    },
    {
        id: 7,
        name: "Hockey Tournament",
        description: "Do you enjoy hockey? Think you could be the MVP? Come along to the hockey field and see how you do. Teams decided on the day.",
        image: "https://www.athleticawards.com/images/products/7232/IMG_5527_lg.jpg",
        price: 4.80,
        tags: ['afternoon', 'hockey', 'sport', 'tournament'],
        time: "2022/10/20 14:00"
    },
    {
        id: 8,
        name: "Bowling Tournament (4 per team)",
        description: "Do you enjoy bowling? Think you can out-strike the opponents? Come along to the bowling alley and see how you fair. To be booked in teams.",
        image: "https://www.besttrophiesandawards.com/wp-content/uploads/2017/04/MX713.jpg",
        price: 3.95,
        tags: ['morning', 'bowling', 'sport', 'tournament'],
        time: "2022/10/21 11:30"
    },
    {
        id: 9,
        name: "Friday Afternoon Quiz",
        description: "Are you a quiz-whiz wanting to test your knowledge? Join us in the bar lounge for our weekly afternoon quiz session.",
        image: "http://images.pitchero.com/ui/408690/1340877386_0.jpg",
        price: 3.00,
        tags: ['afternoon', 'quiz'],
        time: "2022/10/21 14:30"
    }
]
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri']
const booked = []
const allTags = new Set(['morning', 'afternoon']);
const currentFilters = new Set();
const currentActivities = new Set();
let needToRegenerate = false;

const cardContainer = document.getElementById("card-container");
const main = document.querySelector("main");
const dropdown = document.getElementById("dropdown-filter");
const searchBar = document.getElementById("search");
searchBar.addEventListener("input", handleSearchQuery);


class ClassWatcher { // uses MutationObserver to call a function when a specified class of a specified object is removed

    constructor(targetNode, classToWatch, classRemovedCallback) {
        this.targetNode = targetNode
        this.classToWatch = classToWatch
        this.classRemovedCallback = classRemovedCallback
        this.observer = null
        this.lastClassState = targetNode.classList.contains(this.classToWatch)

        this.init()
    }

    init() {
        this.observer = new MutationObserver(this.mutationCallback)
        this.observe()
    }

    observe() {
        this.observer.observe(this.targetNode, { attributes: true })
    }

    disconnect() {
        this.observer.disconnect()
    }

    mutationCallback = mutationsList => {
        for(let mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                let currentClassState = mutation.target.classList.contains(this.classToWatch)
                if(this.lastClassState !== currentClassState) {
                    this.lastClassState = currentClassState
                    if(!currentClassState) {
                        this.classRemovedCallback()
                    }
                }
            }
        }
    }
}

// When the 'show' class is removed from `main`, call `processFilters`
new ClassWatcher(main, 'show', processFilters)

function searchByText(text) {
    let matches = 0;
    for (let activity of activities) {
        if (activity.name.toLowerCase().includes(text) || activity.description.toLowerCase().includes(text)) {
            matches += 1;
            continue
        }

        // At this point, match doesn't contain the search term, but may have already been deleted
        if (currentActivities.has(activity.id)) { // hasn't yet been deleted
            deleteActivityById(activity.id); // so delete it
        }
    }
    return matches;
}

function searchByProperty(property, value) {
    let matches = 0;
    for (let activity of activities) {
        let propertyCompare, valueCompare;

        if (property === 'price') {
            propertyCompare = activity[property].toFixed(2);
            
            const valueSplit = value.split(".");
            if (valueSplit.length > 1 && valueSplit[1].length > 2) {
                valueCompare = +(`${valueSplit[0]}.${valueSplit[1].slice(0, 2)}`);
            }
            else {
                valueCompare = value;
            }
        } else {
            propertyCompare = activity[property].toString().toLowerCase();
            valueCompare = value;
        }

        if (propertyCompare.includes(valueCompare)) {
            matches += 1;
            continue;
        }

        // At this point, match doesn't contain the search term, but may have already been deleted
        if (currentActivities.has(activity.id)) { // hasn't yet been deleted
            deleteActivityById(activity.id) // so delete it
        }
    }
    return matches;
}

function handleSearchQuery() {
    const query = searchBar.value.toLowerCase();
    const inputLabel = document.getElementById("inputGroup-sizing-sm")
    if (query === '' || currentActivities.size === 0) {
        inputLabel.innerText = "search";
        regenerateActivities();
    }

    let numMatches;
    if (query.match(/\w+: ?.+/gm)) {
        let [property, ...value] = query.split(':').map(el => el.toLowerCase().trim());
        value = value.join(":");
        if (['id', 'name', 'description', 'image', 'price', 'time'].includes(property)) {
            console.log(`Checking '${property}' against '${value}'`);
            numMatches = searchByProperty(property, value);   
        }
    }
    if (numMatches === undefined) {
        numMatches = searchByText(query);
    }

    inputLabel.innerText = `Search (${numMatches} matches)`
}

function createBaseActivities() {
    activities.sort((a, b) => a.time < b.time ? -1 : 1).forEach(activity => createActivity(activity));
}

function deleteActivityById(activityId) {
    currentActivities.delete(activityId);
    document.getElementById(`activity-${activityId}`).remove();
}

function deleteActivity(activityArticle) {
    currentActivities.delete(+activityArticle.id.split("-")[1]);
    activityArticle.remove();
}

function deleteAllActivities() {
    for (let activity of cardContainer.querySelectorAll("article")) {
        deleteActivity(activity);
    }
}

function regenerateActivities() {
    deleteAllActivities();
    createBaseActivities();
}

function resetFilters() {
    dropdown.innerText = "Filter" // remove the number of matches from the display
    currentFilters.clear();
    regenerateActivities()
}

function processFilters() {
    if (currentFilters.size === 0 || needToRegenerate) {
        regenerateActivities();
        needToRegenerate = false;
    }
    
    let hasMatchingActivities = true;
    for (filter of currentFilters) {
        for (let activityId of currentActivities) {
            const activity = activities[activityId]
            if (!activity.tags.includes(filter)) {
                deleteActivityById(activityId);

                // If at any point there's no activities left, break both loops early and display a message
                if (currentActivities.size === 0) {
                    break
                }
            }
        }
        if (currentActivities.size === 0) {
            break
        }
    }
    // If filters are applied, show how matches there are
    if (currentFilters.size === 0) dropdown.innerText = "Filter"
    else dropdown.innerText = "Filter " + (hasMatchingActivities ? `(${currentActivities.size} matches)` : "(no matches)")
}


function applyFilter(e, dropdownOption) {
    e.stopPropagation();

    if (dropdownOption.innerText.endsWith("✅")) {
        const text = dropdownOption.innerText.slice(0, -2);
        currentFilters.delete(text.toLowerCase());
        needToRegenerate = true;
        dropdownOption.innerText = text;
    } else {
        currentFilters.add(dropdownOption.innerText.toLowerCase());
        dropdownOption.innerText += " ✅"
    }
}

function createTimeDropdownButton(dropdownMenu, tag) { // tag is "afternoon" | "morning"
    const dropdownOption = document.createElement("button");
    dropdownOption.classList.add("dropdown-item");
    dropdownOption.setAttribute("type", "button");
    dropdownOption.innerText = tag.charAt(0).toUpperCase() + tag.slice(1); // ensure first letter of tag is capital

    if (currentFilters.has(tag)) {
        dropdownOption.innerText += " ✅";
    }

    dropdownOption.addEventListener("click", (e) => applyFilter(e, dropdownOption))

    dropdownMenu.append(dropdownOption);

    if (tag == "afternoon") {
        const separator = document.createElement("div");
        separator.classList.add("dropdown-divider");
        dropdownMenu.append(separator);
    }
}

function createDropdownButtonFromTag(dropdownMenu, tag) {
    if (tag == "morning" || tag == "afternoon") {
        createTimeDropdownButton(dropdownMenu, tag);
        return;
    }
    const dropdownOption = document.createElement("button");
    dropdownOption.classList.add("dropdown-item");
    dropdownOption.setAttribute("type", "button");
    dropdownOption.innerText = tag.charAt(0).toUpperCase() + tag.slice(1); // ensure first letter of tag is capital

    if (currentFilters.has(tag)) {
        dropdownOption.innerText += " ✅";
    }

    dropdownOption.addEventListener("click", (e) => applyFilter(e, dropdownOption))

    dropdownMenu.append(dropdownOption);
}

function genDropdown() {
    // Get rid of any previously generated dropdown menus
    let finishEarly = false;
    document.querySelectorAll("div").forEach(div => {
        if (div.classList.contains("dropdown-menu")) {
            // onclick was called when we closed the dropdown menu
            const tempTags = new Set(allTags);
            div.querySelectorAll("button").forEach(button => {
                text = button.innerText;
                if (text.endsWith("✅")) {
                    text = text.slice(0, -2);
                    if (!currentFilters.has(text.toLowerCase())) {
                        button.innerText = text; // remove emoji when no longer in filters
                    }
                }
                text = button.innerText.endsWith("✅") ? button.innerText.slice(0, -2) : button.innerText;
                if (!tempTags.delete(text.toLowerCase())) {
                    // innerText isn't in allTags anymore, so delete the button
                    button.remove();
                }
            })
            // There may be new tags, so make sure to check for that (if there's not tempTags will be empty)
            // If there is new tags, we need to delete all pre-existing buttons & regen so that dropdown remains alphabetical
            if (tempTags.size != 0) {
                Array.from(tempTags).sort().forEach(remainingTag => allTags.add(remainingTag));
                div.querySelectorAll("button").forEach(button => button.remove());
                Array.from(allTags).sort((a, b) => {a == "morning" || a == "afternoon" || a < b ? -1 : 1}).forEach(tag => createDropdownButtonFromTag(div, tag));
            }
            finishEarly = true;
            return
        }
    })
    if (finishEarly) return;

    const dropdownMenu = document.createElement("div");
    dropdownMenu.classList.add("dropdown-menu", "scrollable-menu");
    dropdownMenu.setAttribute("aria-labelledby",  "dropdown-filter");
    for (let tag of Array.from(allTags).sort((a, b) => {a == "morning" || a == "afternoon" || a < b ? -1 : 1}))  {
        createDropdownButtonFromTag(dropdownMenu, tag);
    }
    main.append(dropdownMenu);
}


function createActivity({id, name, description, image, price, tags, time}) {
    currentActivities.add(id);

    tags.forEach(tag => allTags.add(tag));

    const article = document.createElement("article");
    article.id = `activity-${id}`;

    const activityInfoSubSection = document.createElement("section");

    const activityName = document.createElement("h2");
    const activityDescription = document.createElement("p");
    const activityImage = document.createElement("img");
    const activityPrice = document.createElement("h3");
    const activityTime = document.createElement("h3");

    const button = document.createElement("button");

    activityName.append(name);
    activityDescription.append(description);
    activityImage.src = image,
    activityImage.alt = name;
    activityPrice.append(`£${price.toFixed(2)}pp`);
    
    const datetime = new Date(time);
    activityTime.append(`${days[datetime.getDay()]} ${datetime.toLocaleString()}`);

    activityInfoSubSection.classList.add("card-info")
    activityInfoSubSection.append(activityName, activityDescription, activityImage, activityPrice, activityTime, button);


    button.textContent = "Book Now!";
    
    button.addEventListener("click", () => {
        button.textContent = "Booked";
        // TODO: Add functionality for viewing booked events (maybe as filter)
    })

    article.classList.add("card")
    article.append(activityInfoSubSection);

    cardContainer.append(article);
}


createBaseActivities();