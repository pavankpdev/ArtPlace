import { network, getNamedAccounts, deployments, ethers} from "hardhat";
import { expect } from "chai";


describe("Token contract", function () {
  let myToken:ethers.Contract;
  let deployer: ethers.Signer;
  let addr1: ethers.Signer;
  let addr2:ethers.Signer;

  beforeEach(async function () {

    // const [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("ARTPToken");
    [deployer, addr1,addr2] = await ethers.getSigners();
    
     myToken = await Token.deploy(addr1.address,addr1.address);

    await myToken.deployed();
  });


  describe('Mint', () => {

    it("should allow the minters to mint tokens", async () => {
      // Mint 100 tokens from addr1
      await myToken.connect(addr1).mint(addr1.address, 100);
      
      // Check that the balance of the add1 has increased by 100
      const balance = await myToken.balanceOf(addr1.address);
      expect(balance).to.equal(100);
    })
  
    it("should not allow a non-minter to mint tokens", async function () {
      const amount = ethers.utils.parseEther("100");
      await expect(myToken.connect(addr2).mint(addr1.address, amount)).to.be.revertedWith(`AccessControl: account 0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc is missing role 0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6`);
    });
  
  })
  

  describe('Burn', () => {

    it("should allow the burnner to burn tokens", async function () {
      const amount = ethers.utils.parseEther("100");
      await myToken.connect(addr1).mint(addr1.address, amount);

      await myToken.connect(addr1).burn(amount);
      
      const balance = await myToken.balanceOf(addr1.address);
      expect(balance).to.equal(0);
    });
  
    it("should not allow a non-burner to burn tokens", async function () {
      await expect(myToken.connect(deployer).burn(100)).to.be.revertedWith("AccessControl: account 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 is missing role 0x3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a848")
     
    });
   

    it("Should not allow burning more tokens than account has", async function () {

      const amount = ethers.utils.parseEther("100");
  
      await myToken.connect(addr1).mint(addr1.address, amount);
  
      await expect(myToken.connect(addr1).burn(amount.add(1))).to.be.revertedWith("ERC20: burn amount exceeds balance");


   })
 
  });


   describe('Deploy', () => { 

    it("Deployment should assign the total supply of tokens to the owner", async function () {

  
      const Token = await ethers.getContractFactory("ARTPToken");
  
      const hardhatToken = await Token.deploy(addr1.address,addr1.address);
  
      const ownerBalance = await hardhatToken.balanceOf(deployer.address);
      expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
    })

 
describe('transfer', () => {
  it("tranfer tokens between account",async function () {
  
    const amount = ethers.utils.parseEther("100");

    await myToken.connect(addr1).mint(addr1.address, amount);

    expect(await myToken.balanceOf(addr1.address)).to.equal(amount);
    expect(await myToken.balanceOf(addr2.address)).to.equal(0);

    await myToken.connect(addr1).transfer(addr2.address, amount.div(2));

    expect(await myToken.balanceOf(addr1.address)).to.equal(amount.div(2));
    expect(await myToken.balanceOf(addr2.address)).to.equal(amount.div(2));
  })

  it("Should fail if sender doesn’t have enough tokens", async function () {
   
    
    const initialOwnerBalance = await myToken.balanceOf(deployer.address);

    // Try to send 1 myToken from addr1 (0 tokens) to deployer (1000 tokens).
    // `require` will evaluate false and revert the transaction.
    await expect(
      myToken.connect(addr1).transfer(deployer.address, 1)
    ).to.be.revertedWith("ERC20: transfer amount exceeds balance");

    // Owner balance shouldn't have changed.
    expect(await myToken.balanceOf(deployer.address)).to.equal(
      initialOwnerBalance
    );
  });

 })
 

  


});