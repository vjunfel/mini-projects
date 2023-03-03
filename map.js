const map = L.map('map').setView([10.31863, 123.973342], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([10.31863, 123.973342]).addTo(map).bindPopup("Junfel's Place");
