// ==========================================
// TECH HUB
// ==========================================

const welcomeScreen =
    document.getElementById("welcomeScreen");

const formScreen =
    document.getElementById("formScreen");

const boomScreen =
    document.getElementById("boomScreen");

const logoScreen =
    document.getElementById("logoScreen");

const thankScreen =
    document.getElementById("thankScreen");


const nameInput =
    document.getElementById("nameInput");

const departmentInput =
    document.getElementById("departmentInput");

const enterBtn =
    document.getElementById("enterBtn");


const countText =
    document.getElementById("countText");

const awdcText =
    document.getElementById("awdcText");

const boomText =
    document.getElementById("boomText");


const welcomeName =
    document.getElementById("welcomeName");

const departmentText =
    document.getElementById("departmentText");

const roleText =
    document.getElementById("roleText");


// ==========================================
// WELCOME → FORM
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
    function(event) {

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


    // NAME

    if (name === "") {

        nameInput.focus();

        return;

    }


    // DEPARTMENT

    if (department === "") {

        departmentInput.focus();

        return;

    }


    // FACULTY / STUDENT

    if (!selectedRole) {

        alert(
            "Please select Faculty or Student."
        );

        return;

    }


    // SAVE DETAILS

    welcomeName.textContent =
        "Welcome, " + name;

    departmentText.textContent =
        "Department • " + department;

    roleText.textContent =
        selectedRole.value;


    // MOVE TO BOOM SCREEN

    formScreen.classList.remove(
        "active"
    );


    setTimeout(() => {

        boomScreen.classList.add(
            "active"
        );

        startCountdown();

    }, 700);

}


// ==========================================
// COUNTDOWN
// 3 → 2 → 1
// ==========================================

function startCountdown() {

    countText.style.display =
        "block";

    awdcText.style.display =
        "none";

    boomText.style.display =
        "none";


    const numbers = [
        "3",
        "2",
        "1"
    ];

    let index = 0;


    function showNext() {

        if (index >= numbers.length) {

            showAWDC();

            return;

        }


        countText.textContent =
            numbers[index];


        countText.style.animation =
            "none";

        void countText.offsetWidth;

        countText.style.animation =
            "countPulse 0.8s ease";


        index++;


        setTimeout(
            showNext,
            900
        );

    }


    showNext();

}


// ==========================================
// AWDC
// ==========================================

function showAWDC() {

    countText.style.display =
        "none";

    awdcText.style.display =
        "block";


    awdcText.style.animation =
        "none";

    void awdcText.offsetWidth;

    awdcText.style.animation =
        "awdcReveal 1s ease";


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


    boomText.style.animation =
        "none";

    void boomText.offsetWidth;

    boomText.style.animation =
        "boomReveal 0.8s ease";


    setTimeout(() => {

        showLogo();

    }, 1000);

}


// ==========================================
// LOGO
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


    // Logo stays 6 seconds

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
