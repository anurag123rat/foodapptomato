const data = [
    {
        title: 'Tandoori Kebab',
        description: 'Enjoy your meal with...',
        ratings: 3.1,
        cost: 351,
        time: 10

    },
    {
        title: 'Tandoori Chicken Tikka',
        description: 'Enjoy your meal with...',
        ratings: 4.1,
        cost: 35,
        time: 12
    },
    {
        title: 'Somosa laccha paratha',
        description: 'Enjoy your meal with...',
        ratings: 3.9,
        cost: 501,
        time: 9
    },
    {
        title: 'Jalebi X-Faluda',
        description: 'Enjoy your meal with...',
        ratings: 3.6,
        cost: 112,
        time: 15
    },
    {
        title: 'Gulabjamun',
        description: 'Enjoy your meal with...',
        ratings: 4.3,
        cost: 450,
        time: 17
    },
    {
        title: 'desi chaanch',
        description: 'Enjoy your meal with...',
        ratings: 4.5,
        cost: 399,
        time: 55
    },
    {
        title: 'Thandaai malai',
        description: 'Enjoy your meal with...',
        ratings: 3.8,
        cost: 99,
        time: 7
    },
    {
        title: 'Doodh-dahi desi',
        description: 'Enjoy your meal with...',
        ratings: 4.4,
        cost: 219,
        time: 33
    },
    {
        title: 'Chenamurgi with Parantha',
        description: 'Enjoy your meal with...',
        ratings: 5.1,
        cost: 397,
        time: 21
    },
]

// ---------------------Rating Filter-----------------------

$(document).ready(function () {
    $('.ratingfilter').click(function (e) {
        e.preventDefault();
        printcard(data);
    });

});

function ftf(filetrval) {

    console.log(filetrval)
    $('.pro_dyn_lst').empty();
    const result = data.filter(filterRating);
    console.log(result);
    printcard(result);

}

function filterRating(y) {
    return y.ratings >= 4.0;
}

function printcard(data) {
    var html = '';
    $.map(data, function (Value, index) {
        // console.log(Value.title)
        // console.log(index)
        html += " <div class='col-md-4'> <a href='productdetail.html'> " +
            "<div class='block_tile_spz'> " +
            "<img src='./assets/ngpldihtti.jpg'> " +
            "<div class='tile_inf'>" +
            "<h2>" + Value.title + "</h2>" +
            "<span>" + Value.description + "</span>" +
            " <div>" +
            "<span class='fgf' id='rating' >" + Value.ratings + "</span>" +
            "<span>" + '₹' + Value.cost + "</span>" +
            "</div>" +
            "<div class='d-flex justify-content-end' >" +
            "<span id='delivery_time'>" + Value.time + " min</span>" +
            "</div>" +
            "</div>" +
            "</div>" +
            " </a> </div> ";
    });
    $('.pro_dyn_lst').html(html);
    html = '';
}

// ---------------------Search Filter-----------------------

function search_filtr() {
    var allfiltrsrch = document.getElementById("all_fltr_search").value;
    let filtered = data.filter(data => data.title.toLowerCase().includes(allfiltrsrch.toLowerCase()));
    printcard(filtered);
}

// ---------------------Search Filter rating High to Low-----------

function sortHightoLow() {
    var ratingfilter = data;
    ratingfilter.sort(function (a, b) { return b.ratings - a.ratings });
    printcard(ratingfilter);
    $('.filterClose').text("Rating High to Low");
    $(".filter_sec a:last-child:last").addClass("filtr_close_class x");
}

// ---------------------Search Filter rating Low to High----------
function sortLowtoHigh() {
    var ratingfilter = data;
    ratingfilter.sort(function (a, b) { return a.ratings - b.ratings });
    printcard(ratingfilter);
    $('.filterClose').text("Rating Low to High x");
    $(".filter_sec a:last-child:last").addClass("filtr_close_class");
}

// ---------------------Search Filter Cost-------------------------

function sortCosthightolow() {
    var amtfilter = data;
    amtfilter.sort(function (a, b) { return b.cost - a.cost });
    printcard(amtfilter);
    $('.filterClose').text("Cost High to Low x");
    $(".filter_sec a:last-child:last").addClass("filtr_close_class");
}
// ---------------------Low to High Delivery time Filter------------
function delvrytimeHightoLow() {
    var delvrytime = data;
    delvrytime.sort(function (a, b) { return a.time - b.time });
    printcard(delvrytime);
    $('.filterClose').text("Delivery time high to low x");
    $(".filter_sec a:last-child:last").addClass("filtr_close_class");
   
}

$(".filter_sec a:last-child:last").click(function(){
    window.location = 'productlist.html'
  });

















