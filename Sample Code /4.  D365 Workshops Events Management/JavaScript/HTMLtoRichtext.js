//http://jsfiddle.net/JamesMGreene/2b6Lc/

$(document).ready(function () {

    function convertHtmlToRtf(html) {
        if (!(typeof html === "string" && html)) {
            return null;
        }

        var tmpRichText, hasHyperlinks;
        var richText = html;

        // Singleton tags
        richText = richText.replace(/<(?:hr)(?:\s+[^>]*)?\s*[\/]?>/ig, "{\\pard \\brdrb \\brdrs \\brdrw10 \\brsp20 \\par}\n{\\pard\\par}\n");
        richText = richText.replace(/<(?:br)(?:\s+[^>]*)?\s*[\/]?>/ig, "{\\pard\\par}\n");

        // Empty tags
        richText = richText.replace(/<(?:p|div|section|article)(?:\s+[^>]*)?\s*[\/]>/ig, "{\\pard\\par}\n");
        richText = richText.replace(/<(?:[^>]+)\/>/g, "");

        // Hyperlinks
        richText = richText.replace(
            /<a(?:\s+[^>]*)?(?:\s+href=(["'])(?:javascript:void\(0?\);?|#|return false;?|void\(0?\);?|)\1)(?:\s+[^>]*)?>/ig,
            "{{{\n");
        tmpRichText = richText;
        richText = richText.replace(
            /<a(?:\s+[^>]*)?(?:\s+href=(["'])(.+)\1)(?:\s+[^>]*)?>/ig,
            "{\\field{\\*\\fldinst{HYPERLINK\n \"$2\"\n}}{\\fldrslt{\\ul\\cf1\n");
        hasHyperlinks = richText !== tmpRichText;
        richText = richText.replace(/<a(?:\s+[^>]*)?>/ig, "{{{\n");
        richText = richText.replace(/<\/a(?:\s+[^>]*)?>/ig, "\n}}}");

        // Start tags
        richText = richText.replace(/<(?:b|strong)(?:\s+[^>]*)?>/ig, "{\\b\n");
        richText = richText.replace(/<(?:i|em)(?:\s+[^>]*)?>/ig, "{\\i\n");
        richText = richText.replace(/<(?:u|ins)(?:\s+[^>]*)?>/ig, "{\\ul\n");
        richText = richText.replace(/<(?:strike|del)(?:\s+[^>]*)?>/ig, "{\\strike\n");
        richText = richText.replace(/<sup(?:\s+[^>]*)?>/ig, "{\\super\n");
        richText = richText.replace(/<sub(?:\s+[^>]*)?>/ig, "{\\sub\n");
        richText = richText.replace(/<(?:p|div|section|article)(?:\s+[^>]*)?>/ig, "{\\pard\n");

        // End tags
        richText = richText.replace(/<\/(?:p|div|section|article)(?:\s+[^>]*)?>/ig, "\n\\par}\n");
        richText = richText.replace(/<\/(?:b|strong|i|em|u|ins|strike|del|sup|sub)(?:\s+[^>]*)?>/ig, "\n}");

        // Strip any other remaining HTML tags [but leave their contents]
        richText = richText.replace(/<(?:[^>]+)>/g, "");

        // Prefix and suffix the rich text with the necessary syntax
        richText =
            "{\\rtf1\\ansi\n" + (hasHyperlinks ? "{\\colortbl\n;\n\\red0\\green0\\blue255;\n}\n" : "") + richText +
            "\n}";

        return richText;
    }



    var cleanedHtml = $("#test-input-rendered").html().replace(/^\s{8}|\s+$/mg, "").replace(/^\s+/, "").replace(/[ ]{4}/g, "  ");

});

$(document).ready(function () {
    // converts HTML to text using Javascript
    function html2text(html) {
        var tag = document.createElement('control');
        tag.innerHTML = html;

        return tag.innerText;
    }
});
////////////////////////////////////////////
//https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createHTMLDocument

/*
<body>
    <p>Click <a href="javascript:makeDocument()">here</a> to create a new document and insert it below.</p>
    <iframe id="theFrame" src="about:blank" />
</body>
*/


/*
<h1>Event Details</h1>
<iframe frameborder="0" height="400" id="theFrame" scrolling="no" src="about:blank" width="800"></iframe>


<h3>Event Summary</h3>
<iframe frameborder='0' height='400' id='theFrame' scrolling='yes' src='about:blank' width='800'></iframe>

*/
$(document).ready(function () {

    makeDocument();
    var eventHtml = $('#props_eventsummary').val();
    //$(eventHtml).insertAfter( "#props_eventsummary_label" );

    $("eventHtml").appendTo($(".xrm-attribute-value"));

});



function makeDocument() {
    var frame = document.getElementById("theFrame");
    var eventSummaryDetails = $('#props_eventsummary');

    var doc = document.implementation.createHTMLDocument("New Document");
    var p = doc.createElement("p");
    p.innerHTML = eventSummaryDetails.val();

    try {
        doc.body.appendChild(p);
    } catch (e) {
        console.log(e);
    }

    // Copy the new HTML document into the frame

    var destDocument = frame.contentDocument;
    var srcNode = doc.documentElement;
    var newNode = destDocument.importNode(srcNode, true);

    destDocument.replaceChild(newNode, destDocument.documentElement);
}


//////////////////////////////////////////////////////////////////////////////
/*
<h3>Event Summary</h3>
<iframe frameborder='0' height='400' id='theFrame' scrolling='yes' src='about:blank' width='800'></iframe>


<div class="col-md-8"> 
    <div class="Event-Summary-Rich-Text">

    </div>
</div>

<div class="container">
  <h2>Event Summary Details</h2>

  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" frameborder="0" height="150" id="theFrame" scrolling="yes" src="about:blank" style="font-family: sans-serif; "></iframe>
  </div>
</div>

*/
$(document).ready(function () {

    makeDocument();
    var eventHtml = $('#props_eventsummary').val();
    //$(eventHtml).insertAfter( "#props_eventsummary_label" );

    $("eventHtml").appendTo($(".xrm-attribute-value"));

});



function makeDocument() {
    var frame = document.getElementById("theFrame");
    var eventSummaryDetails = $('#props_eventsummary');

    var doc = document.implementation.createHTMLDocument("New Document");
    var p = doc.createElement("p");
    p.innerHTML = eventSummaryDetails.val();

    try {
        doc.body.appendChild(p);
    } catch (e) {
        console.log(e);
    }

    // Copy the new HTML document into the frame

    var destDocument = frame.contentDocument;
    var srcNode = doc.documentElement;
    var newNode = destDocument.importNode(srcNode, true);

    destDocument.replaceChild(newNode, destDocument.documentElement);
}



$(document).ready(function () {
    //Create the HTML Document to be thrown in the IFrame
    makeDocument();


    //Set Doc Width Coordinates
    var docWidth = $(".media").width(),
        imgNb = 10,
        $images = $("#imgs");

    $(window).on("resize", function () {
        docWidth = $(".media").width();
        slidesWidth = $("#imgs").width();
    });

    //Set Mouse Move Properties
    $(document).mousemove(function (e) {
        var mouseX = e.pageX,
            rotate = mouseX * 90 / docWidth,
            mouseY = e.pageY;


        $images.css({
            "-webkit-transform": "rotate3d(0,1,0," + -rotate + "deg)",
            transform: "rotate3d(0,1,0," + -rotate + "deg)"
        });
    });



});

function makeDocument() {
    var frame = document.getElementById("theIFrame");
    var carouselHTML = '<div class="media">' +
        '<div id="imgs">' +
        '<img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="">' +
        '<img src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg" alt="">' +
        '<img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="">' +
        '<img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="">' +
        '<img src="https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg" alt="">' +
        '<img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="">' +
        '<img src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg" alt="">' +
        '<img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="">' +
        '<img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="">' +
        '<img src="https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg" alt="">' +
        '</div>' +
        '</div>';

    var doc = document.implementation.createHTMLDocument("New Document");
    var p = doc.createElement("p");
    p.innerHTML = carouselHTML;

    try {
        doc.body.appendChild(p);
    } catch (e) {
        console.log(e);
    }

    // Copy the new HTML document into the frame

    var destDocument = frame.contentDocument;
    var srcNode = doc.documentElement;
    var newNode = destDocument.importNode(srcNode, true);

    destDocument.replaceChild(newNode, destDocument.documentElement);
}

///////////////////////////////////////////////////

$(document).ready(function () {
    //Create the HTML Document to be thrown in the IFrame
    makeDocument();


    //Set Doc Width Coordinates
    var docWidth = $(".media").width(),
        imgNb = 10,
        $images = $("#imgs");

    $(window).on("resize", function () {
        docWidth = $(".media").width();
        slidesWidth = $("#imgs").width();
    });

    //Set Mouse Move Properties
    $(document).mousemove(function (e) {
        var mouseX = e.pageX,
            rotate = mouseX * 90 / docWidth,
            mouseY = e.pageY;


        $images.css({
            "-webkit-transform": "rotate3d(0,1,0," + -rotate + "deg)",
            transform: "rotate3d(0,1,0," + -rotate + "deg)"
        });
    });



});

function makeDocument() {
    var frame = document.getElementById("theIFrame");
    var carouselHTML = '<div class="media">' +
        '<div id="imgs">' +
        '<img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="">' +
        '<img src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg" alt="">' +
        '<img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="">' +
        '<img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="">' +
        '<img src="https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg" alt="">' +
        '<img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="">' +
        '<img src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg" alt="">' +
        '<img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="">' +
        '<img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="">' +
        '<img src="https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg" alt="">' +
        '</div>' +
        '</div>' +
        '<style>' +
        'body, html {' +
        'margin: 0;' +
        '/*overflow: hidden;*/' +
        'height: 100%;' +
        '}' +
        'body {' +
        'perspective: 1000px;' +
        'transform-style: preserve-3d;' +
        '}' +
        '#imgsIFrame {' +
        'position: absolute;' +
        'top: 50%;' +
        'left: 50%;' +
        'transform-style: preserve-3d;' +
        'transform-origin: 0 0 -50vw;' +
        '}' +
        '#imgsIFrame img {' +
        'position: absolute;' +
        'top: 0;' +
        'left: 0;' +
        'width: 20vw;' +
        'transform-origin: 50% 50% -50vw;' +
        'transform: translate3d(-50%, -50%, 0);' +
        'transform-style: preserve-3d;' +
        '}' +
        '#imgsIFrame img:nth-child(1) {' +
        'transform: translate3d(-50%, -50%, 0) rotate3d(0, 1, 0, 0deg);' +
        '}' +
        '#imgsIFrame img:nth-child(2) {' +
        'transform: translate3d(-50%, -50%, 0) rotate3d(0, 1, 0, 36deg);' +
        '}' +
        ' #imgsIFrame img:nth-child(3) {' +
        'transform: translate3d(-50%, -50%, 0) rotate3d(0, 1, 0, 72deg);' +
        '}' +
        '#imgsIFrame img:nth-child(4) {' +
        'transform: translate3d(-50%, -50%, 0) rotate3d(0, 1, 0, 108deg);' +
        '}' +
        '#imgsIFrame img:nth-child(5) {' +
        'transform: translate3d(-50%, -50%, 0) rotate3d(0, 1, 0, 144deg);' +
        '}' +
        '#imgsIFrame img:nth-child(6) {' +
        'transform: translate3d(-50%, -50%, 0) rotate3d(0, 1, 0, 180deg);' +
        '}' +
        '#imgsIFrame img:nth-child(7) {' +
        'transform: translate3d(-50%, -50%, 0) rotate3d(0, 1, 0, 216deg);' +
        '}' +
        '#imgsIFrame img:nth-child(8) {' +
        'transform: translate3d(-50%, -50%, 0) rotate3d(0, 1, 0, 252deg);' +
        '}' +
        '#imgsIFrame img:nth-child(9) {' +
        'transform: translate3d(-50%, -50%, 0) rotate3d(0, 1, 0, 288deg);' +
        '}' +
        '#imgsIFrame img:nth-child(10) {' +
        'transform: translate3d(-50%, -50%, 0) rotate3d(0, 1, 0, 324deg);' +
        '}' +
        '#imgsIFrame img:nth-child(11) {' +
        'transform: translate3d(-50%, -50%, 0) rotate3d(0, 1, 0, 360deg);' +
        '}' +
        '</style>';

    var doc = document.implementation.createHTMLDocument("New Document");
    var p = doc.createElement("p");
    p.innerHTML = carouselHTML;

    try {
        doc.body.appendChild(p);
    } catch (e) {
        console.log(e);
    }

    // Copy the new HTML document into the frame

    var destDocument = frame.contentDocument;
    var srcNode = doc.documentElement;
    var newNode = destDocument.importNode(srcNode, true);

    destDocument.replaceChild(newNode, destDocument.documentElement);
}