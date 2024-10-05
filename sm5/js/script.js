// async function test(){
//   let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
//   let response = await fetch(url);

//   let commits = await response.json(); // читаем ответ в формате JSON
//   for(i=0; i<10; i++)
//     console.log(commits[i].author.login);
// }

// test()

// async function test2(){
//   let response = await fetch(`https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits`);

//   let text = await response.text(); // прочитать тело ответа как текст

//   console.log(text);
// }

// test2()


fetch('https://danlast.github.io/11-23-ladan-js/mainPage/')
.then(response => response.text())
.then(text => console.log(text))
.catch(error => console.error('Fetch error:', error));  


