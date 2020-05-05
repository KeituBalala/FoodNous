const menuItems = [
    {title: 'HOME', link:'../index.html'},
    {title: 'ABOUT', link:'../AboutPage/index.html'},
    {title: 'CHARACTER CONTENT', link:'../CharacterContent/index.html'},
    {title: 'THEORY', link:'../TheoryContent/index.html'},
    {title: 'CONTACT', link:'../ContactPage/index.html'},
    {title: 'WEB PLANS', link:'../WebPlans/index.html'},
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

