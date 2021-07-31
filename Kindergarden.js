class Kindergarden {
    constructor(name) {
        this.name = name;
        this.kidLimit = 3;
        this.list = [];
        this.updatedList = [];
    }
    intro() {
        console.log(`"${this.name}" can accept ${this.kidLimit} kids.`);
    }
    updateKidsLimit(number) {
        this.kidLimit = number;
        if (this.list.length <= number) {
            console.log(`"${this.name}" can accept ${number} kids now.`);
        }
        else {
            console.log(`"${this.name}" can not update kids limit right now.`)
        }

    }
    addKid(kidName) {

        if (this.list.length < this.kidLimit) {
            this.list.push(kidName)
            console.log(`${kidName} has entered "${this.name}" kindergarden.`)
        }
        else {
            console.log(`${kidName} can not enter "${this.name}" kindergarden - it's at a full capacity of ${this.kidLimit} kids.`);

        }
    }
    sayHi() {
        let hi = '';
        for (let i = 0; i < this.list.length; i++) {
            const name = this.list[i];
            if (this.list.length === 1) {
                hi += `${name}`;
                break;
            }
            if (name === this.list[this.list.length - 2]) {
                hi += `${this.list[this.list.length - 2]} and ${this.list[this.list.length - 1]}`;
                break;
            }
            else {
                hi += `${name}, `;
            }
        }
        console.log(`"${this.name} " is visited by: ${hi}.`)
    }




    removeKid(kidName) {
        let updatedList = [];

        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] !== kidName) {
                updatedList.push(this.list[i]);
            }

        }
        this.list = updatedList;
        console.log(`${kidName} has left "${this.name}" kindergarden.`);

    }
};




module.exports = Kindergarden;