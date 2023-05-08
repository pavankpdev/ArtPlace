import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import verify from "../utils/verify"

const deployToken: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
  ) {
    // @ts-ignore
    const { getNamedAccounts, deployments, network } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId: number = network.config.chainId!
    const args=[process.env.MINTER,process.env.BURNER]
    const ourToken = await deploy("ARTPToken", {
      from: deployer,
      args: args,
      log: true,
    })
    log(`ourToken deployed at ${ourToken.address}`)

      await verify(ourToken.address, [args])


    }


  export default deployToken
deployToken.tags = ["all","token"]