"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo Daniel!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();

function ausgabeNamen()
{
    // what happens in VEGAS ...
    let firstName = "Evtim";
    console.log("Hallo " + firstName +"!");
}

// console.log(firstName);  // Fehler: Scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamenParam("Evtim"); // call + Argument(e)
// ausgabeNamenParam("Alexander");
// ausgabeNamenParam("Joe");
// Argumente sind Daten für Parameter

function ausgabeNamenParam(firstName) // Fkt mit Parameter
{
    console.log("Hallo " + firstName +"!");
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

// ausgabeNamenParams("Joe","Kaeser");
// ausgabeNamenParams(prompt("Vornamen? :"),prompt("Nachnamen? :"));

function ausgabeNamenParams(firstName, familyName) // Fkt mit Parameter
{
    console.log("Hallo " + firstName + " " + familyName + "!");
}

/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenParams2("Joe","Kaeser");

function ausgabeNamenParams2(firstName, familyName)
{
     // 1. Funktionalität: string composing
     const GAP = " ";
     let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!"
    
    // 2. Funktionalität: string output
    console.log(outputStr);
}

/***** Funktionen 03b *****/
// Trennen der Funktionalitäten | return

// 1. Funktionalität: string composing
output(getString("Max","Mütze")); // call
output("Hallo Max Mütze!");
function getString(firstName,familyName) 
{
    const GAP = " ";
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!"
    return outputStr; // return sendet Daten an den call zurück
    console.log("hi"); // return bricht die Fkt ab!
}


/* 2. Funktionalität: string output */
// output("Hi"); // Call ...
// output(2);
// output(true);
function output(outputData) 
{
    console.log(outputData);    
}
