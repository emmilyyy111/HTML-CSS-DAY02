function handleSubmit(event) {
    event.preventDefault()
    console.log('Submitted Form')
    const form = document.querySelector('form')
    form.innerHTML = '<h3>Thanks<h3/>'
}
function handleNameChange(){
    console.log('Named Changed', event.target.value)
}
const hero = document.getElementById("hero")
hero.innerText = "this is my new hero title"
const links = document.getElementsByClassName('menu-link')
links[1].style.color = "white"
const footer = document.querySelector('footer')
footer.style.backgroundColor = "grey"