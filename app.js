(function () {
'use strict';

 angular.module('ShoppingListCheckOff', [])
 .controller('ToBuyController', ToBuyController)
 .controller('AlreadyBoughtController', AlreadyBoughtController)
 .service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var toBuyList = this;
toBuyList.itemName = "";
toBuyList.itemQuantity = "";

  toBuyList.items = ShoppingListService.getToBuyItems();
  toBuyList.removeToBuyItem = function (itemIndex) {
      ShoppingListService.removeToBuyItem(itemIndex);
    };
}

 AlreadyBoughtController.$inject = ['ShoppingListService'];
 function AlreadyBoughtController(ShoppingListService) {
 var alreadyBoughtList = this;


alreadyBoughtList.items = ShoppingListService.getAlreadyBoughtItems();

// // alreadyBoughtList.removeItem = function (itemIndex) {
// //   ShoppingListService.removeItem(itemIndex);
// // };
 }

function ShoppingListService() {
  var service = this;

  var toBuyItems = [
     {name: "Milk", quantity: "2"},
     {name: "Donuts",quantity: "200"},
     {name: "Cookies", quantity: "300"},
     {name: "Chocolate", quantity: "5"},
     {name: "Cake", quantity: "4"}];

  var alreadyBoughtItems = [];

  // service.addAlreadyBoughtItems = function (itemName, quantity) {
  //   var item = {name: itemName,
  //             quantity: quantity};
  //   alreadyBoughtItems.push(item);
  // };

  service.removeToBuyItem = function (itemIdex) {
    var item = {name: toBuyItems[itemIdex].name,
              quantity: toBuyItems[itemIdex].quantity};
    alreadyBoughtItems.push(item);
    toBuyItems.splice(itemIdex, 1);

  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };
}
})();
