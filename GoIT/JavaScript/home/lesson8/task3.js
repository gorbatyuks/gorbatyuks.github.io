
function User(fullName) {
    this.fullName = fullName;
    Object.defineProperties(this, {
        firstName: {
            get: function() {
                return this.fullName.split(' ')[0];
            },
            set: function(newFirstName) {
                this.fullName = newFirstName + ' ' + this.lastName;
            }
        },
        lastName: {

            get: function() {
                return this.fullName.split(' ')[1];
            },

            set: function(newLastName) {
                this.fullName = this.firstName + ' ' + newLastName;
            }

        }
    });
}

var vasya = new User('Александр Пушкин');

console.log( vasya.firstName ); // Александр
console.log( vasya.lastName ); // Пушкин
vasya.lastName = 'Толстой';
console.log( vasya.fullName ); // Александр Толстой