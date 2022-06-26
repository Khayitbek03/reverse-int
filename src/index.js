module.exports = function reverse (n) {
  let sum=0,a;
  if(n<0){
    n*=-1;
}
  while(n>0){
    a=n%10;
    sum=sum*10+a;
    n=n/10|0;
  }
  return sum;
}
