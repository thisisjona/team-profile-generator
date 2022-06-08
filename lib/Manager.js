const Employee require('./Employee');

class Manager extends Employee {
    constructor(name = "", id, email, roomNumber) {
        super(name, id, email);

        this.roomNumber = roomNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;