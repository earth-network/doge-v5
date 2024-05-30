function loadInc() {
    const squareBtns = document.querySelectorAll('.square_btn');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadSquareBtn(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });
  
    squareBtns.forEach(btn => {
      observer.observe(btn);
    });
  }
  
  function loadSquareBtn(btn) {
    btn.classList.add('loaded');
}

function addInc(name, imageUrl, onClickFunction, width, height) {
    var incContainer = document.getElementById('incContainer');
    var linkElement = document.createElement('a');
    linkElement.href = "#";
    linkElement.className = "square_btn";
    linkElement.onclick = onClickFunction;

    if (width) {
        linkElement.style.width = width + 'px';
    }

    if (height) {
        linkElement.style.height = height + 'px';
    }

    var imageElement = document.createElement('img');
    imageElement.className = "rounded";
    imageElement.src = imageUrl;
    imageElement.alt = name;
    imageElement.draggable = false;

    var brElement = document.createElement('br');
    var textElement = document.createTextNode(name);

    linkElement.appendChild(imageElement);
    linkElement.appendChild(brElement);
    linkElement.appendChild(textElement);

    incContainer.appendChild(linkElement);
}

var inc = {

  'GeForce Now': { imageUrl: "/assets/img/geforcenow.webp", onClick: geforce },
  'Roblox': { imageUrl: "/assets/img/roblox.webp", onClick: rbx },
  'Test' : { imageUrl: "/assets/img/test.jpeg", OnClick: imb },
};

for (var incName in inc) {
    if (inc.hasOwnProperty(incName)) {
      try {
        const { imageUrl, onClick, width, height } = inc[incName];
        addinc(incName, imageUrl, onClick, width, height);
        fetchMessage.style.display = 'none';
      } catch (error) {
        fetchMessage.innerText = 'Failed to load, please refresh.';
      }
    }
}

/* Search Bar */
document.getElementById('searchApps').addEventListener('input', function(event) {
    const query = this.value.toLowerCase();
    const links = document.getElementsByClassName('search-results')[0].getElementsByTagName('a');
    let foundResults = false;
    for(let i = 0; i < links.length; i++) {
        const link = links[i];
        const linkText = link.innerText.toLowerCase();
        if(linkText.includes(query)) {
            link.style.display = 'block';
            foundResults = true;
        } else {
            link.style.display = 'none';
        }
    }
    if(!foundResults) {
        const message = document.getElementById('searchMessage');
        message.innerText = 'No Results Found.';
        message.style.display = 'block';
    } else {
        const message = document.getElementById('searchMessage');
        message.style.display = 'none';
    }
});

loadInc();

var searchBar = document.querySelector('.searchbar');
var searchIcon = document.getElementById('search');
searchBar.addEventListener('focus', () => {
    searchIcon.style.marginLeft = '20px';
    searchBar.placeholder = '';
    searchBar.style.textAlign = 'left';
});

searchBar.addEventListener('blur', () => {
    searchIcon.style.marginLeft = '140px';
    searchBar.placeholder = 'Search for other unblockers';
    searchBar.style.textAlign = 'center';
});
