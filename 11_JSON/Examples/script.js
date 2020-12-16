let companies = `[
    {
      "name": "Praveen Oruganti Technologies",
      "numberOfEmployees": 10000,
      "ceo": "Praveen Oruganti",
      "rating": 4.5
    },
    {
      "name": "Khaja Startup",
      "numberOfEmployees": 3,
      "ceo": "Khaja",
      "rating": 4
    }
  ]`;

console.log(JSON.parse(companies));
console.log(JSON.parse(companies)[0].name);
