document.addEventListener('DOMContentLoaded', () => {
    const analyzeButton = document.getElementById('analyze-button');
    analyzeButton.addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            const activeTab = tabs[0];
            const activeTabUrl = activeTab.url;
            // Perform heuristic analysis on activeTab.url and display results in #principles element
            const principles = [
                {
                    name: "Visibility of system status",
                    description: "The system should always keep users informed about what is going on, through appropriate feedback within reasonable time.",
                    isMet: checkPrinciple({name:"1. Visibility of system status"})
                },
                {
                    name: "Match between system and the real world",
                    description: "The system should speak the users' language, with words, phrases and concepts familiar to the user, rather than system-oriented terms.",
                    isMet: checkPrinciple({name:"2. Match between system and the real world"})
                },
                {
                    name: "User control and freedom",
                    description: "Users often choose system functions by mistake and will need a clearly marked 'emergency exit' to leave the unwanted state without having to go through an extended dialogue.",
                    isMet: checkPrinciple({name:"3. User control and freedom"})
                }
            ];
            principles.forEach(principle => principle.isMet = checkPrinciple(principle));
            displayResults(principles,activeTabUrl);

            // Create an HTML string to display the results in the new tab
            // let resultsHTML = `<html><head><title>Heuristic Analysis Results for ${activeTabUrl}</title></head><body><h1>Heuristic Analysis Results</h1>`;
            // principles.forEach(principle => {
            //     resultsHTML += `<div><h2>${principle.name}</h2><p>${principle.description}</p><p>${principle.isMet ? 'Met' : 'Not met'}</p></div>`;
            // });
            // resultsHTML += `</body></html>`;

            // Create a new tab with the results HTML
            // chrome.tabs.create({
            //     url: `data:text/html,${resultsHTML}`,
            //     active: true
            // });
        });
    });
});
