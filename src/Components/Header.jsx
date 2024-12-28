
import "./style.css"
function Header()
{
    function handleDiscription()
    {
        var desc = document.querySelector('.discription');
        
        if (desc.style.display === 'none') {
            desc.style.display = 'block';
        } else {
            desc.style.display = 'none';
        }
    }
    
    return(
        <>
            <div className="header">
                <img className='image' src="https://cdn-icons-png.flaticon.com/512/579/579703.png" alt="" width="80px" height="80px"/>
                <h1 className='header_Name' style={{color:"black"}}>To-Do List</h1>
                <img className='image image_Info' 
                    src="https://www.freeiconspng.com/uploads/info-icon-32.png" 
                    alt=""
                    width="30px"
                    height="30px"
                    onClick={handleDiscription} />                
                <div className="discription">
                This is the To-Do List Assignment. This website can store the Tasks to do and show below. <br></br>
                It is able to edit and delete the data that we have previously stored.  
                </div>    
            </div>
        </>
    )
}
export default Header
