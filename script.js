//Sélecteurs
let $form = $("#Form")
let $Nom = $("#NomRecette")
let $Ingredients1 = $("#Ingredients")
let $Ingredients2 = $("#Ingredients2")
let $Ingredients3 = $("#Ingredients3")
let $Ingredients4 = $("#Ingredients4")
let $Ingredients5 = $("#Ingredients5")

//Labels d'erreur
let $LabelNom = $("#ErreurNom")
let $LabelIngredient1 = $("#ErreurIngredient1")
let $LabelIngredient2 = $("#ErreurIngredient2")
let $LabelIngredient3 = $("#ErreurIngredient3")

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

$form.on('submit', function ()
{
    alert("sent")
})


//VALIDER LES INGREDIENTS OPTIONELS SEULEMENT SUR LE CLIC DU BOUTON