
console.log("Running on Google only because of manifest.json");

function xpath(xpath_string, dom) {
    var result = [];
    var nodes_snapshot = document.evaluate(xpath_string, dom, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0; i < nodes_snapshot.snapshotLength; i++) {
        result.push(nodes_snapshot.snapshotItem(i));
    }
    return result;
}

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

function createStarelement(stars){
    var div = document.createElement( 'div' );
    var span1=document.createElement('span');
    var span2=document.createElement('span');
    var span3=document.createElement('span');
    var span4=document.createElement('span');
    var span5=document.createElement('span');
    if(stars==1){
        var starnode=document.createTextNode("★");
        var starnode2=document.createTextNode("☆");
        var starnode3=document.createTextNode("☆");
        var starnode4=document.createTextNode("☆");
        var starnode5=document.createTextNode("☆");}

    else if(stars==2){
        var starnode=document.createTextNode("★");
        var starnode2=document.createTextNode("★");
        var starnode3=document.createTextNode("☆");
        var starnode4=document.createTextNode("☆");
        var starnode5=document.createTextNode("☆");

    }
    else if(stars==3){
        var starnode=document.createTextNode("★");
        var starnode2=document.createTextNode("★");
        var starnode3=document.createTextNode("★");
        var starnode4=document.createTextNode("☆");
        var starnode5=document.createTextNode("☆");
    }
    else if(star==4){
        var starnode=document.createTextNode("★");
        var starnode2=document.createTextNode("★");
        var starnode3=document.createTextNode("★");
        var starnode4=document.createTextNode("★");
        var starnode5=document.createTextNode("☆");
    }
    else if(stars==5){
        var starnode=document.createTextNode("★");
        var starnode2=document.createTextNode("★");
        var starnode3=document.createTextNode("★");
        var starnode4=document.createTextNode("★");
        var starnode5=document.createTextNode("★");
    }
    else{
        var starnode=document.createTextNode("☆");
        var starnode2=document.createTextNode("☆");
        var starnode3=document.createTextNode("☆");
        var starnode4=document.createTextNode("☆");
        var starnode5=document.createTextNode("☆");
    }
    span1.appendChild(starnode);
    span2.appendChild(starnode2);
    span3.appendChild(starnode3);
    span4.appendChild(starnode4);
    span5.appendChild(starnode5);
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);
    div.appendChild(span4);
    div.appendChild(span5);
    return div;
}

function createRatingDisplay() {

    var header_node = xpath("//article[contains(@class, 'package')]/header/div", document)[0];
   /* var head_node=xpath("//head/",document)[0];
    var link_node=document.createElement(link);
    link_node.setAttribute("rel","stylesheet");
    link_node.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
    head_node.appendChild(link_node);*/
   
    //span1.setAttribute("class","fa fa-star checked_pj");
    /*span2.setAttribute("class","fa fa-star checked_pj");
    span3.setAttribute("class","fa fa-star checked_pj");
    span4.setAttribute("class","fa fa-star ");
    span5.setAttribute("class","fa fa-star ");*/
   /* var btn = document.createElement("input");
    btn.setAttribute("id", "gh_so_search_btn");
    btn.setAttribute("value", "Search GH and SO");
    btn.setAttribute("aria-label", "Search GH and SO");
    btn.setAttribute("class", "search_btn");
    btn.setAttribute("type", "button");

    header_node.appendChild(div);
    div.appendChild(btn);*/
    var stars=3;
   var div=createStarelement(stars);
    header_node.appendChild(div);

    //button_node.appendChild(btn);
}


createRatingDisplay();


console.log("Finished Running");
