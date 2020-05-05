const menuItems = [
    {title: 'HOME', link:'/'},
    {title: 'ABOUT', link:'/AboutPage'},
    {title: 'CHARACTER CONTENT', link:'/CharacterContent'},
    {title: 'THEORY', link:'/TheoryContent'},
    {title: 'CONTACT', link:'/ContactPage'},
    {title: 'WEB PLANS', link:'/WebPlans'},
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

