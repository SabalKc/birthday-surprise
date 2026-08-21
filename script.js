function showMessage() {
    const message = document.getElementById("message");

    message.scrollIntoView({
        behavior: "smooth"
    });

    createConfetti();
}


// 🎉 Birthday confetti
function createConfetti() {

    const emojis = ["🎉", "🎊", "💖", "✨", "🥳", "🌸", "🎂"];

    for (let i = 0; i < 45; i++) {

        const confetti = document.createElement("div");

        confetti.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = (15 + Math.random() * 20) + "px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = 2500 + Math.random() * 2500;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(${360 + Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "cubic-bezier(.2,.8,.3,1)"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration);
    }
}
