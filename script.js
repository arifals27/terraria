// data json
const data = [
  {
    id: 1,
    title: "Bromo Tengger Semeru",
    title2: "Kawasan Taman Nasional",
    slug: "/tour/bromo",
    image: "/assets/images/bromo.jpg",
  },
  {
    id: 1,
    title: "Baluran Situbondo",
    title2: "Kawasan Taman Nasional",
    slug: "/tour/bromo",
    image: "/assets/images/baluran.jpg",
  },
  {
    id: 1,
    title: "Danau Bedugul Bali",
    title2: "Kawasan Rekreasi",
    slug: "/tour/bromo",
    image: "/assets/images/bedugul.webp",
  },
  {
    id: 1,
    title: "Taman Borobudur",
    title2: "Taman Wisata Candi",
    slug: "/tour/bromo",
    image: "/assets/images/borobudur.webp",
  },
  {
    id: 1,
    title: "Pulau Komodo",
    title2: "Kawasan Taman Nasional",
    slug: "/tour/bromo",
    image: "/assets/images/komodo.png",
  },
];

// ambil element berdasarkan id ="cards"
const cards = document.getElementById("cards");

// looping data json
data.forEach((item) => {
  // membuat element card
  const card = document.createElement("div");
  card.classList.add("card", "aspect-ratio");

  // membuat link
  const link = document.createElement("a");
  link.href = item.slug;
  // membuat element img
  const img = document.createElement("img");
  img.setAttribute("src", item.image);

  // membuat shadow sebelum teks
  const shadow = document.createElement("div");
  shadow.classList.add("shadow");

  // membuat element h3
  const h3 = document.createElement("h3");
  h3.innerText = item.title;

  // membuat element span
  const span = document.createElement("span");
  span.innerText = item.title2;
  // menambahkan semua elemen ke card
  link.appendChild(img);
  link.appendChild(shadow);
  link.appendChild(span);
  link.appendChild(h3);
  card.appendChild(link);

  card.addEventListener("click", (event) => {
    event.preventDefault();

    card.classList.add("fixed");

    setTimeout(() => {
      window.location.href = item.slug;
    }, 2000);
  });
  // menambahkan semua card ke cards
  cards.appendChild(card);
});
