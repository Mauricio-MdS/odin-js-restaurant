(() => {
  const dom = document.querySelector('#content');
  const main = document.createElement('div');

  const showDescription = () => {
    main.innerHTML = '';
    const title = document.createElement('h1');
    title.textContent = 'Some restaurant';
    const description = document.createElement('p');
    description.textContent = 'Welcome to Some Restaurant! At Some Restaurant, we are passionate about creating memorable dining experiences!'
    main.appendChild(title);
    main.appendChild(description);
  };

  const showContact = () => {
    main.innerHTML = '';
    const title = document.createElement('h1');
    title.textContent = 'Contact';
    const description = document.createElement('p');
    description.textContent = 'Talk to us at 223344';
    main.appendChild(title);
    main.appendChild(description);
  };

  const navButtons = () => {
    const description = document.createElement('button');
    const contact = document.createElement('button');
    description.textContent = 'Description';
    contact.textContent = 'Contact';
    description.addEventListener('click', showDescription);
    contact.addEventListener('click', showContact);
    dom.appendChild(description);
    dom.appendChild(contact);
  };

  const init = () => {
    navButtons();
    dom.appendChild(main);
    showDescription();
  };

  init();
})();
