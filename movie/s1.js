var select = document.getElementById("genreFilter");
var movies = document.querySelectorAll(".movie");
select.addEventListener("change", function() {
    var Genre = this.value;
    movies.forEach(movie => {
        var gen = movie.querySelector("p").textContent.split(":")[1].trim();
        if (Genre === "all" || Genre === gen) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }
    });
});
