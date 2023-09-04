import Background from './wallpaper.jpg';
import phoGa from './phobo.jpg';
import phoBo from './phobo.jpg';
import phoBoGan from './phobogan.jpeg';
import phoBoVien from './phobovien.jpeg';

let mainInfo = {
    intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis nemo animi placeat ipsam debitis possimus, quae explicabo assumenda ipsum, vero quidem. Cupiditate exercitationem eveniet minus totam quos, mollitia facere sint.',
    address: ' Mot hai ba, Jaycole, Texas, Africun.',
    hours: `Sunday: 8am - 8pm
            Monday: 8am - 8pm
            Tuesday: closed
            Wednesday: 8am - 8pm
            Thursday: 9am - 8pm
            Friday: 8am - 8pm
            Saturday: 8am - 10pm`,
    tab: ['main','menu','contact']
}
let foods = [
    {
        title: 'Pho bo',
        image: createImg(phoBo),
        price: '$10'
    },
    {
        title: 'Pho ga',
        image: createImg(phoGa),
        price: '$12'
    },
    {
        title: 'Pho bo vien',
        image: createImg(phoBoVien),
        price: '$12'
    },
    {
        title: 'Pho bo gan',
        image: createImg(phoBoGan),
        price: '$14'
    }
]

function action(e) {
    let newPage = e.target.getAttribute('class');
    content.innerHTML = "";
    if(newPage === 'main') {
        mainPage();
    } else if(newPage === 'menu') {
        menuPage();
    } else {
        contactPage();
    }
}

function createHeader() {
    const headerElement = document.createElement('header');
    const heading = document.createElement('h1');
    heading.textContent = 'Best Vietnamese';
    const navElement = document.createElement('nav');
    const ulElement = document.createElement('ul');
    for (let i = 0; i < 3; i++) {
        const liElement = document.createElement('li');
        liElement.textContent = mainInfo.tab[i];
        liElement.classList.add(`${mainInfo.tab[i]}`);
        liElement.addEventListener('click', (e) => action(e))
        ulElement.appendChild(liElement);
    }
    navElement.appendChild(ulElement);
    headerElement.appendChild(heading)
    headerElement.appendChild(navElement);
    content.appendChild(headerElement);
}
function createMain() {
    const mainElement = document.createElement('main');
    content.appendChild(mainElement);
    return mainElement;
}
function createFooter() {
    const footerElement = document.createElement('footer');
    const copyRight = document.createElement('p');
    copyRight.innerHTML = '&copy;Danny Duong';
    footerElement.appendChild(copyRight);
    content.appendChild(footerElement);
}

function mainPage() {
    createHeader();
    let main = createMain();
    createFooter();
    let backGround = createImg(Background);
    const backGroundHolder = document.createElement('div');
    backGroundHolder.classList.add('background');
    main.appendChild(backGroundHolder)
    backGroundHolder.appendChild(backGround);
    const intro = document.createElement('p');
    intro.textContent = mainInfo.intro;
    const hours = document.createElement('p');
    hours.textContent = mainInfo.hours;
    const add = document.createElement('address');
    add.textContent = mainInfo.address;
    main.appendChild(intro);
    main.appendChild(hours);
    main.appendChild(add);
}


function menuPage() {
    createHeader();
    let main = createMain();
    createFooter();
    for (let i = 0; i < 4; i ++) {
        const food  = document.createElement('p');
        const price = document.createElement('p');
        food.textContent = foods[i].title;
        price.textContent = foods[i].price;
        main.appendChild(food);
        main.appendChild(price);
        main.appendChild(foods[i].image)
    }
}

function contactPage() {
    createHeader();
    let main = createMain();
    createFooter();

}
function createImg(source) {
    const myImg = new Image();
    myImg.src = source;
    return myImg;
}
export {mainPage,menuPage}