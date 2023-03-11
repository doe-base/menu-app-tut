const menuData = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  ];
   
   
  const bodyEl = document.getElementById('body')
  bodyEl.setAttribute('style', "font-family: 'Open Sans', sans-serif; background: hsl(210, 36%, 96%);color: hsl(209, 61%, 16%);line-height: 1.5;font-size: 0.875rem;")
   
   
  //Main Element
  const mainHolder = document.createElement('main')
  mainHolder.setAttribute('class', "main")
   
   
  // Title Element
  const titleHolder = document.createElement('div')
  titleHolder.setAttribute('class', 'title')
   
  const title = document.createElement('h2')
  title.innerText = 'our menu'
   
  const underline = document.createElement('div')
  underline.setAttribute('class', 'underline')
   
  // Append Title
  titleHolder.appendChild(title)
  titleHolder.appendChild(underline)
   
   
  //Button Section
  const btnContatiner = document.createElement('div')
  btnContatiner.setAttribute('class', 'btn-container')
   
  //create unique array of categories
  const categories = menuData.reduce(function(values, item){
      if(!values.includes(item.category)){
          values.push(item.category)
      }
      return values
  }, ['all'])
   
  //loop through the array and create each category button
  categories.forEach(category =>{
      const menuButton = document.createElement('button')
      menuButton.setAttribute('class', 'filter-btn')
      menuButton.setAttribute('type', 'button')
      menuButton.setAttribute('data-id', category)
      menuButton.innerText = category
   
      menuButton.addEventListener('click', function(e){
          const category = e.currentTarget.dataset.id
          const menuCategory = menuData.filter(function(menuItem){
              if(menuItem.category == category){
                  return menuItem
              }
          })
          if (category === "all") {
            // function not created yet!!!
              displayMenuItems(menuData);
            } else {
              displayMenuItems(menuCategory);
            }
      })
   
      btnContatiner.appendChild(menuButton)
  })
   
   
  const foodSection = document.createElement('section')
  foodSection.setAttribute('class', 'section-center')
   
  const displayMenuItems =(menuItems)=>{
      let displayMenu =  menuItems.map(item => {
          return`<article class="menu-item">
                      <img src=${item.img} alt=${item.title} class="photo" />
                      <div class="item-info">
                      <header>
                          <h4>${item.title}</h4>
                          <h4 class="price">$${item.price}</h4>
                      </header>
                      <p class="item-text">
                          ${item.desc}
                      </p>
                      </div>
                  </article>`
      }).join('')
      foodSection.innerHTML = displayMenu
  }
   
   
  mainHolder.appendChild(titleHolder)
  mainHolder.appendChild(btnContatiner)
  displayMenuItems(menuData)
  mainHolder.appendChild(foodSection)
  bodyEl.appendChild(mainHolder)