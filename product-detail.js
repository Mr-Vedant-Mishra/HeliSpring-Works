
// JavaScript to toggle hamburger to cross
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarTogglerIcon = navbarToggler.querySelector('.navbar-toggler-icon');

navbarToggler.addEventListener('click', function () {
    navbarTogglerIcon.classList.toggle('toggle-cross');
});
document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById("mainImage");
    const thumbnails = document.querySelectorAll(".small-thumb");

    thumbnails.forEach(thumb => {
        // On hover: change the main image to the thumbnail image
        thumb.addEventListener("mouseover", function () {
            const newSrc = this.getAttribute("data-large");
            mainImage.src = newSrc;
        });

        // Optional: On click, lock the image in place
        thumb.addEventListener("click", function () {
            const newSrc = this.getAttribute("data-large");
            mainImage.src = newSrc;
        });
    });
});

const sameWhatsappCheckbox = document.getElementById("sameWhatsapp");
const whatsappField = document.getElementById("whatsappField");
const customDesignCheckbox = document.getElementById("customDesign");
const dimensionSection = document.getElementById("dimensionInputs");

sameWhatsappCheckbox.addEventListener("change", () => {
    whatsappField.style.display = sameWhatsappCheckbox.checked ? "none" : "block";
});

customDesignCheckbox.addEventListener("change", () => {
    dimensionSection.style.display = customDesignCheckbox.checked ? "block" : "none";
});

document.getElementById('unitSelect').addEventListener('change', function () {
    const unit = this.value;
    const inputs = document.querySelectorAll('#dimensionInputs input[type="number"]');

    inputs.forEach(input => {
        if (input.id === 'customDegreeInput') return;
        
        let label = input.getAttribute('aria-label') || "";
        if (label.toLowerCase().includes("coils")) return;

        const prefix = label.includes("Min") ? "Min" : "Max";
        input.placeholder = `${prefix} (${unit})`;
    });
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

const legSelect = document.getElementById('endType');
const customIn = document.getElementById('customEndTypeInput');

legSelect.addEventListener('change', function () {
    if (this.value === 'custom_end') {
        customIn.style.display = 'block';
        customInput.focus();
    } else {
        customIn.style.display = 'none';
        customIn.value = '';
    }
});

const legPositionSelect = document.getElementById('legPosition');
const customInput = document.getElementById('customDegreeInput');

legPositionSelect.addEventListener('change', function () {
    if (this.value === 'custom') {
        customInput.style.display = 'block';
        customInput.focus();
    } else {
        customInput.style.display = 'none';
        customInput.value = ''; // clear input when not in use
    }
});
