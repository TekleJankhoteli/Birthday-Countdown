document.addEventListener('DOMContentLoaded', function() {
    const birthday = new Date(2023, 10, 15);

    
    const countdown = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const currentTime = new Date();
        const timeDifference = birthday - currentTime;

        if (timeDifference <= 0) {
            clearInterval(countdown);
            displayCountdown(0, 0, 0, 0);
            return;
        }

        
        let dge = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let saati = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let wuti = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let wami = Math.floor((timeDifference % (1000 * 60)) / 1000);

        
        displayCountdown(dge, saati, wuti, wami);
    }

    function displayCountdown(dge, saati, wuti, wami) {
        document.getElementById('days').getElementsByClassName('countdown-cifrebi')[0].textContent = dge;
        document.getElementById('hours').getElementsByClassName('countdown-cifrebi')[0].textContent = saati;
        document.getElementById('minutes').getElementsByClassName('countdown-cifrebi')[0].textContent = wuti;
        document.getElementById('seconds').getElementsByClassName('countdown-cifrebi')[0].textContent = wami;
    }
});