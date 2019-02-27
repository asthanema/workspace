"use strict";
exports.__esModule = true;
var Contact = /** @class */ (function () {
    function Contact(name, email) {
        this.name = name;
        this.email = email;
    }
    Contact.prototype.display = function () {
        console.log('name: ' + this.name + ' email: ' + this.email);
    };
    return Contact;
}());
exports.Contact = Contact;
var contact = new Contact('astha', '16asthanema@gmail.com');
contact.display();
