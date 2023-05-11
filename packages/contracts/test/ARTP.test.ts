import { network, getNamedAccounts, deployments, ethers} from "hardhat";
import { expect } from "chai";


describe("Token contract", function () {
  let myToken:ethers.Contract;
  let deployer: ethers.Signer;
  let minter: ethers.Signer;
  let addr2:ethers.Signer;

  beforeEach(async function () {



    const Token = await ethers.getContractFactory("ARTPToken");
    [deployer, minter,addr2] = await ethers.getSigners();
    
     myToken = await Token.deploy();

    await myToken.deployed();
  });


  describe('Mint', () => {

    it("should allow the minters to mint tokens", async () => {
      // Mint 100 tokens from minter
      await myToken.connect(deployer).mint(minter.address, 100);
      
      // Check that the balance of the add1 has increased by 100
      const balance = await myToken.balanceOf(minter.address);
      expect(balance).to.equal(100);
    })
  
    it("should not allow a non-minter to mint tokens", async function () {
      const amount = ethers.utils.parseEther("100");
      await expect(myToken.connect(addr2).mint(minter.address, amount)).to.be.revertedWith(`Ownable: caller is not the owner`);
    });
  
  })
  

  describe('Burn', () => {

    it("should allow the burnner to burn tokens", async function () {
      const amount = ethers.utils.parseEther("100");
      await myToken.connect(deployer).burn(amount);
      
      const balance = await myToken.balanceOf(deployer.address);
      expect(balance).to.equal(BigInt("9999900000000000000000000"));
    });
  
    it("should not allow a non-burner to burn tokens", async function () {
      await expect(myToken.connect(minter).burn(100)).to.be.revertedWith("Ownable: caller is not the owner")
     
    });
   

    it("Should not allow burning more tokens than account has", async function () {

      const amount = ethers.utils.parseEther("10000001");
  
      await myToken.connect(deployer).mint(minter.address, amount);
  
      await expect(myToken.connect(deployer).burn(amount.add(1))).to.be.revertedWith("ERC20: burn amount exceeds balance");


   })
 
  });


   describe('Deploy', () => { 

    it("Deployment should assign the total supply of tokens to the owner", async function () {

  
      const Token = await ethers.getContractFactory("ARTPToken");
  
      const hardhatToken = await Token.deploy();
  
      const ownerBalance = await hardhatToken.balanceOf(deployer.address);
      expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
    })

 
describe('transfer', () => {
  it("tranfer tokens between account",async function () {
  
    const amount = ethers.utils.parseEther("100");

    await myToken.connect(deployer).mint(minter.address, amount);

    expect(await myToken.balanceOf(minter.address)).to.equal(amount);
    expect(await myToken.balanceOf(addr2.address)).to.equal(0);

    await myToken.connect(minter).transfer(addr2.address, amount.div(2));

    expect(await myToken.balanceOf(minter.address)).to.equal(amount.div(2));
    expect(await myToken.balanceOf(addr2.address)).to.equal(amount.div(2));
  })

  it("Should fail if sender doesn’t have enough tokens", async function () {
   
    
    const initialOwnerBalance = await myToken.balanceOf(deployer.address);

    // Try to send 1 myToken from minter (0 tokens) to deployer (1000 tokens).
    // `require` will evaluate false and revert the transaction.
    await expect(
      myToken.connect(minter).transfer(deployer.address, 1)
    ).to.be.revertedWith("ERC20: transfer amount exceeds balance");

    // Owner balance shouldn't have changed.
    expect(await myToken.balanceOf(deployer.address)).to.equal(
      initialOwnerBalance
    );
  });

 })
 

  


});