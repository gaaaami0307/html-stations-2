function displayList(){
  let ul = document.createElement("ul");
  let p = document.querySelector("p");
  let li1 = document.createElement("li");
  li1.textContent=p.textContent;
  p.parentNode.removeChild(p);
  
  p = document.querySelector("p");
  let li2 = document.createElement("li");
  li2.textContent=p.textContent;
  p.parentNode.removeChild(p);

  p = document.querySelector("p");
  let li3 = document.createElement("li");
  li3.textContent=p.textContent;

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  p.parentNode.removeChild(ul,p);

  document.body.appendChild(ul);
  


}