/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
var NFTholder = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (a, b) {
	
	const NFTobj = {
    	"Name": a,
      	"ID": b
    };
  	NFTholder.push(NFTobj);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
	
  	let i = 0;
	while ( i < NFTholder.length ) {
    	
    	console.log("Name: " + NFTholder[i].Name + "\t||\tID: " + NFTholder[i].ID);
    	i++;
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    
	console.log("\nThere are " + NFTholder.length + " NFTs in the NFTholder array.\n");
}

// call your functions below this line

mintNFT("Dog", "0000");
mintNFT("Cat", "0001");
mintNFT("Ape", "0010");
mintNFT("Rat", "0011");

listNFTs();

getTotalSupply();


