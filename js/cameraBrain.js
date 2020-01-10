console.log('cameraBrain.js Adam Wise 1-7-2019')

params = {};

/* 
I want to create a likert scale data entry form on the top, and use that information to create an ordered list of products
at the bottom of the display
*/

//function to make likert scale inputs

function createLikert(param, label, vector, targetSelection){
    // create a likert pull-down appended to targetElement, which updates the property 
    // 'label' of the object 'vector'

    // set the initial value of vector[param] to zero
    vector[param] = 0;

    var selectDiv = $('<div>');
    selectDiv.prop('class', 'likertDiv')
    selectDiv.appendTo(targetSelection);
    selectDiv.text(label);

    var newSelect = $('<select>');
    newSelect.prop('id', param);
    newSelect.prop('class', 'likertSelect');

    var choices = ['Not Important', 'Somewhat Important', 'Very Important']
    
    choices.forEach(function(choice, n){
        $('<option>').prop('value', n).text(choice).appendTo(newSelect)
    })

    newSelect.change(function(){
        console.log($(this).prop('value'));
        vector[param] = Number($(this).prop('value'));
        console.log(vector)
        drawTable();
    })
    newSelect.appendTo(selectDiv)
}

// function to create a likert scale object and attach it to a form object
var newTable = $('<table></table>').attr('id','newTable').appendTo($('#outputTable'))


for(var i = 0; i<10; i++){
    var myRow = $('<tr>').appendTo(newTable); // kinda anonymously append a row to the table
    for (var j = 0; j<10; j++){
        $('<td>').text(j).appendTo(myRow)
    }

}

//unlike d3, appending an element B to element A returns A.

likertDiv = $('#inputForm')

createLikert('speed', 'Camera Speed', params, likertDiv);
createLikert('spatialRes', 'Spatial Resolution', params, likertDiv);
createLikert('peakQE', 'Peak QE', params, likertDiv);
createLikert('lowDarkNoise', 'Low Dark Noise', params, likertDiv);
createLikert('lowReadNoise', 'Low Read Noise', params, likertDiv);
createLikert('squareness', 'Imaging (square) Sensor', params, likertDiv);





// ok I need a table draw function

function drawTable(){
    // remove any old tables
    $('table').remove();

    var camKeys = Object.keys(cameraDefs);
    var camOrder = {};
    camKeys.forEach(function(key){
        var dotProd = 0;
        Object.keys(params).forEach(function(k){
            dotProd += cameraDefs[key][k] * params[k];
        })
        console.log(key, dotProd)
        camOrder[key] = dotProd;
    })
    camKeys.sort(function(x,y){ return (camOrder[x]-camOrder[y]) });
    console.log(camKeys);
}


