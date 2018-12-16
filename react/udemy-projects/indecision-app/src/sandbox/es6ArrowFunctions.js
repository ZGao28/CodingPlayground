let multiplier = {
    numbers: [1, 6],
    constant: 2,
    performMultiplication(){
        return this.numbers.map((number)=>number*this.constant);
    }

}

getLocation = (location) => location ? <p>{location}</p> : undefined;


let templateTwo = (
    <div>
        <h1>
            {user.name ? user.name : 'Not Signed In'}
        </h1>
        {/* 
            This is how to a comment in JSX :)

            Conditional Rendering -- Use functions, ternary operators, and logical and operators
            The logical AND (&&) operator is really cool!
            Returns the second argument in the logic evaluation if true and first argument if false!
            Boolean values along with 'null' and 'undefined' are completely ignored by JSX and nothing is rendered.
        */}
        {user.age >= 20 && <p>{user.age}</p>}
        {getLocation(user.location)}

        <p>
        {
            multiplier.performMultiplication()
        }
        </p>
    </div>
);