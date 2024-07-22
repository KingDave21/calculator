"use strict"

const input = document.querySelector(".input")
const result = document.querySelector(".result")
const deleteBtn = document.querySelector(".delete")
const keys = document.querySelectorAll(".bottom span")

let answer
let operation = ""
let decimalAdded = false 

const operations = [ "+", "-", "x", "/"]

function handlekeypress(e){
    const key = e.target.dataset.key
    const lastChar = operation[operation.length -1]

    if (key === "="){
        return
    }
    if (key === "." && decimalAdded){
        return 
    }

    if(operations.indexOf(key) !== -1){
        decimalAdded = false
    }

    if (operation.length === 0 && key === "-"){
        operation += key 
        input.innerHTML = operation
        return
    }

    if (operation.length === 0 && operations.indexOf(key) !== -1) {
        input.innerHTML = operation
        return
    }

    if (operations.indexOf(lastChar) !== -1 && operations.indexOf(key) !== -1) {
        input.innerHTML = operation
        return
    }
}
