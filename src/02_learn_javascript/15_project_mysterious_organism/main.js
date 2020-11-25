// Project Goals
//
// Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near
// hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15
// DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an
// interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep
// sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research
// team to study.
//
// As you progress through the steps, use the terminal and console.log() statements to check the output of your loops
// and functions.



/**
 * returnRandBase()
 * Returns a random DNA base.
 * DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). When returnRandBase() is called, it will
 * randomly select a base and return the base ('A','T','C', or 'G').
 * @returns {string}    Returns a random DNA base
 */
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
};



/**
 * mockUpStrand()
 * Returns a random single stand of DNA containing 15 bases
 * mockUpStrand() is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases.
 * @returns {[]}
 */
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};


/**
 * pAequorFactory()
 * Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:
 * The first parameter is number (no two organisms should have the same number).
 * The second parameter is an array of 15 DNA bases.
 * pAequorFactor() should return an object that contains the properties specimenNum and dna that correspond to the
 * parameters provided.
 * You’ll also add more methods to this returned object in the later steps.
 * @param specimenNum
 * @param dna
 * @returns {{dna: *, specimenNum: *}}
 */
const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum: specimenNum,
        dna: dna,


        /**
         * pAequorFactory.mutate()
         * Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).
         * To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().
         * .mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current
         * base to a different base. Then .mutate() will return the object’s dna.
         * For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to
         * 'T', 'C', or 'G'. But it cannot be 'A' again.
         * @returns {*}
         */
        mutate() {
            let randElementIndex = Math.floor(Math.random() * 15);    // random number from 0 to 14
            let originalBase = dna[randElementIndex];
            let mutatedBase = '';
            do {
                mutatedBase = returnRandBase();
            } while(originalBase === mutatedBase);
            this.dna[randElementIndex] = mutatedBase;
            return this.dna;
        },


        /**
         * compareDNA()
         * Your research team wants to be able to compare the DNA sequences of different P. aequor. You’ll have to add
         * a new method (.compareDNA()) to the returned object of the factory function.
         *
         * .compareDNA() has one parameter, another pAequor object.
         *
         * The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and
         * compute how many bases are identical and in the same locations. .compareDNA() does not return anything, but
         * prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to
         * identify which pAequor objects are being compared.
         *
         * For example:
         * ex1 = ['A', 'C', 'T', 'G']
         * ex2 = ['C', 'A', 'T', 'T']
         *
         * ex1 and ex2 only have the 3rd element in common ('T') and therefore, have 25% (1/4) of their DNA in common.
         * The resulting message would read something along the lines of: specimen #1 and specimen #2 have 25% DNA in
         * common.
         *
         * @param pAequorObject
         */
        compareDNA(pAequorObject) {
            let identicalBases = 0;
            for(let i=0; i<dna.length; i++) {
                if (this.dna[i] === pAequorObject.dna[i]) identicalBases++;
            }
            console.log('Identical basses in DNA: ' + identicalBases + ' of 15 in total.')
            let identicalBasesRatio = identicalBases / 15;
            let identicalBasePercentage = (identicalBasesRatio * 100).toFixed(2);
            console.log('Identical DNA percentage of the two objects: ' + identicalBasePercentage + '%');
        },


        /**
         * willLikelySurvive()
         * P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.
         *
         * In the returned object of pAequorFactory(), add another method .willLikelySurvive().
         *
         * .willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases.
         * Otherwise, .willLikelySurvive() returns false.

         * @returns {boolean}
         */
        willLikelySurvive() {
            let counter = 0;
            dna.forEach(el => {
                if(el === 'C' || el === 'G') counter++;
            });
            let cgRatio = counter / 15;
            // console.log('C/D counter = ' + counter);
            // console.log('C/G ratio = ' + cgRatio);
            return cgRatio >= .6;
        }
    }
}

// create an pAequor objec
let pAequor = pAequorFactory(1, mockUpStrand());
console.log(pAequor);

// mutate the DNA of the object above
let mutatedPAequorDNA = pAequor.mutate();
console.log(mutatedPAequorDNA);

// create a second pAequor object
let pAequorTwo = pAequorFactory(2, mockUpStrand());
console.log(pAequorTwo);

// compare the DNA of pAequor and pAequorTwo
pAequor.compareDNA(pAequorTwo);

// Check it pAequor has an increased likelihood to survive (>= 60% C or D bases)
console.log(pAequor.willLikelySurvive());

// Create 30 pAequor instances
// With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in
// their natural environment. Store these instances in an array for your team to study later.
let pAequorArray = [];
for(let i=0; i<30; i++) {
    pAequorArray.push(
        pAequorFactory(i, mockUpStrand())
    );
}
console.log(pAequorArray);



















