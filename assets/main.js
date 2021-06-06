import projects from "./projects.js";

const d = document,
  $template = d.getElementById("templete-article").content,
  $article = d.getElementById("articles"),
  $fragment = d.createDocumentFragment();

projects.forEach((project) => {
  $template.querySelector("img").setAttribute("src", project.img);
  $template.querySelector("h3").innerText = project.title;
  $template.querySelector("a").setAttribute("href", project.url);

  let $clone = d.importNode($template, true);
  $fragment.appendChild($clone);
});

$article.appendChild($fragment);
