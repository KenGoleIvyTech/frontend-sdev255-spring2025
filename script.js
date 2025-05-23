// We are going to make an event listener. It will trigger when the DOM is loaded (aka upon visiting this webpage)

addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("http://localhost:3000/api/songs");
    const songs = await response.json();
    let html = "";
    for (let song of songs) {
        console.log(song);
        html += `<li>${song.title} - ${song.artist}</li>`
    }
    document.querySelector("#addedsongs").innerHTML = html;
});