const fontSearch = document.getElementById('font_input');
const list = document.getElementById('font_list');
const fontLink = document.getElementById('font_link');

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
    if (e.target.value.length > 0) {
        const regEx = new RegExp('^' + e.target.value, 'i'); //test if starts with, ignoring case
        const filtered = fonts.filter(({ family }) => regEx.test(family));
        displayFonts(filtered);
    } else {
        removeListItems();
    }
}

function displayFonts(fonts) {
    list.innerHTML = fonts.map(({ family, variants, subsets }) => `<li class="font_item" data-family="${family}" data-variants="${variants}" data-subsets="${subsets}">${family}</li>`).join("");
}

function removeListItems() {
    /*Remove list items as soon as click happens*/
    Array.from(list.children).forEach(ch => {
        ch.remove()
    });
}

fontSearch.addEventListener('input', filterFonts);








