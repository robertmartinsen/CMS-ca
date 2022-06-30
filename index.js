
fetch("http://cms.local/wp-json/wp/v2/posts").then((data) => {
    return data.json()
}).then((fulldata) => {
    console.log(fulldata);
    let content = "";
    fulldata.map((object) => {
        content += `
        <div class="content">
        <h1>${object.title.rendered}</h1>
        <p>${object.excerpt.rendered}</p>
    </div>
        `
    })
    document.querySelector('.content').innerHTML = content;

}).catch((err) => {
    console.log(err);
})
