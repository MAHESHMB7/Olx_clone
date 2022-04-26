import { createContext ,useState } from "react";

export const PostContext=createContext(null) 

function Post({children}) {
    const[postdetails,setpostdetails]=useState('')
  return (
    <div>


        <PostContext.Provider>
            {children}
        </PostContext.Provider>


    </div> 
  )
}

export default Post