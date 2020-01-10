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

    var colorDict = {'0':'#d4d4d4', '1':'#d6b0b0', '2':'#d68383'};

    newSelect.change(function(){
        console.log($(this).prop('value'));
        vector[param] = Number($(this).prop('value'));
        console.log(vector)
        $(this).css('background-color', colorDict[$(this).prop('value')]);
        drawTable();
    })
    newSelect.appendTo(selectDiv)
}

likertDiv = $('#inputForm')

createLikert('speed', 'Camera Speed', params, likertDiv);
createLikert('spatialRes', 'Spatial Resolution', params, likertDiv);
createLikert('peakQE', 'Peak QE', params, likertDiv);
createLikert('lowDarkNoise', 'Low Dark Noise', params, likertDiv);
createLikert('lowReadNoise', 'Low Read Noise', params, likertDiv);
createLikert('squareness', 'Imaging (square) Sensor', params, likertDiv);
createLikert('numPixels', 'Number of Pixels', params, likertDiv);




// ok I need a table draw function

function drawTable(){

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
    camKeys.sort(function(x,y){ return (camOrder[y]-camOrder[x]) });
    console.log(camKeys);

    // remove any old tables
    $('table').remove();

    // draw a table to the #outputTable div
    $('<table>').attr('id','resultTable').appendTo($('#outputTable'));
    camKeys.forEach(function(k){
        var newRow = $('<tr>');
        newRow.appendTo($('#resultTable'));
        $('<td>').text(cameraDefs[k]['displayName']).appendTo(newRow);
        $('<td>').text(Math.round(100*camOrder[k])/100).appendTo(newRow);
        var linkTd = $('<td>');
        linkTd.appendTo(newRow)
        $('<a>').text('Link').prop('href', cameraDefs[k]['productLink']).appendTo(linkTd)
    });

}

drawTable();


