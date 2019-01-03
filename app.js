const fontSearch = document.getElementById('font_input');
const list = document.getElementById('font_list')
const fonts = [];

//Request google fonts with axios
document.addEventListener('DOMContentLoaded', () => {

    axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyArDywurj-c4U_vGDUXbOd-oViu9yMHo10')
    .then(res => res.data)
    .then(data => {
        fonts.push(...data.items);
    });
    
});

function filterFonts(e) {
    /*
    startsWith is case sensitive, so normalize the case of family before filtering
    */
    const filtered = fonts.map(f => f.family.toLowerCase() )
    .filter(family => family.startsWith(e.target.value.toLowerCase()) );

    displayFonts(filtered);
}

function displayFonts(fonts) {
    list.innerHTML = fonts.map(f => `<li class="font_item">${f}</li>`).join("");
}

fontSearch.addEventListener('input', filterFonts);








