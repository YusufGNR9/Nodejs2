function circleArea (r) {
    console.log(`The area of the circle is ${3.14 *r *r}`);
}

function circleCircumference(r) {
    console.log(`The circumference of the circle is ${2*3.14 *r}`);
};

module.exports ={
    circleArea, 
    circleCircumference
}