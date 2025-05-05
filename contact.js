
// JavaScript to toggle hamburger to cross
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarTogglerIcon = navbarToggler.querySelector('.navbar-toggler-icon');

navbarToggler.addEventListener('click', function () {
    navbarTogglerIcon.classList.toggle('toggle-cross');
});

const sameWhatsappCheckbox = document.getElementById("sameWhatsapp");
const whatsappField = document.getElementById("whatsappField");

sameWhatsappCheckbox.addEventListener("change", () => {
    whatsappField.style.display = sameWhatsappCheckbox.checked ? "none" : "block";
});

const scriptURL =
    "https://script.google.com/macros/s/AKfycby1dc3rLX2e5DgfWR8PUrxV9DGco887tHwXHT8pir-21Wjd1js9RLkbBqgM3d8unVnFjg/exec";
const form = document.getElementById("customerForm");
const loader = document.getElementById("pageLoader");

form.addEventListener("submit", (e) => {
    e.preventDefault();


    const isSameWhatsapp = document.getElementById("sameWhatsapp").checked;
    const mobileNumber = document.getElementById("mobileNumber").value;

    if (isSameWhatsapp) {
        document.getElementById("whatsappNumber").value = mobileNumber;
    }

    const today = new Date().toLocaleDateString('en-GB').split('/').join('-');
    document.getElementById("date").value = today;

    const formData = new FormData(form);
    loader.classList.add("active");

    fetch(scriptURL, {
        method: "POST",
        body: formData,
    })
        .then((response) => {
            loader.classList.remove("active");
            if (response.ok) {
                window.location.href = "success.html";
                form.reset();
            } else {
                alert("Something went wrong. Please try again!");
            }
        })
        .catch((error) => {
            loader.classList.remove("active");
            alert("Something went wrong. Please try again!");
        });
});