// Internship Database

const internships = [
    {
        company: "Google",
        role: "Python Developer Intern",
        skills: ["Python", "SQL"]
    },
    {
        company: "Amazon",
        role: "Full Stack Intern",
        skills: ["Python", "React", "SQL"]
    },
    {
        company: "Microsoft",
        role: "Web Developer Intern",
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        company: "Infosys",
        role: "Data Analyst Intern",
        skills: ["Python", "Excel", "SQL"]
    },
    {
        company: "TCS",
        role: "Java Developer Intern",
        skills: ["Java", "SQL"]
    }
];

function findInternships() {

    let input = document.getElementById("skillsInput").value;

    if (input.trim() === "") {
        document.getElementById("results").innerHTML =
            "<p>Please enter your skills.</p>";
        return;
    }

    // Convert user skills to lowercase
    let userSkills = input
        .toLowerCase()
        .split(",")
        .map(skill => skill.trim());

    let resultHTML = "";

    internships.forEach(job => {

        let matched = 0;

        // Count matching skills
        job.skills.forEach(skill => {
            if (userSkills.includes(skill.toLowerCase())) {
                matched++;
            }
        });

        // Calculate percentage
        let matchPercentage =
            Math.round((matched / job.skills.length) * 100);

        // Find missing skills
        let missingSkills = job.skills.filter(skill =>
            !userSkills.includes(skill.toLowerCase())
        );

        resultHTML += `
        <div class="card">
            <h3>${job.company}</h3>

            <p><strong>Role:</strong> ${job.role}</p>

            <p>
                <strong>Match Percentage:</strong>
                ${matchPercentage}%
            </p>

            <p>
                <strong>Required Skills:</strong>
                ${job.skills.join(", ")}
            </p>

            <p>
                <strong>Missing Skills:</strong>
                ${missingSkills.length > 0
                    ? missingSkills.join(", ")
                    : "None"}
            </p>
        </div>
        `;
    });

    document.getElementById("results").innerHTML = resultHTML;
}
        `;
