const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Review=require("../models/review.js");
const Listing=require("../models/listing.js");
const {validateReview, isLoggedIn,isReviewAuthor}=require("../middleware.js");
const reviewController=require("../controllers/review.js")


//Post Review Route

router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createreview));

//Review route

router.delete("/:reviewid",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.deletereview));

module.exports=router;
