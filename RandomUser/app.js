import getImg from './utils/getImage.js';
const URL = 'https://randomuser.me/api/';

const img = getImg('.user-img');
const title = getImg('.person-data');
const nextBtn = getImg('.next-btn');
const btns = [...document.querySelectorAll('.btn')];
// console.log(btns);
const getUser = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const person = data.results[0];
    console.log(person);

    const { phone, email } = person;
    const { first, last } = person.name;
    const { dob: { age } } = person;
    const { location: { city: map }, login: { password } } = person;
    const { picture: { large: image } } = person;


    return {
        image,
        phone,
        email,
        name: `${first} ${last}`,
        age,
        map,
        password
    }
}
const showUser = async () => {
    // console.log("Hai");
    const user = await getUser();
    console.log(user);
}

window.addEventListener('DOMContentLoaded', showUser);
nextBtn.addEventListener('click', showUser);