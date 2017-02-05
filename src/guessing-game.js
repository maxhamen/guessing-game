class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.value = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.value = max;
    
}
    

    guess() {
        
        this.value = this.min+ Math.ceil((this.max-this.min)/2);
        return this.value;
    }

    lower() {
    this.max= this.value;      
    }

    greater() {
this.min=this.value;        
    }
}

module.exports = GuessingGame;
