var images = [
    '<img src="car1.jfif" alt="">',
    '<img src="car2.jfif" alt="">',
    '<img src="car5.jfif" alt="">',
    '<img src="car3.jfif" alt="">',
    '<img src="car6.jfif" alt="">',
    '<img src="car7.jfif" alt="">',
    '<img src="car8.jfif" alt="">',
    '<img src="car9.jfif" alt="">',
    '<img src="car10.jfif" alt="">'
]

        i=1;
       function displayCars(){
           i = Math.floor(Math.random()* images.length);
            a = images[i];
           display.innerHTML = a;
        //    document.write(images[index]);
           setTimeout("displayCars()", 1000);
       }

    //    const a =2;
    //    alert(a);
       