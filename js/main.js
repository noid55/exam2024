console.log("Hello World!")
console.log(document.getElementById("heading"))


// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function toggle_aside_visibility() {
    var aside = document.getElementById("aside")
    if (aside.style.display === "none") {
        aside.style.display = "flex";
    } else {
        aside.style.display = "none"
    }
}

// 
function search() {
    let searchbar = document.getElementById("search_bar")
    window.open("https://www.oslomet.no/s?q="+searchbar.value, "_blank");
}

//https://stackoverflow.com/questions/75192711/search-input-on-javascript
document.getElementById("search_bar").addEventListener("keypress", (keyboard) => {
    if (keyboard.key == "Enter") {
        let searchbar = document.getElementById("search_bar")
        window.open("https://www.oslomet.no/s?q="+searchbar.value, "_blank");
    }
});