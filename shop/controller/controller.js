/**
 * Created by itc_user on 7/17/2016.
 */
(function(){
angular.module('myApp',[]).controller('StoreController',function($scope){
    $scope.selectedProduct = 0;
   $scope.products=[{name:'diapers',
        price:'25',
       showD:false,
        description:'an amazing package of diapers for your baby',
            stock:'3',
        soldOut:false,
            canPurchase:true,
       addToCart:false,
        image:{src:'./images/diapers.jpg'}},
        {name:'baby bottle',
            price:'30',
            showD:false,
            description:'bottle that your baby will love',
            stock:'3',
            soldOut:false,
            canPurchase:true,
            addToCart:false,
            image:{src:'./images/bottle.jpg'}},
        {name:'pacifier',
            price:'5',
            showD:false,
            description:'must have',
            stock:'0',
            soldOut:true,
            canPurchase:true,
            addToCart:false,
            image:{src:'./images/pacifier.jpg'}},
       {name:'stroller',
           price:'250',
           showD:false,
           description:'an amazing package of diapers for your baby',
           stock:'3',
           soldOut:false,
           canPurchase:true,
           addToCart:false,
           image:{src:'./images/doona.jpg'}},
       {name:'formula',
           price:'15',
           showD:false,
           description:'best formula your baby will love it',
           stock:'4',
           soldOut:false,
           canPurchase:true,
           addToCart:false,
           image:{src:'./images/formula.jpg'}},
       {name:'bath',
           price:'20',
           showD:false,
           description:'must have',
           stock:'0',
           soldOut:true,
           canPurchase:true,
           addToCart:false,
           image:{src:'./images/bath.jpg'}},
       {name:'carrier',
           price:'100',
           showD:false,
           description:'an amazing package of diapers for your baby',
           stock:'3',
           soldOut:false,
           canPurchase:true,
           addToCart:false,
           image:{src:'./images/baby-carrier.jpg'}},
       {name:'crib',
           price:'650',
           showD:false,
           description:'bottle that your baby will love',
           stock:'3',
           soldOut:false,
           canPurchase:true,
           addToCart:false,
           image:{src:'./images/crib.jpg'}},
       {name:'diaper-bag',
           price:'40',
           showD:false,
           description:'must have',
           stock:'0',
           soldOut:true,
           canPurchase:true,
           addToCart:false,
           image:{src:'./images/diaper-bag.jpg'}}
    ];

    $scope.showDescription=function(){
        $scope.selectedProduct = $scope.products.filter(function(item){
            return !item.showD;
        });
        console.log( $scope.selectedProduct);
        window.location = "./partials/description.html";
    }
    
    });
}) ();