const lucky = document.getElementById('lucky');
const searchme = document.getElementById('searchme');
const keypress = () => {
    if (event.key == 'Enter') {
        let searchInput = document.getElementById('searchInput').value;
        let url = `https://www.google.com/search?q=${searchInput}`;
        window.open(url);
        console.log(searchInput);
    }
}
lucky.addEventListener('click', () => {
    window.open("https://www.google.com/doodles");
})
searchme.addEventListener('click', () => {
    let searchInput = document.getElementById('searchInput').value;
    let url = `https://www.google.com/search?q=${searchInput}`;
    window.open(url);
    console.log(searchInput);
})