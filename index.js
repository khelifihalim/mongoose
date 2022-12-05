const mongoose = require('mongoose');
const User = require('./models/User')
const dotenv = require('dotenv');

dotenv.config()

const uri = process.env.MONGO_URI;
        mongoose.connect(uri);
        console.log('connexion ok');


//create and save one user from the model
async function main() { 

  /* try {
    const user1 = new User({
            name:"halim",
            age:35,
            favoriteFood:["a"]
         });
                console.log(user1)   
                    await user1.save()
    } catch (error) {
        console.log(error,"error at create one ::::::")
    }
    */


    //create an array of many users from the modal schema
/*
   try {
        const users = await User.create([
            {name:"sami",age:25,favoriteFood:["burger","salade","taccos"]},
            {name:"sarah",age:45,favoriteFood:["pizza","fish","meat"]},
            {name:"tomy",age:18,favoriteFood:["burger","sushi","traditional foods"]},
            {name:"moh",age:80,favoriteFood:["vegetarian","chicken","hotdog"]},
            {name:"moh",age:80,favoriteFood:["haricos","zviti","rechta"]}
        ]);
        console.log(users)
        console.log("ther is " + users.length)
        
    } catch (err) {
        console.log(err,"errore at create many---------------- ")
    }
*/

    //find all users in the DB--------------------------------------
    /*
    try {
      const users = await User.find() 
        console.log(users.length,"find()::::::::::::::::");
        users.save() 
    } catch (error) {
        console.log(err,'no data to find--------------')
    }
*/
    //find user by favorit food -----------
    
    /*
    try {
      const userFavFood = await User.find({favoriteFood:{$all :["burger"]}})
      console.log(userFavFood)
      console.log("ther is: " + 0+userFavFood.length + " with this fav food")
      
    } catch (err) {
      console.log(err,"error at find one by favFood---------------")
    }*/

    //FIND BY ID---------------------------------------------------------
    /*
    try {
      const id = "638e30a2793375bbd598b9bf";
   const userId = await User.findById(id)
      console.log(userId)
    } catch (err) {
      console.log(err, "error at find one by Id---------------")
    }
*/
/*
    //FIND ONE BY ID AND UPDATE FAV FOOD 
   try {
      const id ="638e33e67c081041a02ac44b"
      
      const userIdUp = await User.findByIdAndUpdate(id,(add)=>{
        add.favoriteFood.push("111111111"),
        {new:true}
      })
        
       
        console.log(userIdUp)
        
    } catch (err) {
      console.log(err, "push error")
    }
   
   

   */
  mongoose.disconnect();      
}
    

main();