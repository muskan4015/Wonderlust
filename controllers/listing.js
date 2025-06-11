const Listing=require("../models/listing");
const { geocoding } = require('@maptiler/client');
const mapToken=process.env.Map_token;


module.exports.index=async (req,res)=>{
    const allListing=await Listing.find({});
    res.render("listing/index", { allListing });
}

module.exports.renderNewForm= (req,res)=>{
    res.render("listing/new.ejs");
}

module.exports.showListing=async (req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id).populate(
        {
            path:"reviews",
            populate:{
            path:"author",
        }
        })
        .populate("owner");
    if(!listing){
        req.flash("error","Listing you requested for does not exist!");
        return res.redirect("/listing");
    }
    res.render("listing/show",{listing});
}

module.exports.createlisting=async (req,res)=>{
    let url=req.file.path;
    let filename=req.file.filename;
    const newListing=new Listing(req.body.listing);
    newListing.owner=req.user._id;
    newListing.image={url,filename};
    await newListing.save();
    req.flash("success","New listing Created!");
    res.redirect("/listing");
}

module.exports.editListing=async (req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested for does not exist!");
        return res.redirect("/listing");
    }

    let orginalImageurl=listing.image.url;
    orginalImageurl=orginalImageurl.replace("/upload","/upload/w_250");
    res.render("listing/edit.ejs",{listing,orginalImageurl});
}

module.exports.updateListing=async (req,res)=>{
    let {id}=req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file !=="undefined"){
    let url=req.file.path;
    let filename=req.file.filename;
    listing.image={url,filename};
    await listing.save();
    }
    req.flash("success","Listing Updated!");
    res.redirect(`/listing/${id}`);
}

module.exports.deleteListing=async (req,res)=>{
    let {id}=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing Deleted!");
    res.redirect("/listing");
}