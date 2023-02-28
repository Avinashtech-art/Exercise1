var data = [
    { "firstname": " Ann", "lastname": " Wilson ", "phone": "29378245", "zip": "20001 ", "age": 160, "id": " 123678845 " },
    { "firstname": "Chris ", "lastname": "Morgan", "phone": "729378245", "zip": " 65001", "age": 70, "id": " 12345343636 " },
    { "firstname": " Andrew ", "lastname": " Storm", "phone": "543729378245", "zip": " 70014", "age": 32, "id": "56789648" }
];

var processedData = data.map(function (record) {
    // Remove leading and trailing spaces from all fields
    record.firstname = record.firstname.trim();
    record.lastname = record.lastname.trim();
    record.phone = record.phone.trim();
    record.zip = record.zip.trim();
    record.id = record.id.trim();

    // Concatenate first name and last name to construct "Name"
    record.Name = record.firstname + " " + record.lastname;

    // Format phone number
    if (record.phone.length < 10) {
        record.phone = "0".repeat(10 - record.phone.length) + record.phone;
    } else if (record.phone.length > 10) {
        record.phone = record.phone.slice(0, 10);
    }
    record.phone = record.phone.replace(/(\d{1})(\d{2})(\d{3})/, "$1$2$3");

    // Format age
    if (record.age < 0 || record.age > 150) {
        record.age = "Nil";
    }

    // Mask last 3 digits of Id with #
    record.id = record.id.replace(/(\d{4})$/, "###");

    return record;
});

// Print the processed data
processedData.forEach(function (record) {
    console.log("Name : " + record.Name);
    console.log("Phone : " + record.phone);
    console.log("zip : " + record.zip);
    console.log("Age : " + record.age);
    console.log("Id : " + record.id);
    console.log("-------------------------------------------------------");
});
