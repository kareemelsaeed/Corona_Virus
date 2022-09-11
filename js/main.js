const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '718c83e13emsh3b0cc7755f0df41p18aa78jsnf8b87975f834',
		'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
	}
};


let mySel_1 = document.querySelector('.sel_1')
let myRes = document.querySelector('.reslt')
fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', options)
	.then(res => res.json())
    .then(data => {

        mySel_1.addEventListener('change',()=>{
            let myCoun = mySel_1.value
            // console.log(myCoun);

            let myCountry = data.filter(v => {
                return v.Country === myCoun
                
            })
    
            myCountry.forEach(e => {
                // console.log(e.ActiveCases);
                let myFinal = `
                    <div class="btn btn-light w-100 p-2 my-2">
                    Continent : ${e.Continent}
                    </div>

                    <div class="btn btn-warning w-100 p-2 my-2">
                    ActiveCases : ${e.ActiveCases}
                    </div>

                    <div class="btn btn-primary w-100 p-2 my-2">
                    NewCases : ${e.NewCases}
                    </div> 

                    <div class="btn btn-secondary w-100 p-2 my-2">
                    NewDeaths : ${e.NewDeaths}
                    </div>

                    <div class="btn btn-success w-100 p-2 my-2">
                    TotalRecovered : ${e.TotalRecovered}
                    </div>

                    <div class="btn btn-danger w-100 p-2 my-2">
                    TotalDeaths : ${e.TotalDeaths}
                    </div>

                `
                myRes.innerHTML = myFinal
            });
        })



        data.forEach(e => {
            let mySel = `
                <option>${e.Country}</option>
            `
            mySel_1.innerHTML += mySel
        });
    })
