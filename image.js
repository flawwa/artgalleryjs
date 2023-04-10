const imagenes = [
    "JANHERNANDEZ.JPG",
    "TWODRAGONINCLOUD.JPG",
    "MARTINLEWIS.jpg",
    "GIUSEPPEPENONE.jpg"

  ];
  
  let contador = 0;
  
  const cambiarImagen = function() {
    document.querySelector("#miImagen").src = imagenes[contador];
    contador = (contador + 1) % imagenes.length;
  };
  
  setInterval(cambiarImagen, 2000);

  //TEMA OSCURO
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  let isDarkTheme = false;

  themeToggle.addEventListener('click', () => {
    if (!isDarkTheme) {
      body.classList.add('dark');
      isDarkTheme = true;
    } else {
      body.classList.remove('dark');
      isDarkTheme = false;
    }
  });
  

  
