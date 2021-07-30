import React from "react";

function Features() {
    return(
        <div style={{backgroundColor:"#293241",paddingBottom:"3rem"}}>
            <div className="" style={{textAlign:"center",padding:" 0rem 1.5rem",margin:"0rem 3rem"}}>
                <h1 style={{padding:"1rem",color:"#FFFFFF"}}>Features</h1>
                <div className="row">
                    <div className="col-lg-4 my-1" >
                        <div style={{border:"1px solid rgba(0,0,0,0.5)",borderRadius:"0.8rem",backgroundColor: "#98c1d9"}}>
                            <div style={{fontSize:"1.8rem",fontWeight:"400",margin:"1.5rem 1.5rem 0rem 1.5rem"}}><span>Dont forget me!</span></div>
                            <p style={{padding:"1rem",fontSize:"1.1rem"}}>Ok, so it sounds a little boring, but making lists are the
                            gateway to a a stress-free holiday. So what are you waiting for?
                            Note down your essentials!</p>
                        </div>
                    </div>
                    <div className="col-lg-4 my-1" >
                        <div style={{border:"1px solid rgba(0,0,0,0.5)",borderRadius:"0.8rem",backgroundColor: "#98c1d9"}}>
                            <div style={{fontSize:"1.8rem",fontWeight:"400",margin:"1.5rem 1.5rem 0rem 1.5rem"}}><span>Add your travel details systematically!</span></div>
                            <p style={{padding:"1rem",fontSize:"1.1rem"}}>Track all your past trips and add/update your present ones. Save
                        all your travel experiences, share it with others and keep
                        travelling!</p>
                        </div>
                    </div>
                    <div className="col-lg-4 my-1">
                        <div style={{border:"1px solid rgba(0,0,0,0.5)",borderRadius:"0.8rem",backgroundColor: "#98c1d9"}}>
                            <div style={{fontSize:"1.8rem",fontWeight:"400",margin:"1.5rem 1.5rem 0rem 1.5rem"}}><span>Track your expenses!</span></div>
                            <p style={{padding:"1rem",fontSize:"1.1rem"}}>Going on a business trip? Keep a track of how much you earn!
                        Going on a trip for leisure? Keep a track of where and how much
                        you spend! Track your expenses here!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features