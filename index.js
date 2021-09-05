setInterval(() => {
    var audio = new Audio('tiktikk.mp3');
    audio.play();
    d = new Date();
    hr = d.getHours();
    mn = d.getMinutes();
    sc = d.getSeconds();

    hr_rot = 30 * hr + mn / 2;
    mn_rot = 6 * mn;
    sc_rot = 6 * sc;

    hour.style.transform = `rotate(${hr_rot}deg)`;
    minute.style.transform = `rotate(${mn_rot}deg)`;
    second.style.transform = `rotate(${sc_rot}deg)`;

}, 1000);