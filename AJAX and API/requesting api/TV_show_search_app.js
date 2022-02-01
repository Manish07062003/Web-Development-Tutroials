const form = document.querySelector('form')
form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const usrValue = form.elements.query.value;
    const config = { params: {q: usrValue} }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    makeImg(res.data)
    form.elements.query.value='';
})
const makeImg = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img')
            img.src = result.show.image.medium
            document.body.append(img)
        }
    }
}