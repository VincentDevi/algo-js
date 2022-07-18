function calcSurface(length, width) {
    return length*width;
}

let surface;
let longue = Number(prompt("La longueur du rectangle est de: "));
let large = Number(prompt("La largeur du rectangle est de: "));

surface= calcSurface(longue, large);
alert(surface);