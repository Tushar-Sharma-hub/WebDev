export const pi=3.14159; //Export is used so that we can use this in other files also.
export function getcircumference(radius){
    return 2*pi*radius;
}
export function getarea(radius){
    return pi*radius*radius;
}
export function getvol(radius){
    return (4/3)*pi*radius*radius*radius;
}