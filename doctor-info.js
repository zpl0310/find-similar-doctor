const details = document.getElementById('details');
const similar = document.getElementById('similar');
const container = document.getElementsByClassName('container');
const name_header=document.getElementById('doctorName');
const id=getID();
const doc = doctors.filter(doctor => {return doctor.id == id;});
main();

function main() {
    name_header.innerHTML="Doctor "+doc[0].name+"'s Information"
    showDetails(doc);
    showSimilars(doc);
}


function getID() {
    var u = window.location.href;
    var url = new URL(u);
    return url.searchParams.get('id');
}

function showDetails(doc) {
    var sp = document.createElement('div');
    sp.innerHTML = "Specialty: " + doc[0].specialty;
    details.appendChild(sp);

    var address = document.createElement('div');
    address.innerHTML = "Address: " + doc[0].address;
    details.appendChild(address);
    
    var city = document.createElement('div');
    city.innerHTML = "City: " + doc[0].city;
    details.appendChild(city);

    var zip = document.createElement('div');
    zip.innerHTML = "Zipcode: " + doc[0].zip_code;
    details.appendChild(zip);

    var phone = document.createElement('div');
    phone.innerHTML = "Contact: " + doc[0].phone;
    details.appendChild(phone);

    var rating = document.createElement('div');
    rating.innerHTML = "Ratings: " + doc[0].rating;
    details.appendChild(rating);

    var dis = document.createElement('div');
    dis.innerHTML = "Description: " + doc[0].discription;
    details.appendChild(dis);
}

function showSimilars(doc) {
    var spec = doc[0].specialty;
    //var place = doc[0].city;
    const n=doctors.length;
    let count=0,i=id;
    while (count<10){      
        if (doctors[i].id!=id&&doctors[i].specialty===spec){
            var s1 = document.createElement('li');
            var a1 = document.createElement('a');
        
            a1.innerHTML = doctors[i].name;
            a1.setAttribute('href', `./doctor-info.html?id=${doctors[i].id}`);
        
            s1.appendChild(a1);
            s1.classList +='recdoc';
                
            similar.appendChild(s1);
            count++;
        }
        i++; 
        if (i>=n) i%=n;      
    }
}