function generator() {
    while (w==x || w==y || w==z || x==y || x==z || y==z) {
        var w= Math.floor((Math.random()*90)+1);
        var x= Math.floor((Math.random()*90)+1);
        var y= Math.floor((Math.random()*90)+1);
        var z= Math.floor((Math.random()*90)+1);
    }
    console.log(w,x,y,z);
    document.getElementById('divImage').innerHTML=` 
    <div class="row">
        <div class="column">
            <img src="img/${w}.jpg" alt="Snow" style="width:100%">
        </div>
        <div class="column">
            <img src="img/${x}.jpg" alt="Forest" style="width:100%">
        </div>
    </div>
    <div class="row">
        <div class="column">
            <img src="img/${y}.jpg" alt="Snow" style="width:100%">
        </div>
        <div class="column">
            <img src="img/${z}.jpg" alt="Forest" style="width:100%">
        </div>
    </div>
    
    `;
}