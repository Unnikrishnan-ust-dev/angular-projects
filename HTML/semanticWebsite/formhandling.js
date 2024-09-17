const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(event);
    const h1 = document.querySelector("h1");
    h1.textContent =` ${event.target[1].value} ${event.target[2].value}`;
    return false;
}