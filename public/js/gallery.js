fetch('https://cprg210-travel.herokuapp.com/api/destinations')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    const imgList = data;

    // Variable where we will store our img tags
    let imgTemplate = ''; 

    // Flex container for images
    const gallery = document.querySelector('.gallery'); 

    // Loop through items using forEach (available on every array)
    imgList.forEach(function(item){
      imgTemplate += 
        `<figure>
        <a href="${item.id}">
          <img src="https://picsum.photos/id/${item.id}/250" alt="${item.title}">
        </a>
        <figcaption>Hello ${item.title}!</figcaption>
        </figure>`;
    });

    // Add HTML img string to gallery container
    gallery.innerHTML = imgTemplate;
});


  
  // let travelImgs = ''; 
  // const gallery = document.querySelector('.gallery'); 
  // destinationsObj.forEach(function(item){
  //    console.log(item);  
  //    travelImgs += `<a href="${item.url}"><h2>${item.travel}</h2><img src="https://picsum.photos/id/${item.id}/250/250" alt="${item.title}"></a>`;
  //    });
  //  gallery.innerHTML = travelImgs;