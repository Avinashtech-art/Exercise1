
var data = [
    { "firstname": " Ann", "lastname": " Wilson ", "phone": "29378245", "zip": "2 0 00 1 ", "age": 160, "id": " 12345 " },
    { "firstname": "Chris ", "lastname": "Morgan", "phone": "729378245", "zip": " 65 00 1", "age": 70, "id": " 123453543636 " },
    { "firstname": " Andrew ", "lastname": " Storm", "phone": "543729378245", "zip": " 7001 4", "age": 32, "id": "5 648" }
];

function formData(data) {
    for (var i = 0; i < data.length; i++) {
        // Remove leading and trailing whitespace from all fields
        data[i].firstname = data[i].firstname.trim();
        data[i].lastname = data[i].lastname.trim();
        data[i].phone = data[i].phone.trim();
        data[i].zip = data[i].zip.trim();
        data[i].id = data[i].id.trim();

        // Concatenate first name and last name to construct "Name"
        var name = data[i].firstname + " " + data[i].lastname.trim();
        console.log("Name : " + name);

        // Format phone number
        var phone = data[i].phone.replace(/\D/g, '');
        if (phone.length < 10) {
            phone = ("0000000000" + phone).slice(-10);
        } else if (phone.length > 10) {
            phone = phone.slice(0, 10);
        }
        console.log("Phone : " + phone);

        // Print zip code
        console.log("Zip : " + data[i].zip.replace(/\s/g, ''));

        // Print age or "Nil" if not in range
        var age = data[i].age;
        if (age < 0 || age > 150) {
            console.log("Age : Nil");
        } else {
            console.log("Age : " + age);
        }

        // Mask last 3 digits of ID with #
        var id = data[i].id;
        console.log("ID : " + id.replace(/(\d{3})$/, '###'));

        // Print separator
        console.log("-------------------------------------------------------");
    }
}

formData(data);
