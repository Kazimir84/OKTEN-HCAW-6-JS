//======================================================================================================================
//                                                Class Work
//                                              OKTEN-CW-6-JS
//======================================================================================================================
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
// ---------------------------------------------------------------------------------------------------------------------
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        for (let postElement of posts) {
            document.write(`<hr>`)
            let div = document.createElement('div');
            document.body.append(div);

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
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        for (let postElement of posts) {
            document.write(`<hr>`)
            let div = document.createElement('div');
            document.body.append(div);

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

                div.appendChild(wrapper);
            };
        };
    })
// ---------------------------------------------------------------------------------------------------------------------
//                                                      2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
        return response.json();
    })
    .then(comments => {
        console.log('coments', comments)
        for (let comment of comments) {
            document.write(`<hr>`)
            let div = document.createElement('div');
            document.body.append(div);

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
                body.innerText = `Body: ${comment.body}`

                wrapperHW2.append(h1, h2, name, email, body);
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
// ---------------------------------------------------------------------------------------------------------------------

//======================================================================================================================