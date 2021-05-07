let username = window.prompt('quel est ton nom');

alert('votre nom est ' + username)

let continuer = window.confirm('Accéder au compte');

if (confirm('Accéder au compte')) {
  alert('Connexion de ' + username )
} else {
  alert('deconnexion de ' + username )
}

console.log(username)