const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '91c5931961msh49359b6499fd597p19cf1cjsnaf99949c0ae6',
		'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
	}
};

const ip = document.getElementById("input");
const btn = document.getElementById("btn");
const pre = document.getElementById("pre");

btn.addEventListener("click", function(e){
	e.preventDefault(e);
	fetch('https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?ip='+ip.value+'&apikey=873dbe322aea47f89dcf729dcc8f60e8', options)
	.then(response => response.json())
	.then(response => pre.innerHTML = JSON.stringify(response, null , 2))
	.catch(err => console.error(err));

})