
// ======================================
// WEDDING INVITATION JAVASCRIPT
// LY BunLong & CHUM SaoLin
// ======================================


// ======================================
// 1. PERSONALIZED GUEST NAME
// ======================================

const urlParams =
    new URLSearchParams(window.location.search);

const guestName =
    urlParams.get("name")?.trim()
    || "ភ្ញៀវកិត្តិយស";

const guestNameElement =
    document.getElementById("guestName");

const welcomeGuestElement =
    document.getElementById("welcomeGuest");

if (guestNameElement) {
    guestNameElement.textContent = guestName;
}

if (welcomeGuestElement) {
    welcomeGuestElement.textContent = guestName;
}


// ======================================
// 2. GET WEBSITE ELEMENTS
// ======================================

const openingCover =
    document.getElementById("openingCover");

const openInvitation =
    document.getElementById("openInvitation");

const mainContent =
    document.getElementById("mainContent");

const weddingMusic =
    document.getElementById("weddingMusic");

const musicButton =
    document.getElementById("musicButton");


// ======================================
// 3. MUSIC CONTROLS
// ======================================

if (weddingMusic && musicButton) {

    weddingMusic.volume = 0.65;

    musicButton.addEventListener(
        "click",
        () => {

            if (weddingMusic.paused) {

                weddingMusic.play().catch(
                    error => {
                        console.log(
                            "Music error:",
                            error
                        );
                    }
                );

            } else {

                weddingMusic.pause();

            }

        }
    );


    weddingMusic.addEventListener(
        "play",
        () => {

            musicButton.classList.add(
                "playing"
            );

            musicButton.textContent = "♫";

            musicButton.setAttribute(
                "aria-label",
                "Pause wedding music"
            );

        }
    );


    weddingMusic.addEventListener(
        "pause",
        () => {

            musicButton.classList.remove(
                "playing"
            );

            musicButton.textContent = "▶";

            musicButton.setAttribute(
                "aria-label",
                "Play wedding music"
            );

        }
    );


    weddingMusic.addEventListener(
        "error",
        () => {

            console.log(
                "Please check music/wedding.mp4"
            );

        }
    );

}


// ======================================
// 4. OPEN INVITATION BUTTON
// ======================================

if (
    openingCover &&
    openInvitation &&
    mainContent
) {

    openInvitation.addEventListener(
        "click",
        () => {

            // Prevent double clicking
            openInvitation.disabled = true;


            // Show main website
            mainContent.hidden = false;


            // Show music button
            if (musicButton) {
                musicButton.hidden = false;
            }


            // Play music on user click
            if (weddingMusic) {

                weddingMusic.play().catch(
                    error => {

                        console.log(
                            "Music could not start:",
                            error
                        );

                    }
                );

            }


            // Closing animation
            openingCover.classList.add(
                "closing"
            );


            // Hide cover after animation
            setTimeout(() => {

                openingCover.hidden = true;

                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });

            }, 700);

        }
    );

}


// ======================================
// 5. WEDDING COUNTDOWN
// ======================================

// Countdown to 23 December 2026,
// 6:30 AM Cambodia time.

const weddingDate =
    new Date(
        "2026-12-23T06:30:00+07:00"
    ).getTime();


const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");


function updateCountdown() {

    if (
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement
    ) {
        return;
    }


    const distance =
        weddingDate - Date.now();


    if (distance <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        return;

    }


    const days =
        Math.floor(
            distance / 86400000
        );


    const hours =
        Math.floor(
            (distance / 3600000) % 24
        );


    const minutes =
        Math.floor(
            (distance / 60000) % 60
        );


    const seconds =
        Math.floor(
            (distance / 1000) % 60
        );


    daysElement.textContent =
        String(days).padStart(2, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");

}


// Start countdown
updateCountdown();

setInterval(
    updateCountdown,
    1000
);


// ======================================
// 6. FALLING HEARTS
// ======================================

const heartContainer =
    document.getElementById(
        "heart-container"
    );


const reduceMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


function createHeart() {

    if (
        !heartContainer ||
        reduceMotion.matches
    ) {
        return;
    }


    const heart =
        document.createElement("div");


    heart.className =
        "falling-heart";


    heart.textContent =
        "♥";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (
            Math.random() * 10 + 22
        ) + "px";


    const colors = [
        "#e88b9b",
        "#f0a4b3",
        "#d66a85",
        "#efb6bd"
    ];


    heart.style.color =
        colors[
            Math.floor(
                Math.random()
                * colors.length
            )
        ];


    heart.style.animationDuration =
        (
            Math.random() * 4 + 5
        ) + "s";


    heartContainer.appendChild(
        heart
    );


    heart.addEventListener(
        "animationend",
        () => {

            heart.remove();

        },
        {
            once: true
        }
    );

}


// Create falling hearts
setInterval(() => {

    if (!document.hidden) {

        createHeart();
        createHeart();

    }

}, 350);


// ======================================
// 7. GOOGLE MAPS PLACEHOLDER
// ======================================

const mapLink =
    document.getElementById("mapLink");


if (mapLink) {

    mapLink.addEventListener(
        "click",
        event => {

            if (
                mapLink.getAttribute("href")
                === "#"
            ) {

                event.preventDefault();

                alert(
                    "សូមបញ្ចូល Google Maps Link ជាមុនសិន។"
                );

            }

        }
    );

}