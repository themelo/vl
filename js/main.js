document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("[data-target]");
    buttons.forEach(button => {
            button.addEventListener("click", function(event) {
                event.preventDefault(); 
                const targetId = this.getAttribute("data-target"); 
                const targetElement = document.getElementById(targetId); 
                if (targetElement) {
                    const offset = 0;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition + offset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            });
        });
    });

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("open-booking");
    const list = document.getElementById("book-options");
    const listItems = Array.from(list.querySelectorAll("li")); 
    let isOpen = false;

    toggleButton.addEventListener("click", function () {
    if (!isOpen) {
        list.style.display = "block"; 
        listItems.forEach((item, index) => {
            item.style.opacity = "0";
            item.style.transform = "translateY(10px)";
            setTimeout(() => {
                item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }, index * 200); 
        });
    } else {
        listItems
            .slice()
            .reverse() 
            .forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = "0";
                    item.style.transform = "translateY(10px)";
                }, index * 200);
            });

        setTimeout(() => {
            list.style.display = "none"; 
        }, listItems.length * 200 + 300);
    }

        isOpen = !isOpen;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollTopButton = document.getElementById("btt");

    scrollTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("arrow");

    scrollButton.addEventListener("click", function () {
        const targetSection = document.getElementById("dine_wine");
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
