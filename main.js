//======================================================================================================================
//                                                Class Work
//                                              OKTEN-CW-6-JS
//======================================================================================================================
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
// ---------------------------------------------------------------------------------------------------------------------
let colorRed = Math.floor((Math.random()*255));
let colorGreen = Math.floor((Math.random()*255));
let colorBlue = Math.floor((Math.random()*255));
let colorCW = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;

let divWrapClassWork = document.createElement('div');
    document.body.append(divWrapClassWork);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        for (let postElement of posts) {
            let div = document.createElement('div');
                div.style = `
                            border: 1px solid;
                            padding: 10px;
                            margin: 0 0 10px 0;
                `;
            divWrapClassWork.append(div);

            for (let postElementKey in postElement) {
                let wrapper = document.createElement('div');
                wrapper.className = 'wrapper';

                let btn = document.createElement('button');
                btn.innerText = 'Comments';

                let h1 = document.createElement('h1');
                h1.className = 'h1';
                h1.innerText = `Title: ${postElement.title}`;

                let h2 = document.createElement('h2');
                h2.style = `
                            visibility: hidden;
                            border: 1px solid;
                            border-radius: 10px;
                            padding: 10px;
                            background-color: darkkhaki;
                            `
                h2.innerText = `Body: ${postElement.body}`;

                let h22 = document.createElement('h2');
                h22.className = 'h22';
                h22.innerText = `User Id: ${postElement.userId}`;

                let h3 = document.createElement('h3');
                h3.className = 'h3';
                h3.innerText = `Id: ${postElement.id}`;

                wrapper.append(h1, h22, h3, h2 ,btn);
                wrapper.style = `
                            border: 1px solid;
                            padding: 10px;
                            margin: 0 0 10px 0;
                            background-color: ${colorCW};
                `;
                div.appendChild(wrapper);

                btn.addEventListener('click', function (e) {
                    if (e.path[1].childNodes[3].className === 'hidden') {
                        e.path[1].childNodes[3].style.visibility = 'hidden';
                        e.path[1].childNodes[3].className = 'visible';
                    } else if (e.path[1].childNodes[3].className !== 'hidden' || e.path[1].childNodes[3].className === 'visible') {
                        e.path[1].childNodes[3].style.visibility = 'visible';
                        e.path[1].childNodes[3].className = 'hidden';
                    };
                });
            };
        };
    });

//======================================================================================================================
//                                                Home Work
//                                             OKTEN-HW-6-JS
//======================================================================================================================
//                                                  1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
let color = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;

let divWrap1 = document.createElement('div');
    document.body.append(divWrap1);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        for (let postElement of posts) {
            let div = document.createElement('div');
                div.style = `
                            border: 1px solid;
                            padding: 10px;
                            margin: 0 0 10px 0;
                `;
            divWrap1.append(div);

            for (let postElementKey in postElement) {
                let wrapper = document.createElement('div');
                wrapper.className = 'wrapper';

                let h1 = document.createElement('h1');
                h1.className = 'h1';
                h1.innerText = `Title: ${postElement.title}`;

                let h2 = document.createElement('h2');
                h2.innerText = `Body: ${postElement.body}`;

                let h22 = document.createElement('h2');
                h22.className = 'h22';
                h22.innerText = `User Id: ${postElement.userId}`;

                let h3 = document.createElement('h3');
                h3.className = 'h3';
                h3.innerText = `Id: ${postElement.id}`;

                wrapper.append(h1, h22, h3, h2);
                wrapper.style = `
                            border: 1px solid;
                            padding: 10px;
                            margin: 0 0 10px 0;
                            background-color: ${color};
                `;
                div.appendChild(wrapper);
            };
        };
    })
// ---------------------------------------------------------------------------------------------------------------------
//                                                      2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments
let color2 = `rgb(${colorGreen}, ${colorRed}, ${colorBlue})`;

