const Cloudinary=require("cloudinary").v2;
const {CloudinaryStorage}=require("multer-storage-cloudinary");

Cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})
const storage = new CloudinaryStorage({
    cloudinary:Cloudinary,
    params: {
        folder: 'wonderlust_DEV',
        allowedformat:["jpg","jpeg","png"] ,// supports promises as well
    },
});

module.exports={
    Cloudinary,
    storage
}