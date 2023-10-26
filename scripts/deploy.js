const hre = require("hardhat");

async function main() {
 
  const MyToken = await ethers.deployContract("StakingContract", ["0xa268D5e5C1afF29f5FCd9021BB1eD53C4E6FAed5", 31536000, 2]);
  await MyToken.waitForDeployment();


  console.log("MyToken deployed to:", MyToken.target);

 
}

main()
    .catch((error) => {
    console.error(error);
    process.exit(1);
  });
