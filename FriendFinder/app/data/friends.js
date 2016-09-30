var friends = {
  friendsArray:[
    {
      "name":"Mr.Potato Head",
      "photo":"https://images-na.ssl-images-amazon.com/images/I/81GTHEM092L._SX466_.gif",
      "scores":[
         5,
         1,
         4,
         4,
         5,
         1,
         2,
         5,
         4,
         1
          ]
    }
  ],
  addFriend: function(friend){
    this.friendsArray.push(friend);
  }
}



module.exports = friends;
