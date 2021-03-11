let btn = document.querySelector('.submit-btn')
const form = document.querySelector('.marks-form');
let marks1 = document.querySelector('#marks1')
let marks2 = document.querySelector('#marks2')
let marks3= document.querySelector('#marks3')
let marks4 = document.querySelector('#marks4')
let marks5 = document.querySelector('#marks5')
let marks6 = document.querySelector('#marks6')

let mk1 = document.querySelector('#mk1')
let mk2 = document.querySelector('#mk2')
let mk3 = document.querySelector('#mk3')
let mk4 = document.querySelector('#mk4')
let mk5 = document.querySelector('#mk5')
let mk6 = document.querySelector('#mk6')


let g1 = document.querySelector('#g1')
let g2 = document.querySelector('#g2')
let g3 = document.querySelector('#g3')
let g4 = document.querySelector('#g4')
let g5 = document.querySelector('#g5')
let g6 = document.querySelector('#g6')

let gpa = document.querySelector('#gpa')

let boom = document.querySelectorAll('.boom');



let result = document.querySelector('.result');



boom.forEach((orange)=>{
    orange.addEventListener('click',()=>{
        result.style.display = "none"
    })
})



form.addEventListener('submit',(e)=>{
 
        e.preventDefault();

            
let marks1value = marks1.value;
let marks2value = marks2.value;
let marks3value = marks3.value;
let marks4value = marks4.value;
let marks5value = marks5.value;
let marks6value = marks6.value;
    
        if(marks1value == 40){
            mk1.textContent = 1.00
        }
        else if(marks1value >= 80){
            mk1.textContent =4.00
        }
        else if(marks1value < 40){
            mk1.textContent = 0.00
        }
        else if(marks1value == 41){
            mk1.textContent =1.10
        }
        else if(marks1value == 42){
            mk1.textContent =1.20
        }
        else if(marks1value == 43){
            mk1.textContent =1.30
        }
        else if(marks1value == 44){
            mk1.textContent =1.40
        }
        else if(marks1value == 45){
            mk1.textContent =1.50
        }
        else if(marks1value == 46){
            mk1.textContent =1.60
        }
        else if(marks1value == 47){
            mk1.textContent =1.70
        }
        else if(marks1value == 48){
            mk1.textContent =1.80
        }
        else if(marks1value == 49){
            mk1.textContent =1.90
        }
        else if(marks1value == 50){
            mk1.textContent =2.00
        }
        else if(marks1value == 51){
            mk1.textContent =2.06
        } else if(marks1value == 52){
            mk1.textContent =2.12
        } else if(marks1value == 53){
            mk1.textContent =2.18
        } else if(marks1value == 54){
            mk1.textContent =2.24
        } else if(marks1value == 55){
            mk1.textContent =2.30
        } else if(marks1value == 56){
            mk1.textContent =2.36
        } else if(marks1value == 57){
            mk1.textContent =2.43
        } else if(marks1value == 58){
            mk1.textContent =2.50
        } else if(marks1value == 59){
            mk1.textContent =2.57
        } else if(marks1value == 60){
            mk1.textContent =2.64
        } else if(marks1value == 61){
            mk1.textContent =2.70
        } else if(marks1value == 62){
            mk1.textContent =2.78
        } else if(marks1value == 63){
            mk1.textContent =2.85
        } else if(marks1value == 64){
            mk1.textContent =2.92
        } else if(marks1value == 65){
            mk1.textContent =3.00

        } else if(marks1value == 66){
            mk1.textContent =3.07
        } else if(marks1value == 67){
            mk1.textContent =3.14
        } else if(marks1value == 68){
            mk1.textContent =3.20
        } else if(marks1value == 69){
            mk1.textContent =3.27
        } else if(marks1value == 70){
            mk1.textContent =3.34
        } else if(marks1value == 71){
            mk1.textContent =3.40
        } else if(marks1value == 72){
            mk1.textContent =3.47
        } else if(marks1value == 73){
            mk1.textContent =3.54
        } else if(marks1value == 74){
            mk1.textContent =3.60
        } else if(marks1value == 75){
            mk1.textContent =3.67
        } else if(marks1value == 76){
            mk1.textContent = 3.74
        } else if(marks1value == 77){
            mk1.textContent =3.80
        } else if(marks1value == 78){
            mk1.textContent = 3.87
        } else if(marks1value == 79){
            mk1.textContent = 3.94
        }

        // marks 2
        if(marks2value == 40){
            mk2.textContent = 1.00
        }
        else if(marks2value >= 80){
            mk2.textContent =4.00
        }
        else if(marks2value < 40){
            mk2.textContent = 0.00
        }
        else if(marks2value == 41){
            mk2.textContent =1.10
        }
        else if(marks2value == 42){
            mk2.textContent =1.20
        }
        else if(marks2value == 43){
            mk2.textContent =1.30
        }
        else if(marks2value == 44){
            mk2.textContent =1.40
        }
        else if(marks2value == 45){
            mk2.textContent =1.50
        }
        else if(marks2value == 46){
            mk2.textContent =1.60
        }
        else if(marks2value == 47){
            mk2.textContent =1.70
        }
        else if(marks2value == 48){
            mk2.textContent =1.80
        }
        else if(marks2value == 49){
            mk2.textContent =1.90
        }
        else if(marks2value == 50){
            mk2.textContent =2.00
        }
        else if(marks2value == 51){
            mk2.textContent =2.06
        } else if(marks2value == 52){
            mk2.textContent =2.12
        } else if(marks2value == 53){
            mk2.textContent =2.18
        } else if(marks2value == 54){
            mk2.textContent =2.24
        } else if(marks2value == 55){
            mk2.textContent =2.30
        } else if(marks2value == 56){
            mk2.textContent =2.36
        } else if(marks2value == 57){
            mk2.textContent =2.43
        } else if(marks2value == 58){
            mk2.textContent =2.50
        } else if(marks2value == 59){
            mk2.textContent =2.57
        } else if(marks2value == 60){
            mk2.textContent =2.64
        } else if(marks2value == 61){
            mk2.textContent =2.70
        } else if(marks2value == 62){
            mk2.textContent =2.78
        } else if(marks2value == 63){
            mk2.textContent =2.85
        } else if(marks2value == 64){
            mk2.textContent =2.92
        } else if(marks2value == 65){
            mk2.textContent =3.00

        } else if(marks2value == 66){
            mk2.textContent =3.07
        } else if(marks2value == 67){
            mk2.textContent =3.14
        } else if(marks2value == 68){
            mk2.textContent =3.20
        } else if(marks2value == 69){
            mk2.textContent =3.27
        } else if(marks2value == 70){
            mk2.textContent =3.34
        } else if(marks2value == 71){
            mk2.textContent =3.40
        } else if(marks2value == 72){
            mk2.textContent =3.47
        } else if(marks2value == 73){
            mk2.textContent =3.54
        } else if(marks2value == 74){
            mk2.textContent =3.60
        } else if(marks2value == 75){
            mk2.textContent =3.67
        } else if(marks2value == 76){
            mk2.textContent = 3.74
        } else if(marks2value == 77){
            mk2.textContent =3.80
        } else if(marks2value == 78){
            mk2.textContent = 3.87
        } else if(marks2value == 79){
            mk2.textContent = 3.94
        }

        // marks4

        if(marks3value == 40){
            mk3.textContent = 1.00
        }
        else if(marks3value >= 80){
            mk3.textContent =4.00
        }
        else if(marks3value < 40){
            mk3.textContent = 0.00
        }
        else if(marks3value == 41){
            mk3.textContent =1.10
        }
        else if(marks3value == 42){
            mk3.textContent =1.20
        }
        else if(marks3value == 43){
            mk3.textContent =1.30
        }
        else if(marks3value == 44){
            mk3.textContent =1.40
        }
        else if(marks3value == 45){
            mk3.textContent =1.50
        }
        else if(marks3value == 46){
            mk3.textContent =1.60
        }
        else if(marks3value == 47){
            mk3.textContent =1.70
        }
        else if(marks3value == 48){
            mk3.textContent =1.80
        }
        else if(marks3value == 49){
            mk3.textContent =1.90
        }
        else if(marks3value == 50){
            mk3.textContent =2.00
        }
        else if(marks3value == 51){
            mk3.textContent =2.06
        } else if(marks3value == 52){
            mk3.textContent =2.12
        } else if(marks3value == 53){
            mk3.textContent =2.18
        } else if(marks3value == 54){
            mk3.textContent =2.24
        } else if(marks3value == 55){
            mk3.textContent =2.30
        } else if(marks3value == 56){
            mk3.textContent =2.36
        } else if(marks3value == 57){
            mk3.textContent =2.43
        } else if(marks3value == 58){
            mk3.textContent =2.50
        } else if(marks3value == 59){
            mk3.textContent =2.57
        } else if(marks3value == 60){
            mk3.textContent =2.64
        } else if(marks3value == 61){
            mk3.textContent =2.70
        } else if(marks3value == 62){
            mk3.textContent =2.78
        } else if(marks3value == 63){
            mk3.textContent =2.85
        } else if(marks3value == 64){
            mk3.textContent =2.92
        } else if(marks3value == 65){
            mk3.textContent =3.00

        } else if(marks3value == 66){
            mk3.textContent =3.07
        } else if(marks3value == 67){
            mk3.textContent =3.14
        } else if(marks3value == 68){
            mk3.textContent =3.20
        } else if(marks3value == 69){
            mk3.textContent =3.27
        } else if(marks3value == 70){
            mk3.textContent =3.34
        } else if(marks3value == 71){
            mk3.textContent =3.40
        } else if(marks3value == 72){
            mk3.textContent =3.47
        } else if(marks3value == 73){
            mk3.textContent =3.54
        } else if(marks3value == 74){
            mk3.textContent =3.60
        } else if(marks3value == 75){
            mk3.textContent =3.67
        } else if(marks3value == 76){
            mk3.textContent = 3.74
        } else if(marks3value == 77){
            mk3.textContent =3.80
        } else if(marks3value == 78){
            mk3.textContent = 3.87
        } else if(marks3value == 79){
            mk3.textContent = 3.94
        }

        // marks 4

        if(marks4value == 40){
            mk4.textContent = 1.00
        }
        else if(marks4value >= 80){
            mk4.textContent =4.00
        }
        else if(marks4value < 40){
            mk4.textContent = 0.00
        }
        else if(marks4value == 41){
            mk4.textContent =1.10
        }
        else if(marks4value == 42){
            mk4.textContent =1.20
        }
        else if(marks4value == 43){
            mk4.textContent =1.30
        }
        else if(marks4value == 44){
            mk4.textContent =1.40
        }
        else if(marks4value == 45){
            mk4.textContent =1.50
        }
        else if(marks4value == 46){
            mk4.textContent =1.60
        }
        else if(marks4value == 47){
            mk4.textContent =1.70
        }
        else if(marks4value == 48){
            mk4.textContent =1.80
        }
        else if(marks4value == 49){
            mk4.textContent =1.90
        }
        else if(marks4value == 50){
            mk4.textContent =2.00
        }
        else if(marks4value == 51){
            mk4.textContent =2.06
        } else if(marks4value == 52){
            mk4.textContent =2.12
        } else if(marks4value == 53){
            mk4.textContent =2.18
        } else if(marks4value == 54){
            mk4.textContent =2.24
        } else if(marks4value == 55){
            mk4.textContent =2.30
        } else if(marks4value == 56){
            mk4.textContent =2.36
        } else if(marks4value == 57){
            mk4.textContent =2.43
        } else if(marks4value == 58){
            mk4.textContent =2.50
        } else if(marks4value == 59){
            mk4.textContent =2.57
        } else if(marks4value == 60){
            mk4.textContent =2.64
        } else if(marks4value == 61){
            mk4.textContent =2.70
        } else if(marks4value == 62){
            mk4.textContent =2.78
        } else if(marks4value == 63){
            mk4.textContent =2.85
        } else if(marks4value == 64){
            mk4.textContent =2.92
        } else if(marks4value == 65){
            mk4.textContent =3.00

        } else if(marks4value == 66){
            mk4.textContent =3.07
        } else if(marks4value == 67){
            mk4.textContent =3.14
        } else if(marks4value == 68){
            mk4.textContent =3.20
        } else if(marks4value == 69){
            mk4.textContent =3.27
        } else if(marks4value == 70){
            mk4.textContent =3.34
        } else if(marks4value == 71){
            mk4.textContent =3.40
        } else if(marks4value == 72){
            mk4.textContent =3.47
        } else if(marks4value == 73){
            mk4.textContent =3.54
        } else if(marks4value == 74){
            mk4.textContent =3.60
        } else if(marks4value == 75){
            mk4.textContent =3.67
        } else if(marks4value == 76){
            mk4.textContent = 3.74
        } else if(marks4value == 77){
            mk4.textContent =3.80
        } else if(marks4value == 78){
            mk4.textContent = 3.87
        } else if(marks4value == 79){
            mk4.textContent = 3.94
        }

        // marks 5

        
        if(marks5value == 40){
            mk5.textContent = 1.00
        }
        else if(marks5value > 80){
            mk5.textContent =4.00
        }
        else if(marks5value < 40){
            mk5.textContent = 0.00
        }
        else if(marks5value == 41){
            mk5.textContent =1.10
        }
        else if(marks5value == 42){
            mk5.textContent =1.20
        }
        else if(marks5value == 43){
            mk5.textContent =1.30
        }
        else if(marks5value == 44){
            mk5.textContent =1.40
        }
        else if(marks5value == 45){
            mk5.textContent =1.50
        }
        else if(marks5value == 46){
            mk5.textContent =1.60
        }
        else if(marks5value == 47){
            mk5.textContent =1.70
        }
        else if(marks5value == 48){
            mk5.textContent =1.80
        }
        else if(marks5value == 49){
            mk5.textContent =1.90
        }
        else if(marks5value == 50){
            mk5.textContent =2.00
        }
        else if(marks5value == 51){
            mk5.textContent =2.06
        } else if(marks5value == 52){
            mk5.textContent =2.12
        } else if(marks5value == 53){
            mk5.textContent =2.18
        } else if(marks5value == 54){
            mk5.textContent =2.24
        } else if(marks5value == 55){
            mk5.textContent =2.30
        } else if(marks5value == 56){
            mk5.textContent =2.36
        } else if(marks5value == 57){
            mk5.textContent =2.43
        } else if(marks5value == 58){
            mk5.textContent =2.50
        } else if(marks5value == 59){
            mk5.textContent =2.57
        } else if(marks5value == 60){
            mk5.textContent =2.64
        } else if(marks5value == 61){
            mk5.textContent =2.70
        } else if(marks5value == 62){
            mk5.textContent =2.78
        } else if(marks5value == 63){
            mk5.textContent =2.85
        } else if(marks5value == 64){
            mk5.textContent =2.92
        } else if(marks5value == 65){
            mk5.textContent =3.00

        } else if(marks5value == 66){
            mk5.textContent =3.07
        } else if(marks5value == 67){
            mk5.textContent =3.14
        } else if(marks5value == 68){
            mk5.textContent =3.20
        } else if(marks5value == 69){
            mk5.textContent =3.27
        } else if(marks5value == 70){
            mk5.textContent =3.34
        } else if(marks5value == 71){
            mk5.textContent =3.40
        } else if(marks5value == 72){
            mk5.textContent =3.47
        } else if(marks5value == 73){
            mk5.textContent =3.54
        } else if(marks5value == 74){
            mk5.textContent =3.60
        } else if(marks5value == 75){
            mk5.textContent =3.67
        } else if(marks5value == 76){
            mk5.textContent = 3.74
        } else if(marks5value == 77){
            mk5.textContent =3.80
        } else if(marks5value == 78){
            mk5.textContent = 3.87
        } else if(marks5value == 79){
            mk5.textContent = 3.94
        }

        // marks 6

        
        if(marks6value == 40){
            mk6.textContent = 1.00
        }
        else if(marks6value >= 80){
            mk6.textContent =4.00
        }
        else if(marks6value < 40){
            mk6.textContent = 0.00
        }
        else if(marks6value == 41){
            mk6.textContent =1.10
        }
        else if(marks6value == 42){
            mk6.textContent =1.20
        }
        else if(marks6value == 43){
            mk6.textContent =1.30
        }
        else if(marks6value == 44){
            mk6.textContent =1.40
        }
        else if(marks6value == 45){
            mk6.textContent =1.50
        }
        else if(marks6value == 46){
            mk6.textContent =1.60
        }
        else if(marks6value == 47){
            mk6.textContent =1.70
        }
        else if(marks6value == 48){
            mk6.textContent =1.80
        }
        else if(marks6value == 49){
            mk6.textContent =1.90
        }
        else if(marks6value == 50){
            mk6.textContent =2.00
        }
        else if(marks6value == 51){
            mk6.textContent =2.06
        } else if(marks6value == 52){
            mk6.textContent =2.12
        } else if(marks6value == 53){
            mk6.textContent =2.18
        } else if(marks6value == 54){
            mk6.textContent =2.24
        } else if(marks6value == 55){
            mk6.textContent =2.30
        } else if(marks6value == 56){
            mk6.textContent =2.36
        } else if(marks6value == 57){
            mk6.textContent =2.43
        } else if(marks6value == 58){
            mk6.textContent =2.50
        } else if(marks6value == 59){
            mk6.textContent =2.57
        } else if(marks6value == 60){
            mk6.textContent =2.64
        } else if(marks6value == 61){
            mk6.textContent =2.70
        } else if(marks6value == 62){
            mk6.textContent =2.78
        } else if(marks6value == 63){
            mk6.textContent =2.85
        } else if(marks6value == 64){
            mk6.textContent =2.92
        } else if(marks6value == 65){
            mk6.textContent =3.00

        } else if(marks6value == 66){
            mk6.textContent =3.07
        } else if(marks6value == 67){
            mk6.textContent =3.14
        } else if(marks6value == 68){
            mk6.textContent =3.20
        } else if(marks6value == 69){
            mk6.textContent =3.27
        } else if(marks6value == 70){
            mk6.textContent =3.34
        } else if(marks6value == 71){
            mk6.textContent =3.40
        } else if(marks6value == 72){
            mk6.textContent =3.47
        } else if(marks6value == 73){
            mk6.textContent =3.54
        } else if(marks6value == 74){
            mk6.textContent =3.60
        } else if(marks6value == 75){
            mk6.textContent =3.67
        } else if(marks6value == 76){
            mk6.textContent = 3.74
        } else if(marks6value == 77){
            mk6.textContent =3.80
        } else if(marks6value == 78){
            mk6.textContent = 3.87
        } else if(marks6value == 79){
            mk6.textContent = 3.94
        }

    //   grade 1
        if(marks1value < 50){
         
            g1.textContent = 'D'
        }
        else if(marks1value>=50 && marks1value<=64){
            g1.textContent = 'C'
        }
        else if(marks1value>64 && marks1value<=79){
            g1.textContent = 'B'
        }
        else if(marks1value>=80){
            g1.textContent = 'A'
        }

        // grade 2
        
        if(marks2value < 50){
         
            g2.textContent = 'D'
        }
        else if(marks2value>=50 && marks2value<=64){
            g2.textContent = 'C'
        }
        else if(marks2value>64 && marks2value<=79){
            g2.textContent = 'B'
        }
        else if(marks2value>=80){
            g2.textContent = 'A'
        }

        //  grade 3

        
        if(marks3value < 50){
         
            g3.textContent = 'D'
        }
        else if(marks3value>=50 && marks3value<=64){
            g3.textContent = 'C'
        }
        else if(marks3value>64 && marks3value<=79){
            g3.textContent = 'B'
        }
        else if(marks3value>=80){
            g3.textContent = 'A'
        }

        // grade 4

        
        if(marks4value < 50){
         
            g4.textContent = 'D'
        }
        else if(marks4value>=50 && marks4value<=64){
            g4.textContent = 'C'
        }
        else if(marks4value>64 && marks4value<=79){
            g4.textContent = 'B'
        }
        else if(marks4value>=80){
            g4.textContent = 'A'
        }

        //  grade 5

        
        if(marks5value < 50){
         
            g5.textContent = 'D'
        }
        else if(marks5value>=50 && marks5value<=64){
            g5.textContent = 'C'
        }
        else if(marks5value>64 && marks5value<=79){
            g5.textContent = 'B'
        }
        else if(marks5value>=80){
            g5.textContent = 'A'
        }

        // grade 6
        if(marks6value < 50){
         
            g6.textContent = 'D'
        }
        else if(marks6value>=50 && marks6value<=64){
            g6.textContent = 'C'
        }
        else if(marks6value>64 && marks6value<=79){
            g6.textContent = 'B'
        }
        else if(marks6value>=80){
            g6.textContent = 'A'
        }

       let a = parseInt(mk1.textContent);
       let b = parseInt(mk2.textContent);
       let c = parseInt(mk3.textContent);
       let d = parseInt(mk4.textContent);
       let h = parseInt(mk5.textContent);
       let f = parseInt(mk6.textContent);
      
      let z = (a+b+c+d+h+f)/6

      gpa.textContent = z;


result.style.display = "block"
      
        
})