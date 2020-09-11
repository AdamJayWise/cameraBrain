console.log('cameraBrain.js Adam Wise 1-7-2019')

params = {};

// configuration
app = {'numSellingPoints' : 3};

/* 

So what to show before the next presentation
How to present this?
What features / tweaks to add?
    - maybe an info button for each?
    - decouple as much as possible from main js

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

function createLikert(param, label, vector, targetSelection, boolean = false){
    // create a likert pull-down appended to targetElement, which updates the property 
    // 'label' of the object 'vector'

    // set the initial value of vector[param] to zero
    vector[param] = 0;

    var selectDiv = $('<div>');
    selectDiv.prop('class', 'likertDiv')
    selectDiv.appendTo(targetSelection);
    
    var labelDiv = $('<div>');
    labelDiv.appendTo(selectDiv)
    labelDiv.text(label);
    labelDiv.addClass('labelDiv')

    labelDiv.attr('data-toggle','tooltip').attr('title', tooltips[param])
    labelDiv.tooltip();


    var newSelect = $('<select>');
    newSelect.prop('id', param);
    newSelect.prop('class', 'likertSelect');

    // if this likert scale has multiple values, do this:
    if (boolean == false){

        var choices = [' - ', 'Important', 'Very Important', 'Critical'];
        
        choices.forEach(function(choice, n){
            $('<option>').prop('value', n).text(choice).appendTo(newSelect)
        })

        var colorDict = {'0':'#d4d4d4', '1':'#d6b0b0', '2':'#d68383', '3':'#d16666'};

        newSelect.change(function(){
            console.log($(this).prop('value'));
            vector[param] = Number($(this).prop('value'));
            console.log(vector)
            $(this).css('background-color', colorDict[$(this).prop('value')]);
            drawTable();
        })

    }

        // if this likert scale is binary:
        if (boolean == true){

            var choices = ['Not Required', 'Required'];
            
            choices.forEach(function(choice, n){
                $('<option>').prop('value', n).text(choice).appendTo(newSelect)
            })
    
            var colorDict = {'0':'#d4d4d4', '1':'#d16666'};
    
            newSelect.change(function(){
                console.log($(this).prop('value'));
                vector[param] = Number($(this).prop('value'));
                console.log(vector)
                $(this).css('background-color', colorDict[$(this).prop('value')]);
                drawTable();
            })
    
        }

    newSelect.appendTo(selectDiv)
}

likertDiv = $('#generalInput')

createLikert('speed', 'Framerate', params, likertDiv);
createLikert('spatialRes', 'Spatial Resolution', params, likertDiv);

createLikert('peakQE', 'Peak QE', params, likertDiv);
createLikert('QE300', 'QE ~ 300nm', params, likertDiv);
createLikert('QE550', 'QE ~ 550nm', params, likertDiv);
createLikert('QE800', 'QE ~ 800nm', params, likertDiv);
createLikert('QE1000', 'QE ~ 1000nm', params, likertDiv);

createLikert('lowDarkNoise', 'Low Dark Noise', params, likertDiv);
createLikert('lowReadNoise', 'Low Read Noise', params, likertDiv);
createLikert('squareness', 'Square Sensor', params, likertDiv);
createLikert('rectangularness', 'Wide Sensor', params, likertDiv);
createLikert('numPixels', 'Number of Pixels', params, likertDiv);
createLikert('sensorAreamm2', 'Sensor Area', params, likertDiv);

likertDiv = $('#iCamInput')
createLikert('intensified', 'Intensified Camera', params, likertDiv, boolean = true);
createLikert('maxGateSpeed', 'Gate Width', params, likertDiv);

likertDiv = $('#hedInput');
createLikert('hed', 'HED Sensor', params, likertDiv, boolean = true);
createLikert('vacuumFlange', 'Vacuum Flange Mounted', params, likertDiv, boolean = true);
createLikert('BeWindow', 'Beryllium Window', params, likertDiv, boolean = true);
createLikert('QE10eV', 'QE ~ 10eV', params, likertDiv);
createLikert('QE100eV', 'QE ~ 100eV', params, likertDiv);
createLikert('QE1000eV', 'QE ~ 1000eV', params, likertDiv);
createLikert('QE4000eV', 'QE ~ 4000eV', params, likertDiv);
createLikert('QE10000eV', 'QE ~ 10000eV', params, likertDiv);

// add a pull down for how many selling points to show
var sellPointSelect = $('<select>').attr('class','configSelect');

[3,4,5,6,7].forEach(function(choice, n){
    $('<option>').prop('value', Number(choice)).text(`Show ${choice} Key Points Per Camera`).appendTo(sellPointSelect)
})

sellPointSelect.change(function(){
    app['numSellingPoints'] = Number($(this).prop('value'));
    console.log('ding')
    drawTable();
})

sellPointSelect.appendTo($('#inputForm'))



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
            // handled boolean or required parameters
            // if there isn't an entry but the parameter weight is 0, ignore
            // ie, if cameraDefs[key][k] is undefined
            if ( isNaN(Number(cameraDefs[key][k])) && (params[k]==0) ){
                return
            }

            dotProd += Number(cameraDefs[key][k]) * Number(params[k]);
            //report errors if any
            if (isNaN(Number(cameraDefs[key][k]))){
                console.log(key,k,params[k],k)
            }

        })

        // if dotprod is nan, change it to zero to avoid killing sorting
        if (isNaN(dotProd)){
            dotProd = 0;
        }

        //console.log(key, dotProd)
        camOrder[key] = dotProd;
    })
    camKeys.sort(function(x,y){ return (camOrder[y]-camOrder[x]) });
    //console.log(camKeys);

    // remove any old tables
    $('table').remove();

    // draw a table to the #outputTable div
    $('<table>').addClass("table table-striped").attr('id','resultTable').appendTo($('#outputTable'));

    // add column labels to the table
    var labelRow = $('<tr>');
    labelRow.appendTo($('#resultTable'));
    labelRow.append($('<td>').text('').css('text-align','center').css('font-weight','bold'));
    labelRow.append($('<td>').text('Product').css('text-align','center').css('font-weight','bold'));
    labelRow.append($('<td>').text('Suitability')).css('text-align','center').css('font-weight','bold');
    labelRow.append($('<td>').text('')).css('text-align','center').css('font-weight','bold');

    var $tbody = $('<tbody>');
    $tbody.appendTo($('#resultTable'));

    camKeys.forEach(function(k){

        if ( (Math.max(...Object.values(camOrder)) > 0) & (camOrder[k]==0)){
            return
        }


        var newRow = $('<tr>');
        newRow.appendTo($tbody);

        // attach an image of the camera in question
        var imTd = $('<td>');
        imTd.appendTo(newRow);
        if (cameraDefs[k]['imgFile']){
            var $imDiv = $('<div>');
            $imDiv.appendTo(imTd);
            $imDiv.append($('<img>')
                .prop('src',`img/${cameraDefs[k]['imgFile']}`)
                .css('width','100px')
                .css('margin-top','20px')
                );
        }

        // append row with full name of the camera
        var mainTd = $('<td>').appendTo(newRow);
        mainTd.append($('<p>').text(cameraDefs[k]['displayName']).addClass('cameraLabel'))
        
        // append a score for the camera based on the entered parameters - maybe hide this?
        //$('<td>').text(Math.round(100*camOrder[k])/100).css('text-align','center').appendTo(newRow);

        // calculate how many stars to rate this:
        var maxScore = Math.max(...Object.values(camOrder));
        var myScore = Math.round(4 * camOrder[k] / (maxScore + 0.0001));
        var scoreString = [];
        scoreString.length = myScore;
        scoreString.fill('&starf;')
        scoreString = scoreString.join('')
        $('<td>').html(scoreString).css('text-align','center').appendTo(newRow);
        
        // append link for more info about that model
        var linkTd = $('<td>');
        linkTd.appendTo(newRow);
        linkTd.css('text-align','center');
        $('<a>').text('More Info').prop('href', cameraDefs[k]['productLink']).appendTo(linkTd)

        if (sellingPoints[k]){
            var sellPointKeys = Object.keys(sellingPoints[k]);
            //console.log(sellPointKeys)

            var sellPointScores = {};
            sellPointKeys.forEach(function(s){
                sellPointScores[s] = dotProduct(params, sellingPoints[k][s]);
            })

            sellPointKeys.sort(function(x,y){ return (sellPointScores[y]-sellPointScores[x]) });
            //console.log(sellPointScores);
            //console.log(sellPointKeys);

            var sellingPointList = $('<ul>').appendTo(mainTd);
            for(var i = 0; i < app['numSellingPoints']; i++){
                sellingPointList.append($('<li>').html(sellPointKeys[i]))
            }

        }



    });

}

drawTable();


