const biner = document.querySelectorAll("#binary tbody td");
const output = document.querySelectorAll("#output tbody td");
const angka = document.querySelectorAll(".angka");

const on = "background: #07041e";
const off = "background: #ffe711";

function Input(binerValue, outputValues, indeksOn) {
    biner.forEach((elemen, indeks) => {
        elemen.innerHTML = binerValue[indeks];
    });

    output.forEach((elemen, indeks) => {
        elemen.innerHTML = outputValues[indeks];
    });

    angka.forEach((elemen, indeks) => {
        elemen.setAttribute('style', indeksOn.includes(indeks) ? on : off);
    });
}

function input0() {
    Input("0000", "1111110", [0, 1, 2, 3, 4, 5]);
}

function input1() {
    Input("1000", "0110000", [1, 2]);
}

function input2() {
    Input("0100", "1101101", [0, 1, 3, 4, 6]); 
}

function input3() {
    Input("1100", "1111001", [0, 1, 2, 3, 6]);
}

function input4() {
    Input("0010", "0110011", [1, 2, 5, 6]);
}

function input5() {
    Input("1010", "1011011", [0, 2, 3, 5, 6]);
}

function input6() {
    Input("0110", "1011111", [0, 2, 3, 4, 5, 6]);
}

function input7() {
    Input("1110", "1110000", [0, 1, 2]);
}

function input8() {
    Input("0001", "1111111", [0, 1, 2, 3, 4, 5, 6]);
}

function input9() {
    Input("1001", "1111011", [0, 1, 2, 3, 5, 6]);
}
