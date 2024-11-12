console.log("Hello World!")
console.log(document.getElementById("heading"))





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