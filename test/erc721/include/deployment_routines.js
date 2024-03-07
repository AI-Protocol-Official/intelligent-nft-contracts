
const NAME = "Custom ERC721";
const SYMBOL = "CER";

/**
 * Deploys Zeppelin ERC721 Mock
 *
 * @param a0 smart contract deployer, owner, super admin
 * @param name token name, ERC-721 compatible descriptive name
 * @param symbol token symbol, ERC-721 compatible abbreviated name
 * @returns ERC721 instance
 */
async function zeppelin_erc721_deploy(a0, name = NAME, symbol = SYMBOL) {
	// smart contracts required
	const ZeppelinERC721Mock = artifacts.require("./ZeppelinERC721Mock");

	// deploy ERC721 and return the reference
	return await ZeppelinERC721Mock.new(name, symbol, {from: a0});
}



// export public deployment API
module.exports = {
	zeppelin_erc721_deploy,
	NAME,
	SYMBOL,
};
