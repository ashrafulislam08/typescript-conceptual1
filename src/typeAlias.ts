type TNickname = "Mushkil Asan" | "Ural Ponkhi";
const bondhu:  TNickname =  "Ural Ponkhi"



type A = {
    bondhu: "upokari",
}

type B = {
    sotru: "Opokari"
}


type AB  = A & B;

const robot: AB = {
    bondhu: "upokari",
    sotru: "Opokari"
}

