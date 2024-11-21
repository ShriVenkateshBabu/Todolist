const apirequest =  async (url = "",optionobj = null,errmsg = null) =>{
 try{
    const response = await fetch(url,optionobj)
    if(!response.ok){
      throw Error ("plsease reload the app")
    }
 }
 catch(err)
 {
    errmsg = err.message;
 }finally{
    return errmsg
 }
}
export default apirequest