function generateSongText(){
    for (let i = 99; i > 0; i--) {
        console.log(generateSingleStanza(i));
        
    }
}

function generateSingleStanza(number){
    
    if(number % 10 >= 6 && number % 10 <= 9){
        return number + " бутылок пива на стене, " + number + " бутылок пива! Возьми одну, пусти по кругу, " + (number - 1) + " бутылок пива!"
    }
    else if (number == 0){
        return "Нет бутылок пива на стене, бутылок пива!"
    }
    else if( number % 10 == 0){
        return number + " бутылок пива на стене, " + number + " бутылок пива! Возьми одну, пусти по кругу, " + (number - 1) + " бутылок пива!"
    }
    else if(number % 10 == 5 ){
        return number + " бутылок пива на стене, " + number + " бутылок пива! Возьми одну, пусти по кругу, " + (number - 1) + " бутылки пива!" 
    }
    else if(number % 10 > 1 && number % 10 < 5){
        return number + " бутылки пива на стене, " + number + " бутылки пива! Возьми одну, пусти по кругу, " + (number - 1) + " бутылки пива!"
    }
    else if (number % 10 == 2){
        return number + " бутылки пива на стене, " + number + " бутылки пива! Возьми одну, пусти по кругу, " + (number - 1) + " бутылка пива!"   
    }
    else if (number % 10 == 1){
        return number + " бутылка пива на стене, " + number + " бутылка пива! Возьми одну, пусти по кругу, Нет бутылок пива!"
    }
    

}
generateSongText();