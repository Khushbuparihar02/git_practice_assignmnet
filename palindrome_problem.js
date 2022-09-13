Check_Palindrome...

	let str = "naman";
    
    let bag = "";
    
    for(let p=str.lenght-1 ; p>=0 ; p--){
        
        bag = bag+str[p];
        
    }if(bag===str){
        
        console.log("Yes");
        
    }else{
    
    console.log("No");

}