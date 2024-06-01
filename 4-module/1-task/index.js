/* const makeFriendsList = list => {
  const ul = document.createElement('ul');
  
  return list.reduce((ul, { firstName, lastName }) => {
    const li = document.createElement('li');
    li.textContent = `${firstName} ${lastName}`;
    ul.appendChild(li);
    
    return ul;
  }, ul);
} */

/* function makeFriendsList(friends) {
  const ul = document.createElement('ul');

  for (let fr of friends) {
    const li = document.createElement('li');

    li.append(`${fr.firstName} ${fr.lastName}`)

    ul.append(li);
  }

  return ul;
} */

function makeFriendsList(friends) {
  const ul = document.createElement('ul');

  //friends.map
  friends.forEach(element => {
    const li = document.createElement('li');

    //li.textContent = (`${element.firstName} ${element.lastName}`);
    //li.append(`${element.firstName} ${element.lastName}`);
    li.innerHTML = (`${element.firstName} ${element.lastName}`);

    ul.append(li);
  });

  return ul;
}