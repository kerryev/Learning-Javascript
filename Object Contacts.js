//INTRO TO OBJECT ORIENTED PROGRAMMING

function bookletintro() {
    console.log('THIS IS A CONTACT BOOKLET');
    console.log('');
}

let contacts = {
    evan: function() { //List within propertey of object 'contacts'
        let evan = [{
            'Name': 'Evan',
            'Adress': '123 Butthead Street',
            'City': 'Toronto',
            'Phone Number': '64272727272',
        }];
        console.log(evan);
    },
    aidan: function() {
        let aidan = [{
            'Name': 'Aidan',
            'Adress': '1234 Butthead Street',
            'City': 'Mississauga',
            'Phone Number': '625335353535'
        }];
        console.log(aidan);
    },
}

bookletintro();
contacts.evan();
contacts.aidan();
