console.log(countries_data)
alert('Open the console and check if the countries has been loaded')


document.getElementById('population').addEventListener('click', function display_subtitle(){
    let subtitle = document.getElementById('graph-title')
    subtitle.textContent = "10 most populated countries in the world"; 

    const sortedCountries = countries_data.sort((a, b) => b.population - a.population);

    // Then, take only the top 10 most populated countries
    const top10Countries = sortedCountries.slice(0, 10);
    
    // Extract the names and populations of these top 10 countries
    const countryNames = top10Countries.map(country => country.name);
    const countryPopulations = top10Countries.map(country => country.population);
    
    // Adding event listener to the button
    document.getElementById('population').addEventListener('click', function display_subtitle(){
        let subtitle = document.getElementById('graph-title');
        subtitle.textContent = "10 most populated countries in the world"; 
    
        let ctx = document.getElementById('populationChart').getContext('2d');
        const populationChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: countryNames,
                datasets: [{
                    label: 'Population',
                    data: countryPopulations,
                    backgroundColor: 'rgb(242, 161, 11)',
                    borderColor: 'rgb(242, 161, 11) ',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y', // This makes the bar chart horizontal
                scales: {
                    x: {
                        beginAtZero: true,
                        position: 'right' // This moves the x-axis to the right side of the chart
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });

})

document.getElementById('languages').addEventListener('click', function display_subtitle(){
    let subtitle = document.getElementById('graph-title')
    subtitle.textContent = "10 most spoken languages in the world"; 

    
})


