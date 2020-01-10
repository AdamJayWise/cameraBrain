console.log('cameraBrain.js Adam Wise 1-7-2019')

params = {};

/* 
I want to create a likert scale data entry form on the top, and use that information to create an ordered list of products
at the bottom of the display

ok, so now I want to format a report for each camera, generating a div or something that has the relevant pieces of info laid out
for each camera when the scores are made against the requirements.

should have:
1. camera picture... shouldn't be too hard.  make an img folder with a thumbnail for each camera, have an object that maps
shortnames to pictures
1.5. links to spec sheets / product sites
2. key selling point generator
    this is a nice part that should be fun to figure out.  
    one possible way of doing it would be to add have camera specific key selling points within each camera
    and assign a vector with appropriate parameters to each
    so have a separate object that maps camera short names to selling points
    each selling point has a param vector, then they're scored, and the top 3 or whatever are attached to the report
    should generalize a dotProduct function
    so I'll make a test list of features / selling points with one camera
    of form {cam1 : {selling point 1 : paramvector, ...}, ...}
    then for each camera a score is generated against the selling points, the top 3 are added to the report

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

createLikert('speed', 'Framerate', params, likertDiv);
createLikert('spatialRes', 'Spatial Resolution', params, likertDiv);
createLikert('peakQE', 'Peak QE', params, likertDiv);
createLikert('lowDarkNoise', 'Low Dark Noise', params, likertDiv);
createLikert('lowReadNoise', 'Low Read Noise', params, likertDiv);
createLikert('squareness', 'Imaging (square) Sensor', params, likertDiv);
createLikert('numPixels', 'Number of Pixels', params, likertDiv);


function dotProduct(obj1, obj2){
    keys = Object.keys(obj1);
    dotProductValue = 0;

    keys.forEach(function(k){
        if(obj2[k]){
            dotProductValue += obj1[k] * obj2[k];
        }
    })

    return dotProductValue; 
}

if (dotProduct({'a':1, 'b':20, 'q' : 9},{'a':2, 'b': 0.5, 'd': 100}) !== 12){
    console.log('ERROR WITH DOT PRODUCT');
}


// ok I need a table draw function

function drawTable(){

    var camKeys = Object.keys(cameraDefs);
    var camOrder = {};
    camKeys.forEach(function(key){
        var dotProd = 0;
        Object.keys(params).forEach(function(k){
            dotProd += cameraDefs[key][k] * params[k];
        })
        //console.log(key, dotProd)
        camOrder[key] = dotProd;
    })
    camKeys.sort(function(x,y){ return (camOrder[y]-camOrder[x]) });
    //console.log(camKeys);

    // remove any old tables
    $('table').remove();

    // draw a table to the #outputTable div
    $('<table>').attr('id','resultTable').appendTo($('#outputTable'));
    camKeys.forEach(function(k){
        var newRow = $('<tr>');
        newRow.appendTo($('#resultTable'));

        var mainTd = $('<td>').text(cameraDefs[k]['displayName']).appendTo(newRow);
        
        $('<td>').text(Math.round(100*camOrder[k])/100).appendTo(newRow);
        var linkTd = $('<td>');
        linkTd.appendTo(newRow)
        $('<a>').text('More Info').prop('href', cameraDefs[k]['productLink']).appendTo(linkTd)

        if (sellingPoints[k]){
            var sellPointKeys = Object.keys(sellingPoints[k]);
            console.log(sellPointKeys)

            var sellPointScores = {};
            sellPointKeys.forEach(function(s){
                sellPointScores[s] = dotProduct(params, sellingPoints[k][s]);
            })

            sellPointKeys.sort(function(x,y){ return (sellPointScores[y]-sellPointScores[x]) });
            console.log(sellPointScores);
            console.log(sellPointKeys);

            var sellingPointList = $('<ul>').appendTo(mainTd);
            for(var i = 0; i<3; i++){
                sellingPointList.append($('<li>').text(sellPointKeys[i]))
            }

        }



    });

}

drawTable();


