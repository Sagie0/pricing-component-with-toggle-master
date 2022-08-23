let annualPricing = false
const toggleSwitch = document.querySelector('.toggle')

let basicPricing = document.querySelector('.basic-card h1')
let professionalPricing = document.querySelector('.professional-card h1')
let masterPricing = document.querySelector('.master-card h1')

let anualBasicPricing = `<span>&dollar;</span>${199.99}`
let anualProfessionalPricing = `<span>&dollar;</span>${249.99}`
let anualMasterPricing = `<span>&dollar;</span>${399.99}`

let monthlyBasicPricing = `<span>&dollar;</span>${19.99}`
let monthlyProfessionalPricing = `<span>&dollar;</span>${24.99}`
let monthlyMasterPricing = `<span>&dollar;</span>${39.99}`

let toggleIdent = document.querySelector('.toggle-ident')

toggleSwitch.onclick = ()=> {
    annualPricing = !annualPricing
    
    
    if (annualPricing){
        document.querySelector('.toggle-ident').style.marginLeft = '20px'  
        basicPricing.innerHTML = anualBasicPricing
        professionalPricing.innerHTML = anualProfessionalPricing
        masterPricing.innerHTML = anualMasterPricing
    } else {
        document.querySelector('.toggle-ident').style.marginLeft = '0px'  
        basicPricing.innerHTML = monthlyBasicPricing
        professionalPricing.innerHTML = monthlyProfessionalPricing
        masterPricing.innerHTML = monthlyMasterPricing
    }
} 

