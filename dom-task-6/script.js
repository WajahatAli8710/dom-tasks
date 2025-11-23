const main = document.querySelector("main");
const data = [
  {
    name: "James Smith",
    age: 30,
    image: "./images/James Smith.webp",
    city: "New York",
    profession: "Software Engineer",
    tags: ["javascript", "react", "frontend"],
  },
  {
    name: "Emily Johnson",
    age: 27,
    image: "./images/Emily Johnson.webp",
    city: "Los Angeles",
    profession: "Graphic Designer",
    tags: ["photoshop", "illustrator", "ui/ux"],
  },
  {
    name: "Michael Williams",
    age: 35,
    image: "./images/Michael Williams.webp",
    city: "Chicago",
    profession: "Data Analyst",
    tags: ["python", "data visualization", "sql"],
  },
  {
    name: "Olivia Brown",
    age: 29,
    image: "./images/Olivia Brown.webp",
    city: "Houston",
    profession: "Content Writer",
    tags: ["writing", "blogging", "seo"],
  },
  {
    name: "William Davis",
    age: 32,
    image: "./images/William Davis.jpeg",
    city: "San Francisco",
    profession: "Product Manager",
    tags: ["management", "agile", "planning"],
  },
  {
    name: "Sophia Miller",
    age: 26,
    image: "./images/Sophia Miller.webp",
    city: "Seattle",
    profession: "UX Designer",
    tags: ["research", "prototyping", "figma"],
  },
  {
    name: "Benjamin Wilson",
    age: 31,
    image: "./images/Benjamin Wilson.jpeg",
    city: "Boston",
    profession: "Marketing Specialist",
    tags: ["seo", "content", "social media"],
  },
];
let sum = "";

data.forEach(function (elem) {
  console.log(elem.tags.join(""));

  let tags = elem.tags
    .map((val) => {
      return `<span>${val}</span>`;
    })
    .join("");

  console.log(tags);

  sum += `<div class="card">
        <img
          src="${elem.image}"
          alt=""
        />
        <div class="info">
          <h1>Name : ${elem.name}</h1>
          <p>Age : ${elem.age}</p>
          <p>City : ${elem.city}</p>
          <p>profession: ${elem.profession}</p>
            <div class="tags">
              ${tags}
            </div>
        </div>
      </div>`;
});
console.log(sum);
main.innerHTML = sum;
