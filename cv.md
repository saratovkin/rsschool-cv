# Artur Saratovkin

## Contacts
* +375 33 3143909
* svrvtwkxxn@gmail.com
* Minsk, Belarus

## About Myself
Born in Siberia, live in Minsk. My main goal is to always improve myself.

## Skills
* HTML/CSS Basics
* JavaScript Basics
* OOP 
* Git, Github
* Adobe PS Basics 

## Code examples
**Are they the "same"?** from CODEWARS:

*Given two arrays a and b write a function comp(a, b) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.*

```
    function comp(array1, array2){
        if (!array1 || !array2) {
            return false;
        }
        if (array1.length != array2.length) {
            return false;
        }
        for (let i = array1.length - 1; i >= 0; i--) {
            for (let j = array2.length - 1; j >= 0; j--) {
                if (Math.pow(array1[i], 2) == array2[j]) {
                    array2.splice(j, 1);
                    array1.splice(i, 1);
                }
            }
        }
        if (array2.length != 0) {
            return false;
        }
        return true;
    }
```

## Education
* Graduated **BSU** Faculty of Applied Mathematics and Computer Science
* Self-education at *learn.javascript.ru*
* Stage-1 course at **RS-SCHOOL**

## Languages
* Russian (native)
* English (A2+)