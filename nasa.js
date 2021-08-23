fetch("https://api.nasa.gov/planetary/apod?api_key=Y4sRgwZkl41DlJc29t9p6mzyOkLjdrxm7w0p39hS")
.then(response => response.json())
.then(data => {
console.log(data) 


  let divStars = document.getElementById("stars");
  
 // let getMediaUrl = document.createElement("img");
//document.querySelector("stars".appendChild(data.hdurl)
  let c = new Image();
  c.src = data.url;
  divStars.appendChild(c)

  let getExplanation = document.createElement("h2");
  getExplanation.textContent = data.explanation

  divStars.appendChild(getExplanation)
  })

//typing effect
function typingEffect(element, speed){
  let text=element.innerHTML;
  element.innerHTML="";
  var i=0;
  var timer=setInterval(function(){
    if (i<text.length){
      element,emt.append(text.charAt(i))
      i++;
    }else{
      clearInterval(timer);
    }
  }, speed)
}
const h2=document.querySelector('h2');
typingEffect(h2, 150)

  //tryping effect
  // const typed = select('.typed')
  // if (typed) {
  //   let typed_strings = typed.getAttribute('data-typed-items')
  //   typed_strings = typed_strings.split(',')
  //   new Typed('.typed', {
  //     strings: typed_strings,
  //     loop: true,
  //     typeSpeed: 100,
  //     backSpeed: 50,
  //     backDelay: 2000
  //   });
  // }