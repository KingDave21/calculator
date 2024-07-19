"use strict"

const input = document.querySelector(".input")
const result = document.querySelector(".result")
const deleteBtn = document.querySelector(".delete")
const keys = document.querySelectorAll(".bottom span")

let answer
let operation = ""
let decimalAdded = false 

const operations = [ "+", "-", "x", "/"]

function handlekeypress(e){}