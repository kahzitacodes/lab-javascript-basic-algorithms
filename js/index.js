// Iteration 1: Names and Input

let hacker1 = "Charles Xavier";

console.log("The driver's name is " + hacker1);

let hacker2 = "Jean Grey";

console.log("The navifator's name is " + hacker2);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {

    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);

} else if (hacker1.length < hacker2.length) {

    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

} else if (hacker1.length === hacker2.length) {
    
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

}

// Iteration 3: Loops

let letter1;
let nameInCaptals1 = "";

for (let i = 0; i < hacker1.length; i++) {

    letter1 = hacker1[i].toUpperCase();

    nameInCaptals1 += letter1 + " ";
}

console.log(nameInCaptals1);

let letter2;
let nameInCaptals2 = "";

for (let i = hacker2.length - 1; i >= 0; i--) {

    letter2 =  hacker2[i];

    nameInCaptals2 += letter2;
}

console.log(nameInCaptals2);

let orderResult = hacker1.localeCompare(hacker2);

switch(orderResult) {
    case -1:
        console.log("The driver's name goes first.");
        break;
    case 1:
        console.log("Yo, the navigator goes first definitely.");
        break;
    case 0:
        console.log("What?! You both have the same name?");
        break;
}


let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut libero iaculis, ullamcorper urna eget, lacinia ipsum. Aenean accumsan interdum mauris, sit amet mollis sem ullamcorper vel. Nullam sit amet ligula gravida, pharetra libero id, congue urna. Ut tellus erat, dictum malesuada semper id, pretium at odio. In hac habitasse platea dictumst. Nulla ultrices ex urna, nec pulvinar orci ullamcorper eu. Ut placerat purus et purus varius tempus. Vivamus justo justo, molestie et ipsum eget, tincidunt tristique magna." + 

"Cras nec massa tellus. Ut dictum leo leo, a vehicula odio porta eu. Nunc bibendum lobortis mauris. Aliquam sagittis efficitur orci, at fringilla eros malesuada vitae. Pellentesque ut nisi vulputate, rutrum sem ac, molestie magna. Sed posuere fermentum metus, ac rutrum ipsum hendrerit id. Nulla tempor ultrices dolor, nec fringilla risus. Cras dui nunc, sagittis a interdum auctor, laoreet vel tortor. Phasellus id mollis lorem, at varius eros. Cras sed lorem dapibus, scelerisque est dictum, varius felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam pretium vitae massa vestibulum placerat." + 

"Nulla fermentum sapien ut lacus tristique, non gravida magna facilisis. Integer vitae neque tempor, dictum ipsum ut, commodo quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sagittis, mauris eu facilisis eleifend, neque lorem ullamcorper odio, maximus tempor lectus turpis sit amet nulla. Maecenas quis dui nulla. Curabitur eu libero et est faucibus finibus sed nec velit. Nunc volutpat eget risus nec molestie. Sed tristique sapien neque, nec laoreet leo mollis ac. Sed purus felis, lobortis ut faucibus vel, pellentesque eu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis blandit erat vitae ante laoreet, eget euismod purus commodo. Donec vel ante sed libero consectetur tempor quis id odio. Ut et metus elit.";

let words = loremIpsum.split(" ");

console.log("There are " + words.length + " words inside the 3 paragraphs");

let etWordTimes = 0;

for (let i = 0; i < words.length; i++) {

    if (words[i] === "et") {

        etWordTimes++

    }

}

console.log(`The Latin word \"et\" appears ${etWordTimes} times inside the 3 paragraphs`);

let phraseToCheck = "Was it a car or a cat I saw?";

let phraseObverse = "";
let phraseReverse = "";

for (let i = 0; i < phraseToCheck.length; i++) {

    let letter = phraseToCheck[i];

    if(letter !== " " && letter !=="," && letter !== "!" && letter !== "?" && letter !== "'"){

        phraseObverse += letter.toLowerCase();
    }

}

for (let i = phraseToCheck.length - 1; i >= 0; i--) {

    let letter = phraseToCheck[i];

    if(letter !== " " && letter !=="," && letter !== "!" && letter !== "?" && letter !== "'"){

        phraseReverse += letter.toLowerCase();
    }

}

//console.log(phraseObverse);
//console.log(phraseReverse);

if (phraseObverse === phraseReverse) {

    console.log(`The phrase "${phraseToCheck}" is a Palindrome.`);

} else {

    console.log(`Sorry, the phrase "${phraseToCheck}" isn't a Palindrome.`);

}