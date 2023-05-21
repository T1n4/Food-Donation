// SPDX-License-Identifier: MIT
//pragma solidity >=0.4.22 <0.9.0;
pragma solidity ^0.8.19;

contract Donation{
    uint public taskCount = 0;



    struct FoodItem{
        uint256 id;
        string ready;
        string Location;
        string itemtype;
        uint quantity;
        bool refigeration;
        string shelflife;
        bool pickup;
        bool partialgiveout;
        string optHours;
        //address manufacturer;
        //address currentOwner;
        //address lastOwner;
        //uint256 rating;
        //uint launchDate;
        //string image_url;
    }

    struct Transaction{
        uint256 txId;
        address from;
        address to;
        uint date;
    }

    uint256[] public _fooditemIds;
    mapping(uint256 => FoodItem) public _fooditems;
    mapping(uint256 => Transaction) _transactions;


    uint256 _nextTransactionId;
    
    constructor(){
        _nextTransactionId = 0;
    }

    function donate(uint256 _id, string memory _itemtype, string memory _ready, string memory _shelflife, bool _pickup, bool _partialgiveout, bool _refigeration, uint _quantity,string memory _optHours, string memory _Location) public returns (bool){
        address _manufacturer = msg.sender;
        require (_manufacturer != address(0), "Product::add: Manufacturer cannot be null");
        _fooditems[_id] = FoodItem({
            id: _id,
            ready: _ready,
            Location:_Location,
            itemtype:_itemtype,
            quantity:_quantity,
            refigeration:_refigeration,
            shelflife:_shelflife,
            pickup:_pickup,
            partialgiveout:_partialgiveout,
            optHours:_optHours
        });

        // for(uint i = 0; i < _rawProducts.length; i++){
        //    _itemRawProducts[_id].push(_rawProducts[i]);
        //}

        _fooditemIds.push(_id);
        return true;

    }
    
}