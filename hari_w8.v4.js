var now = new Date(); var days = new Array('Minggu', 

'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 

'Sabtu'); var date = ((now.getDate()<10) ? "0" : 

"")+ now.getDate(); function fourdigits(number) { 

return (number < 1000) ? number + 1900 : number; } 

var months = new Array('Januari', 'Februari', 

'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 

'September', 'Oktober', 'November', 'Desember'); 

today = days[now.getDay()] + "<br/>" + date + " " + 

months[now.getMonth()]; document.write(today);
