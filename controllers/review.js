const Review=require("../models/review.js");
const Listing=require("../models/listing.js");

module.exports.createreview=async(req,res)=>{
    let listing=await Listing.findById(req.params.id);
    let newReview=new Review(req.body.review);
    newReview.author=req.user._id;
    listing.reviews.push(newReview);
    req.flash("success","New Review Created!");

    await newReview.save();
    await listing.save();

    res.redirect(`/listing/${listing._id}`);
}

module.exports.deletereview=async(req,res)=>{
    let {id,reviewid}=req.params;

    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewid}});
    await Review.findByIdAndDelete(reviewid);
    req.flash("success","Review Deleted!");

    res.redirect(`/listing/${id}`);
}