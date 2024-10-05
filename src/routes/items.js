const express     = require('express');
const router      = express.Router();
const Like        = require('../models/Items');
//const createLike  = require('../utils/createLike');
//const ensureAuthenticated = require('../utils/ensureAuth');

//  LIKE REQUESTS
/*
// GET RECENT LIKES
router.get('/:id/', async (req, res) => {
  try {
    let post_id = req.params.id;
    let likes = await Items.findAll({ 
      where: { post_id: post_id },
//      raw: true,
      nest: false,
      order: [['id', 'DESC']] 
    });

    if(!likes){
      res.json({status:false, message: "Likes not found"});
    }

    res.send({status:true, likes});
    
    } catch (error) {
      console.log(error);
      res.json({status:false, message: error});
    }
});

// GET A LIKE
router.get('', async (req, res) => {
  try {
    const like_id = req.body.like_id;
    let like = await Like.findOne(
    { 
      where: { post_id: post_id },
      order: [['id', 'DESC']]
    });
    
    res.send({status:true, like});
  } catch (error) {
    console.log(error);
    res.json({status: false, message: error});
  }
}); 

/// ADD A LIKE 
router.post('', ensureAuthenticated, async (req, res) => {
  try {
    const userId        = req.session.userId;
    const post_id       = req.body.post_id;

    if ((post_id == "") & (typeof(post_id) != "int")){
      res.send({status: false, message: 'Invalid Input Paramenters', post_id: post_id});
      return false;
    }

    let like_check = await Like.findOne({ where: { post_id: post_id, user_id: userId } });
    if (!like_check) {
      // Like Not Found, Proceed
      newLike = await createLike(post_id, userId);
      if(newLike === false){
        res.json({status: false, message: "Create Like failed (1) for unknown reasons!"});
        return false;
      }

      let result = {
        id: newLike.id,
        post_id: newLike.post_id,
      }

      res.send({status: true, message:"Create Like success!", result});
    }else{
      res.send({status: false, message: 'Duplicate Like!'});
    }
  } catch (error) {
    console.log(error);
    res.json({status: false, message: error});
  }
});

// DELETE A LIKE
router.delete('/:like_id/', ensureAuthenticated, async (req, res) => {
  try {
    const userId        = req.session.userId;
    const like_id       = req.params.like_id;

    
    //if ((like_id == "") & (typeof(like_id) != "int")){
    //  res.send({status: false, message: 'Invalid Input Paramenters', like_id: like_id});
    //  return false;
    //}
    
    
    // Check if like_id is not an empty string and not an integer
    if (like_id === "" || typeof like_id !== "number" || Number.isInteger(like_id)) {
      res.send({ status: false, message: 'Invalid Input Parameters', like_id: like_id });
      return false;
    }

    let like_delete = await Like.destroy({ where: { id: like_id, user_id: userId } });
    if (like_delete) {
      res.send({status: true, message:"Deleted!"});
    }else{
      res.send({status: false, message: 'Not Found. Not Deleted!'});
    }
  } catch (error) {
    console.log(error);
    res.json({status: false, message: error});
  }
});
*/

module.exports = router;