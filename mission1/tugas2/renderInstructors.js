function createInstructors(){
    let instructors = [
        "Adinda Faayza Malika", "Amelia Dewi Agustiani", "Anisa Dinda Gantini", "Berliana Elfada", "Cintia Ningsih", "Dafa Nurul Fauziansyah", "Dhafin Rizqi Fadhilah",
        "Fadhil Radja Assyidiq", "Fardan Al Jihad", "Fariz Muhammad Ibnu", "Fariz Rahman", "Hanri Fajar", "Maolana Firmansyah", "Mochammad Zhirfan", "Mochammad Fathul'ibad", 
        "Muhammad Naufal", "Muhammad Deo", "Muhammad Dyfan", "Muhammad Fadhil", "Muhammad Zaki", "Raditya Pasya", "Raihan Fuad", "Raihan Shidqi", "Reka Briyan", "Salma Edyna",
        "Salsabila Maharani", "Suci Awalia", "Tabitha Salsabila", "Yane Pradita", "Yayang Setia Budi", "Zacky Faishal", "Zahri Adzani"
    ];

    return instructors;
}

function renderInstructors(){
    let instructorsContainer = document.getElementById('instructors-container')
    let instructors = createInstructors();
    for (i = 0; i < 32; i++) {
        let instructorCard = document.createElement("div");
        instructorCard.className = "col-12 col-lg-6 d-flex justify-content-center gap-4";

        let instructorImg = document.createElement("img");
        
        instructorImg.width = 100;
        instructorImg.height = 100;
        instructorImg.style.borderRadius = "100%";
        instructorImg.src = i < 9? `https://akademik.polban.ac.id/fotomhsrekap/21152400${i+1}.jpg`: `https://akademik.polban.ac.id/fotomhsrekap/2115240${i+1}.jpg` ;
        instructorImg.alt = instructors[i];

        let instructorInfo = document.createElement("div");
        instructorInfo.className="d-flex flex-column justify-content-center w-50";

        let instructorName = document.createElement('h5');
        instructorName.textContent = instructors[i];

        let instructorDescription = document.createElement('p');
        instructorDescription.textContent = "D4 - 3A Teknik Informatika";

        instructorInfo.appendChild(instructorName);
        instructorInfo.appendChild(instructorDescription);      

        instructorCard.appendChild(instructorImg);
        instructorCard.appendChild(instructorInfo);
        instructorsContainer.appendChild(instructorCard);
    }
}

renderInstructors()