function getAge(person) {
    if ('yearOfDeath' in person)
        return person.yearOfDeath - person.yearOfBirth;
    return (new Date()).getFullYear() - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.sort((person1, person2) => 
        getAge(person1) > getAge(person2) ? -1 : 1
    )[0];
};

// Do not edit below this line
module.exports = findTheOldest;
