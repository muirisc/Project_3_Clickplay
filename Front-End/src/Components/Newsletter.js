function Newsletter(){

  return(
    <section>
    <h2 className="addGameIntroText"> Sign up to our Newsletter!</h2>
    <form className="addGameForm" >
        <h3>Enter Email Address Here: </h3>
        <input
          type="text"
          name="name"
          placeholder="clicknplay@gmail.com">
          
        </input>
        </form>
        <button className="addGamesubmitButton" > Sign Up!</button>
    </section>

  )
}

export default Newsletter;