class gender {
    gender = "male";
}

class Person extends gender {
    name = "rijas";

    print = () => {
        console.log("name: " + this.name);
        console.log("gender: " + this.gender);
    }
}

const myPerson = new Person();
myPerson.print();