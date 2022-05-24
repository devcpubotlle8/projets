window.onload = () => {
    //palette
    document.querySelectorAll('#palette div').forEach(element =>
    {
        //mise de couleur
        element.style.backgroundColor = element. dataset.color
    
        //ecouter le click pou changer de couleur
        element.addEventListener('click', () =>{
         // console.log('je choisi la couleur clickée')
            canvas.setColor(element.dataset.color)
        })
    
     })

    let canvas = new Dessin('#feuille')
// augmenter la taille
    document.querySelector('#plus').addEventListener('click', ()=>
    {
      console.log('j\'augmente la taille')
      canvas.biggerStroke()  
    })

// diminuer la taille

    document.querySelector('#moins').addEventListener('click', ()=>
    {
      console.log('je diminu la taille')
      canvas.smallerStroke()  
    })
// gommer les traits
document.querySelector('#gomme').addEventListener('click', ()=>
{
 console.log( 'gomme-souris')
  canvas.setColor('white')  
})

// croix pour tout supprimer
document.querySelector('#effacer').addEventListener('click', ()=>
{
  console.log('gomme-tout')
  canvas.erase()  
})

// crayon
document.querySelector('#crayon').addEventListener('click', ()=>
{
  console.log('je click')
 canvas.dessine()  
})
/*document.querySelector('#carre').addEventListener('click', ()=>
{
  console.log('je click')
 canvas.draw()  
})*/

 }