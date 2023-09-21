// Constants

    // Inputs
const select = document.querySelector('select')
const peRatioInput = document.querySelector('.pe-ratio')
const evToEBITRatioInput = document.querySelector('.evtoebit-ratio')
const pbRatioInput = document.querySelector('.pb-ratio')
const epsRatioInput = document.querySelector('.eps-ratio')
const roeInput = document.querySelector('.roe')
const revGrowth5YrInput = document.querySelector('.revenue-growth-5year')
const dteRatioInput = document.querySelector('.dte-ratio')
const icRatioInput = document.querySelector('.ic-ratio')
const operatingMarginInput = document.querySelector('.operating-margin')
const pricetoFreeCashFlowRatioInput = document.querySelector('.price-to-free-cash-flow')
const quickRatioInput = document.querySelector('.quick-ratio')
const button = document.querySelector('button')

// Standards

let peRatioStandard
let epsRatioStandard
let roeStandard
let dteRatioStandard
let icRatioStandard
let evToEBITRatioStandard
let operatingMarginStandard
let quickRatioStandard

//Other Variables

let selected

// Dropdown Event Listener
select.addEventListener('change', (event)=>{
    if (event.target.value === 'agriculture'){
        selected = 'agriculture'
    } else if (event.target.value === 'building-materials'){
        selected = 'building-materials'
    } else if (event.target.value === 'forest-products'){
        selected = 'forest-products'
    } else if (event.target.value === 'metals-and-mining'){
        selected = 'metals-and-mining'
    } else if (event.target.value === 'steel'){
        selected = 'steel'
    } else if (event.target.value === 'vehicles-and-parts'){
        selected = 'vehicles-and-parts'
    } else if (event.target.value === 'furnishings-fixtures-appliances'){
        selected = 'furnishings-fixtures-appliances'
    } else if (event.target.value === 'construction'){
        selected = 'construction'
    } else if (event.target.value === 'manufacturing-apparel-accessories'){
        selected = 'manufacturing-apparel-accessories'
    } else if (event.target.value === 'packaging-containers'){
        selected = 'packaging-containers'
    } else if (event.target.value === 'personal-services'){
        selected = 'personal-services'
    } else if (event.target.value === 'restaurants'){
        selected = 'restaurants'
    } else if (event.target.value === 'retail-cyclical'){
        selected = 'retail-cyclical'
    } else if (event.target.value === 'travel-leisure'){
        selected = 'travel-leisure'
    }
})

