// ==========================================
// TECH HUB - FINAL SCRIPT
// ==========================================

const welcomeScreen = document.getElementById("welcomeScreen");
const formScreen = document.getElementById("formScreen");
const boomScreen = document.getElementById("boomScreen");
const logoScreen = document.getElementById("logoScreen");
const thankScreen = document.getElementById("thankScreen");

const nameInput = document.getElementById("nameInput");
const departmentInput = document.getElementById("departmentInput");
const enterBtn = document.getElementById("enterBtn");

const countText = document.getElementById("countText");
const awdcText = document.getElementById("awdcText");
const boomText = document.getElementById("boomText");

const welcomeName = document.getElementById("welcomeName");
const departmentText = document.getElementById("departmentText");
const roleText = document.getElementById("roleText");


// ==========================================
// WELCOME → FORM
// 3 SECONDS
// ==========================================

setTimeout(() => {

    welcomeScreen.classList.remove("active");

    setTimeout(() => {

        formScreen.classList.add("active");

        setTimeout(() => {
            nameInput.focus();
        }, 400);

    }, 700);

}, 3000);


// ==========================================
// ENTER BUTTON
// ==========================================

enterBtn.addEventListener(
    "click",
    startExperience
);


// ==========================================
// ENTER KEY
// ==========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter" &&
            formScreen.classList.contains("active")
        ) {

            startExperience();

        }

    }
);


// ==========================================
// START EXPERIENCE
// ==========================================

function startExperience() {

    const name =
        nameInput.value.trim();

    const department =
        departmentInput.value.trim();

    const selectedRole =
        document.querySelector(
            'input[name="role"]:checked'
        );


    // NAME CHECK

    if (name === "") {

        nameInput.focus();

        nameInput.style.borderColor =
            "#e05252";

        setTimeout(() => {

            nameInput.style.borderColor =
                "";

        }, 1000);

        return;
    }


    // DEPARTMENT CHECK

    if (department === "") {

        departmentInput.focus();

        departmentInput.style.borderColor =
            "#e05252";

        setTimeout(() => {

            departmentInput.style.borderColor =
                "";

        }, 1000);

        return;
    }


    // FACULTY / STUDENT CHECK

    if (!selectedRole) {

        alert(
            "Please select Faculty or Student."
        );

        return;
    }


    // ======================================
    // SAVE USER DETAILS
    // ======================================

    welcomeName.textContent =
        "Welcome, " + name;

    departmentText.textContent =
        "Department • " + department;

    roleText.textContent =
        selectedRole.value;


    // ======================================
    // MOVE TO COUNTDOWN
    // ======================================

    formScreen.classList.remove("active");

    setTimeout(() => {

        boomScreen.classList.add("active");

        startCountdown();

    }, 700);

}


// ==========================================
// COUNTDOWN
//
// 3
// 2
// 1
// AWDC
// BOOM
// ==========================================

function startCountdown() {

    const steps = [
        "3",
        "2",
        "1"
    ];

    let index = 0;


    // Make sure AWDC / BOOM hidden

    awdcText.style.display = "none";

    boomText.style.display = "none";


    function showNumber() {

        if (index >= steps.length) {

            showAWDC();

            return;
        }


        countText.style.display =
            "block";

        countText.textContent =
            steps[index];


        // Restart animation

        countText.style.animation =
            "none";

        void countText.offsetWidth;

        countText.style.animation =
            "countAnimation 0.8s ease";


        index++;


        setTimeout(
            showNumber,
            900
        );

    }


    showNumber();

}


// ==========================================
// AWDC
// ==========================================

function showAWDC() {

    countText.style.display =
        "none";

    awdcText.style.display =
        "block";


    // Restart animation

    awdcText.style.animation =
        "none";

    void awdcText.offsetWidth;

    awdcText.style.animation =
        "awdcAppear 1s ease";


    // AWDC stays for 1.5 sec

    setTimeout(() => {

        showBOOM();

    }, 1500);

}


// ==========================================
// BOOM
// ==========================================

function showBOOM() {

    awdcText.style.display =
        "none";

    boomText.style.display =
        "block";


    // Restart animation

    boomText.style.animation =
        "none";

    void boomText.offsetWidth;

    boomText.style.animation =
        "boomAnimation 0.8s ease";


    // Go to logo

    setTimeout(() => {

        showLogo();

    }, 1000);

}


// ==========================================
// LOGO REVEAL
// ==========================================

function showLogo() {

    boomScreen.classList.remove(
        "active"
    );


    setTimeout(() => {

        logoScreen.classList.add(
            "active"
        );

    }, 700);


    // Logo stays for 6 seconds

    setTimeout(() => {

        showThankYou();

    }, 6700);

}


// ==========================================
// THANK YOU
// ==========================================

function showThankYou() {

    logoScreen.classList.remove(
        "active"
    );


    setTimeout(() => {

        thankScreen.classList.add(
            "active"
        );

    }, 700);

}
