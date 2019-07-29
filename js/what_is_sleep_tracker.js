const sleepTrackerFeatures = [
    { 
        name: 'Journaling', 
        does: 'Sleep Tracker logs the time you went to bed, the time you wake up, and the different stages of the sleep cycle allowing the user to be aware of when they are sleeping well and when they are not.', 
        img: ''
    },
    { 
        name: 'Rate Your Energy Level', 
        does: 'Click on one of our emojis and rate how you feel before you go to bed, when you wake up, and how you feel during the day.', 
        img: ''
    },
    { 
        name: 'Sleep Tracker on the go', 
        does: 'Integrate with your smart watch and track your sleep when you are not at home.', 
        img: ''
    },
    { 
        name: 'Recommendations', 
        does: 'Sleep Tracker will calculate your average mood and compare it to the time spent in bed.  The app will then recommend after a month of use how much sleep you need', 
        img: ''
    }
]

let features_list = document.getElementById('features_list')

function featureList(feature) {
    const li = document.createElement('li')
    const list_elements = `
        <span></span>
        <h3>${feature.name}</h3>
        <p>${feature.does}</p>
        `

    li.innerHTML = list_elements
    return li
}

sleepTrackerFeatures.forEach((feature) => {
    let newFeature = featureList(feature)
    features_list.appendChild(newFeature)
})