// Button Event Listener to Display Info
button.addEventListener('click', ()=> {
    //Values
    let peRatio = parseFloat(peRatioInput.value)
    let pbRatio = parseFloat(pbRatioInput.value)
    let evToEBITRatio = parseFloat(evToEBITRatioInput.value)
    let revGrowth5yr = parseFloat(revGrowth5YrInput.value)
    let epsRatio = parseFloat(epsRatioInput.value)
    let roe = parseFloat(roeInput.value)
    let dteRatio = parseFloat(dteRatioInput.value)
    let icRatio = parseFloat(icRatioInput.value)
    let operatingMargin = parseFloat(operatingMarginInput.value)
    let pricetoFreeCashFlowRatio = parseFloat(pricetoFreeCashFlowRatioInput.value)
    let quickRatio = parseFloat(quickRatioInput.value)
    
    //Scores
    let peRatioScore
    let pbRatioScore
    let evToEBITRatioScore
    let epsRatioScore
    let roeScore
    let revGrowth5yrScore
    let dteRatioScore
    let icRatioScore
    let operatingMarginScore
    let pricetoFreeCashFlowRatioScore
    let quickRatioScore

    if (selected === 'agriculture'){
        if (peRatio !== 13.87){
            peRatioScore = 13.87 - peRatio
            console.log(`P/E Ratio: ${peRatio}`)
        } else {
            peRatioScore = 0
        }
        if (evToEBITRatio !== 7.4){
            evToEBITRatioScore = 7.4 - evToEBITRatio
            console.log(evToEBITRatio)
        } else {
            evToEBITRatioScore = 0
        }
        if (pbRatio !== 2.38){
            pbRatioScore = 2.38 - pbRatio
            console.log(pbRatio)
        } else {
            peRatioScore = 0
        }
        if (epsRatio !== 10.9){
            epsRatioScore = 10.9 - epsRatio
            console.log(epsRatio)
        } else {
            epsRatioScore = 0
        }
        //different source for eps
        if (roe !== 3.61){
            roeScore = 3.61 - roe
            console.log(roe)
        } else {
            roeScore = 0
        }
        if (revGrowth5yr !== 11.60){
            revGrowth5yrScore = 11.60 - revGrowth5yr
            console.log(revGrowth5yr)
        } else {
            revGrowth5yrScore = 0
        }
        if (dteRatio !== 0.72){
            dteRatioScore = 0.72 - dteRatio
            console.log(dteRatio)
        } else {
            dteRatioScore = 0
        }
        if (icRatio !== 7.10){
            icRatioScore = 7.10 - icRatio
            console.log(icRatio)
        } else {
            icRatioScore = 0
        }
        if (operatingMargin !== 9.17){
            operatingMarginScore = 9.17 - operatingMargin
            console.log(operatingMargin)
        } else {
            operatingMarginScore = 0
        }
        if (pricetoFreeCashFlowRatio !== 7.98){
            pricetoFreeCashFlowRatioScore = 7.98 - pricetoFreeCashFlowRatio
            console.log(pricetoFreeCashFlowRatio)
        } else {
            pricetoFreeCashFlowRatioScore = 0
        }
        if (quickRatio !== 1.16){
            quickRatioScore = 1.16 - quickRatio
            console.log(quickRatio)
        } else {
            quickRatioScore = 0
        }
    } else if (selected === 'building-materials'){
        if (peRatio !== 22.68){
            peRatioScore = 22.68 - peRatio
            console.log(peRatio)
        } else {
            peRatioScore = 0
        }
        if (evToEBITRatio !== 14.20){
            evToEBITRatioScore = 14.20 - evToEBITRatio
            console.log(evToEBITRatio)
        } else {
            evToEBITRatioScore = 0
        }
        if (pbRatio !== 3.10){
            pbRatioScore = 3.10 - pbRatio
            console.log(pbRatio)
        } else {
            peRatioScore = 0
        }
        if (epsRatio !== 10.9){
            epsRatioScore = 10.9 - epsRatio
            console.log(epsRatio)
        } else {
            epsRatioScore = 0
        }
        //different source for eps
        if (roe !== 11.92){
            roeScore = 11.92 - roe
            console.log(roe)
        } else {
            roeScore = 0
        }
        if (revGrowth5yr !== 9.10){
            revGrowth5yrScore = 9.10 - revGrowth5yr
            console.log(revGrowth5yr)
        } else {
            revGrowth5yrScore = 0
        }
        if (dteRatio !== 0.67){
            dteRatioScore = 0.67 - dteRatio
            console.log(dteRatio)
        } else {
            dteRatioScore = 0
        }
        if (icRatio !== 7.85){
            icRatioScore = 7.85 - icRatio
            console.log(icRatio)
        } else {
            icRatioScore = 0
        }
        if (operatingMargin !== 13.79){
            operatingMarginScore = 13.79 - operatingMargin
            console.log(operatingMargin)
        } else {
            operatingMarginScore = 0
        }
        if (pricetoFreeCashFlowRatio !== 39.24){
            pricetoFreeCashFlowRatioScore = 39.24 - pricetoFreeCashFlowRatio
            console.log(pricetoFreeCashFlowRatio)
        } else {
            pricetoFreeCashFlowRatioScore = 0
        }
        if (quickRatio !== 1.70){
            quickRatioScore = 1.70 - quickRatio
            console.log(quickRatio)
        } else {
            quickRatioScore = 0
        }
    } else if (selected === 'chemicals'){
        if (peRatio !== 15.62){
            peRatioScore = 15.62 - peRatio
            console.log(peRatio)
        } else {
            peRatioScore = 0
        }
        if (evToEBITRatio !== 10.52){
            evToEBITRatioScore = 10.52 - evToEBITRatio
            console.log(evToEBITRatio)
        } else {
            evToEBITRatioScore = 0
        }
        if (pbRatio !== 2.16){
            pbRatioScore = 2.16 - pbRatio
            console.log(pbRatio)
        } else {
            peRatioScore = 0
        }
        if (epsRatio !== 10.9){
            epsRatioScore = 10.9 - epsRatio
            console.log(epsRatio)
        } else {
            epsRatioScore = 0
        }
        //different source for eps
        if (roe !== 9.68){
            roeScore = 9.68 - roe
            console.log(roe)
        } else {
            roeScore = 0
        }
        if (revGrowth5yr !== 6.20){
            revGrowth5yrScore = 6.20 - revGrowth5yr
            console.log(revGrowth5yr)
        } else {
            revGrowth5yrScore = 0
        }
        if (dteRatio !== 0.61){
            dteRatioScore = 0.61 - dteRatio
            console.log(dteRatio)
        } else {
            dteRatioScore = 0
        }
        if (icRatio !== 7.03){
            icRatioScore = 7.03 - icRatio
            console.log(icRatio)
        } else {
            icRatioScore = 0
        }
        if (operatingMargin !== 9.17){
            operatingMarginScore = 9.17 - operatingMargin
            console.log(operatingMargin)
        } else {
            operatingMarginScore = 0
        }
        if (pricetoFreeCashFlowRatio !== 9.26){
            pricetoFreeCashFlowRatioScore = 9.26 - pricetoFreeCashFlowRatio
            console.log(pricetoFreeCashFlowRatio)
        } else {
            pricetoFreeCashFlowRatioScore = 0
        }
        if (quickRatio !== 1.45){
            quickRatioScore = 1.45 - quickRatio
            console.log(quickRatio)
        } else {
            quickRatioScore = 0
        }
        //accurate data up until this point
    } else if (selected === 'forest-products'){
        if (peRatio !== 13.87){
            peRatioScore = 13.87 - peRatio
            console.log(peRatio)
        } else {
            peRatioScore = 0
        }
        if (evToEBITRatio !== 7.4){
            evToEBITRatioScore = 7.4 - evToEBITRatio
            console.log(evToEBITRatio)
        } else {
            evToEBITRatioScore = 0
        }
        if (pbRatio !== 2.38){
            pbRatioScore = 2.38 - pbRatio
            console.log(pbRatio)
        } else {
            peRatioScore = 0
        }
        if (epsRatio !== 10.9){
            epsRatioScore = 10.9 - epsRatio
            console.log(epsRatio)
        } else {
            epsRatioScore = 0
        }
        //different source for eps
        if (roe !== 3.61){
            roeScore = 3.61 - roe
            console.log(roe)
        } else {
            roeScore = 0
        }
        if (revGrowth5yr !== 11.60){
            revGrowth5yrScore = 11.60 - revGrowth5yr
            console.log(revGrowth5yr)
        } else {
            revGrowth5yrScore = 0
        }
        if (dteRatio !== 0.72){
            dteRatioScore = 0.72 - dteRatio
            console.log(dteRatio)
        } else {
            dteRatioScore = 0
        }
        if (icRatio !== 7.10){
            icRatioScore = 7.10 - icRatio
            console.log(icRatio)
        } else {
            icRatioScore = 0
        }
        if (operatingMargin !== 9.17){
            operatingMarginScore = 9.17 - operatingMargin
            console.log(operatingMargin)
        } else {
            operatingMarginScore = 0
        }
        if (pricetoFreeCashFlowRatio !== 7.98){
            pricetoFreeCashFlowRatioScore = 7.98 - pricetoFreeCashFlowRatio
            console.log(pricetoFreeCashFlowRatio)
        } else {
            pricetoFreeCashFlowRatioScore = 0
        }
        if (quickRatio !== 1.16){
            quickRatioScore = 1.16 - quickRatio
            console.log(quickRatio)
        } else {
            quickRatioScore = 0
        }
    } else if (selected === 'metals-and-mining'){
        if (peRatio !== 13.87){
            peRatioScore = 13.87 - peRatio
            console.log(peRatio)
        } else {
            peRatioScore = 0
        }
        if (evToEBITRatio !== 7.4){
            evToEBITRatioScore = 7.4 - evToEBITRatio
            console.log(evToEBITRatio)
        } else {
            evToEBITRatioScore = 0
        }
        if (pbRatio !== 2.38){
            pbRatioScore = 2.38 - pbRatio
            console.log(pbRatio)
        } else {
            peRatioScore = 0
        }
        if (epsRatio !== 10.9){
            epsRatioScore = 10.9 - epsRatio
            console.log(epsRatio)
        } else {
            epsRatioScore = 0
        }
        //different source for eps
        if (roe !== 3.61){
            roeScore = 3.61 - roe
            console.log(roe)
        } else {
            roeScore = 0
        }
        if (revGrowth5yr !== 11.60){
            revGrowth5yrScore = 11.60 - revGrowth5yr
            console.log(revGrowth5yr)
        } else {
            revGrowth5yrScore = 0
        }
        if (dteRatio !== 0.72){
            dteRatioScore = 0.72 - dteRatio
            console.log(dteRatio)
        } else {
            dteRatioScore = 0
        }
        if (icRatio !== 7.10){
            icRatioScore = 7.10 - icRatio
            console.log(icRatio)
        } else {
            icRatioScore = 0
        }
        if (operatingMargin !== 9.17){
            operatingMarginScore = 9.17 - operatingMargin
            console.log(operatingMargin)
        } else {
            operatingMarginScore = 0
        }
        if (pricetoFreeCashFlowRatio !== 7.98){
            pricetoFreeCashFlowRatioScore = 7.98 - pricetoFreeCashFlowRatio
            console.log(pricetoFreeCashFlowRatio)
        } else {
            pricetoFreeCashFlowRatioScore = 0
        }
        if (quickRatio !== 1.16){
            quickRatioScore = 1.16 - quickRatio
            console.log(quickRatio)
        } else {
            quickRatioScore = 0
        }
    } else if (selected === 'steel'){
        if (peRatio !== 13.87){
            peRatioScore = 13.87 - peRatio
            console.log(peRatio)
        } else {
            peRatioScore = 0
        }
        if (evToEBITRatio !== 7.4){
            evToEBITRatioScore = 7.4 - evToEBITRatio
            console.log(evToEBITRatio)
        } else {
            evToEBITRatioScore = 0
        }
        if (pbRatio !== 2.38){
            pbRatioScore = 2.38 - pbRatio
            console.log(pbRatio)
        } else {
            peRatioScore = 0
        }
        if (epsRatio !== 10.9){
            epsRatioScore = 10.9 - epsRatio
            console.log(epsRatio)
        } else {
            epsRatioScore = 0
        }
        //different source for eps
        if (roe !== 3.61){
            roeScore = 3.61 - roe
            console.log(roe)
        } else {
            roeScore = 0
        }
        if (revGrowth5yr !== 11.60){
            revGrowth5yrScore = 11.60 - revGrowth5yr
            console.log(revGrowth5yr)
        } else {
            revGrowth5yrScore = 0
        }
        if (dteRatio !== 0.72){
            dteRatioScore = 0.72 - dteRatio
            console.log(dteRatio)
        } else {
            dteRatioScore = 0
        }
        if (icRatio !== 7.10){
            icRatioScore = 7.10 - icRatio
            console.log(icRatio)
        } else {
            icRatioScore = 0
        }
        if (operatingMargin !== 9.17){
            operatingMarginScore = 9.17 - operatingMargin
            console.log(operatingMargin)
        } else {
            operatingMarginScore = 0
        }
        if (pricetoFreeCashFlowRatio !== 7.98){
            pricetoFreeCashFlowRatioScore = 7.98 - pricetoFreeCashFlowRatio
            console.log(pricetoFreeCashFlowRatio)
        } else {
            pricetoFreeCashFlowRatioScore = 0
        }
        if (quickRatio !== 1.16){
            quickRatioScore = 1.16 - quickRatio
            console.log(quickRatio)
        } else {
            quickRatioScore = 0
        }
    } else if (selected === 'vehicles-and-parts'){
        if (peRatio !== 13.87){
            peRatioScore = 13.87 - peRatio
            console.log(peRatio)
        } else {
            peRatioScore = 0
        }
        if (evToEBITRatio !== 7.4){
            evToEBITRatioScore = 7.4 - evToEBITRatio
            console.log(evToEBITRatio)
        } else {
            evToEBITRatioScore = 0
        }
        if (pbRatio !== 2.38){
            pbRatioScore = 2.38 - pbRatio
            console.log(pbRatio)
        } else {
            peRatioScore = 0
        }
        if (epsRatio !== 10.9){
            epsRatioScore = 10.9 - epsRatio
            console.log(epsRatio)
        } else {
            epsRatioScore = 0
        }
        //different source for eps
        if (roe !== 3.61){
            roeScore = 3.61 - roe
            console.log(roe)
        } else {
            roeScore = 0
        }
        if (revGrowth5yr !== 11.60){
            revGrowth5yrScore = 11.60 - revGrowth5yr
            console.log(revGrowth5yr)
        } else {
            revGrowth5yrScore = 0
        }
        if (dteRatio !== 0.72){
            dteRatioScore = 0.72 - dteRatio
            console.log(dteRatio)
        } else {
            dteRatioScore = 0
        }
        if (icRatio !== 7.10){
            icRatioScore = 7.10 - icRatio
            console.log(icRatio)
        } else {
            icRatioScore = 0
        }
        if (operatingMargin !== 9.17){
            operatingMarginScore = 9.17 - operatingMargin
            console.log(operatingMargin)
        } else {
            operatingMarginScore = 0
        }
        if (pricetoFreeCashFlowRatio !== 7.98){
            pricetoFreeCashFlowRatioScore = 7.98 - pricetoFreeCashFlowRatio
            console.log(pricetoFreeCashFlowRatio)
        } else {
            pricetoFreeCashFlowRatioScore = 0
        }
        if (quickRatio !== 1.16){
            quickRatioScore = 1.16 - quickRatio
            console.log(quickRatio)
        } else {
            quickRatioScore = 0
        }
    } else if (selected === 'furnishings-fixtures-appliances'){
        if (peRatio !== 13.87){
            peRatioScore = 13.87 - peRatio
            console.log(peRatio)
        } else {
            peRatioScore = 0
        }
        if (evToEBITRatio !== 7.4){
            evToEBITRatioScore = 7.4 - evToEBITRatio
            console.log(evToEBITRatio)
        } else {
            evToEBITRatioScore = 0
        }
        if (pbRatio !== 2.38){
            pbRatioScore = 2.38 - pbRatio
            console.log(pbRatio)
        } else {
            peRatioScore = 0
        }
        if (epsRatio !== 10.9){
            epsRatioScore = 10.9 - epsRatio
            console.log(epsRatio)
        } else {
            epsRatioScore = 0
        }
        //different source for eps
        if (roe !== 3.61){
            roeScore = 3.61 - roe
            console.log(roe)
        } else {
            roeScore = 0
        }
        if (revGrowth5yr !== 11.60){
            revGrowth5yrScore = 11.60 - revGrowth5yr
            console.log(revGrowth5yr)
        } else {
            revGrowth5yrScore = 0
        }
        if (dteRatio !== 0.72){
            dteRatioScore = 0.72 - dteRatio
            console.log(dteRatio)
        } else {
            dteRatioScore = 0
        }
        if (icRatio !== 7.10){
            icRatioScore = 7.10 - icRatio
            console.log(icRatio)
        } else {
            icRatioScore = 0
        }
        if (operatingMargin !== 9.17){
            operatingMarginScore = 9.17 - operatingMargin
            console.log(operatingMargin)
        } else {
            operatingMarginScore = 0
        }
        if (pricetoFreeCashFlowRatio !== 7.98){
            pricetoFreeCashFlowRatioScore = 7.98 - pricetoFreeCashFlowRatio
            console.log(pricetoFreeCashFlowRatio)
        } else {
            pricetoFreeCashFlowRatioScore = 0
        }
        if (quickRatio !== 1.16){
            quickRatioScore = 1.16 - quickRatio
            console.log(quickRatio)
        } else {
            quickRatioScore = 0
        }
    } else if (selected === 'construction'){
        if (peRatio !== 13.87){
            peRatioScore = 13.87 - peRatio
            console.log(peRatio)
        } else {
            peRatioScore = 0
        }
        if (evToEBITRatio !== 7.4){
            evToEBITRatioScore = 7.4 - evToEBITRatio
            console.log(evToEBITRatio)
        } else {
            evToEBITRatioScore = 0
        }
        if (pbRatio !== 2.38){
            pbRatioScore = 2.38 - pbRatio
            console.log(pbRatio)
        } else {
            peRatioScore = 0
        }
        if (epsRatio !== 10.9){
            epsRatioScore = 10.9 - epsRatio
            console.log(epsRatio)
        } else {
            epsRatioScore = 0
        }
        //different source for eps
        if (roe !== 3.61){
            roeScore = 3.61 - roe
            console.log(roe)
        } else {
            roeScore = 0
        }
        if (revGrowth5yr !== 11.60){
            revGrowth5yrScore = 11.60 - revGrowth5yr
            console.log(revGrowth5yr)
        } else {
            revGrowth5yrScore = 0
        }
        if (dteRatio !== 0.72){
            dteRatioScore = 0.72 - dteRatio
            console.log(dteRatio)
        } else {
            dteRatioScore = 0
        }
        if (icRatio !== 7.10){
            icRatioScore = 7.10 - icRatio
            console.log(icRatio)
        } else {
            icRatioScore = 0
        }
        if (operatingMargin !== 9.17){
            operatingMarginScore = 9.17 - operatingMargin
            console.log(operatingMargin)
        } else {
            operatingMarginScore = 0
        }
        if (pricetoFreeCashFlowRatio !== 7.98){
            pricetoFreeCashFlowRatioScore = 7.98 - pricetoFreeCashFlowRatio
            console.log(pricetoFreeCashFlowRatio)
        } else {
            pricetoFreeCashFlowRatioScore = 0
        }
        if (quickRatio !== 1.16){
            quickRatioScore = 1.16 - quickRatio
            console.log(quickRatio)
        } else {
            quickRatioScore = 0
        }
    } else if (selected === 'manufacturing-apparel-accessories'){
        if (peRatio !== 13.87){
            peRatioScore = 13.87 - peRatio
            console.log(peRatio)
        } else {
            peRatioScore = 0
        }
        if (evToEBITRatio !== 7.4){
            evToEBITRatioScore = 7.4 - evToEBITRatio
            console.log(evToEBITRatio)
        } else {
            evToEBITRatioScore = 0
        }
        if (pbRatio !== 2.38){
            pbRatioScore = 2.38 - pbRatio
            console.log(pbRatio)
        } else {
            peRatioScore = 0
        }
        if (epsRatio !== 10.9){
            epsRatioScore = 10.9 - epsRatio
            console.log(epsRatio)
        } else {
            epsRatioScore = 0
        }
        //different source for eps
        if (roe !== 3.61){
            roeScore = 3.61 - roe
            console.log(roe)
        } else {
            roeScore = 0
        }
        if (revGrowth5yr !== 11.60){
            revGrowth5yrScore = 11.60 - revGrowth5yr
            console.log(revGrowth5yr)
        } else {
            revGrowth5yrScore = 0
        }
        if (dteRatio !== 0.72){
            dteRatioScore = 0.72 - dteRatio
            console.log(dteRatio)
        } else {
            dteRatioScore = 0
        }
        if (icRatio !== 7.10){
            icRatioScore = 7.10 - icRatio
            console.log(icRatio)
        } else {
            icRatioScore = 0
        }
        if (operatingMargin !== 9.17){
            operatingMarginScore = 9.17 - operatingMargin
            console.log(operatingMargin)
        } else {
            operatingMarginScore = 0
        }
        if (pricetoFreeCashFlowRatio !== 7.98){
            pricetoFreeCashFlowRatioScore = 7.98 - pricetoFreeCashFlowRatio
            console.log(pricetoFreeCashFlowRatio)
        } else {
            pricetoFreeCashFlowRatioScore = 0
        }
        if (quickRatio !== 1.16){
            quickRatioScore = 1.16 - quickRatio
            console.log(quickRatio)
        } else {
            quickRatioScore = 0
        }
    } else if (selected === 'packaging-containers'){
        if (peRatio !== 13.87){
            peRatioScore = 13.87 - peRatio
            console.log(peRatio)
        } else {
            peRatioScore = 0
        }
        if (evToEBITRatio !== 7.4){
            evToEBITRatioScore = 7.4 - evToEBITRatio
            console.log(evToEBITRatio)
        } else {
            evToEBITRatioScore = 0
        }
        if (pbRatio !== 2.38){
            pbRatioScore = 2.38 - pbRatio
            console.log(pbRatio)
        } else {
            peRatioScore = 0
        }
        if (epsRatio !== 10.9){
            epsRatioScore = 10.9 - epsRatio
            console.log(epsRatio)
        } else {
            epsRatioScore = 0
        }
        //different source for eps
        if (roe !== 3.61){
            roeScore = 3.61 - roe
            console.log(roe)
        } else {
            roeScore = 0
        }
        if (revGrowth5yr !== 11.60){
            revGrowth5yrScore = 11.60 - revGrowth5yr
            console.log(revGrowth5yr)
        } else {
            revGrowth5yrScore = 0
        }
        if (dteRatio !== 0.72){
            dteRatioScore = 0.72 - dteRatio
            console.log(dteRatio)
        } else {
            dteRatioScore = 0
        }
        if (icRatio !== 7.10){
            icRatioScore = 7.10 - icRatio
            console.log(icRatio)
        } else {
            icRatioScore = 0
        }
        if (operatingMargin !== 9.17){
            operatingMarginScore = 9.17 - operatingMargin
            console.log(operatingMargin)
        } else {
            operatingMarginScore = 0
        }
        if (pricetoFreeCashFlowRatio !== 7.98){
            pricetoFreeCashFlowRatioScore = 7.98 - pricetoFreeCashFlowRatio
            console.log(pricetoFreeCashFlowRatio)
        } else {
            pricetoFreeCashFlowRatioScore = 0
        }
        if (quickRatio !== 1.16){
            quickRatioScore = 1.16 - quickRatio
            console.log(quickRatio)
        } else {
            quickRatioScore = 0
        }
    } else if (selected === 'personal-services'){
        if (peRatio !== 13.87){
            peRatioScore = 13.87 - peRatio
            console.log(peRatio)
        } else {
            peRatioScore = 0
        }
        if (evToEBITRatio !== 7.4){
            evToEBITRatioScore = 7.4 - evToEBITRatio
            console.log(evToEBITRatio)
        } else {
            evToEBITRatioScore = 0
        }
        if (pbRatio !== 2.38){
            pbRatioScore = 2.38 - pbRatio
            console.log(pbRatio)
        } else {
            peRatioScore = 0
        }
        if (epsRatio !== 10.9){
            epsRatioScore = 10.9 - epsRatio
            console.log(epsRatio)
        } else {
            epsRatioScore = 0
        }
        //different source for eps
        if (roe !== 3.61){
            roeScore = 3.61 - roe
            console.log(roe)
        } else {
            roeScore = 0
        }
        if (revGrowth5yr !== 11.60){
            revGrowth5yrScore = 11.60 - revGrowth5yr
            console.log(revGrowth5yr)
        } else {
            revGrowth5yrScore = 0
        }
        if (dteRatio !== 0.72){
            dteRatioScore = 0.72 - dteRatio
            console.log(dteRatio)
        } else {
            dteRatioScore = 0
        }
        if (icRatio !== 7.10){
            icRatioScore = 7.10 - icRatio
            console.log(icRatio)
        } else {
            icRatioScore = 0
        }
        if (operatingMargin !== 9.17){
            operatingMarginScore = 9.17 - operatingMargin
            console.log(operatingMargin)
        } else {
            operatingMarginScore = 0
        }
        if (pricetoFreeCashFlowRatio !== 7.98){
            pricetoFreeCashFlowRatioScore = 7.98 - pricetoFreeCashFlowRatio
            console.log(pricetoFreeCashFlowRatio)
        } else {
            pricetoFreeCashFlowRatioScore = 0
        }
        if (quickRatio !== 1.16){
            quickRatioScore = 1.16 - quickRatio
            console.log(quickRatio)
        } else {
            quickRatioScore = 0
        }
    } else if (selected === 'restaurants'){
        if (peRatio !== 13.87){
            peRatioScore = 13.87 - peRatio
            console.log(peRatio)
        } else {
            peRatioScore = 0
        }
        if (evToEBITRatio !== 7.4){
            evToEBITRatioScore = 7.4 - evToEBITRatio
            console.log(evToEBITRatio)
        } else {
            evToEBITRatioScore = 0
        }
        if (pbRatio !== 2.38){
            pbRatioScore = 2.38 - pbRatio
            console.log(pbRatio)
        } else {
            peRatioScore = 0
        }
        if (epsRatio !== 10.9){
            epsRatioScore = 10.9 - epsRatio
            console.log(epsRatio)
        } else {
            epsRatioScore = 0
        }
        //different source for eps
        if (roe !== 3.61){
            roeScore = 3.61 - roe
            console.log(roe)
        } else {
            roeScore = 0
        }
        if (revGrowth5yr !== 11.60){
            revGrowth5yrScore = 11.60 - revGrowth5yr
            console.log(revGrowth5yr)
        } else {
            revGrowth5yrScore = 0
        }
        if (dteRatio !== 0.72){
            dteRatioScore = 0.72 - dteRatio
            console.log(dteRatio)
        } else {
            dteRatioScore = 0
        }
        if (icRatio !== 7.10){
            icRatioScore = 7.10 - icRatio
            console.log(icRatio)
        } else {
            icRatioScore = 0
        }
        if (operatingMargin !== 9.17){
            operatingMarginScore = 9.17 - operatingMargin
            console.log(operatingMargin)
        } else {
            operatingMarginScore = 0
        }
        if (pricetoFreeCashFlowRatio !== 7.98){
            pricetoFreeCashFlowRatioScore = 7.98 - pricetoFreeCashFlowRatio
            console.log(pricetoFreeCashFlowRatio)
        } else {
            pricetoFreeCashFlowRatioScore = 0
        }
        if (quickRatio !== 1.16){
            quickRatioScore = 1.16 - quickRatio
            console.log(quickRatio)
        } else {
            quickRatioScore = 0
        }
    } else if (selected === 'retail-cyclical'){
        if (peRatio !== 13.87){
            peRatioScore = 13.87 - peRatio
            console.log(peRatio)
        } else {
            peRatioScore = 0
        }
        if (evToEBITRatio !== 7.4){
            evToEBITRatioScore = 7.4 - evToEBITRatio
            console.log(evToEBITRatio)
        } else {
            evToEBITRatioScore = 0
        }
        if (pbRatio !== 2.38){
            pbRatioScore = 2.38 - pbRatio
            console.log(pbRatio)
        } else {
            peRatioScore = 0
        }
        if (epsRatio !== 10.9){
            epsRatioScore = 10.9 - epsRatio
            console.log(epsRatio)
        } else {
            epsRatioScore = 0
        }
        //different source for eps
        if (roe !== 3.61){
            roeScore = 3.61 - roe
            console.log(roe)
        } else {
            roeScore = 0
        }
        if (revGrowth5yr !== 11.60){
            revGrowth5yrScore = 11.60 - revGrowth5yr
            console.log(revGrowth5yr)
        } else {
            revGrowth5yrScore = 0
        }
        if (dteRatio !== 0.72){
            dteRatioScore = 0.72 - dteRatio
            console.log(dteRatio)
        } else {
            dteRatioScore = 0
        }
        if (icRatio !== 7.10){
            icRatioScore = 7.10 - icRatio
            console.log(icRatio)
        } else {
            icRatioScore = 0
        }
        if (operatingMargin !== 9.17){
            operatingMarginScore = 9.17 - operatingMargin
            console.log(operatingMargin)
        } else {
            operatingMarginScore = 0
        }
        if (pricetoFreeCashFlowRatio !== 7.98){
            pricetoFreeCashFlowRatioScore = 7.98 - pricetoFreeCashFlowRatio
            console.log(pricetoFreeCashFlowRatio)
        } else {
            pricetoFreeCashFlowRatioScore = 0
        }
        if (quickRatio !== 1.16){
            quickRatioScore = 1.16 - quickRatio
            console.log(quickRatio)
        } else {
            quickRatioScore = 0
        }
    } else if (selected === 'travel-leisure'){
        if (peRatio !== 13.87){
            peRatioScore = 13.87 - peRatio
            console.log(peRatio)
        } else {
            peRatioScore = 0
        }
        if (evToEBITRatio !== 7.4){
            evToEBITRatioScore = 7.4 - evToEBITRatio
            console.log(evToEBITRatio)
        } else {
            evToEBITRatioScore = 0
        }
        if (pbRatio !== 2.38){
            pbRatioScore = 2.38 - pbRatio
            console.log(pbRatio)
        } else {
            peRatioScore = 0
        }
        if (epsRatio !== 10.9){
            epsRatioScore = 10.9 - epsRatio
            console.log(epsRatio)
        } else {
            epsRatioScore = 0
        }
        //different source for eps
        if (roe !== 3.61){
            roeScore = 3.61 - roe
            console.log(roe)
        } else {
            roeScore = 0
        }
        if (revGrowth5yr !== 11.60){
            revGrowth5yrScore = 11.60 - revGrowth5yr
            console.log(revGrowth5yr)
        } else {
            revGrowth5yrScore = 0
        }
        if (dteRatio !== 0.72){
            dteRatioScore = 0.72 - dteRatio
            console.log(dteRatio)
        } else {
            dteRatioScore = 0
        }
        if (icRatio !== 7.10){
            icRatioScore = 7.10 - icRatio
            console.log(icRatio)
        } else {
            icRatioScore = 0
        }
        if (operatingMargin !== 9.17){
            operatingMarginScore = 9.17 - operatingMargin
            console.log(operatingMargin)
        } else {
            operatingMarginScore = 0
        }
        if (pricetoFreeCashFlowRatio !== 7.98){
            pricetoFreeCashFlowRatioScore = 7.98 - pricetoFreeCashFlowRatio
            console.log(pricetoFreeCashFlowRatio)
        } else {
            pricetoFreeCashFlowRatioScore = 0
        }
        if (quickRatio !== 1.16){
            quickRatioScore = 1.16 - quickRatio
            console.log(quickRatio)
        } else {
            quickRatioScore = 0
        }
    }
})




