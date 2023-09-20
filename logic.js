document.addEventListener("DOMContentLoaded", function() {
    const skillItems = document.querySelectorAll(".skill-item .inner-line");

    function animateSkills() {
        skillItems.forEach(function(skill) {
            const width = skill.getAttribute("data-width");
            skill.style.width = `${width}%`;
        });
    }

    animateSkills();

    // تنفيذ الدالة عند حدوث scroll
    window.addEventListener("scroll", animateSkills);

    // تنفيذ الدالة عند تغيير حجم النافذة
    window.addEventListener("resize", animateSkills);
});




