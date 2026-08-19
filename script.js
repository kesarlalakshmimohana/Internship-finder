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

function findInternships(){

    const userSkills = document
        .getElementById("skillsInput")
        .value
        .split(",")
        .map(skill => skill.trim());

    let resultHTML = "";

    internships.forEach(job => {

        let matched = 0;

        job.skills.forEach(skill => {
            if(userSkills.includes(skill)){
                matched++;
            }
        });

        let matchPercentage =
            Math.round((matched / job.skills.length) * 100);

        let missingSkills =
            job.skills.filter(skill =>
                !userSkills.includes(skill));

        resultHTML += `
        <div class="card">
            <h3>${job.company}</h3>

            <p><strong>Role:</strong>
            ${job.role}</p>

            <p class="match">
            Match Percentage:
            ${matchPercentage}%</p>

            <p class="missing">
            Missing Skills:
            ${missingSkills.length > 0 ?
            missingSkills.join(", ")
            : "None"}
            </p>
        </div>
        `;
    });

    document.getElementById("results").innerHTML =
    resultHTML;
}
