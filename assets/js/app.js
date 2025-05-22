  // endpoint base de github 
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

//selectores mas descriptivos y correccion de query
const nameEl = document.querySelector('.name');
const blogEl = document.querySelector('.blog');
const locationEl = document.querySelector('.location');


// Obtiene datos d un usuario de github y los muestraa en el DOM 
// @Param{string} username  - Nombre de usuario de github
async function displayUser(username) {
  nameEl.textContent = 'cargando...';
  blogEl.textContent = await fetch(`${usersEndpoint}/${username}`);
   try {
        const response = await fetch(`${usersEndpoint}/${username}`);
  if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  const data= await response.json();
  console.log(data);

  //Mostrar datos en el DOM usando template literals correctamente
  nameEl.textContent = '${data.name}';
  blogEl.textContent = '${data.blog}';
  locationEl.textContent = '${data.location}';
// }




  } catch (err) {
        handleError(err);
      }
    }

function handleError(err) {
  console.log('OH NO!', err);
  // console.log(err);
  nameEl.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski');
// .catch(handleError);