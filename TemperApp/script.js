particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "triangle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 3
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 7,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": false
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
var lastTemperature = 0;
refresh();

setInterval(function(){
    refresh();
},7500);

function refresh(){
    var data = JSON.parse(httpGet("https://temperapp.apphb.com/api/all"));
    console.log(data);
    
    refreshView(data);
    
    function refreshView(data){
        if(data.temperature !== lastTemperature){
            if(data.temperature >24){
                clearColor();
                document.querySelector("main").classList.add("color4");
            } else if(data.temperature > 22){
                clearColor();
                document.querySelector("main").classList.add("color3");
            } else if(data.temperature > 20){
                clearColor();
                document.querySelector("main").classList.add("color2");
            } else {
                clearColor();
                document.querySelector("main").classList.add("color1");
            } 
            document.querySelector("#temp").innerHTML = data.temperature;
            lastTemperature = data.temperature;
        }
        document.querySelector("#dist").innerHTML = Math.round(data.distance,5);
    
        if(data.heating){
            document.getElementsByClassName('heating')[0].style.display = "block";
        } else{
            document.getElementsByClassName('heating')[0].style.display = "none";
        }
    }
}

function clearColor(){
    document.querySelector("main").classList.remove("color1");
    document.querySelector("main").classList.remove("color2");
    document.querySelector("main").classList.remove("color3");
    document.querySelector("main").classList.remove("color4");
}
