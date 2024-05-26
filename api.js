const spinId = document.getElementById("spinId");
const parentspin = spinId.parentNode;
const time = document.getElementById("time");
const card = document.getElementById("card");
const btn = document.querySelector(".btn");


const spingoster = () => {
  parentspin.appendChild(spinId);
};

//*********************** */



setTimeout(() => {
  spinId.remove();
  apicagir();

  btn.addEventListener("click", () => {
    card.innerHTML = "";
    spingoster();

    setTimeout(() => {
      apicagir();
    }, 2000);
  });
}, 3000);


setInterval(() => {
  time.textContent = `${new Date().toLocaleString()}`;
}, 500);

const kedigoster = (a) => {
  a.forEach((item) => {
    card.innerHTML += `<div class="col-12 col-sm-6 col-lg-4">
        <div style="height:250px;">
          <img src="${item.url}" class=" resimler img-thumbnail w-100 h-100" alt="...">
        </div>
  </div>`;
  });
};

const urlm = "./img/error.gif";
let resim = document.createElement("img");
resim.src = `${urlm}`;
resim.classList.add("hataresmi");

const hatagoster = () => {
  resim.src = "./img/error.gif";
  card.appendChild(resim);
  resim.classList.add("block");
};
//***************** */


const apicagir = () => {
  spingoster();
  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      spinId.remove();
      kedigoster(data);
    })
    .catch(() => {
      hatagoster();
      spinId.remove();
    });
};