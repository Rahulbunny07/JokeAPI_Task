function loadNextJoke() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText)
            const obj = JSON.parse(this.responseText);
            document.getElementById("joke-question").innerHTML = obj["setup"]
            document.getElementById("joke-answer").innerHTML = obj["delivery"]
        }
    }
    xhttp.open("GET", "https://v2.jokeapi.dev/joke/Programming?type=twopart", true)
    xhttp.send()
}