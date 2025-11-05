// alert("Vitaj na mojej stránke!");
// // Spýta sa používateľa, či chce pokračovať
// if (confirm("Chceš pokračovať?")) {
//   // Ak používateľ stlačil "OK", zobrazí túto správu
//   alert("Stlačil si OK.");
// } else {
//   // Ak používateľ stlačil "Cancel", zobrazí túto správu
//   alert("Stlačil si Cancel.");
// }

// Vytvorí premennú 'meno' a otvorí okno na zadanie mena
let meno = prompt("PLease enter your name below:", "mynamexx");

// Skontroluje, či 'meno' nie je prázdne a nie je 'null' (t.j. či používateľ niečo zadal)
if (meno != null && meno != "") {
  // Ak používateľ zadal meno, zobrazí správu s jeho menom
  alert("Hello " + meno + ", Welcome to the world of dreams!");
} else {
  // Ak používateľ nezadal žiadne meno, zobrazí túto správu
  alert("Looks like you didn't enter your name, you can add it later  :)");
}
