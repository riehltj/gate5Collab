var tempData = [];

function sortPoints(tempData) {
    tempData.sort((a, b) => (parseFloat(a.x) > parseFloat(b.x)) ? 1 : -1)
}

function updateScales(myChart) {
    myChart.options.scales.x = {
        type: 'linear',
        title: {
            display: true,
            text: "Mach"
        }
    };

    myChart.options.scales.y = {
        type: 'linear',
        title: {
            display: true,
            text: "Alt (ft)"
        }
    };
    myChart.update();
    console.log("updated")
}

function getUserData() {

    for (let j = 1; j < 8; j++) {
        x = document.getElementById(`cord-x${j}`).value
        y = document.getElementById(`cord-y${j}`).value

        if (x === '' || y === '') {
            tempData[j - 1] = {
                x: "0",
                y: "0"
            }
        } else {
            tempData[j - 1] = {
                x,
                y
            }
        }
        myChart.data.datasets[0].data[j - 1] = tempData[j - 1]

    }
    sortPoints(tempData);
    updateScales(myChart);

}


function init() {
    let data = {
        datasets: [{
            label: 'Operating Envelope',
            backgroundColor: '#ce1126',
            borderColor: '#ce1126',
            data: tempData,
            fill: true
        }]
    };


    let config = {
        type: 'line',
        data,
        options: {
            responsive: false,
        }
    }

    myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}


init();
document.querySelector('.update-chart').addEventListener('click', getUserData)