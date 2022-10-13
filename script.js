function saveSpeaker(speaker, dataset) {
    const table1 = document.querySelector(`#${dataset} #a`)
    let raw_data = document.createElement('td')
    raw_data.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_shuffle/${dataset}/${speaker}/0.wav" type="audio/mpeg">`
    table1.appendChild(raw_data)
    
    const table2 = document.querySelector(`#${dataset} #b`)
    let raw_data2 = document.createElement('td')
    raw_data2.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_shuffle/${dataset}/${speaker}/1.wav" type="audio/mpeg">`
    table2.appendChild(raw_data2)
    
    const table3 = document.querySelector(`#${dataset} #c`)
    let raw_data3 = document.createElement('td')
    raw_data3.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_shuffle/${dataset}/${speaker}/2.wav" type="audio/mpeg">`
    table3.appendChild(raw_data3)
    
    const table0 = document.querySelector(`#${dataset} #text`)
    let raw_data0 = document.createElement('td')
    fetch(`./wavs_shuffle/${dataset}/${speaker}/script.txt`)
    .then( response => response.text() )
    .then( text => raw_data0.innerText = text )
    table0.appendChild(raw_data0)

    const table4 = document.querySelector(`#${dataset} #d`)
    let raw_data4 = document.createElement('td')
    raw_data4.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_shuffle/${dataset}/${speaker}/3.wav" type="audio/mpeg">`
    table4.appendChild(raw_data4)

    const table5 = document.querySelector(`#${dataset} #e`)
    let raw_data5 = document.createElement('td')
    raw_data5.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_shuffle/${dataset}/${speaker}/4.wav" type="audio/mpeg">`
    table5.appendChild(raw_data5)

    const table6 = document.querySelector(`#${dataset} #speaker`)
    let raw_data6 = document.createElement('td')
    raw_data6.innerText = speaker
    table6.appendChild(raw_data6)

    const table7 = document.querySelector(`#${dataset} #ref`)
    let raw_data7 = document.createElement('td')
    raw_data7.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_shuffle/${dataset}/${speaker}/ref.wav" type="audio/mpeg">`
    table7.appendChild(raw_data7)
}


const speakerArray_LibriTTS = [
    "121", "260", "908", "1995", "2961", 
    "3729", "4077", "4507", "5105", "5639", 
    "6829", "7021", "7127", "7176", "7729",
]

for (var i = 0; i < speakerArray_LibriTTS.length; i++) {
    let speaker = speakerArray_LibriTTS[i]
    saveSpeaker(speaker, 'libritts')
}
