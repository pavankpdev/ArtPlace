import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import verify from "../utils/verify"

const deployToken: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
  ) {

    const { getNamedAccounts, deployments, network } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const args=[process.env.MINTER,process.env.BURNER]

    const ourToken = await deploy("ARTPToken", {
      from: deployer,
      args: args,
      log: true,
    })

      await verify(ourToken.address, [args])
    }

export default deployToken
deployToken.tags = ["all","ARTP"]