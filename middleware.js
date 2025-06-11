const Listing=require("./models/listing");
const Review=require("./models/review");
const ExpressError=require("./utils/ExpressError.js");
const {listingSchema ,reviewSchema}=require("./schema.js");

module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","you must be logged in to create listing");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner=async(req,res,next)=>{
    let {id}=req.params;
    const listing = await Listing.findByIdAndUpdate(id);
    if(!listing.owner._id.equals(res.locals.currUser._id))
    {
        req.flash("error","you are not the owner of this listing");
        return res.redirect(`/listing/${id}`);
    }
    next();
}

module.exports.validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
        let errmsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errmsg);
    }
    else{
        next();
    }
}

module.exports.validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        let errmsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errmsg);
    }
    else{
        next();
    }
}

module.exports.isReviewAuthor=async(req,res,next)=>{
    let {id,reviewid}=req.params;
    const review = await Review.findById(reviewid);
    if(!review.author.equals(res.locals.currUser._id))
    {
        req.flash("error","you are not the author of this Review");
        return res.redirect(`/listing/${id}`);
    }
    next();
}