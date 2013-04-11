/**
 * @class Person
 * this is person class
 */
function Person() {
    this.name = '';
    this.age = 0;
}

/**
 * @member Person
 * @method setPerson
 * set person's info
 * @param {String} name person's name
 * @param {Number} age  person's age
 */
Person.prototype.setPerson = function(name, age) {
    this.name = name;
    this.age = age;
};

/**
 * @member Person
 * @method getPerson
 * return person's info
 * @return {Object} person's info
 * @return {String} return.name person's name
 * @return {Number} return.age  person's age
 */
Person.prototype.getPerson = function() {
    return {
        name: this.name,
        age: this.age
    };
};


/**
 * @member jQuery
 * @class jQuery.tab
 * jQuery plugin for tab
 */
$.widget('R.tab', {

    /**
     * @member jQuery.tab
     * @property {Object} options  tab options
     */
    options: {
        index: 0
    },

    /**
     * @member jQuery.tab
     * @property {Number} counter  the number of tab
     * @private
     */
    _counter: 0,

    /**
     * @member jQuery.tab
     * @method _create initialze tab
     * @private
     */
    _create: function() {
        var foo = "hoge";
    },

    /**
     * @member jQuery.tab
     * @method select select tab
     * @param {Number} index  tab index
     */
    select: function(index) {
        //select tab function
    }

});