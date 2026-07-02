// Explore India Tours - Main JavaScript File

// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
}


// ================= BOOKING FORM VALIDATION =================

document.addEventListener("DOMContentLoaded", function () {

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const destination = document.getElementById("destination").value;

            const formMessage =
                document.getElementById("formMessage");

            if (
                name === "" ||
                email === "" ||
                phone === "" ||
                destination === ""
            ) {

                formMessage.style.color = "red";
                formMessage.textContent =
                    "Please fill in all required fields.";

                return;
            }

            if (!email.includes("@") || !email.includes(".")) {

                formMessage.style.color = "red";
                formMessage.textContent =
                    "Please enter a valid email address.";

                return;
            }

            if (phone.length !== 10 || isNaN(phone)) {

                formMessage.style.color = "red";
                formMessage.textContent =
                    "Please enter a valid 10-digit mobile number.";

                return;
            }

            formMessage.style.color = "green";
            formMessage.textContent =
                "Thank you! Your booking request has been submitted successfully.";

            bookingForm.reset();

        });

    }

});


// ================= PACKAGE COST CALCULATOR =================

function calculateCost() {

    const packageSelect =
        document.getElementById("packageSelect");

    const peopleCount =
        document.getElementById("peopleCount");

    const costResult =
        document.getElementById("costResult");

    if (!packageSelect || !peopleCount || !costResult) {
        return;
    }

    const price = Number(packageSelect.value);
    const people = Number(peopleCount.value);

    if (people <= 0) {

        costResult.style.color = "red";
        costResult.textContent =
            "Please enter a valid number of travelers.";

        return;
    }

    const total = price * people;

    costResult.style.color = "green";
    costResult.textContent =
        "Estimated Total Cost: ₹" +
        total.toLocaleString("en-IN");
}


// ================= GALLERY FILTER =================

function filterGallery(category) {

    const items =
        document.querySelectorAll(".gallery-item");

    items.forEach(function (item) {

        if (
            category === "all" ||
            item.classList.contains(category)
        ) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

}