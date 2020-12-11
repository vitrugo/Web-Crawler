$(document).ready(function(){
    var keyword = "";
    var resultArea = $("#results");
    var searchBar = $("#searchBar");
    var searchButton = $(".glyphicon-search");

    var searchUrl = "https://en.wikipedia.org/w/api.php";
    var displayResults = function(){
      $.ajax({
        url: searchUrl,
        dataType: 'jsonp',
        data: {
          action: 'query',
          format: 'json',
          generator: 'search',
            gsrsearch: keyword,
            gsrnamespace: 0,
            gsrlimit: 10,
          prop:'extracts|pageimages',
            exchars: 200,
            exlimit: 'max',
            explaintext: true,
            exintro: true,
            piprop: 'thumbnail',
            pilimit: 'max',
            pithumbsize: 200
        },
        success: function(json){
          var results = json.query.pages;
          $.map(results, function(result){
            var link = "http://localhost/Projeto-lapa-web/Web-Crawler/views/redirecionador.php?id="+result.pageid+"&nome="+result.title;
            var elem1 = $('<a>');
            elem1.attr("href",link);
            elem1.attr("target","_blank");
            var elem2 = $('<li>');
            elem2.append($('<h3>').text(result.title));
            elem2.append($('<p>').text(result.extract));
            elem1.append(elem2);
            resultArea.append(elem1);
          });
          $("footer");
        }
      });   
    };
  
    searchButton.click(function(){
      keyword = searchBar.val();
      resultArea.empty();
      $("footer");
      displayResults(); 
      $("#searchBox").animate({'padding-top':"0"}, 600);
      $(".container-fluid").animate({height:"30vh"}, 600);
    });
  
    searchBar.keypress(function(e){
        if(e.keyCode==13)
        $(searchButton).click();
    });
  
  });
  
  
  
  const startYear = 2020;
    let thisYear = new Date().getFullYear();
    if (thisYear === startYear) {
      $('#cw-year').html(startYear).css('font-size', '13px');
    } else {
      $('#cw-year').html(startYear + '-' + thisYear).css('font-size', '13px');;
    };
  
  