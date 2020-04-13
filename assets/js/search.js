let searchbox = document.querySelector("#searchbox"),
    searchbutton = document.querySelector("#searchbutton");

searchbox.addEventListener("keypress", event => {
  if(event.which == 13 || event.keyCode == 13) {
    search(searchbox.value)
  }
})

searchbutton.addEventListener("click", event => {
  search(searchbox.value)
})

function search(q) {
  window.location.href = "/search?query=" + encodeURIComponent(q)
}