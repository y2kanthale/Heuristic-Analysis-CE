function displayResults(principles, siteUrl) {
    const principlesEl = document.getElementById('principles');
    principlesEl.innerHTML = `<h1>Heuristic Analysis for: ${siteUrl}</h1>`;
    principles.forEach(principle => {
        const principleEl = document.createElement('div');
        principleEl.innerHTML = `<h3>${principle.name}</h3>
        <p>${principle.description}</p>
        <p><b>${principle.isMet ? 'Met' : 'Not met'}</b></p>`;
        principlesEl.appendChild(principleEl);
    });
}
