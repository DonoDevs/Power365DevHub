$('body > section.page_section.section-search > div > div > div > form > div > div:nth-child(6) > button').append('<a id="USBanner" href="/leaving/index.aspx?link=http://www.whitehouse.gov"><img src="https://www.opm.gov/img/global/Flag.gif" alt="An official website of the United States Government." title="An official website of the United States Government."></a>');

$("#AudienceSelector a").live("click", function () {
    var slide = $(this).attr('href');
    $(this).addClass("current");
    $("a", $(this).parents("li").siblings("li")).removeClass("current");
    // show slide
    $(this).parents("ul").siblings("div").hide();
    $(slide).show();
    return false;
});