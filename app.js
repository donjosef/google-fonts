const fonts = [];

//Request google fonts with axios
document.addEventListener('DOMContentLoaded', () => {

    axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyArDywurj-c4U_vGDUXbOd-oViu9yMHo10')
    .then(res => res.data)
    .then(data => {
        fonts.push(...data.items);
    });
    
});








