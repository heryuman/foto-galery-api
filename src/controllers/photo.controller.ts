import {Request, Response} from 'express'
import Photo from '../models/Photo'
import path from 'path'
import fs from 'fs-extra'

export async function createPhoto(req:Request, res:Response):Promise<Response>{

    /*console.log('saving photo')
    console.log(req.body)*/

    const {title,description}=req.body;
    
    const newPhoto={

        title:title,
        description:description,
        imgePath:req.file?.path
       
    };

    const photo = new Photo(newPhoto);
    
    await photo.save(); // como es un metodo asincrono y toma algo de tiempo se debe colocar el await

    return res.json({

        message:'Photo successfuly saved',
        photo
    })
}

export async function getPhotos(req:Request,res:Response):Promise<Response>{

    const photos = await Photo.find();
   
    return res.json(photos);


}

export async function getPhoto(req:Request,res:Response):Promise<Response> {

    const photo= await Photo.findById(req.params.id);
   /// console.log(req.params.id)

   /* una forma alterna de hacerlo seria
      const {id }= req.params;
      const photo= Photo.findById(id);
    */
    return res.json(photo);
    
}

export async function deletePhoto(req:Request,res:Response):Promise<Response> {

    const {id }= req.params;
    const photo=await Photo.findByIdAndRemove(id);

    if(photo){

      await fs.unlink(path.resolve(photo.imgePath))
    }
    return res.json({
        message:'Photo removed',
        photo
    });

     
    
}

export async function updatePhoto(req:Request,res:Response):Promise<Response>{

    const {id}= req.params;
    const {title,description}= req.body;
   const updatedPhoto= await Photo.findByIdAndUpdate(id,{

        title,
        description
    },{new:true});

    return res.json({

        message:'succesfully Updated',
        updatedPhoto
    })

}