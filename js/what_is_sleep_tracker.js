const sleepTrackerFeatures = [
    { 
        name: 'Journaling', 
        does: 'Sleep Tracker logs the time you went to bed, the time you wake up, and the different stages of the sleep cycle allowing the user to be aware of when they are sleeping well and when they are not.', 
    },
    { 
        name: 'Rate Your Energy Level', 
        does: 'Click on one of our emojis and rate how you feel before you go to bed, when you wake up, and how you feel during the day.', 
    },
    { 
        name: 'Sleep Tracker on the go', 
        does: 'Integrate with your smart watch and track your sleep when you are not at home.', 
    },
    { 
        name: 'Recommendations', 
        does: 'Sleep Tracker will calculate your average mood and compare it to the time spent in bed.  The app will then recommend after a month of use how much sleep you need', 
    }
]

let listElements = []

let features_list = document.getElementById('features_list')

function featureList(feature, indx) {
    const li = document.createElement('li')
    const list_elements = `
        <span></span>
        <h3 id='h3_${indx}'>${feature.name}</h3>
        <p id='p_${indx}'>${feature.does}</p>
        `

    li.innerHTML = list_elements
    return li
}

const enterEvent = (event) => {
    listElements.forEach((element) => {
        if(element !== event.target.id)
        document.getElementById(element).style.display = 'none'
    })
    Object.assign(event.target.style, {width: '100%', height: '25rem'})
}

const leaveEvent = (event) => {
    listElements.forEach((element) => {
        document.getElementById(element).style.display = ''
        document.getElementById(element).style.width = ''
        document.getElementById(element).style.height = ''
    })
}

sleepTrackerFeatures.forEach((feature, indx) => {
    let newFeature = featureList(feature, indx)
    newFeature.setAttribute('id', `li_${indx}`)
    listElements.push(newFeature.id)
        
    features_list.appendChild(newFeature)
    
    let element = document.getElementById(`li_${indx}`)
    element.addEventListener('mouseenter', enterEvent)
    element.addEventListener('mouseleave', leaveEvent)
})

