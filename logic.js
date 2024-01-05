document.addEventListener("DOMContentLoaded", function() {
    const skillItems = document.querySelectorAll(".skill-item .inner-line");

    function animateSkills() {
        skillItems.forEach(function(skill) {
            const width = skill.getAttribute("data-width");
            skill.style.width = `${width}%`;
        });
    }

    animateSkills();

    window.addEventListener("scroll", animateSkills);

    window.addEventListener("resize", animateSkills);
});




