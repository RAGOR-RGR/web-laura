const music = document.getElementById("music");
const musicText = document.getElementById("musicText");
const musicIcon = document.getElementById("musicIcon");

let musicPlaying = false;


/* ================================= */
/* ENTRAR EN LA HISTORIA */
/* ================================= */

function openHomeJourney() {

    const home = document.getElementById("home");
    const journey = document.getElementById("journey");

    home.classList.add("home-leaving");

    setTimeout(() => {

        home.style.display = "none";
        journey.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 650);
}


/* ================================= */
/* ABRIR CAPÍTULO */
/* ================================= */

function openChapter(id) {

    const chapters = document.querySelectorAll(".chapter");
    const chapter = document.getElementById(id);

    if (!chapter) return;

    chapters.forEach(item => {
        item.classList.remove("active");
    });

    setTimeout(() => {

        chapter.classList.add("active");

        chapter.scrollTop = 0;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 70);
}


/* ================================= */
/* VOLVER AL PRINCIPIO */
/* ================================= */

function backHome() {

    const chapters = document.querySelectorAll(".chapter");

    chapters.forEach(chapter => {

        chapter.classList.remove("active");

        chapter.scrollTop = 0;

    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================================= */
/* MÚSICA */
/* ================================= */

function toggleMusic() {

    if (!music) return;

    if (!musicPlaying) {

        music.play()
            .then(() => {

                musicPlaying = true;

                if (musicText) {
                    musicText.textContent = "Pausar nuestra canción";
                }

                if (musicIcon) {
                    musicIcon.textContent = "Ⅱ";
                }

            })
            .catch(() => {

                alert(
                    "No se ha podido reproducir la canción.\n\n" +
                    "Comprueba que el archivo se llama exactamente:\n" +
                    "La Promesa.mp3\n\n" +
                    "y que está dentro de la carpeta de la web."
                );

            });

    } else {

        music.pause();

        musicPlaying = false;

        if (musicText) {
            musicText.textContent = "Escuchar nuestra canción";
        }

        if (musicIcon) {
            musicIcon.textContent = "▶";
        }
    }
}


/* ================================= */
/* CUANDO TERMINA LA CANCIÓN */
/* ================================= */

if (music) {

    music.addEventListener("ended", () => {

        musicPlaying = false;

        if (musicText) {
            musicText.textContent = "Escuchar nuestra canción";
        }

        if (musicIcon) {
            musicIcon.textContent = "▶";
        }

    });

}


/* ================================= */
/* PANTALLA COMPLETA */
/* ================================= */

function toggleFullscreen() {

    if (!document.fullscreenElement) {

        document.documentElement
            .requestFullscreen()
            .catch(() => {});

    } else {

        document.exitFullscreen();

    }
}


/* ================================= */
/* ESCAPE */
/* ================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        backHome();

    }

});