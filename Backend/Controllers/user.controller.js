import User from '../Models/user.model.js';

export const isAdmin = async(userId)=>{
  try {
    const user = await User.findById(userId);
     if(!user){
       throw new Error('User does not exist');
     }
    if(user.role !=='admin'){
      return false;
    }
    return true;
  } catch (error) {
    console.error('Error checking admin status:', error);
    throw new Error('Failed to check admin status');
  }

}