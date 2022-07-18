let grades =[91,66,77,84,66]
let search =77;

function searchGrade (grades,search){
    for(var i=0; i<grades.lenght; i++){
        if(grades[i]==search){
            console.log('The grade ${seach} exists');
            break;
        }
    }
}
searchGrade(grades,search);

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  // expected output: "cheese"


  var obj = { num: 2 };

function add(a, b){
  return this.num + a + b;
}

const func = add.bind(obj, 3, 5);
func();

// Returns 10