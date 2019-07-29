const sleepTrackerFeatures = [
    { name: 'Ipsum consequat', does: 'feature 1 does...', img: ''},
    { name: 'Amed sed feugiat', does: 'feature 2 does...', img: ''},
    { name: 'Dolor nullam', does: 'feature 3 does...', img: ''}
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



