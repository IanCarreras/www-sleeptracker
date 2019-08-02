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

let listElementsIds = []

let features_list = document.getElementById('features_lists')

function createFeatureList(feature, indx) {
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
    listElementsIds.forEach((element) => {
        if(element[0] !== event.target.id)
        document.getElementById(element[0]).style.display = 'none'
        if(element[0] === event.target.id)
        document.getElementById(element[1]).style.fontSize = '4rem'
        document.getElementById(element[1]).style.marginTop = '-3rem'
        document.getElementById(element[1]).style.color = 'yellow'


        document.getElementById(element[2]).style.width = '80%'
        document.getElementById(element[2]).style.fontSize = '1.5rem'
        document.getElementById(element[2]).style.marginTop = '5rem'
    })
    Object.assign(event.target.style, {width: '100%', height: '25rem'})
}

const leaveEvent = () => {
    listElementsIds.forEach((element) => {
        document.getElementById(element[0]).style.display = ''
        document.getElementById(element[0]).style.width = ''
        document.getElementById(element[0]).style.height = ''

        document.getElementById(element[1]).style.fontSize = '1.3rem'
        document.getElementById(element[1]).style.marginTop = ''
        document.getElementById(element[1]).style.color = 'white'

        document.getElementById(element[2]).style.width = '15rem'
        document.getElementById(element[2]).style.fontSize = ''
        document.getElementById(element[2]).style.marginTop = ''
    })
}

sleepTrackerFeatures.forEach((feature, indx) => {
    let newFeature = createFeatureList(feature, indx)
    newFeature.setAttribute('id', `li_${indx}`)
    listElementsIds.push([newFeature.id, `h3_${indx}`, `p_${indx}`])
        
    features_list.appendChild(newFeature)
    
    let element = document.getElementById(`li_${indx}`)
    element.addEventListener('mouseenter', enterEvent)
    element.addEventListener('mouseleave', leaveEvent)
})

