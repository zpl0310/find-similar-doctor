const body = document.getElementById('doctors-data');
const name_span = document.getElementById('name');
const specialty_span = document.getElementById('specialty');
const city_span = document.getElementById('city');
const rating_span = document.getElementById('rating');
const input = document.getElementById('input');
let tag_selected='';
input.addEventListener('keyup', searchResults);
name_span.addEventListener('click',()=>{ 
    if (tag_selected!=''){
        document.getElementById(tag_selected).classList.remove('glow');
    }
    tag_selected='name';
    input.value='';
    name_span.classList.add('glow');
 
});
specialty_span.addEventListener('click',()=>{   
    if (tag_selected!=''){
        document.getElementById(tag_selected).classList.remove('glow');
    }
    tag_selected='specialty';
    specialty_span.classList.add('glow');
    input.value='';
})
city_span.addEventListener('click',()=>{  
    if (tag_selected!=''){
        document.getElementById(tag_selected).classList.remove('glow');
    }
    tag_selected='city';
    city_span.classList.add('glow');
    input.value='';
})
rating_span.addEventListener('click',()=>{  
    if (tag_selected!=''){
        document.getElementById(tag_selected).classList.remove('glow');
    }
    tag_selected='rating';
    rating_span.classList.add('glow');
    input.value='';
})

main();

function main() {
    displayData(doctors);
}


function searchResults(e) {
    var value = input.value;
    console.log(value);
    if( value !== ''&&tag_selected!='rating') {
        const data = doctors.filter(
            doctor => {
            return doctor[tag_selected].toLowerCase().includes(value.toLowerCase());
            }
        );
        displayData(data);
    } 
    else if (tag_selected=='rating'){
        const data = doctors.filter(
            doctor=>{
                return doctor['rating']>=value;
            }
        );
        displayData(data);
    }
    else {
        displayData(doctors);
    }
}

function displayData(data) {
    var node = document.createElement('tbody')
    body. innerHTML = '';
    data.map(doctor => {
        var row = document.createElement('tr')
        var rowdata = `
            <td> ${doctor.name} </td>
            <td> ${doctor.address}</td>
            <td> ${doctor.specialty}</td>
            <td> ${doctor.city}</td>
            <td> ${doctor.rating}</td>
            <td><a href="./doctor-info.html?id=${doctor.id}"> more... </a></td>
        `  ;
        row.innerHTML = rowdata;
        row.classList += 'row-data';
        node.appendChild(row);    
    });
    body.innerHTML = node.innerHTML;
}