let divWrap2 = document.createElement('div');
    document.body.append(divWrap2);

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
        return response.json();
    })
    .then(comments => {
        for (let comment of comments) {

            let div = document.createElement('div');
                div.style = `
                            border: 1px solid;
                            padding: 10px;
                            margin: 0 0 10px 0;
                `;
            divWrap2.append(div);

                let wrapperHW2 = document.createElement('div');
                wrapperHW2.className = 'wrapper';
                wrapperHW2.style.backgroundColor = 'blue';
                document.body.append(wrapperHW2);

                let h1 = document.createElement('h1');
                h1.className = 'h1';
                h1.innerText = `Post ID: ${comment.postId}`;

                let h2 = document.createElement('h2');
                h2.className = 'h2';
                h2.innerText = `Id: ${comment.id}`;

                let name = document.createElement('h2');
                name.className = 'name';
                name.innerText = `Name: ${comment.name}`;

                let email = document.createElement('h2');
                email.className = 'email';
                email.innerText = `email: ${comment.email}`;

                let body = document.createElement('p');
                body.className = 'body';
                body.innerText = `Body: ${comment.body}`;

                wrapperHW2.append(h1, h2, name, email, body);
                wrapperHW2.style = `
                            border: 1px solid;
                            padding: 10px;
                            margin: 0 0 10px 0;
                             background-color: ${color2};
                `;
                div.append(wrapperHW2);
        };
    });
// ---------------------------------------------------------------------------------------------------------------------


//======================================================================================================================
//                                             Additional Work
//                                              OKTEN-AW-6-JS
//======================================================================================================================
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
let color3 = `rgb(${colorBlue}, ${colorGreen}, ${colorRed})`;

let main = document.createElement('div');
document.body.append(main);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
        for (let user of users) {
            let wrapperAW = document.createElement('ul');
            main.append(wrapperAW);
            wrapperAW.className = 'wrapperAW';
            wrapperAW.style = `
                                background-color: ${color3};
                                padding: 10px 20px;
                                list-style: none;
                                border: 1px solid;
                            `;
            document.body.append(wrapperAW);

            let id = document.createElement('li');
            id.innerText = `Id: ${user.id}`;

            let name = document.createElement('li');
            name.innerText = `Name: ${user.name}`;

            let userName = document.createElement('li');
            userName.innerText = `User Name: ${user.username}`;

            let phone = document.createElement('li');
            phone.innerText = `Phone: ${user.phone}`;

            let email = document.createElement('li');
            email.innerText = `Email: ${user.email}`;

            let website = document.createElement('li');
            website.innerText = `Website: ${user.website}`;

            let address = document.createElement('li');
            address.innerText = 'Address: ';

            let city = document.createElement('li');
            city.innerText = `City: ${user.address.city}`;

            let street = document.createElement('li');
            street.innerText = `Street: ${user.address.street}`;

            let suite = document.createElement('li');
            suite.innerText = `Suite: ${user.address.suite}`;

            let zipCode = document.createElement('li');
            zipCode.innerText = `Zip Code: ${user.address.zipcode}`;

            let geo = document.createElement('li');
            geo.innerText = 'GEO: ';
            let lat = document.createElement('li');
            lat.innerText = `Lat: ${user.address.geo.lat}`;

            let lng = document.createElement('li');
            lng.innerText = `Lng: ${user.address.geo.lng}`;
            geo.append(lat, lng);

            let company = document.createElement('li');
            company.innerText = 'Company: ';

            let companyName = document.createElement('li');
            companyName.innerText = `Company Name: ${user.company.name}`

            let catchPhrase = document.createElement('li');
            catchPhrase.innerText = `Catch Phrase: ${user.company.catchPhrase}`;

            let bs = document.createElement('li');
            bs.innerText = `Bs: ${user.company.bs}`;

            let btnPosts = document.createElement('button');
            btnPosts.innerText = 'Add posts';

            let postsWrapper = document.createElement('ol');
            postsWrapper.innerText = 'Posts: ';
            postsWrapper.style = `
                            border: 1px solid;
                            padding: 30px;
                            background-color: ${color2};
                            `;
            postsWrapper.className = 'hide';

            btnPosts.addEventListener('click', (e) => {
                let targetClick = user.id;
                postsWrapper.classList.toggle('hide');
                if (!wrapperAW.contains(postsWrapper)) {
                    fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(response => {
                            return response.json();
                        })
                        .then(posts => {
                            for (let post of posts) {
                                let divTargetPost = document.createElement('li');
                                if (post.userId === targetClick) {
                                    divTargetPost.innerText = post.title;
                                    postsWrapper.append(divTargetPost);
                                    postsWrapper.style.display = 'block';
                                };
                            };
                        });
                } else {postsWrapper.remove()};
                wrapperAW.append(postsWrapper);
            });

            company.append(companyName, catchPhrase, bs);
            address.append(city, street, suite, zipCode, geo);
            wrapperAW.prepend(id, name, userName, phone, email,website, address, company, btnPosts);
        };
    });
// ---------------------------------------------------------------------------------------------------------------------
//======================================================================================================================
