function appendTest(){
  const parent = document.querySelector('.wrapper');
  const child = document.createElement('div');
  child.className = 'child';
  child.innerHTML = '<p>Test</p>'

  parent.append(child);

  // console.log(parent, child)
}

function removeTest(){
  const parent = document.querySelector('.wrapper');
  parent.innerHTML = "";
}