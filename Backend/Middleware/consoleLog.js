export const Log = (req,res,next)=>{
  console.log(`${req.method} ${req.url}`);
  next(); 
}