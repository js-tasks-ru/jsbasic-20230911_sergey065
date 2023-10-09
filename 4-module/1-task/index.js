const makeFriendsList = list => {
  const ul = document.createElement('ul');
  
  return list.reduce((ul, { firstName, lastName }) => {
    const li = document.createElement('li');
    li.textContent = `${firstName} ${lastName}`;
    ul.appendChild(li);
    
    return ul;
  }, ul);
}
