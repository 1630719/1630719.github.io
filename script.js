//Sélecteurs
let $form = $("#Form")
let $Nom = $("#NomRecette")
let $Ingredients1 = $("#Ingredients")
let $Ingredients2 = $("#Ingredients2")
let $Ingredients3 = $("#Ingredients3")
let $Quantite1 = $("#Quantite")
let $Quantite2 = $("#Quantite2")
let $Quantite3 = $("#Quantite3")

let $Instructions = $("#InstructionsRecette")

//Labels d'erreur
let $LabelNom = $("#ErreurNom")
let $LabelIngredient1 = $("#ErreurIngredient1")
let $LabelIngredient2 = $("#ErreurIngredient2")
let $LabelIngredient3 = $("#ErreurIngredient3")


$form.on('submit', function ()
{
    $("#RecetteCarte").append('<li class="card col m-2">' +
        '<div class="card-body">' +
            '<h2 class="card-title h5">' + $Nom.val()+ '</h2>'+
            '<div class="card-text">'+
                '<ul>'+
                    '<li>' + $Ingredients1.val() + " (" + $Quantite1.val() + ")" + '</li>' +
                    '<li>' + $Ingredients2.val() + " (" + $Quantite2.val() + ")" +'</li>' +
                    '<li>' + $Ingredients3.val() + " (" + $Quantite3.val() + ")" + '</li>' +
                '</ul>' +
                '<p>' + "Instructions :"  + '<br>' +
                    $Instructions.val() + '</p>' +
            '</div>' +
        '</div>' +
    '</li>')


})
//Création de 2 recettes
function CreerRecettes(recette)
{
    $("#RecetteCarte").append(`
     <li class="card col m-2">
     <div class="card-body">
        <h2 class="card-title h5">${recette.RecipeName}</h2>
        <div class="card-text">
           <ul>
               <li> ${recette.Ingredient1} (${recette.Quantite1})</li> 
               <li> ${recette.Ingredient2} (${recette.Quantite2})</li>  
               <li> ${recette.Ingredient3} (${recette.Quantite3})</li>    
           </ul>
           <p> Instructions : <br>
           ${recette.RecipeInstructions}</p>     
        </div>
     </div>
    </li>`);
}


function afficherToRecettes() {
    $.getJSON('https://6585b1a6022766bcb8c92bfd.mockapi.io/Recettes/')
        .done(function (recette) {
            recette.forEach(function (recette)
            {
                CreerRecettes(recette);
            });
        })
        .fail(function (error) {
            $('.alert').text(error.status).removeClass('d-none');
        });
}

//Appeler les fonctions au chargement de la page
CreerRecettes()
afficherToRecettes()


//Validation nom recette
$Nom.on('blur', function ()
{
    if(!$Nom.val().match("^[a-zA-Z\\s]{3,30}$"))
    {
        $LabelNom.text("Doit contenir seulement des lettres et au maximum 30 caractères.")
    }
    else
    {
        $LabelNom.text("")
    }
})

//Validation des ingrédients requis (3)
$Ingredients1.on('blur', function ()
{
    if(!$Ingredients1.val().match("^[a-zA-Z\\s]{3,25}$"))
    {
        $LabelIngredient1.text("Doit contenir seulement des lettres et au maximum 25 caractères.")
    }
    else
    {
        $LabelIngredient1.text("")
    }
})

$Ingredients2.on('blur', function ()
{
    if(!$Ingredients2.val().match("^[a-zA-Z\\s]{3,25}$"))
    {
        $LabelIngredient2.text("Doit contenir seulement des lettres et au maximum 25 caractères.")
    }
    else
    {
        $LabelIngredient2.text("")
    }
})

$Ingredients3.on('blur', function ()
{
    if(!$Ingredients3.val().match("^[a-zA-Z\\s]{3,25}$"))
    {
        $LabelIngredient3.text("Doit contenir seulement des lettres et au maximum 25 caractères.")
    }
    else
    {
        $LabelIngredient3.text("")
    }
})



//Création de nouvelles recettes

