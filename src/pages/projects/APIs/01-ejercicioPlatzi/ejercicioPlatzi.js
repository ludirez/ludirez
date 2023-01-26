const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UC55-mxUj5Nj3niXFReG44OQ&part=snippet%2Cid&order=date&maxResults=8";
const content = null || document.getElementById('content');

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "9ac630f7cemshc2d6026d4927280p1bbb3bjsn9424e86f9cfd",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

// fetch('', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

async function fetchData(urlApi) {
	const response = await fetch(urlApi, options);
	const datos = await response.json();
	return datos;
}

(async () => {
	//esta es la lógica para que automáticamente se ejecute la función async cuando cargue el documento. sin el console.log
	try {
		const videos = await fetchData(API);
		//Plantilla para comose  vana mostrar los elementos
		let view = `
		${videos.items.map(video => `
			<div class="group relative">
				<div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 la:aspect-none">
						<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description} " class="w-full">
				</div>
				<div class="mt-4 flex justify-between">
						<h3 class="text-sm text-red-900" >
								<span aria-hidden="true" class="absolute inset-0"></span>
								${video.snippet.title}
						</h3>
				</div>
			</div>
		`).slice(0,4).join('')} 
		`;//el slice define cuantos elementos se vana  mostrar de los que se mandaron a llamar. 
		content.innerHTML = view; //insertando lo que acabamos de hacer.
	} catch (error) {
		console.log(error);
		alert(error);	//reto en el catch: ya que el .log solo se ve en consola. hacer algo para que el usuario vea cuando se genere un error. 
	}
})();


//ejercicio en forma de nota
// export async function runCode(url) {
//   try {
//     new URL(url);
//     const response = await fetch(url);
//     return response.json();
//    } catch(error) {
//      if (error.message === "Failed to construct 'URL': Invalid URL"){
//        throw new Error('Invalid URL');
//      } else {
//        throw new Error('Something was wrong');
//      }
//    }
// }


// function generandoNumero() {
// 	let num = Math.round(Math.random())
// 	console.log(num);
//   }

//   setInterval();