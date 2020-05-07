const menuItems = [
    {title: 'HOME', link:'https://thelalakei.github.io/WSOA3028A_1771810/index.html'},
    {title: 'ABOUT', link:'https://thelalakei.github.io/WSOA3028A_1771810/AboutPage/index.html'},
    {title: 'CHARACTER CONTENT', link:'https://thelalakei.github.io/WSOA3028A_1771810/CharacterContent/index.html'},
    {title: 'THEORY', link:'https://thelalakei.github.io/WSOA3028A_1771810/TheoryContent/index.html'},
    {title: 'CONTACT', link:'https://thelalakei.github.io/WSOA3028A_1771810/ContactPage/index.html'},
    {title: 'WEB PLANS', link:'https://thelalakei.github.io/WSOA3028A_1771810/WebPlans/index.html'},
];

const initialiseMenu = () => {
    const nav = document.querySelector('nav');
    const ul = document.createElement('ul');

    for (let item of menuItems){
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerText = item.title;
        a.href = item.link;
        li.appendChild (a);
        ul.appendChild (li);    
}

nav.appendChild (ul);

};

document.addEventListener('DOMContentLoaded', () => initialiseMenu());

